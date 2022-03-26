import BookController from "../controller/bookController.js";
import editBooks from "./editBooks.js";
import Books from "../modele/book.js";
import viewBook from "./viewBook.js";




class ViewHome{


    constructor(){

        this.createTable();
        this.controller = new BookController();

        
        this.populateTable();
        this.toAddBook();

        this.editBooks();
    }

    createTable = ()=>{

        let container = document.querySelector('.container');

        container.innerHTML = `
        
            <header class="hdr"> 
                <h1>BOOKS</h1>

                <button class="newBook">Create New Book</button>
            </header>

            <main>


                <table class="tbl">

                <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Year</th>
               </tr>
                </table>


            </main>
            
        `

     

    }


    populateTable=()=>{

        this.controller.books.forEach(e=>{

            let table = document.querySelector('.tbl');

                

            table.innerHTML += `
            
                <tr>
                <td> <a class="booksTitle" >${e.title}</a></td>
                <td>${e.author}</td>
                <td>${e.genre}</td>
                <td>${e.year}</td>
                </tr>
            
            `

        })
        
    }

    toAddBook=()=>{

        let addBookBtn = document.querySelector('.newBook');

        addBookBtn.addEventListener('click', ()=>{

            new viewBook;


        })


    }

    editBooks=()=>{

        let table = document.querySelector('.tbl');

        table.addEventListener('click', (e)=>{

            let element = e.target;
           
            let data=JSON.parse(localStorage.getItem("books"));
            let vec = [];
            
            for(let i=0; i<data.length; i++){

                if(data[i].title == element.textContent){

                    vec.push(data[i]);
                    
                }
            }
           
            let view = new editBooks();
            view.viewEditBooks(vec);
            view.backBtn();
            view.updateBtn();
            view.deleteBtn();
            
            

        })


    }


}


export default ViewHome;