import React, {useState,useContext} from "react";
import BooksContext from "../context/books";

function BookCreate() {

    const [title,setTitle] = useState("")

    const {handleCreateBook} = useContext(BooksContext);

    // Used to change the box to whatever the user inputs
    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    // Used to submit the title to the parent component (App)
    const handleSubmit = (event) => {
        event.preventDefault();
        handleCreateBook(title);
        setTitle("");

    }

    return (
        <div className="book-create">
            <h3>Create a book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleChange} />
                <button className="button">Create!</button>
            </form>
        </div>
    )
}

export default BookCreate;