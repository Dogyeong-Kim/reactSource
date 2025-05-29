import React from "react";
import BookList from "../components/BookList";
import { genres } from "../util";

const Home = () => {
  return (
    <div>
      <header className="flex mb-6">
        <h1 className="grow-1 text-[32px]">Book List</h1>
        <div>
          <input
            type="text"
            placeholder="Search by title or author"
            className="outline-0 p-2 border-2 border-gray-300 rounded-sm w-[200px] text-[.9em] leading-tight bg-white"
          />
          <select
            name="genre"
            id=""
            className="outline-0 p-2 border-gray-300 rounded-sm ml-2 text[.9em] leading-tight"
          >
            <option value="">All Genres</option>
            {genres.map((genre, idx) => (
              <option key={idx} value={idx + 1}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </header>
      <BookList />
    </div>
  );
};

export default Home;
