export function BookPreview({book,onSelectBook}){
    return(
        <div className="card">
        <p>{book.title}</p>
        <img src={book.thumbnail}/>
        <button onClick={()=>{onSelectBook(book)}}>See Details</button>
        </div>
    )
}