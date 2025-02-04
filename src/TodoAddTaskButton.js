import './css/TodoAddTaskButton.css'

function TodoAddTaskButton() {
    return (
        <div className='TodoAddTaskButton'>
            <button 
            onClick={
                (event)=>{
                    console.log(event.target)
                }
            }
            >Add Task</button>
        </div>
    )
}

export { TodoAddTaskButton }