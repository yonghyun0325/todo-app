import React, { useState, useEffect } from "react";

const TodoApp = () => {
  // 🛠 상태(state) 관리
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  // 서버에서 할 일 목록 가져오기 (Spring Boot API 연결)
  useEffect(() => {
    fetch("http://localhost:8080/api/todos") // Spring Boot API 호출
      .then((response) => response.json()) // JSON 변환
      .then((data) => setTodos(data)) // 상태 업데이트
      .catch((error) => console.error("Error fetching todos:", error));
  }, []); // []를 넣으면 최초 1번 실행됨

  // 할 일 추가 (Spring Boot API로 전송)
  const addTodo = () => {
    if (task.trim() === "") return;
  
    const newTodo = { title: task, completed: false };
  
    fetch("http://localhost:8080/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    })
      .then((response) => response.json())
      .then((savedTodo) => {
        setTodos(prevTodos => [...prevTodos, savedTodo]);
        setTask("");
      })
      .catch((error) => console.error("Error adding todo:", error));
  };
  

  // 완료 상태 토글
  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // 할 일 삭제 (Spring Boot API로 전송)
  const deleteTodo = (id) => {
    fetch(`http://localhost:8080/api/todos/${id}`, { method: "DELETE" })
      .then(() => setTodos(todos.filter(todo => todo.id !== id)))
      .catch((error) => console.error("Error deleting todo:", error));
  };

  return (
    <div className="todo-container">
      <h1>To-Do List</h1>

      {/* 할 일 입력창 */}
      <div className="todo-input">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={addTodo}>추가</button>
      </div>

      {/* 할 일 목록 */}
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span onClick={() => toggleComplete(todo.id)}>
              {todo.title}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
