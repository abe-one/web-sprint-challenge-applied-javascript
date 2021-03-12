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

  // 👀👀👀👀INSTRUCTION TYPO ABOVE👀👀👀👀👀
  // The example elements above indicate that the `span` will be outside the `author` `div` but the tests and CSS are set for the `span` to be inside the `author` `div`.
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
  card_name.textContent = `By ${article.authorName}`;

  card_div.appendChild(card_headline);
  card_div.appendChild(card_author);
  card_author.appendChild(card_name);
  card_author.appendChild(card_img_container);
  card_img_container.appendChild(card_img);

  card_div.addEventListener("click", (e) => {
    let clicked_card = e.target.closest(".card");
    console.log(clicked_card.querySelector(".headline").textContent);
  });

  return card_div;
};

// let header = document.querySelector(`.header-container`);
console.log(
  Card({
    id: "6bd3d116-39f8-4845-8544-3c271cdb9e89",
    headline: "jQuery Animations: When and Where to Use Them, and Not CSS",
    authorPhoto:
      "https://tk-assets.lambdaschool.com/1891c758-b3f4-4ec7-9d88-590bf7c7ceb2_fido.jpg",
    authorName: "FIDO WALKSALOT",
  })
);

import axios from "axios";

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  let app_node = document.querySelector(selector);

  axios
    .get("https://lambda-times-api.herokuapp.com/articles")
    .then((res) => {
      // Array topickeys inside articles obj
      let article_topics = Object.keys(res.data.articles);
      // Manipulate each topic obj
      article_topics.forEach((each_topic) => {
        // Manipulate each article in each topic obj
        res.data.articles[each_topic].forEach((each_article) => {
          app_node.appendChild(Card(each_article));
        });
      });
    })
    .catch((err) => {
      app_node.appendChild(
        Card({
          id: "Ruh-Roh",
          headline: `Failed to load Topics ${err}`,
          authorPhoto: "",
          authorName: "Rerror",
        })
      );
    });
};

// DEBUGGERY
// axios.get("https://lambda-times-api.herokuapp.com/articles").then((res) => {
//   let keys = Object.keys(res.data.articles);
//   let key0 = keys[0];
//   console.log(key0);
//   console.log(res.data.articles[key0]);
// });

export { Card, cardAppender };
