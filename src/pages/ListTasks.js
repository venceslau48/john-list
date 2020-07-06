import React, { useEffect, useContext } from "react";
import { TasksContext } from "../global/TasksContext";
import FlexColumn from "../components/FlexColumn";
import FlexRow from "../components/FlexRow";
import Task from "../components/Task";
import Msg from "../components/Msg";
import Form from "../components/Form";

const ListTasks = () => {
    const { tasks, setTasks } = useContext(TasksContext);
    const { task, setTask } = useContext(TasksContext);
    const { completeTask, deleteTask, addTask } = useContext(TasksContext);

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

    //CLEAR ALL TASKS
    const clearAll = () => {
        localStorage.clear();
        window.location.reload();
    };

    //CLEAR COMPLETED TASKS
    const clearCompleted = () => {
        const tasksCompleted = JSON.parse(localStorage.getItem("tasks"));
        const updatedTasks = tasksCompleted.filter(
            task => task.completed === false
        );

        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        window.location.reload();
    };

    return (
        <>
            <h2>Lista de tarefas</h2>
            <Form
                onSubmit={addTask}
                value={task}
                onChange={e => setTask(e.target.value)}
            />
            {tasks.length > 0 ? (
                <>
                    <Msg>
                        {`Tens ${tasks.length} ${
                            tasks.length > 1 ? "tarefas" : "tarefa"
                        } por completar`}
                    </Msg>
                    <FlexColumn>
                        <FlexRow>
                            <button
                                className="btn btn--primary"
                                onClick={clearAll}
                                style={{ marginRight: 20 }}
                            >
                                Limpar tudo
                            </button>
                            <button
                                className="btn btn--primary"
                                onClick={clearCompleted}
                            >
                                Limpar completas
                            </button>
                        </FlexRow>
                        {tasks.map(task => (
                            <Task
                                task={task}
                                key={task.id}
                                completeTask={() => completeTask(task.id)}
                                deleteTask={() => deleteTask(task.id)}
                            />
                        ))}
                    </FlexColumn>
                </>
            ) : (
                <Msg>Não tens tarefas pendentes!</Msg>
            )}
        </>
    );
};

export default ListTasks;
