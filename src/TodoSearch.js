import React from 'react'
import './css/TodoSearch.css'

function TodoSearch({
    searchValue,
    setSearchValue,
}) {
    return(
        <div className='containerSearch'>
            <input className='inputAddTask' type="text" placeholder="Write task"
                value={searchValue}
                onChange={(event)=>{
                        setSearchValue(event.target.value)
                    }
                }
            />
        </div>
    )
}

export { TodoSearch }