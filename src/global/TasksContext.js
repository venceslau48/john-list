import React, { useState, createContext } from "react";

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    //UPDATE
    const completeTask = taskId => {
        const task = tasks.find(task => task.id === taskId);
        const index = tasks.indexOf(task);
        const updatedTask = { ...task, completed: true };
        tasks[index] = updatedTask;

        setTasks(tasks.map(task => (task.id === taskId ? updatedTask : task)));
    };

    //DELETE
    const deleteTask = taskId => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    //ADD
    const addTask = e => {
        e.preventDefault();

        setTasks([
            ...tasks,
            {
                id: Math.floor(Math.random() * 100 + 1),
                name: task,
                completed: false
            }
        ]);

        setTask("");
    };

    return (
        <TasksContext.Provider
            value={{
                completeTask,
                deleteTask,
                addTask,
                tasks,
                task,
                setTasks,
                setTask
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};
