const { useState, useEffect, useRef } = React

export function BookEdit({ editedBook,onEditBook,onBack }) {
    const [newBook, setNewBook] = useState(null)
    const inputTitle = useRef(null)
    const inputDescription = useRef(null)
    const inputAmount = useRef(null)
    const inputPageCount = useRef(null)
    useEffect(()=>{
        if(newBook) onEditBook(newBook)
    },[newBook])

    function onSetNewBook(ev){
        ev.preventDefault()
        setNewBook({...editedBook,
            title:inputTitle.current.value,
            description: inputDescription.current.value,
            listPrice:{...editedBook.listPrice, amount: inputAmount.current.value},
            pageCount: inputPageCount.current.value
        })
        
    }
    return (
        <section>
            <h1>Edit book</h1>
            <form method='post'>
                <label htmlFor='title'>Title: </label>
                <input ref={inputTitle} type='text' name='title' defaultValue={editedBook.title} /><br />
                <label htmlFor='description'>description: </label>
                <input ref={inputDescription} type='text' name='description' defaultValue={editedBook.description} /><br />
                <label htmlFor='amount'>Amount: </label>
                <input ref={inputAmount} type='number' name='amount' defaultValue={editedBook.listPrice.amount} /><br />
                <label htmlFor='pageCount'>Page Count: </label>
                <input ref={inputPageCount} type='number' name='pageCount' defaultValue={editedBook.pageCount} /><br />
                <button onClick={(ev)=>onSetNewBook(ev)}>Save</button>
            </form>
            <button onClick={onBack}>Back</button>
        </section>
    )
}