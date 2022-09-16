import React, { useEffect, useState } from 'react'
import Book from '../Book/Book'
import axios from "axios";
import "./Books.css"


function Books() {
  
const [books, setBooks] = useState([])

useEffect(() => {
    axios.get(`http://gutendex.com/books`)
    .then(res => {
      setBooks(res.data.results)
    });
}, [])

console.log(books);

  return (
    <section className='books'>
    <div className='container'>
      {
        books.map(book => (
          <Book book = {book}/>
        ))
      }
    </div>
    </section>
  )
}

export default Books