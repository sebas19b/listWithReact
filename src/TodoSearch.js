import React from 'react'
import './css/TodoSearch.css'

function TodoSearch() {

    const [searchValue, setSerachValue] = React.useState("")
    
    return(
        <div className='containerSearch'>
            <input className='inputAddTask' type="text" placeholder="Write task"
                value={searchValue}
                onChange={
                    (event)=>{
                        setSerachValue(event.target.value)
                    }
                }
            />
        </div>
    )
}

export { TodoSearch }