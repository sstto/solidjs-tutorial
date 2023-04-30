import { BookList } from "./BookList";
import { AddBook } from "./AddBook";
import {createEffect, createSignal} from "solid-js";

const initialBooks = [
    {title: "Code Complete", author: "Steve McConnell"},
    {title: "The Hobbit", author: "J.R.R. Tolkien"},
    {title: "Living a Feminist Life", author: "Sarah Ahmed"},
];

function Bookshelf(props) {
    const [books, setBooks] = createSignal(initialBooks);
    return (
        <div>
            <h1>{props.name}'s Bookshelf</h1>
            <BookList books={books()}/>
            <AddBook setBooks={setBooks}/>
        </div>
    );
}

function App() {
    return (
        <Bookshelf name="solid"/>
    );
}

export default App;