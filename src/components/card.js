const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  let card_div = document.createElement("div");
  card_div.classList.add("card");
  let card_headline = document.createElement("div");
  card_headline.classList.add("headline");
  let card_author = document.createElement("div");
  card_author.classList.add("author");
  let card_img_container = document.createElement("div");
  card_img_container.classList.add("img-container");
  let card_img = document.createElement("img");
  let card_name = document.createElement("span");

  card_headline.textContent = article.headline;
  card_img.src = article.authorPhoto;
  card_name.textContent = article.authorName;

  card_div.appendChild(card_headline);
  card_div.appendChild(card_author);
  card_div.appendChild(card_name);
  card_author.appendChild(card_img_container);
  card_img_container.appendChild(card_img);

  return card_div;
};

// console.log(
//   Card({
//     headline: `headline`,
//     authorPhoto: `authorPhoto.euoe`,
//     authorName: `authorName`,
//   })
// );

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
};

export { Card, cardAppender };
