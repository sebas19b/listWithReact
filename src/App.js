import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoAddTaskButton } from './TodoAddTaskButton';
import { TodoItems } from './TodoItem';


const listTodos = [
{text: "Sacar la basura", completed: false},
{text: "Aprender react, del curso de platzi", completed: false},
{text: "desayunar", completed: true},
{text: "ir al trabajo", completed: false}
]

function App() {

  //const [todos, setTodos] = React.useState(listTodos)

  const taskCompleted = listTodos.filter(listTodos => listTodos.completed).length

  const totalTask = listTodos.length

  const [searchValue, setSearchValue] = React.useState("")

  console.log(searchValue)
  
  const taskSearched = listTodos.filter((todos) => {
    return todos.text.toLowerCase().includes(searchValue.toLowerCase())
  })

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
          />
        ))}
      </TodoList>
    </React.Fragment>
  );
}

export default App;
