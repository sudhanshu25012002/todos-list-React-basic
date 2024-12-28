import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description is can't be Empty!!")
        } else {
            addTodo(title, desc);
            setDesc("");
            setTitle("");
        }
    };
    return (
        <div className="container w-50">
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">
                        Description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="desc"
                        value={desc}
                        onChange={(e) => { setDesc(e.target.value) }}
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    Add
                </button>
            </form>
        </div>
    );
};

export default AddTodo;
