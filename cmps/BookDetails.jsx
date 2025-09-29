export function BookDetails({book,onBack}){
return(
    <section>
 <h1>{book.title}</h1>
 <p>{book.description}</p>
 <img src={book.thumbnail}/>
 <p>
    amount: {book.listPrice.amount}
    </p>
    <p>
 currencyCode: {book.listPrice.currencyCode}
 </p>
 <p>
 isOnSale: {book.listPrice.isOnSale}

 </p>
 <button onClick={onBack}>Back</button>
 </section>   
)
}