import './css/TodoItem.css'

function TodoItems(props) {
    return(
      <div className='container-item'>
        <li>
          <input type='checkbox' className='item item-checkbox'/>   
          <p className='item item-text item-text-completed'> {props.text} </p>          
          <span className='item item-delete'>x</span>
        </li>
      </div>
    );
  }

  export { TodoItems }