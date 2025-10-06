import { bookService } from "../services/book.service.js"
import { utilService } from "../services/util.service.js"

const { useState, useEffect, useRef } = React
export function AddReview({bookId,onAddReview}) {
    const inputFullName = useRef()
    const inputRating = useRef()
    const inputReadAt = useRef()
    function getTodayDate(){
     const date = new Date()  
     const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const dd = String(date.getDate()).padStart(2, '0') 
  const formattedToday = `${yyyy}-${mm}-${dd}`
  return formattedToday
    }
    function getReview(){
const review = {
        id: utilService.makeId(),
        fullName: inputFullName.current.value,
        rating: inputRating.current.value,
        readAt: inputReadAt.current.value
    }
    return review
    }
    return (
        <section>
            <h1>Add Review</h1>
            <form method='post'>
                <label htmlFor='fullName'>Full Name:</label>
                <input type='text' name='fullName' ref={inputFullName} /><br />
                <label htmlFor='rating'>Rating:</label>
                <input type='number' min='1' max='5' name='rating' defaultValue='3' ref={inputRating} /><br />
                <label htmlFor='readAt'>Read At:</label>
                <input type='date' name='readAt' ref={inputReadAt} defaultValue={getTodayDate()}/><br />
                <button onClick={(ev)=>{onAddReview(ev,getReview(),bookId)}}>Save</button>
            </form>
        </section>
    )
}