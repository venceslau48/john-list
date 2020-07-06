import React, { useState, useEffect, useContext } from "react";
import { TasksContext } from "../global/TasksContext";
import FlexContainer from "../components/FlexContainer";
import Task from "../components/Task";
import Oops from "../components/Oops";

const ListTasks = () => {
    const [tasks, setTasks] = useContext(TasksContext);
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
    const onSubmit = e => {
        e.preventDefault();

        setTasks([
            ...tasks,
            {
                id: Math.floor(Math.random() * 100 + 1),
                name: task,
                completed: false
            }
        ]);
    };

    //LOCAL STORAGE GET
    useEffect(() => {
        const tasksData = JSON.parse(localStorage.getItem("tasks"));

        if (tasksData) {
            setTasks(tasksData);
        }
    }, [setTasks]);

    //LOCAL STORAGE SET
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks, task]);

    return (
        <>
            <h2>Lista de tarefas</h2>
            {console.log(tasks)}
            <form className="form" onSubmit={onSubmit}>
                <div className="form__group">
                    <label className="form__label">Tarefa</label>
                    <input
                        className="form__input"
                        type="text"
                        value={task}
                        onChange={e => setTask(e.target.value)}
                        required
                    />
                </div>
                <button className="btn btn--secondary">Adicionar</button>
            </form>
            {tasks.length > 0 ? (
                <FlexContainer>
                    {tasks.map(task => (
                        <Task
                            task={task}
                            key={task.id}
                            completeTask={() => completeTask(task.id)}
                            deleteTask={() => deleteTask(task.id)}
                        />
                    ))}
                </FlexContainer>
            ) : (
                <Oops>Não existem tarefas!</Oops>
            )}
        </>
    );
};

export default ListTasks;
