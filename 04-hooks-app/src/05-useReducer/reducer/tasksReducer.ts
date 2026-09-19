interface Todo{
    id:number,
    text:string,
    completed: boolean
}

interface TaskState{
    todos: Todo[],
    length: number,
    completed: number,
    pending: number
}

export type TaskAction=

// ? a veces ciertas acciones necesitaran una propieda, como en este caso el TOGGLE_TODO 
// ? necesita el id, entonces lo podemos pasar como el parametro como tal o como se usa como un payload
// ? un payload es solamente el argumento o propiedad que necesita una accion
| {type: 'ADD_TODO', payload: string}
| {type: 'TOGGLE_TODO', payload: number}
| {type: 'DELETE_TODO', payload: number}

// ! los reducers son funciones que siempre devuelvan un nuevo estado o un valor, no podemos retornar sin este nuevo estado o valor
// ! siempre debe regresar el tipo de state que se le dio en este caso TaskState

// ! el flujo puede explicarse como un bucle, recibimos una action, esa action toma el prev State, lo paas al TaskState y se pone ese nuevo estado como el state ahora
export const tasksReducer = (state: TaskState, action: TaskAction):TaskState =>{
    return state
}