import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoAddTaskButton } from './TodoAddTaskButton';
import { TodoItems } from './TodoItem';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        <TodoItems/>
        <TodoItems/>
        <TodoItems/>
      </TodoList>

      <TodoAddTaskButton/>
      
    </div>
  );
}

export default App;
