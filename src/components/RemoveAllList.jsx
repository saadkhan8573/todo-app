import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeAll } from '../redux/actions/Todo';

const RemoveAllList = () => {
    const dispatch = useDispatch()
    const listData = useSelector(state => state.todo.list)

    return (
        <>
            {
                listData.length ?
                    <div className="flex justify-center items-center my-4">
                        <button className="min-w-1/3 px-2 h-12 bg-red-700 text-white hover:bg-white hover:text-black transition-all shadow-lg" onClick={() => dispatch(removeAll())}>Remove All</button>
                    </div>
                    :
                    null
            }
        </>
    )
}

export default RemoveAllList;