import React, {useContext,useEffect} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";
function App() {

    const {getBooks} = useContext(BooksContext);

    // Only call it once when the app start
    useEffect(() => {
        getBooks();
    },[]);


    

    return (
        <div className="app">
            <h1>Reading List</h1>
            {/* Pass the event handler to then receive it from child BookCreate */}
           <BookCreate />
           {/* Pass the list of books in the list state */}
           <BookList />
        </div>
    )
}

export default App;