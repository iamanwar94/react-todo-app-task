import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [searchTodos, setSearchTodos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [todos]);
  useEffect(() => {
    const result = todos.filter(
      (todo) => todo.title === search
    );
    console.log(search)
    setSearchTodos(result);
  }, [search, todos]);

  return (
    <div className="container mx-auto">
      <TodoSearch searchText={(text) => setSearch(text)} />

      {!isLoading && todos.length === 0 && (
        <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1>
      )}

      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {todos.map((todo) => (
            <TodoList key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
