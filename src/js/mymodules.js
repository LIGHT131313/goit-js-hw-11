/**
 * Creates the markup of the photo-cards
 * @param {Array} arr
 * @returns
 */
function createMarkUp(arr) {
  return arr
    .map(
      ({
        webformatURL,
        webformatWidth,
        webformatHeight,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<div class="photo-card">
              <a class="gallery_link" href="${largeImageURL}">
                <img class="gallery_image" src="${webformatURL}" alt="${tags}" width="${webformatWidth}" height="${webformatHeight}" loading="lazy" />
              </a>
                <div class="info">
                    <p class="info-item"><b>Likes</b><br/>${likes}</p>
                    <p class="info-item"><b>Views</b><br/>${views}</p>
                    <p class="info-item"><b>Comments</b><br/>${comments}</p>
                    <p class="info-item"><b>Downloads</b><br/>${downloads}</p>
                </div>
            </div>`
    )
    .join('');
}

/**
 * Scroll down through the cards
 * @param {Object} item
 */
function scrollMore(item) {
  const { height: cardHeight } = item.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 4 - 76,
    behavior: 'smooth',
  });
}

export { createMarkUp, scrollMore };
