import React from "react";

const Form = ({ onSubmit, value, onChange }) => {
    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="form__group">
                <label className="form__label">Tarefa</label>
                <div className="form__input--aux">
                    <input
                        className="form__input"
                        type="text"
                        value={value}
                        onChange={onChange}
                        required
                    />
                    <button className="btn btn--secondary">+</button>
                </div>
            </div>
        </form>
    );
};

export default Form;
