const {useState,useEffect} = React
export function AddBook({onAddBook}){
    const [books,setBooks] = useState([])
    function setData(ev){
        const value = ev.target.value 
        if(!value) {
            setBooks([])
            return}
        fetch(`https://www.googleapis.com/books/v1/volumes?printType=books&q=${value}`)
        .then(res=>res.json())
        .then(data =>{
            setBooks(data.items)
        })
    }
    return(
        <section className='container'>
            <h3>Add a book</h3>
            <input onChange={(ev)=>{setData(ev)}} type='text'/><br/>
            <ul className='resaults-container'>
             {
             books.map(
                book=>
                    <li key={book.id}>
                        <div className='book'>{book.volumeInfo.title}</div>
                        <button onClick={()=>{onAddBook(book)}}>+</button>
                        </li>
             )
             }
            </ul>
        </section>
    )
}