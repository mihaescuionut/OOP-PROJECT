import BookController from "../controller/bookController.js";
import ViewHome from "./home.js";
import Books from "../modele/book.js";



class viewBook{

    constructor(){

        this.viewBooks();
        this.cancelBtn();

        this.createBook = document.querySelector('.create');

        this.createBook.addEventListener("click",this.handleAdd);
    }


    viewBooks = ()=>{

        let container = document.querySelector('.container');

        container.innerHTML = `
        
            <header class="hdr">
                <h1>NEW BOOK</h1>
            </header>

            <section class="add-book">

                <h5> TITLE</h5>
                <input class="title" type="text">

                <h5>Author</h5>
                <input class="author" type="text">

                <h5>Genre</h5>
                <input class="genre" type="text">

                <h5>Year</h5>
                <input class="year" type="text">

        
            </section>

            <section class="buttons">
                <button class="create">Create new book</button>
                <button class="cancel">Cancel</button>
            </section>
        
        
        
        `

    }

    cancelBtn=()=>{

        let cancelBtn = document.querySelector('.cancel');

        cancelBtn.addEventListener('click', ()=>{

            new ViewHome();

        })
    }

    handleAdd=()=>{

        let title = document.querySelector('.title');
        let author = document.querySelector('.author');
        let genre = document.querySelector('.genre');
        let year = document.querySelector('.year');

        
        if(title.value == "" || author.value == "" || genre.value == ""){

            alert('Complete all the inputs correct!');
            title.value = "";
            author.value = "";
            genre.value = "";
            year.value = "";
            return false;
            
        }else if(isNaN(year.value)){
            
            alert('Year must be a number');
            year.value = "";
            return false;

        }else{

            let x = new Books(title.value, author.value, genre.value, year.value);
            let bookController= new BookController();
            bookController.addBook(x);

        }



        location.reload();


    }


}

export default viewBook;