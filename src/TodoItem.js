import './css/TodoItem.css'

function TodoItems(props) {
    return(
      <div className='container-item'>
        <li>
          <span type='checkbox' className={`item item-checkbox ${props.completed && "item-checkbox--active"}`}
          onClick={props.onComplete}  
          >✔</span>   
          <p className={`item item-text ${props.completed && "item-text-completed"}`}> {props.text} </p>          
          <span className='item item-delete'>x</span>
        </li>
      </div>
    );
  }

  export { TodoItems }