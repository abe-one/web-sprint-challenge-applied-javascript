const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  let div = document.createElement("div").classList.add("header");
  let date_span = document.createElement("span").textContent(date);
  date_span.classList.add("date");
  let title_h1 = document.createElement("h1").textContent(title);
  let temp_span = document.createElement("span").textContent(temp);
  temp_span.classList.add("temp");

  div.appendChild(date_span);
  div.appendChild(title_h1);
  div.appendChild(temp_span);

  return div;
};

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
};

export { Header, headerAppender };
