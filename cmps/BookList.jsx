import { BookPreview } from "../cmps/BookPreview.jsx";

export function BookList({books,onSelectBook,onEditBook}){
    return(
        <div className="cards-container">
         {books.map(book=>
           
            <BookPreview book={book} key={book.id} onSelectBook={onSelectBook} onEditBook={onEditBook}/>
    
         )}  
        </div>
    )
}