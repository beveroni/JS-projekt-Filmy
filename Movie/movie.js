export const Movie = (props) => {
  const { posterUrl, url, title, year, genres } = props;
  return `<div class="movie">
<img class="movie__img" src="${posterUrl}" alt="">
<a href= "${url}">${title}</a>
<p class="movie__year">${year}</p>
<p class="movie__genre">${genres}</p>
</div>`;
};
