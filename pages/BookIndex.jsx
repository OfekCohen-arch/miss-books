import { BookList } from "../cmps/BookList.jsx"
import { utilService } from "../services/util.service.js"
import { bookService } from "../services/book.service.js"
import { BookDetails } from "../cmps/BookDetails.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"

const {useState,useEffect} = React

export function BookIndex(){

const [selectedBook,setSelectedBook] = useState()
const [filterBy,setFilterBy] = useState({name: '',price:0})
const [books,setBooks] = useState(null)
useEffect(()=>{
loadBooks()
},[filterBy])

function loadBooks(){
bookService.query(filterBy).then(books=>setBooks(books))
}
function onSelectBook(book){
setSelectedBook(book)
}
function onBack(){
 setSelectedBook(null)
 setFilterBy({name:'',price:0})   
}
function onSetFilterBy(name,price){
setFilterBy({name: name,price:price})
}
if(!books) return(<div>Loading Books</div>)
return (
     (!selectedBook)?
    <section>
        <BookFilter onSetFilterBy={onSetFilterBy}/>
        <BookList books={books} onSelectBook={onSelectBook}/>
    </section>
    : <section>
        <BookDetails book={selectedBook} onBack={onBack}/>
    </section>
)   
}