// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '500595ca64msh5dd7af70324f577p10826ejsndbfcf09cb154',
// 		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
// 	}
// };

// fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
// 	.then(response => response.json())
//     .then(data => {
//         const list = data.d;

//         list.map((item) => {
       
//             const name = item.l;
//             //const poster = item.i.imageUrl;
//             const movie = `<h2>${name}</h2>`;
//             document.querySelector('.movies').innerHTML += movie;
//         })
//     })
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



const API = "https://api.themoviedb.org/3";

function get(path) {

        return fetch(API + path, {
          headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
            "Content-Type": "application/json;charset=utf-8",
          },
        })
        .then((result) => result.json())
        .then(data => {
            console.log(data)
        });

        
         
}