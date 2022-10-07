import { Link, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Book } from "./pages/Book";
import { BookList } from "./pages/BookList";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NewBook } from "./pages/NewBook";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/newbook">New Book</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Book />} />
        <Route path="/booklist" element={<BookList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newbook" element={<NewBook />} />
        <Route path="/404" element={<NotFound />} />
        <Route />
      </Routes>
    </>
  );
}

export default App;
