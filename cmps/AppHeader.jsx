export function AppHeader(){
const { Link } = ReactRouterDOM
    return(
        <header className='app-header'>
            <h1>Miss Books</h1>
         <Link to='/'>Home Page</Link>
         <Link to='/about'>About</Link>
         <Link to='/book'>Book Index</Link>   
        </header>
    )
}