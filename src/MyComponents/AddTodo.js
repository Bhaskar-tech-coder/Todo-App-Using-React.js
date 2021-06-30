import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be empty");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className="container my-3 bg-secondary rounded">
            <h3 className="text-warning">Todo App</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"><strong>Todo Title</strong></label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Give your title..." />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label"><strong>Todo Description</strong></label>
                    <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" placeholder="Write some descriptions..."/>
                </div>
                <button type="submit" className="btn btn-success btn-outline-dark">Add Todo</button>
            </form>

        </div>
    )
}
