import { HiCheckCircle, HiXCircle, HiXMark } from "react-icons/hi2";

import {
  ListItemStyled,
  TodoStyled,
  IconBoxStyled,
  CloseStyledButton,
} from "../assets/Styles.js";

const TodoList = ({ list, onRemoveTodoHandler, onUpdateTodoHandler }) => {
  return (
    <TodoStyled style={{ marginTop: "2rem" }}>
      {list.map(({ todo, id, completed }) => (
        <ListItemStyled key={id} isCompleted={completed}>
          <h3>{todo}</h3>
          <IconBoxStyled>
            {completed ? (
              <HiCheckCircle
                onClick={() => {
                  onUpdateTodoHandler(id);
                }}
              />
            ) : (
              <HiXCircle
                onClick={() => {
                  onUpdateTodoHandler(id);
                }}
              />
            )}
          </IconBoxStyled>
          <CloseStyledButton>
            <HiXMark
              onClick={() => {
                onRemoveTodoHandler(id);
              }}
            />
          </CloseStyledButton>
        </ListItemStyled>
      ))}
    </TodoStyled>
  );
};

export default TodoList;
