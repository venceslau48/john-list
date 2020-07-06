import React from "react";
import PropTypes from "prop-types";

const Task = ({ task, completeTask, deleteTask }) => {
    return (
        <div className="task">
            <span
                className={
                    task.completed
                        ? "task__name task__name--completed"
                        : "task__name"
                }
                onClick={completeTask}
            >
                {task.name}
            </span>
            <span className="task__delete" onClick={deleteTask}>
                X
            </span>
        </div>
    );
};

Task.propTypes = {
    task: PropTypes.object.isRequired
};

export default Task;
