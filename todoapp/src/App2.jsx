import { useCallback, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoTemplate from "../components/TodoTemplate";
import TodoInsert from "../components/TodoInsert";
import TodoList from "../components/TodoList";

function App2() {
  const todoList = [
    { id: 1, title: "react 기초 알아보기", completed: true },
    { id: 2, title: "컴포넌트 스타일링 하기", completed: false },
    { id: 3, title: "일정관리 앱 작성", completed: false },
    { id: 4, title: "서버프로그램 연동", completed: false },
  ];

  // 화면이 재렌더링 시 값 기억
  const nextId = useRef(5);
  const [todos, setTodos] = useState(todoList);

  // 할 일 입력 시 todoList 에 추가
  const onInsert = useCallback(
    (text) => {
      const newTodo = {
        id: nextId.current,
        title: text,
        completed: false,
      };

      setTodos(todos.concat(newTodo));
      nextId.current += 1;
    },
    [todos]
  );

  // 할 일 제거 시 todoList 제거
  const onRemove = useCallback(
    (id) => {
      todos.filter((todo) => todo.id != id);
    },
    [todos]
  );

  // completed : true
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo
        )
      );
    },
    [todos]
  );

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
}

export default App2;
