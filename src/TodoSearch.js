import './css/TodoSearch.css'

function TodoSearch() {
    return(
        <div className='containerSearch'>
            <input className='inputAddTask' type="text" placeholder="Write task"
                onChange={
                    (event)=>{
                        console.log("Escribiste")
                        console.log(event.target.value)
                    }
                }
            />
        </div>
    )
}

export { TodoSearch }