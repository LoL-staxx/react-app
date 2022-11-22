import React, { useState } from "react";
import "./css components/Todo.css"

export default function Todo({i, onUpdate, onDelete}){

    const [isEdit, setIsEdit] = useState(false)
    const [newValue, setNewValue] = useState(i.title)

    function handleSubmit(e){
        e.preventDefault()

    }

    function handleChange(e){
        const value = e.target.value
        setNewValue(value)
    }

    function handleClick(){
        onUpdate(i.id, newValue)
        setIsEdit(false)
    }


    /* FUNCIONES PARA RENDERIZAR EN EL NAVEGADOR */

    function FormEdit(){
        return (
            <div className="formEdit">

            <form className="todoUpdateForm" onSubmit={handleSubmit}>
                <input className="todoInput" onChange={handleChange} value={newValue} />
                <button className="buttonCreate" onClick={handleClick}>Update</button>
            </form>

            </div>
        )
    }

    function TodoElemet(){
        return(
            <div className="todoInfo">

            <h3>{i.title}</h3>
            <button onClick={() =>{
                setIsEdit(true)
            }}>Edit</button>
            <button onClick={(e) => onDelete(i.id)}>Delet</button>

            </div>
        )
    }

    return(
        <div className="todo"> 
            {isEdit ? <FormEdit /> : 
            <TodoElemet />
            }        
        
        </div>
    )
}