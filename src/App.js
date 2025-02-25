import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoAddTaskButton } from './TodoAddTaskButton';
import { TodoItems } from './TodoItem';


const listTodos = [
{text: "Sacar la basura", completed: false},
{text: "Aprender react, del curso de platzi", completed: false},
{text: "desayunar", completed: false},
{text: "ir al trabajo", completed: false}
]

function App() {

  const [todos, setTodos] = React.useState(listTodos)

  const taskCompleted = todos.filter(todos => todos.completed).length

  const totalTask = todos.length

  const [searchValue, setSearchValue] = React.useState("")

  
  const taskSearched = todos.filter((todos) => {
    return todos.text.toLowerCase().includes(searchValue.toLowerCase())
  })

  const completeTask = (text) => {
    const newTodos = [...todos]
    const todoIndex = todos.findIndex((todo) => todo.text === text)
    newTodos[todoIndex].completed = true
    setTodos(newTodos)
  }

  const deleteTask = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text)
    setTodos(newTodos)
  }

  return (
    <React.Fragment>

      <TodoCounter completed={taskCompleted} total={totalTask} />

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoAddTaskButton/>

      <TodoList>
        {taskSearched.map(todo => (
          <TodoItems 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTask(todo.text)}
            onDelete={() => deleteTask(todo.text)}

         />
        ))}
      </TodoList>
    </React.Fragment>
  );
}

export default App;
