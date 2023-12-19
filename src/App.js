import React, {useState,useEffect} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {

    // How to modify an array or object in state cases : https://state-updates.vercel.app/

    const [books,setBooks] = useState([]);

    const getBooks = async () => {

        const response = await axios.get("http://localhost:3001/books");
        console.log(response.data);
        
        setBooks(response.data);
    }

    // Only call it once when the app start
    useEffect(() => {
        getBooks();
    },[]);


    const updateBook = async (id,newTitle) => {

        const response = await axios.put(`http://localhost:3001/books/${id}`,{
            title: newTitle
        }        
        )

        const updatedBooks = books.map((book) => {
            if (book.id === id){
                return {...book, ...response.data}; // ...response.data to bring all the properties updated
            }
            return book;
        });
        setBooks(updatedBooks);
    }

    const deleteBook = async (id) =>{

        const response = await axios.delete(`http://localhost:3001/books/${id}`)
        const updatedBooks = books.filter((book) => {
                return book.id !== id;
            })
        setBooks(updatedBooks);
    }

    const handleCreateBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books",{
            title
        })
        const updatedBooks = [
            ...books,
            response.data
        ]
        setBooks(updatedBooks);
    }

    return (
        <div className="app">
            <h1>Reading List</h1>
            {/* Pass the event handler to then receive it from child BookCreate */}
           <BookCreate onCreate={handleCreateBook}/>
           {/* Pass the list of books in the list state */}
           <BookList books={books} onDelete={deleteBook} onUpdate={updateBook}/>
        </div>
    )
}

export default App;