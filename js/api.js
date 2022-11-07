const APIURL = "https://api.themoviedb.org/3/discover/tv?api_key=36170845195fe8e38f1743f4684da846";
const IMGPATH = "https://image.tmdb.org/t/p/w500";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/tv?&api_key=36170845195fe8e38f1743f4684da846&query=";


const main = document.getElementById("new-releases");
const imageBanner =  document.getElementById("banner-image");

var url = "https://api.themoviedb.org/3/discover/tv?";
var key = "&api_key=36170845195fe8e38f1743f4684da846";
var posterPaths = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";
var backgroundPaths = "http://image.tmdb.org/t/p/original";
var tvEpisodes =
  "https://api.themoviedb.org/3/tv/  +tvshow id+ /season/ +season number+ /episode/ +episodenumber+ ?&api_key=36170845195fe8e38f1743f4684da846";  
var urlTV = "https://api.themoviedb.org/3/discover/tv?";
var animated = "&with_genres=16";
var action = "&with_genres=35";
var adventure = "&with_genres=10759";
var sort = "sort_by=popularity.desc";
var similar = "vote_count.gte=50&sort_by=vote_average.desc";




async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    showMovies(respData.results);
}

function showMovies(movies) {
    // clear main
    main.innerHTML = "";

    movies.forEach((movie) => {

      
        const { id, poster_path, name, vote_average, overview, genre } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("card");
        movieEl.classList.add("swiper-slide");

        movieEl.innerHTML = `
            <a class="card__img" id="${id}" onclick="tvInfo(${id})">
            <img
                src="${IMGPATH + poster_path}"
                alt="${name}"
            />
            </a>
            <div class="card__title">
                <h4>${name}</h4>
                <span class="${getClassByRate(
                    vote_average
                )}">${vote_average}</span> 

               
        `;

        main.appendChild(movieEl);
    });
}




function showTv(choice) {
  $.getJSON(urlTV + choice + key, function (data) {
    for (var i = 0; i < data.results.length; i++) {
      var id = data.results[i].id;
      var title = data.results[i].name;
      var rating = data.results[i].vote_average;
      var overview = data.results[i].overview;
      var poster = posterPaths + data.results[i].poster_path;
      if (poster === "https://image.tmdb.org/t/p/w370_and_h556_bestv2null") {
        poster = "https://via.placeholder.com/370x556?text=No+Poster&000.jpg";
      }
      if (poster === "https://image.tmdb.org/t/p/w370_and_h556_bestv2null") {
        //if their is no poster dont show the movie
      } else if (overview == "null") {
        //dont show if the overview is null
      } else if (choice === "&with_genres=35") {
        $(".action").append(
            "<div class='card'> <a class='card__img m" +
            i +
            "' id='" +
            id +
            "' onclick='tvInfo(" +
            id +
            ")' href='#'><img src='" +
            poster +
            "' class='image'/></a><div class='card__title'><h4>" +
            title +
            "</h4><span class='rating'> " +
            rating +
            "</span></div></div>" 
        );
      } else if (choice === "&with_genres=16") {
        $(".animated").append(
            "<div class='card'> <a class='card__img m" +
            i +
            "' id='" +
            id +
            "' onclick='tvInfo(" +
            id +
            ")' href='#'><img src='" +
            poster +
            "' class='image'/></a><div class='card__title'><h4>" +
            title +
            "</h4><span class='rating'> " +
            rating +
            "</span></div>" + `</div>`
        );
      } else if (choice === "&with_genres=35") {
        $(".action").append(
            "<div class='card'> <a class='card__img m" +
            i +
            "' id='" +
            id +
            "' onclick='tvInfo(" +
            id +
            ")' href='#'><img src='" +
            poster +
            "' class='image'/></a><div class='card__title'><h4>" +
            title +
            "</h4><span class='rating'> " +
            rating +
            "</span></div></div>" + ``
        );
      } else if (choice === "&with_genres=10759") {
        $(".adventure").append(
            "<div class='card'> <a class='card__img m" +
            i +
            "' id='" +
            id +
            "' onclick='tvInfo(" +
            id +
            ")' href='#'><img src='" +
            poster +
            "' class='image'/></a><div class='card__title'><h4>" +
            title +
            "</h4><span class='rating'> " +
            rating +
            "</span></div></div>" 
        );
      } 
      else if (choice === "sort_by=popularity.desc") {

        $(".item-container").append(
          "<div class='card'> <a class='card__img m" +
          i +
          "' id='" +
          id +
          "' onclick='tvInfo(" +
          id +
          ")' href='#'><img src='" +
          poster +
          "' class='image'/></a><div class='card__title'><h4>" +
          title +
          "</h4><span class='rating'> " +
          rating +
          "</span></div></div>" 
        );
      }
    }
  });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}



  function tvInfo(id) {
    $(".movie").remove();
    $(".banner").hide();
    $(".container").hide();
    var youTube = "https://www.youtube.com/embed/";
    var infoURL =
      "https://api.themoviedb.org/3/tv/" +
      id +
      "?&api_key=6b4357c41d9c606e4d7ebe2f4a8850ea";
    var videoUrl =
      "https://api.themoviedb.org/3/tv/" +
      id +
      "/videos?&api_key=6b4357c41d9c606e4d7ebe2f4a8850ea";


    $.getJSON(infoURL, function (data) {
      var genre;
      if (data.genres.length > 3) {
        genre =
          data.genres[0].name +
          " · " +
          data.genres[1].name +
          " · " +
          data.genres[2].name +
          " · " +
          data.genres[3].name;
      } else if (data.genres.length > 2) {
        genre =
          data.genres[0].name +
          " · " +
          data.genres[1].name +
          " · " +
          data.genres[2].name;
      } else if (data.genres.length > 1) {
        genre = data.genres[0].name + " · " + data.genres[1].name;
      } else {
        genre = data.genres[0].name;
      }
      var seasons = data.seasons.length;
      var title = data.name;
      var rating = data.vote_average;
      var overview = data.overview;
      var poster = posterPaths + data.poster_path;

      $.getJSON(videoUrl, function (data) {
            var video = data.results[0].key;
            console.log(video);
      });



      if (poster === "https://image.tmdb.org/t/p/w370_and_h556_bestv2null") {
        poster = "https://via.placeholder.com/370x556?text=No+Poster&000.jpg";
      }
      var backdrop = backgroundPaths + data.backdrop_path;
      $(".detail").prepend(
        "<section  class='banner' style='background: linear-gradient(85.88deg, #000000 15.05%, rgba(0, 0, 0, 0) 48.99%), url("+ backdrop +");" +
        "background-repeat: no-repeat; background-size: cover; background-position: center;'><div></div><section class='header-content'><div class='title-serie'>"
         + "<h1>" + title + "</h1></div>"+
        "<div class='header-overview'>"+ 
        overview +
         " </div> <div class='notes'><span class='tag'>16+</span>2022 | <span class='grey-font'>"+ genre + "</span>  <img class='logo-imdb' src='./img/imdb.png' alt=''> <span class='bold'>9.0</span><span class='grey-font'>/10</span></div>" +
         "<div class='btn'><button class='btn__primary'><i class='icon-21' data-feather='film'></i>&nbsp;&nbsp;<span>Watch Trailer</span></button><button class='btn__primary btn__primary--transparent'><i class='icon-21' data-feather='info'></i><span>More Info</span></button></div>"+
         "</section> <section class='bg-glass-white'>" + `
         <section class="row subheader">
         <h2 class="row__header left" id="titleSubheader">Watch on</h2> 
         <div class="row__platform center">
             <div>
             <img src="./img/logo_hbo.png" alt="" class="platform">
             </div>
             <div>
                 <p class="title-platform">HBO Max</p>
                 <button class="btn-small"><i class="icon-12" data-feather="play"></i> Play</button>
                 </div>
             <div>
             <img src="./img/logo_netflix.png" alt="" class="platform">
             </div>
             <div>
                 <p class="title-platform">Netflix</p>
                 <button class="btn-small"><i class="icon-12" data-feather="play"></i> Play</button>
                 </div>
             <div>
             <img src="./img/logo_prime.png" alt="" class="platform">
             </div>
             <div>
             <p class="title-platform">Prime video</p>
             <button class="btn-small"><i class="icon-12" data-feather="play"></i> Play</button>
             </div>
             
         </div>
         <div class="right"></div>

        </section>
         `+ "</section> </section>" +
          `
          <section class="episodes">
          <div class="titles">
          <h2 class="row__header"><i class="icon-21" data-feather="monitor"></i>&nbsp;&nbsp;Explore episodes</h2> 
          <select class='season' id='select_id' onchange='val()'></select>
         </div>
         <section class="seasons"></section>
          <div class="load-more"><button class="btn__primary btn__primary--border load" id="loadMore"><span>Load More</span></button></div>
          </div> 
          </section>

          <section class="container">

          <div class="row swiper">
            <div class="titles">
              <h2 class="row__header"><i class="icon-21" data-feather="monitor"></i>&nbsp;&nbsp;Similar tv shows</h2> 
           </div>
            <div class="row__slider swiper-wrapper similar">
                  <div class='card'> 
                    <a class='card__img href='#'><img src='../img/similar/nr1.png' class='image'/></a>
                    <div class='card__title'>
                      <h4> EL inmortal </h4>
                      <span class='rating'>8.6</span>
                    </div>
                  </div> 
                  <div class='card'> 
                  <a class='card__img href='#'><img src='../img/similar/nr2.png' class='image'/></a>
                  <div class='card__title'>
                    <h4> Dahmer</h4>
                    <span class='rating'>8.6</span>
                  </div>
                </div> 
                <div class='card'> 
                <a class='card__img href='#'><img src='../img/similar/nr3.png' class='image'/></a>
                <div class='card__title'>
                  <h4> Cabinet of Curiosities</h4>
                  <span class='rating'>8.6</span>
                </div>
              </div> 
                    <div class='card'> 
                    <a class='card__img href='#'><img src='../img/similar/nr4.png' class='image'/></a>
                    <div class='card__title'>
                      <h4> Peripherial</h4>
                      <span class='rating'>8.6</span>
                    </div>
                  </div> 
                  <div class='card'> 
                  <a class='card__img href='#'><img src='../img/similar/nr5.png' class='image'/></a>
                  <div class='card__title'>
                    <h4> From Scratch</h4>
                    <span class='rating'>8.6</span>
                  </div>
                </div> 
                <div class='card'> 
                <a class='card__img href='#'><img src='../img/similar/nr6.png' class='image'/></a>
                <div class='card__title'>
                  <h4>Underworld</h4>
                  <span class='rating'>8.6</span>
                </div>
              </div> 
              <div class='card'> 
              <a class='card__img href='#'><img src='../img/similar/f1.png' class='image'/></a>
              <div class='card__title'>
                <h4> Victoria's Secret</h4>
                <span class='rating'>8.6</span>
              </div>
            </div> 
            <div class='card'> 
              <a class='card__img href='#'><img src='../img/similar/f3.png' class='image'/></a>
              <div class='card__title'>
                <h4> The Activities</h4>
                <span class='rating'>8.6</span>
              </div>
            </div> 
            <div class='card'> 
              <a class='card__img href='#'><img src='../img/similar/f6.png' class='image'/></a>
              <div class='card__title'>
                <h4>Abbot Elementary</h4>
                <span class='rating'>8.6</span>
              </div>
            </div> 
            <div class='card'> 
              <a class='card__img href='#'><img src='../img/similar/f5.png' class='image'/></a>
              <div class='card__title'>
                <h4> From Scratch</h4>
                <span class='rating'>8.6</span>
              </div>
            </div> 
            <div class='card'> 
              <a class='card__img href='#'><img src='../img/similar/f6.png' class='image'/></a>
              <div class='card__title'>
                <h4> From Scratch</h4>
                <span class='rating'>8.6</span>
              </div>
            </div> 
            </div>

            <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div> 
            </div>
        </section>

          <footer class="footer">
          <div class="footer-content">
          <figure><img src="./img/logo_sillicon.png" alt="Logo Sillicon Series" class="logo"></figure>
          <p class="copy">© 2022 all rights reserved</p>
          </div>
          <div class="line-bottom"></div>

          </footer>
            
          `
      );
  
      for (var i = 0; i < data.seasons.length; i++) {
        $(".season").prepend(
          "<option value='" +
            data.seasons[i].season_number +
            "'>Season " +
            data.seasons[i].season_number +
            " </option>"
        );
      }
      seriesInfo(id,val());
    });
  }

function val() {
    d = document.getElementById("select_id").value;
    return(d);
}

function seriesInfo(id, num) {
    var seriesURL =
      "https://api.themoviedb.org/3/tv/" +
      id +
      "/season/" +
      num +
      "?&api_key=36170845195fe8e38f1743f4684da846";

      
    $.getJSON(seriesURL, function (data) {
      for (var i = 0; i < data.episodes.length; i++) {
        var number = data.episodes[i].episode_number;
        var seasonname = data.name;
        var seasonoverview = data.overview;
        var episode = data.episodes[i].name;
        var overview = data.episodes[i].overview;
        var airdate = data.episodes[i].air_date;
        var imgepisodeURL =
        "https://api.themoviedb.org/3/tv/" +
        id +
        "/season/" +
        num +
        "/episode/" +
        number +
        "/images"+
        "?&api_key=36170845195fe8e38f1743f4684da846";

        $.getJSON(imgepisodeURL, function (data) {
          console.log(data);
          var imgEp = data.stills[0].file_path;
          console.log(imgEp);


          $(".seasons").append(
            `  <div class="row episode">
               <div class="row__episodes">
                   <article class="row__episodes--card">
                       <div>
                           <h2>` + number + "</h2>" + `
                       </div>
                       <div class='episode-img'>`+
                       "<img  src='"+backgroundPaths+imgEp+"'  alt='episodes'>" + 
                      ` </div>
                       <div>
                   <h3><span>` +
                    episode + "</span></h3>" + 
                   "<p>" + overview + "</p>" +
                 "</div>" + `
   
               <div>
                   <h4><span>49 min</span></h4>
               </div>
                   </article>
   
               </div>` 
           );
        
        });

       
      }
   
  });
  }
  
 



getMovies(APIURL);
showTv(animated);
showTv(action);
showTv(adventure);
showTv(sort);







