'use strict';

import { Movie } from './Movie/movie.js';

/* tady bude tvůj kód */
/*Z adresy uvedené výše načtěte seznam filmů pomocí funkce fetch a výsledek si uložte do proměnné.*/

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    /*Vypište proměnnou do konzole prohlížeče a podívejte se, jak data vypadají. Jde o pole objektů, kde každý objekt představuje jeden film, který vypadá následovně:*/
    console.log(data);
  });
/* Vidíte, že každý film má id, název, odkaz na popis filmu na ČSFD, obrázek filmu, rok vydání a také pole, které obsahuje seznam žánrů, do kterých film patří  */

/*Vytvořte funkci showMovies, která bude vypisovat seznam filmů. Ve funkci pomocí metody pole forEach projděte postupně seznam filmů a vypište do konzole prohlížeče vždy jenom název filmu. Pokud vše funguje, měli byste pod sebou vidět názvy všech filmů v seznamu.*/

/* Když nyní víme, že se nám filmy správně načetli ze serveru a že je umíme projít, můžeme přistoupit k jejich vypsání do stránky místo do konzole prohlížeče.*/

/*Když se podíváte do připraveného HTML, uvidíte v něm <div id="movies"></div>. Uvnitř tohoto divu najdete zakomentovaný kus HTML kódu pro jeden film. Tento HTML kód budeme do stránky přidávat pro každý film místo vypisování jeho názvu do konzole uvnitř funkce showMovies.
Pomocí document.querySelector najděte ve stránce prvek s id="movies" a uložte si ho do proměnné s názvem movieList.*/

/* Bonusy
Udělejte z názvu filmu odkaz, který povede na recenzi na ČSFD. V datech je adresa uložená ve vlastnosti url.

Vypište ke každému filmu i žánry, do kterého patří. Nezapomeňte, že žánry jsou v datech u každého filmu uloženy do pole.

Vytvořte ve vašem kódu komponentu Movie. To bude funkce pro zobrazení jednoho filmu. Funkce bude na vstupu přijímat objekt filmu, který chceme zobrazit. Na výstupu bude funkce vracet jako text HTML kód pro jeden film. 
Upravte funkci showMovies, aby komponentu používala pro přidání filmu do stránky.

Destrukturujte objekt na vstupu komponenty na jednotlivé vlastnosti a upravte komponentu, aby používala takto vytvořené proměnné.
Seřaďte filmy abecedně podle názvu.

Přidejte do stránky 2 tlačítka.
Na tlačítka přidejte událost při kliknutí tlačítkem myši. Jedno tlačítko seřadí filmy na stránce vzestupně a druhé sestupně podle roku vydání.*/

const showMovies = fetch(
  'https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies',
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const sortedMovies = data.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
    data.forEach((movie) => {
      console.log(movie.title);
      const movieList = document.querySelector('#movies');
      movieList.innerHTML = sortedMovies.map((movie) => {
        return Movie(movie);
        //   return `<div class="movie">
        //   <img class="movie__img" src="${movie.posterUrl}" alt="">
        //   <a href= "${movie.url}">${movie.title}</a>
        //   <p class="movie__year">${movie.year}</p>
        //   <p class="movie__genre">${movie.genres}</p>
        // </div>`;
      });
    });
  });

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
  .then((response) => {
    return response.json();
  })
  .then(showMovies);

const vzestupneBtn = document.querySelector('#year');
vzestupneBtn.addEventListener('click', () => {
  fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
    .then((response) => response.json())
    .then((data) => {
      const sortedMovies = data.sort((a, b) => b.year - a.year);
      movieList.innerHTML = sortedMovies.map((movie) => Movie(movie)).join('');
    });
});

// const vzestupneBtn = document.querySelector('.podleRokuNahoru');
// const sestupneBtn = document.querySelector('podleRokuDolu');

// vzestupneBtn.addEventListener('click', () => {
//   data.sort((a, b) => {
//     if (a.year < b.year) {
//       return -1;
//     } else if (a.year > b.year) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });

//   showMovies();
// });

// sestupneBtn.addEventListener('click', () => {
//   data.sort((a, b) => {
//     if (a.year < b.year) {
//       return 1;
//     } else if (a.year > b.year) {
//       return -1;
//     } else {
//       return 0;
//     }
//   });

//   showMovies();
// });
