import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData } from '../redux/actions/Todo';

const TodoList = () => {
    const dispatch = useDispatch()
    const listData = useSelector(state => state.todo.list)
    console.log(listData)
    return (
        <>
            {
                listData.map((val) => {
                    return (<>
                        <div className="flex justify-between items-center pl-3 w-full min-h-12 break-words bg-blue-600 text-white rounded my-1 hover:bg-white hover:text-black transition-all" key={val.id}>
                            <p className="w-10/12">{val.data}</p>
                            <IconButton className="w-2/12" onClick={() => dispatch(deleteData(val.id))}>
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </>)
                })
            }
        </>
    )
}

export default TodoList;