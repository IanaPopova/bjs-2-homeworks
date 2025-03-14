
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this._state = 100;
      this.type = null;
    }
  
    fix() {
      this.state *= 1.5;
    }
  
    set state(value) {
      if (value < 0) {
        this._state = 0;
      } else if (value > 100) {
        this._state = 100;
      } else {
        this._state = value;
      }
    }
  
    get state() {
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
    }
  }
  
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }

  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      return this.books.find((book) => book[type] === value) || null;
    }
  
    giveBookByName(bookName) {
      const bookIndex = this.books.findIndex((book) => book.name === bookName);
      if (bookIndex !== -1) {
        return this.books.splice(bookIndex, 1)[0];
      }
      return null;
    }
  }
  
  function testCase() {
    const library = new Library("Библиотека имени Ленина");
  
    
    library.addBook(
      new DetectiveBook(
        "Артур Конан Дойл",
        "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
        2019,
        1008
      )
    );
    library.addBook(
      new FantasticBook(
        "Аркадий и Борис Стругацкие",
        "Пикник на обочине",
        1972,
        168
      )
    );
    library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
    library.addBook(new Magazine("Мурзилка", 1924, 60));
  
    console.log(library.findBookBy("name", "Властелин колец"));
    console.log(library.findBookBy("releaseDate", 1924).name);
   
    console.log("Количество книг до выдачи: " + library.books.length);
  
    const borrowedBook = library.giveBookByName("Машина времени");
    console.log("Количество книг после выдачи: " + library.books.length);
  
    if (borrowedBook) {
      borrowedBook.state = 10;
      console.log("Состояние книги после повреждения: " + borrowedBook.state);
      borrowedBook.fix();
      console.log("Состояние книги после восстановления: " + borrowedBook.state);
  
      library.addBook(borrowedBook);
      console.log("Количество книг после попытки вернуть книгу: " + library.books.length);
    }
  }
  testCase();
  