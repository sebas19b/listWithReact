import './css/TodoSearch.css'

function TodoSearch() {
    return(
        <div className='containerSearch'>
            <input className='inputAddTask' type="text" placeholder="Write task"/>
        </div>
    )
}

export { TodoSearch }