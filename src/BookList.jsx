import { For } from "solid-js";
export function BookList(props) {
    const totalBooks = () => props.books.length;
    return (
        <>
            <h2>My books ({totalBooks()})</h2>
            <ul>
                <For each={props.books}>
                    {(book) => {
                        return (
                            <li>
                                {book.title}
                                <span style={{ "font-style": "italic" }}> ({book.author})</span>
                            </li>
                        );
                    }}
                </For>
            </ul>
        </>
    );
}