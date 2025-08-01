import todos from "./data";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TodoDetails = () => {
  const todoId = useParams();

  const displayTodo = todos.find((todo) => todo.id == todoId.todoId);

  return (
    <>
      <Header />
      <main className="container py-5 mb-4">
        <div className="card w-50 py-2">
          <div className="card-body">
            <h5 className="card-title">Todo Details</h5>
            <p className="card-text">ID: {displayTodo.id}</p>
            <p className="card-text">Title: {displayTodo.title}</p>
            <p className="card-text">Description: {displayTodo.description}</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TodoDetails;
