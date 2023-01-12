const API = "https://api.themoviedb.org/3";



export function get(path){
    
       return fetch(API + path, {
            headers: {
                Authorization:
                 "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYTA0ZmFlMzcxNzhiNjI1ZjMyNjczZjM2NWUzNGQzZCIsInN1YiI6IjYzYTliN2M4YTZhNGMxMDA4YTg0OWZlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wDIpDblDytTCB7Io77NVsEtJbVsZwOjJJSn5KhBDJdU" ,
                 
                 "Content-Type":

                  "application/json;charset=utf-8",
                 
            },
        })
    .then(result=> result.json());
}