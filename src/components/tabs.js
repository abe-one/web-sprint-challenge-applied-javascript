const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  let topics_div = document.createElement("div");
  topics_div.classList.add("topics");
  // debugger;
  topics.forEach((topic) => {
    let each_topic = document.createElement("div");
    each_topic.classList.add("tab");
    each_topic.textContent = topic;
    topics_div.appendChild(each_topic);
  });

  return topics_div;
};

console.log(Tabs(["12", "2342"]));

import axios from "axios";

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  let app_node = document.querySelector(selector);

  axios
    .get("https://lambda-times-api.herokuapp.com/topics")
    .then((res) => {
      app_node.appendChild(Tabs(res.data.topics));
    })
    .catch((err) => {
      app_node.appendChild(Tabs([`Failed to load Topics ${err}`]));
    });
};
axios.get("https://lambda-times-api.herokuapp.com/topics").then((res) => {
  console.log(res.data.topics);
});

// tabsAppender(`.tabs-container`);

export { Tabs, tabsAppender };
