import React from "react";

const Msg = ({ children }) => {
    return (
        <div className="msg">
            <p className="msg__text">{children}</p>
        </div>
    );
};

export default Msg;
