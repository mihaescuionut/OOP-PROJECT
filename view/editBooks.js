import BookController from "../controller/bookController.js";
import Books from "../modele/book.js";
import ViewHome from "./home.js";
import viewBook from "./viewBook.js";


class editBooks{

    constructor(){

       
    }



    viewEditBooks = (arr)=>{

        let container = document.querySelector('.container');


            container.innerHTML = `
            
            <header class="hdr">
                <h1>UPDATE BOOK</h1>
            </header>

            <section class="update-book">

                <h5>TITLE</h5>
                <input value="${arr[0].title}" class="title" type="text">

                <h5>Author</h5>
                <input value="${arr[0].author}" class="author" type="text">

                <h5>Genre</h5>
                <input value="${arr[0].genre}" class="genre" type="text">

                <h5>Year</h5>
                <input value="${arr[0].year}" class="year" type="text">


            </section>

            <section class="buttons">
                <button class="update">Update</button>
                <button class="delete">Delete</button>
                <button class="cancel">Cancel</button>
            </section>
        `


    }

    backBtn=()=>{

        let cancelBtn = document.querySelector('.cancel');

        cancelBtn.addEventListener('click', ()=>{

            new ViewHome();

        })
    }

    updateBtn=()=>{

        let update = document.querySelector('.update');
        let title1 = document.querySelector('.title').value;
        let author1 = document.querySelector('.author').value;
        let genre1 = document.querySelector('.genre').value;
        let year1 = document.querySelector('.year').value;

        update.addEventListener('click', ()=>{

            let title2 = document.querySelector('.title');
            let author2 = document.querySelector('.author');
            let genre2= document.querySelector('.genre');
            let year2 = document.querySelector('.year');

            if(title2.value == "" || author2.value == "" || genre2.value == ""){
                alert('Complete all the inputs correct!');
                return false;
                

            }else if(isNaN(year2.value)){
                
                alert('Year must be a number');
                year2.value = "";
                return false;

            }else{

                let data=JSON.parse(localStorage.getItem("books"));
                
                for(let i = 0; i<data.length; i++){

                    if(data[i].title == title1 || data[i].author == author1 || data[i].genre == genre1 || data[i].year == year1){

                        
                        data[i].title = title2.value;
                        data[i].author = author2.value;
                        data[i].genre = genre2.value;
                        data[i].year = year2.value;



                    }


                    localStorage.setItem("books",JSON.stringify(data));
                }

                

                new ViewHome();
                



            }

        })

    }

    deleteBtn=()=>{

        let dlt = document.querySelector('.delete');
        let title1 = document.querySelector('.title').value;
        let author1 = document.querySelector('.author').value;
        let genre1 = document.querySelector('.genre').value;
        let year1 = document.querySelector('.year').value;

        

            dlt.addEventListener('click', ()=>{ 

                let data=JSON.parse(localStorage.getItem("books"));
              

                let x = [];

                for(let i = 0; i<data.length; i++){

                    if(data[i].title == title1 || data[i].author == author1 || data[i].genre == genre1 || data[i].year == year1){

                        
                        let src = data.splice(i, 1);
                        



                    }

                    localStorage.setItem("books",JSON.stringify(data));
                }

                new ViewHome();

              })


    }
}


export default editBooks;