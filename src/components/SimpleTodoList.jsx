import React, { useState } from "react";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (event) => {
    // TODO: Update the input value
    const newInputValue = event.target.value;
    setInputValue(newInputValue);
    console.log(inputValue);
  };

  const handleAddTodo = () => {
    // TODO: Add the todo item to the list
    const newTodo = {
      id: todoList.length + 1,
      text: inputValue,
    };

    setTodoList([...todoList, newTodo]);
    setInputValue("");
  };

  const handleDeleteTodos = () => {
    setTodoList([]);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={handleDeleteTodos}>Delete All</button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            {todo.text} - {todo.id}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
