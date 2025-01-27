import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoAddTaskButton } from './TodoAddTaskButton';
import { TodoItems } from './TodoItem';
import React from 'react';
import './App.css';

const listTodos = [
{text: "Sacar la basura", completed: false},
{text: "Aprender react, del curso de platzi", completed: false},
{text: "desayunar", completed: true},
{text: "ir al trabajo", completed: false}
]

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={7} total={10} />
      <TodoSearch/>

      <TodoList>
        {listTodos.map(todo => (
          <TodoItems 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <TodoAddTaskButton/>
      
    </React.Fragment>
  );
}

export default App;
