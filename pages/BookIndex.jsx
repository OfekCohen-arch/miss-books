import { BookList } from "../cmps/BookList.jsx"
import { utilService } from "../services/util.service.js"
import { bookService } from "../services/book.service.js"
import { BookDetails } from "../cmps/BookDetails.jsx"

const {useState,useEffect} = React

export function BookIndex(){
const [books,setBooks] = useState(utilService.loadFromStorage('bookDB'))
const [selectedBook,setSelectedBook] = useState(null)

function onSelectBook(book){
setSelectedBook(book)

}
return (
     (!selectedBook)?
    <section>
        <BookList books={books} onSelectBook={onSelectBook}/>
    </section>
    : <section>
        <BookDetails book={selectedBook}/>
    </section>
)   
}