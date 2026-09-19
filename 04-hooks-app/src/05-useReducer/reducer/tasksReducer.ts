import { act } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export type TaskAction =
  // ? a veces ciertas acciones necesitaran una propieda, como en este caso el TOGGLE_TODO
  // ? necesita el id, entonces lo podemos pasar como el parametro como tal o como se usa como un payload
  // ? un payload es solamente el argumento o propiedad que necesita una accion
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

// ! los reducers son funciones que siempre devuelvan un nuevo estado o un valor, no podemos retornar sin este nuevo estado o valor
// ! siempre debe regresar el tipo de state que se le dio en este caso TaskState

// ! el flujo puede explicarse como un bucle, recibimos una action, esa action toma el prev State, lo paas al TaskState y se pone ese nuevo estado como el state ahora
export const tasksReducer = (
  state: TaskState,
  action: TaskAction,
): TaskState => {
    // = lo del TasakState, sera basado en la action y el state previo y nuevo, siempre
    // siempre regresare el estado actual D:

    // ? es comun ver swtiches en reducers

    switch(action.type){
        // ? siempre se necesita regresar un nuevo estado, o el estado actual (state)
        case 'ADD_TODO':
            {
                const newTodo: Todo = {
                    id: Date.now(),
                    // ? como no tenemos el valor del inputValue mandamos el payload que le pusimos caon
                    text: action.payload,
                    completed:false
                }
                // ! NO SE PUEDE HACER, NO SE PUEDE MUTAR UN STATE, SE REGRESA UNO NUEVO D:
                // ! state.todos.push()

                // * ahora si, barremos el estado, y como debemos regresar un 
                // * estado nuevo, ponemos los todos en el ...state.todos y agregando el newTodo, la logica del mismo
                return {
                    ...state,
                    todos: [...state.todos, newTodo]
                }
            }

        case 'DELETE_TODO':
            {
                return {
                    ...state,
                    // ? este filter regresa UN NUEVO ARREGLO, lo cual es lo que buscamos
                    // ? parecido arriba le pasamos el action,payload en el id que es lo que pusimos como el properti
                    todos: state.todos.filter((todo) => todo.id !== action.payload)
                }
            }

        case 'TOGGLE_TODO':
            return state;

        // ? siempre debe regresar el state, ya sea actual, por eso el default y retornamos el state
        default:
            return state;
    }
    
    return state;
};
