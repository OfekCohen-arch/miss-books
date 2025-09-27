
import { BookIndex } from './pages/BookIndex.jsx'

export function App() {
    return (
        <section className="app">
            <header className="app-header">
                <h1>My App</h1>
            </header>
            <main className="container">
                <BookIndex />
            </main>
        </section>
    )
}