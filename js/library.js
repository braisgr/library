const myLibrary = [
  {
    title: "El señor de los anillos",
    author: "J.R.R. Tolkien",
    pages: 722,
    year: 1954,
    readed: true
  },
  {
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    pages: 471,
    year: 1967,
    readed: false
  }
];

function Book(title,author,pages,year,readed){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.year = year;
  this.readed = readed;
}

function addBookToLibrary(book){
  return myLibrary.push(book);
}

const booksContainer = document.querySelector(".books-container");

function showBooks(){
  //Limpiamos el contenedor para poder mostrar el array de libros actualizado
  booksContainer.textContent = "";

  for(book of myLibrary){
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    booksContainer.appendChild(bookCard);

    const titleElement = document.createElement("h4");
    titleElement.textContent = book.title;
    bookCard.appendChild(titleElement);

    const authorElement = document.createElement("p");
    authorElement.textContent = book.author;
    bookCard.appendChild(authorElement);

    const pagesElement = document.createElement("p");
    pagesElement.textContent = book.pages;
    bookCard.appendChild(pagesElement);

    const yearElement = document.createElement("p");
    yearElement.textContent = book.year;
    bookCard.appendChild(yearElement);

    const readedElement = document.createElement("p");
    readedElement.textContent = book.readed;
    bookCard.appendChild(readedElement);
  }
}

const newBookButton = document.querySelector(".new-book");
const modal = document.querySelector(".modal");

newBookButton.addEventListener("click", () => {
  modal.showModal();
});

const addBookButton = document.querySelector(".add-book");

addBookButton.addEventListener("click", () => {

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const year = document.getElementById("year").value;
  const readedElements = document.getElementsByName("readed");
  let readed = null;

  for(let i=0; i<readedElements.length; i++){
    if(readedElements[i].checked){
      readed = readedElements[i].value;
    }
  }

  const book = new Book(title,author,pages,year,readed);

  addBookToLibrary(book);
  
  showBooks();
});

const closeButton = document.querySelector(".close-button");

closeButton.addEventListener("click", () => {
  modal.close();
});

showBooks();