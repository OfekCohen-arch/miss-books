const {useState,useEffect} = React
import { bookService } from "../services/book.service.js"
import { AddReview } from "./AddReview.jsx"
import { ReviewPreview } from "./ReviewPreview.jsx"
export function BookDetails({bookId,onBack}){
   const [book,setBook] = useState()
   const [reviews,setReviews] = useState()
   useEffect(()=>{
    bookService.get(bookId)
    .then(book=>{
      setBook(book)
      setReviews(book.reviews)
    })
   },[])
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
   function onAddReview(ev,review,bookId) {
        ev.preventDefault()
    bookService.addReview(bookId,review)
    setReviews([...reviews,review])
    }
    function onRemoveReview(removedReview){
    bookService.removeReview(bookId,removedReview)
    setReviews(reviews.filter(review=>(review.id!==removedReview.id)))
    }
   if(!book) return (<div>Loading</div>)
return(
    <section className='container'>
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
 <AddReview bookId={bookId} onAddReview={onAddReview}/>
 <div>
   <h2>Reviews</h2>
 {(reviews.length===0)?<div>There are not reviews yet</div>
 :
 reviews.map(
   review=>
      <ReviewPreview review={review} onRemoveReview={onRemoveReview}/>
 )}
 </div>
 <button onClick={onBack}>Back</button>
 </section>   
)
   }
