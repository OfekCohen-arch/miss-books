import { BookList } from "../cmps/BookList.jsx"
import { utilService } from "../services/util.service.js"
import { bookService } from "../services/book.service.js"

const {useState,useEffect} = React

export function BookIndex(){
const [books,setBooks] = useState(utilService.loadFromStorage('bookDB'))
return (
    <section>
        <BookList books={books}/>
    </section>
)   
}