import { utilService } from "../services/util.service"

export function BookDetails({book,onBack}){
   function getPageCountText(){
      if(book.pageCount>500) return 'Serious Reading'
      else if(book.pageCount>200) return 'Descent Reading'
      else if(book.pageCount<100) return 'Light Reading'
   }
   function getNewOrOldText(){
    if(2024-book.publishedDate>10) return 'Vintage'
    else if(2024 - book.publishedDate<1) return 'New' 
   }
   function getOnSaleSign(){
      if(book.listPrice.isOnSale) return 'On Sale'
   }
return(
    <section>
      <h2>{getOnSaleSign()}</h2>
 <h1>{book.title}</h1>
 <p>{book.description}</p>
 <p>{book.pageCount} pages</p>
 <p>published date: {book.publishedDate}</p>
 <h3>{getNewOrOldText()}</h3>
 <img src={book.thumbnail}/>
 <p>
    amount: {book.listPrice.amount}
    </p>
    <p>
 currencyCode: {book.listPrice.currencyCode}
 </p>
 <p>
 </p>
 <span>{getPageCountText()}</span>
 <button onClick={onBack}>Back</button>
 </section>   
)
   }
