// const moviesOriginalName = [

//     { title: "The Shawshank Redemption", genre: "Drama" },
  
//     { title: "The Godfather", genre: "Crime" },
  
//     { title: "The Godfather: Part II", genre: "Crime" },
  
//     { title: "The Dark Knight", genre: "Action" },
  
//     { title: "12 Angry Men", genre: "Drama" },
  
//     { title: "Schindler's List", genre: "Drama" },
  
//     { title: "The Lord of the Rings: The Return of the King", genre: "Adventure" },
  
//     { title: "Pulp Fiction", genre: "Crime" },
  
//     { title: "The Good, the Bad and the Ugly", genre: "Western" },
  
//     { title: "Fight Club", genre: "Drama" },
  
//     { title: "Forrest Gump", genre: "Drama" },
  
//     { title: "Inception", genre: "Action" },
  
//     { title: "The Lord of the Rings: The Fellowship of the Ring", genre: "Adventure" },
  
//     { title: "Star Wars: Episode V - The Empire Strikes Back", genre: "Action" },
  
//     { title: "The Lord of the Rings: The Two Towers", genre: "Adventure" },
  
//     { title: "The Matrix", genre: "Action" },
  
//     { title: "Goodfellas", genre: "Crime" },
  
//     { title: "One Flew Over the Cuckoo's Nest", genre: "Drama" },
  
//     { title: "Seven Samurai", genre: "Adventure" },
  
//     { title: "Se7en", genre: "Crime" },
  
//     { title: "City of God", genre: "Crime" },
  
//     { title: "The Silence of the Lambs", genre: "Thriller" },
  
//     { title: "It's a Wonderful Life", genre: "Drama" },
  
//     { title: "Life is Beautiful", genre: "Comedy" },
  
//     { title: "The Usual Suspects", genre: "Crime" },
  
//     { title: "Léon: The Professional", genre: "Action" },
  
//     { title: "Spirited Away", genre: "Animation" },
  
//     { title: "Saving Private Ryan", genre: "Drama" },
  
//     { title: "Interstellar", genre: "Adventure" },
  
//     { title: "The Green Mile", genre: "Drama" },
  
//     { title: "The Prestige", genre: "Drama" },
  
//     { title: "The Intouchables", genre: "Comedy" },
  
//     { title: "The Lion King", genre: "Animation" },
  
//     { title: "The Pianist", genre: "Drama" },
  
//     { title: "The Departed", genre: "Crime" },
  
//     { title: "Whiplash", genre: "Drama" },
  
//     { title: "Gladiator", genre: "Action" }
//   ]

let movies = [];
// localStorage.setItem("moviesListToSave", JSON.stringify(moviesOriginalName))
movies  = JSON.parse(localStorage.getItem("moviesListToSave"))



const titleInput = document.getElementById("title");
const button = document.getElementById("search");
const genreInput = document.getElementById("genre");
const resultULTag = document.getElementById("results")
// const sortByTitle = document.getElementById("sortByTitle");
// const sortByGenre = document.getElementById("sortByGenre");
const countTag = document.getElementById("count");

let searchResult = []



button.addEventListener("click",function(e){
    if(titleInput.value){
        searchResult = searchByTitle(titleInput.value);
        // console.log(searchResult)
    }
    else if(genreInput.value){
        searchResult = searchByGenre(genreInput.value)
        // console.log(searchResult);

    }
    displayResults(searchResult)
})

function searchByTitle(searchTerm){
    return  movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase().trim()));
    // includes => it will search the input in given whole array if present :true ? false
    // and it is case sesitive.
    // we are using trim => to trim the extra spaces given at the time of input
}
function searchByGenre(searchTerm){
    return movies.filter(movie => movie.genre.toLowerCase().includes(searchTerm.toLowerCase()))
}

function displayResults(list){
    resultULTag.innerHTML = ''; // we are clearing the previous result 

    list.map(ele =>{ // map function go thourth each ele from the arr and it take function and we are using callback function
        let childTag = `<li>${ele.title}(${ele.genre})</li>`
        console.log(childTag)
        resultULTag.innerHTML += childTag;
    })
    // localStorage.setItem("moviewListToSave", JSON.stringify(list));
    countByGenre(list)
}

function sortByTitle(){
    console.log("Hello world")
    const sortedMoview = searchResult.sort((a,b)=>a.title.localeCompare(b.title))
    displayResults(sortedMoview)
}
function sortByGenre(){
    console.log("Sort By Genre")
    const sortedGenre = searchResult.sort((a,b)=> a.title.localeCompare(b.title))
    displayResults(sortedGenre)
}

function countByGenre(list){
    let countObject = {};
    list.map(item =>{
        // if(countObject[item.genre]){
        //     countObject[item.genre]++
        // }else{
        //     countObject[item.genre]  = 1;
        // }

        // alternative
        // countObject[item.genre] = countObject[item.genre] ? countObject[item.genre]+1 : 1;
        countObject[item.genre] = (countObject[item.genre] | 0) + 1;
    })
    countTag.innerHTML = ''
    for(key in countObject){
        countTag.innerHTML += `<li>${key} : ${countObject[key]}</li>` 
    }
}