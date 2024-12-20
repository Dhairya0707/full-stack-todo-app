import { useState, useEffect } from "react";
import "./App.css";
import { Nav } from "./components/Nav";
import { Inputfiled } from "./components/Inputfiled";
import { Listrender } from "./components/Listrender";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/get-todo");
      setTodos(res.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <Nav />
      <Inputfiled fetchTodos={fetchTodos} />
      <Listrender todos={todos} fetchTodos={fetchTodos} />
    </>
  );
}

export default App;
