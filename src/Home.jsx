import BookCard from "./components/BookCard";
import books from "./booksData";
import "./Home.css"; // Import the CSS for styling
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // ✅ Move useNavigate inside the function

  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <button 
        onClick={() => navigate('/add-book')} 
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Add Book
      </button>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;

