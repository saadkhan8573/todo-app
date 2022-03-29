import React, { useState,useEffect } from 'react';
import TodoList from './TodoList';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import RemoveAllList from './RemoveAllList';
import { useDispatch } from 'react-redux';
import { addData } from '../redux/actions/Todo';


const Todo = () => {
    const [InputChange, setInputChange] = useState("")
    const [innerWdth, setinnerWdth] = useState()
    const dispatch = useDispatch()
    return (
        <>
            <div className="flex justify-center w-full min-h-screen bg-blue-900 pt-5">
                <div className="w-10/12 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <h1 className="text-white text-2xl text-center my-4">Add Data 👍</h1>
                    <div className="flex justify-between items-center pl-3 mb-7 bg-white rounded">
                        <input className="h-12 w-10/12 focus:outline-none" type="text" placeholder="Add Data 👍" value={InputChange} onChange={(event) => setInputChange(event.target.value)} />
                        <IconButton className="w-2/12" onClick={() => dispatch(addData(InputChange),setInputChange(""))}>
                            <AddIcon />
                        </IconButton>
                    </div>

                    {/* Todo List */}
                    <TodoList />

                    {/* Remove All */}
                    <RemoveAllList />
                </div>
            </div>
        </>
    )
}

export default Todo;