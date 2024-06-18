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
  let position = 0;

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
    if(book.readed){
      readedElement.textContent = "Readed";
      }else{
      readedElement.textContent = "Not Readed";
    }
    bookCard.appendChild(readedElement);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("dataPosition", position);
    deleteButton.classList.add("delete-button");
    bookCard.appendChild(deleteButton);

    const readedButton = document.createElement("button");
    readedButton.textContent = "Readed?";
    readedButton.setAttribute("dataPosition", position);
    readedButton.classList.add("readed-button");
    bookCard.appendChild(readedButton);

    position++;
  }
}

showBooks();

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
  let readed = false;

  for(let i=0; i<readedElements.length; i++){
    if(readedElements[i].checked){
      readed = readedElements[i].value === "true";
      break;
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

booksContainer.addEventListener("click", (e) => {
  if(e.target.classList.contains("delete-button")){
    const pos = e.target.getAttribute("dataPosition");

    myLibrary.splice(pos,1); 
  }
  if(e.target.classList.contains("readed-button")){
    const pos = e.target.getAttribute("dataPosition");

    myLibrary[pos].readed ? myLibrary[pos].readed = false : myLibrary[pos].readed = true;
  }

  showBooks();
});

function dialogClickHandler(e){
  if (e.target.tagName !== 'DIALOG')
        return;

    const rect = e.target.getBoundingClientRect();

    const clickedInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
    );

    if (clickedInDialog === false)
        e.target.close();
}

document.addEventListener("click", dialogClickHandler);


