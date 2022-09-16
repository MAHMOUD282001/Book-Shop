import React from 'react'
import "./Book.css"

function Book({book}) {
  console.log(book.formats["image/jpeg"]);
  return (
    <div className='book'>
        <img src= {book.formats["image/jpeg"]}/>
        <h4>{book.title}</h4>
        <p>{book.authors[0].name}</p>
    </div>
  )
}

export default Book