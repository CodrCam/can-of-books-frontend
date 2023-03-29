import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

function BookItem({ book, onDeleteBook }) {
  return (
    <Carousel.Item key={book._id} className="carousel-item-custom">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img src={book.coverImageUrl} alt={book.title} className="carousel-image img-fluid" />
          </div>
          <div className="col-md-7">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Description: {book.description}</p>
            <Button variant="danger" onClick={() => onDeleteBook(book._id)}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </Carousel.Item>
  );
}

export default BookItem;