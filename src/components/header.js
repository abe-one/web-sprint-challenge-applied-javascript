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

  //SYNTAX
  let header_div = document.createElement("div");
  header_div.classList.add("header");
  let date_span = document.createElement("span");
  date_span.classList.add("date");
  date_span.textContent = date;
  let title_h1 = document.createElement("h1");
  title_h1.textContent = title;
  let temp_span = document.createElement("span");
  temp_span.classList.add("temp");
  temp_span.textContent = temp;

  header_div.appendChild(date_span);
  header_div.appendChild(title_h1);
  header_div.appendChild(temp_span);

  return header_div;
};

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // QUESTION------------------------------------
  // If the selector is the only argument and we must invoke the Header function as a nested function how are we to pass any arguments to the Header function?
  // The only thing I can see is setting default arguments, but then we'd be modifying the given architecture of the Header function, plus it would effectively hard code the result. Although the default values could be global variables, but then we'd be modding the index.js file which we're not supposed to modify.
  return document
    .querySelector(selector)
    .appendChild(Header(`Test Title`, `Test Date`, `Test Temp`));
};

export { Header, headerAppender };
