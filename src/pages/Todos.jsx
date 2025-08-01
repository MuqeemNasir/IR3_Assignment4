import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import todos from "./data";

const Todos = () => {
  const todoListing = todos.map((todo) => (
    <div key={todo.id}>
      <li className="list-group-item w-50">
        <Link to={`/todos/${todo.id}`} className="text-primary">
          {todo.title}
        </Link>
      </li>
    </div>
  ));

  return (
    <>
      <Header />
      <main className="container py-4">
        <h2>Todo List</h2>
        <ul className="list-group">{todoListing}</ul>
      </main>
      <Footer />
    </>
  );
};

export default Todos;
