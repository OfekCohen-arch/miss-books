export function BookPreview({book,onSelectBook,onEditBook}){
    return(
        <div className="card">
        <p>{book.title}</p>
        <img src={book.thumbnail}/>
        <div className="buttons-container">
        <button onClick={()=>{onSelectBook(book)}}>See Details</button>
        <button onClick={()=>{onEditBook(book)}}>Edit</button>
        </div>
        </div>
    )
}