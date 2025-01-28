import './css/TodoCounter.css'

function TodoCounter ( {completed, total} ) {
    return (
        <h2>You have successfull <span> {completed} </span> of <span>{total} </span> task</h2>
    )
}

export { TodoCounter}