import React from "react";

const books = [
  { id: 1, title: "React Basic", piblished: false, publisher: "Manning" },
  { id: 1, title: "Advanced hooks", piblished: false, publisher: "Oreilly" },
  { id: 1, title: "JSX in Depth", piblished: false, publisher: "Packt" },
];

// books 배열에서 published == true 추출
const published = books.filter((book) => book.piblished);

// 참 : 0 제외 숫자, 'ans', [], {}
// 거짓 : 0, '', null, undefined, NaN
const Book = () => {
  return (
    <div>
      {published.length > 0 && <h2>Published Books</h2>}
      {published.length ? (
        published.map((book) => (
          <article key={book.id}>
            <strong>{book.title}</strong>
            <em>- {book.publisher}</em>
          </article>
        ))
      ) : (
        <p>No published books found</p>
      )}
    </div>
  );
};

export default Book;
