import { UserPreview } from './UserPreview.jsx'
import { bookService } from '../services/book.service.js';
export function Home() {
    bookService.query().then(data=>console.log(data)
    )
    
    return (
        <section>
            <h2>Home Sweet Home</h2>
            <UserPreview />
        </section>
    )
}
