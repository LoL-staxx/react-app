import { useState } from "react"
import Todo from "./todo"
import "./css components/TodoApp.css"

export default function TodoApp(){

    const [title, setTitle] = useState()
    const [todos, setTodos] = useState([])

    function handleChange(e){
        const value = e.target.value
        setTitle(value)
    }

    function handleSubmit(e){
        e.preventDefault()
        
        const newTodo = {
            id: crypto.randomUUID(),
            title: title,
            completed: false
        }

        const temp = [...todos]
        temp.push(newTodo)

        setTodos(temp)

        setTitle('')
    }

    function handleUpdate(id, value){
        const temp = [...todos]
        const item = temp.find(i =>{
            return i.id === id;
        })
        item.title = value
        setTodos(temp)

    }

    function handleDelete(id){
        const temp = todos.filter(i => i.id !== id)
        setTodos(temp)
    }


    /* PARA RENDERIZAR LOS ELEMENTOS EN EL NAVEGADOR */

     return(
        <div className="todoContainer">
            <form className="todoCreateForm" >
                <input onChange={handleChange} className="todoInput" type="text" value={title} placeholder='put a value' />
                <input className="buttonCreate" onClick={handleSubmit} type="submit" value="Create a list" />

            </form>

            <div className="todosContainer">
                {
                    todos.map(i=>(
                       <Todo key={i.id} i = {i} onUpdate= {handleUpdate} onDelete={handleDelete} />
                    ))
                }

            </div>

        </div>

        
  )

}
            