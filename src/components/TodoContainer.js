import { useEffect, useState } from "react";
import {
  ContainerStyled,
  TodoTitleStyled,
  ButtonContainerStyled,
} from "../assets/Styles";

import TodoList from "./TodoList";
import Loader from "./Loader";

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const getTodoData = async () => {
    const res = await fetch("https://dummyjson.com/todos");
    const data = await res.json();

    setTodos(data.todos);
    setIsloading(() => false);
  };

  useEffect(() => {
    setIsloading(() => true);
    getTodoData();
  }, []);

  const removeTodoHandler = (id) => {
    setTodos((prevArr) => [
      ...prevArr.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const updateTodoHadler = (id) => {
    const newArr = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(() => [...newArr]);
  };

  return (
    <ContainerStyled>
      <TodoTitleStyled>Todo Items</TodoTitleStyled>
      <ButtonContainerStyled>
        <button onClick={() => setTodos(() => [])}>Remove Todos</button>
        <button
          onClick={() => {
            getTodoData();
          }}
        >
          Reload Todos
        </button>
      </ButtonContainerStyled>

      {!todos.length ? (
        <Loader isLoading={isLoading} />
      ) : (
        <TodoList
          list={todos}
          onRemoveTodoHandler={removeTodoHandler}
          onUpdateTodoHandler={updateTodoHadler}
        />
      )}
    </ContainerStyled>
  );
};

export default TodoContainer;
