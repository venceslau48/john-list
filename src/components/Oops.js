import React from "react";

const Oops = ({ children }) => {
    return (
        <div className="oops">
            <p className="oops__msg">{children}</p>
        </div>
    );
};

export default Oops;
