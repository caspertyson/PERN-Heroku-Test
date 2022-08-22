import React, { Fragment, useState } from "react";

const InputTodo = () => {

    const [description, setDescription] = useState("");


    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <h1 className="text-center mt-5">Testing Heroku + PERN stack</h1>
            <h4 className="text-center">This is a simple todo app</h4>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    );
};

export default InputTodo;