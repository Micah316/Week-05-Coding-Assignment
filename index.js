//this is the object for book with the properites of title and author
class Book {
    constructor(title, author) {
        this.title = title; 
        this.author = author; 
    }
//Used describe method to return the title and the author
    describe() {
        return `${this.title} written by ${this.author}`;
    }
}

 //The library object contains a name array of books and their properties
class Library {
    constructor(name) {
        this.name = name;
        this.books = [ ];
    }
 
//When we call this describe method it will return the name of the library
    describe() {
        return `${this.name} has ${this.books.length} books`;
    }
}

//this is a menu object which is made of an array of libraries, books, and authors. The one value is null since it starts with no libraries
class Menu {
    constructor() {
        this.libraries = [];
        this.selectedLibrary = null; 
    }
    start() {
        let selection = this.showMainMenu(); 
        while (selection != 0) {
            switch (selection) {
                case "1":
                    this.createLibrary();
                    break;
                case "2":
                    this.viewLibrary();
                    break;
                case "3":
                    this.deleteLibrary();
                    break;
                case "4":
                    this.displayLibraries();
                    break;
                 default:
                    selection = 0;
         }
         selection = this.showMainMenu();
        }
        alert("Happy Ever After fellow reader!");
    }
    showMainMenu() {
        return prompt(`
        0) Exit application
        1) Create a new library
        2) view a library
        3) delete a library
        4) display all the libraries`);     
         //If option number 4 is selected in the showMainMenu prompt the function is called and it returns a string of the indexed libraries
    }
    showBookMenuOptions(bookInfo) {
        return prompt(`
            0) Back
            1) Add a Book
            2) Delete a Book
         **************************
         ${bookInfo}   
        `);
        
    }


displayLibraries() {
    let libraryString = ""; 
    for (let i = 0; i < this.libraries.length; i++) {
        libraryString += i + `)` + this.libraries[i].name + `\n`;
    }
    alert(libraryString);
}

//The create Library function takes the string from the prompt and pushes that into the index of libraries
createLibrary() {
    let name = prompt("Enter the name of the new library: ");
    this.libraries.push(new Library(name));
}

viewLibrary() {
    let index = prompt(
        "Enter the index number of the library you would like to view: "
    );
    if (index > -1 && index < this.libraries.length) {
        this.selectedLibrary = this.libraries[index]; 
        let description = "Library Name :" + this.selectedLibrary.name + '\n';
        description += " " + this.selectedLibrary.describe() + '\n';
        for (let i = 0; i < this.selectedLibrary.books.length; i++) {
            description += i + ")" + this.selectedLibrary.books[i].describe() + '\n';
        }
        let selection1 = this.showBookMenuOptions(description);
            switch (selection1) {
                case "1": 
                this.createBook(); 
                break;
                case "2": 
                this.deleteBook(); 
                break;
            }
    }
}

//The delete Library method takes the entered index and deletes a library as long as the number is in the range of the index
deleteLibrary() {
    let index = prompt(
        "Enter the index number of the library you wish to delete: "
    );
    if (index > -1 && index < this.libraries.length) {
        this.libraries.splice(index, 1);
    }
}

//The create Book method enters a new book in the library by the title and author
createBook() {
    let title = prompt("Enter the title of the book: ");
    let author = prompt("Enter the name of the author of the book: ");
    this.selectedLibrary.books.push(new Book(title, author));
}

//the delete book method will delete a book so long as the index number entered is within the index range
deleteBook() {
    let index = prompt("Enter the index number of the book you wish to delete: ");
    if (index > -1 && index < this.selectedLibrary.books.length) {
        this.selectedLibrary.books.splice(index, 1); 
    }
}
}
let menu = new Menu();
menu.start(); 
