export function ReviewPreview({review,onRemoveReview}){
return(
    <article className='card'>
        <p>Full Name: {review.fullName}</p>
        <p>Rating: {review.rating}</p>
        <p>Read At: {review.readAt}</p>
        <button onClick={()=>{onRemoveReview(review)
        }}>Remove</button>
    </article>
)
}