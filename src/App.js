import React, {useState} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {

    // How to modify an array or object in state cases : https://state-updates.vercel.app/

    const [books,setBooks] = useState([]);


    const updateBook = (id,newTitle) => {
        // code to update the book´s title
        const updatedBooks = books.map((book) => {
            if (book.id === id){
                return {...book, title:newTitle};
            }
            return book;
            
        });

        setBooks(updatedBooks);
    }


    const deleteBook = (id) =>{

        const updatedBooks = books.filter((book) => {
                return book.id !== id;
            })
        

        setBooks(updatedBooks);

    }

    const handleCreateBook = (title) => {
        const updatedBooks = [
            ...books,
            {   
                id : Math.round(Math.random() * 9999),
                title
            }
        ]
        setBooks(updatedBooks);
    }

    return (
        <div className="app">
            {/* Pass the event handler to then receive it from child BookCreate */}
           <BookCreate onCreate={handleCreateBook}/>
           {/* Pass the list of books in the list state */}
           <BookList books={books} onDelete={deleteBook} onUpdate={updateBook}/>
        </div>
    )
}

export default App;