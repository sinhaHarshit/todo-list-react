import React, { useState } from 'react'

const Additem = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Please enter both Title and Description.")
        }
        props.addTodo(title, desc);
    }
    return (
        <div className="container">
            <h3 className="my-3" >Add an item</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />

                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="description" />
                </div>

                <button type="submit" className="btn btn-success btn-sm">Submit</button>
            </form>
        </div>
    )
}

export default Additem
