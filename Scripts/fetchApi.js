//GET https://api.rawg.io/api/platforms?key=515c56ee66b645f3b3bb5c834fb521eb
//GET https://api.rawg.io/api/games?key=515c56ee66b645f3b3bb5c834fb521eb&dates=2019-09-01,2019-09-30&platforms=18,1,7
let gameCards = ''
let id= 1
let countingPages = 1


/* calling the Api*/
function getGames() {
    const url= 'https://api.rawg.io/api/platforms?key=515c56ee66b645f3b3bb5c834fb521eb'
    
    return fetch(url)
    .then(response => {return response.json() })
    .then(data => {
        console.log(data)
    .catch(error =>{console.error(error)})
    })
}
getGames()
