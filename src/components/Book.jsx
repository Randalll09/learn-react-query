import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

const Book = () => {
  const APIKey = 'cM73cDc7wenzskKCVI6FtqngCcAKW8XI';

  const getBook = async () => {
    const res = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${APIKey}`
    );
    return res.json();
  };
  const { data, status } = useQuery('books', getBook);

  if (status === 'loading') {
    return <div>Loading</div>;
  }
  if (status === 'error') {
    return <div>Error</div>;
  }
  return (
    <div>
      {/* {books.map((value) => {
        value.books.map((value) => (
          <div key={value.primary_isbn10}>
          <h1>{value.title}</h1>
          <img src={value.book_image} />
          </div>
          ));
        })} */}
      {/* {books.slice(0, 10).map((value) =>
        value.books.map((value) => (
          <div key={value.primary_isbn10}>
          <h1>{value.title}</h1>
          <img src={value.book_image} />
          </div>
          ))
      )} */}
      {data.results.lists.slice(0, 10).map((value) =>
        value.books.map((value) => (
          <div key={value.primary_isbn10}>
            <h1>{value.title}</h1> <img src={value.book_image} />{' '}
          </div>
        ))
      )}
    </div>
  );
};

export default Book;
