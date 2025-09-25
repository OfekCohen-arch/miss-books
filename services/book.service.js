import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook
}

function query() {
    return storageService.query(BOOK_KEY)
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}
function getEmptyBook(title = '',description='',thumbnail='', amount = 0,currencyCode = "EUR", isOnSale = false){
    const listPrice = {amount: amount, currencyCode: currencyCode,isOnSale : isOnSale}
    return { id: '', title,description,thumbnail, listPrice }
}
function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = []
        books.push(_createBook('Harry Poter',utilService.makeLorem(7),`http://coding-academy.org/books-photos/1.jpg`,80,'EUR',true))
        books.push(_createBook('Spiderman',utilService.makeLorem(7),`http://coding-academy.org/books-photos/2.jpg`,200,'EUR',true))
        books.push(_createBook('Hulk',utilService.makeLorem(7),`http://coding-academy.org/books-photos/3.jpg`,90,'EUR',true))
        utilService.saveToStorage(BOOK_KEY, books)
    }
}
function _createBook(title,description,thumbnail,amount,currencyCode,isOnSale){
const book = getEmptyBook(title,description,thumbnail,amount,currencyCode,isOnSale)
    book.id = utilService.makeId()
    return book
}