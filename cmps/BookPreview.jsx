export function BookPreview({book}){
    return(
        <div className="card">
        <p>{book.title}</p>
        <img src={book.thumbnail}/>
        </div>
    )
}