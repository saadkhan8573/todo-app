export const addData = (data) => {
    return{
        type : "ADD_DATA",
        paylod : {
            id : new Date().getTime().toString(),
            data : data
        }
    }
}

export const deleteData = (id) => {
    return {
        type : "DELETE_DATA",
        payload : id
    }
}

export const removeAll = () => {
    return{
        type : "REMOVE_ALL"
    }
}