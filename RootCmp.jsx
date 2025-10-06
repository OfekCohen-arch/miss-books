
import { BookIndex } from './pages/BookIndex.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import {HomePage} from './pages/HomePage.jsx'
import {AboutUS} from './pages/AboutUs.jsx'
import { BookDetails } from './cmps/BookDetails.jsx'
import { BookEdit } from './cmps/BookEdit.jsx'
//const Router = ReactRouterDOM.HashRouter
//const {Routes,Route} = ReactRouterDOM
export function App() {
    /*
    return (
        <section>
            <AppHeader/>
        <Router>
        <main>
        <Routes>
        <Route path='/' element={HomePage}/>
        <Route path='/about' element={AboutUS}/>
        <Route path='/book' element={BookIndex}/>
        <Route path='book/:bookId' element={BookDetails}/>
        <Route path='/book/edit' element={BookEdit}/>
        </Routes>
        </main>
        </Router>
        </section>
    )
        */
       return(
        <section>
            
        <BookIndex/>
        </section>
       )
}