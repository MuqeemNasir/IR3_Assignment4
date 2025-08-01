import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <div className="mb-3">
          <img
            src="https://wallpapercave.com/wp/wp7881177.jpg"
            alt="Image of Todo List"
            className="img-fluid h-50 w-50 mx-auto d-block"
          />
        </div>
        <div className="text-center">
          <h3>Todos</h3>
          <p>Welcome to the Todo application!</p>
          <Link to="/todos" className="btn btn-primary btn-sm">
            View Todos
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
