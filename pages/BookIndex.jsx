import { BookList } from "../cmps/BookList.jsx"
import { bookService } from "../services/book.service.js"
import { BookDetails } from "../cmps/BookDetails.jsx"
import { BookFilter } from "../cmps/BookFilter.jsx"
import { BookEdit } from "../cmps/BookEdit.jsx"
import { AddBook } from "../cmps/AddBook.jsx"

const {useState,useEffect} = React

export function BookIndex(){

const [selectedBook,setSelectedBook] = useState()
const [filterBy,setFilterBy] = useState({name: '',price:0})
const [books,setBooks] = useState(null)
const [editedBook,setEditedBook] = useState(null)
useEffect(()=>{
loadBooks()
},[filterBy])

function loadBooks(){
bookService.query(filterBy).then(books=>setBooks(books))
}
function onSelectBook(book){
setSelectedBook(book)
}
function onEditBook(book){
setEditedBook(book)
bookService.save(book)

}
function onBack(){
 setSelectedBook(null)
 setEditedBook(null)
 setFilterBy({name:'',price:0})   
}
function onSetFilterBy(name,price){
setFilterBy({name: name,price:price})
}
function onAddBook(item){
bookService.addGoogleBook(item)
.then(book=>setBooks([...books,book])
)
}
if(!books) return(<div>Loading Books</div>)
else if(editedBook) return (
    <section>
        <BookEdit editedBook={editedBook} onEditBook={onEditBook} onBack={onBack}/>
    </section>
)
return (
     (!selectedBook)?
    <section>
        <AddBook onAddBook={onAddBook}/>
        <BookFilter onSetFilterBy={onSetFilterBy}/>
        <BookList books={books} onSelectBook={onSelectBook} onEditBook={onEditBook}/>
    </section>
    : <section>
        <BookDetails bookId={selectedBook.id} onBack={onBack}/>
    </section>
)   
}