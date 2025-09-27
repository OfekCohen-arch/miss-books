import { BookPreview } from "../cmps/BookPreview.jsx";

export function BookList({books,onSelectBook}){
    return(
        <div className="cards-container">
         {books.map(book=>
           
            <BookPreview book={book} key={book.id} onSelectBook={onSelectBook}/>
    
         )}  
        </div>
    )
}