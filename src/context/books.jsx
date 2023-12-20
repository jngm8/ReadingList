import  { createContext } from "react";
import { useState } from "react";
import axios from "axios";


const BooksContext = createContext();

function Provider ({children}){
    
    // How to modify an array or object in state cases : https://state-updates.vercel.app/

    const [books,setBooks] = useState([]);

    const getBooks = async () => {

        const response = await axios.get("http://localhost:3001/books");
        console.log(response.data);
        
        setBooks(response.data);
    }

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

        await axios.delete(`http://localhost:3001/books/${id}`)
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

    const valuesToShare = {
        books,
        getBooks,
        handleCreateBook,
        updateBook,
        deleteBook
    }


    return <BooksContext.Provider value= {valuesToShare}>
        {children}
    </BooksContext.Provider>
}

export {Provider};
export default BooksContext;