// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

const list = document.getElementById("reading-list");

books.forEach((book) => {
  const li = document.createElement("li");

  li.style.backgroundColor = book.alreadyRead ? "green" : "red"; // green or red

  li.style.display = "flex";
  li.style.alignItems = "center";
  li.style.gap = "1em";
  li.style.padding = "1em";
  li.style.marginBottom = "1em";
  li.style.borderRadius = "8px";

  const img = document.createElement("img");
  img.src = book.bookCoverImage;

  const info = document.createElement("div");

  const title = document.createElement("p");
  title.textContent = book.title;
  title.style.fontWeight = "bold";
  title.style.fontSize = "1.1em";
  title.style.margin = "0";

  const author = document.createElement("p");
  author.textContent = `by ${book.author}`;
  author.style.margin = "0";
  author.style.fontStyle = "italic";

  info.appendChild(title);
  info.appendChild(author);

  li.appendChild(img);
  li.appendChild(info);
  list.appendChild(li);
});
