import Book from "../modele/book.js"

class BookController{




   constructor(){

    
      this.books=[];

      this.load();

      

   }
     
   load=()=>{


         let data=JSON.parse(localStorage.getItem("books"));


         data.forEach(book=> {


            let x = new Book(book.title, book.author, book.genre, book.year);
            
            
            this.books.push(x);
         });



   }


   traverse=()=>{

        console.table(this.books);
   }


   addBook(book){


      this.books.push(book);
      localStorage.setItem("books",JSON.stringify(this.books));     
   
   }




}

export default BookController;   