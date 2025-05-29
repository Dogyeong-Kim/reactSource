export const renderStars = (rating) => {
  console.log("rating", rating);
  return "★".repeat(rating) + "☆".repeat(5 - rating);
};

export const getBookEmoji = (index) => {
  return ["📕", "📗", "📘", "📙", "📓"][Number(index) % 5];
};

export const genres = [
  "Fiction",
  "Non-fiction",
  "Fantasy",
  "Dystopian",
  "Romance",
  "Programming",
  "Philosophy",
];

export const location = () => {
  navigator.geolocation.getCurrentPosition((pos) => {
    console.log(pos);
  });
};
