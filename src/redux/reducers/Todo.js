import {  toast } from 'react-toastify';

const initialstate = {
    list: []
}

const todo = (state = initialstate, action) => {
    switch (action.type) {
        case "ADD_DATA":
            const { id, data } = action.paylod;
            if (data.length > 2) {
                return {
                    list: [
                        ...state.list,
                        {
                            id: id,
                            data: data
                        }
                    ]
                }
            }
            else{
                toast.warning("Min 3 characrters Allowed")
                // alert("Min 3 characrters")
            }

        case "DELETE_DATA":
            const newList = state.list.filter(val => val.id !== action.payload)
            return {
                list: newList
            }

        case "REMOVE_ALL":
            return {
                list: []
            }

        default: return state;
    }
}

export default todo;