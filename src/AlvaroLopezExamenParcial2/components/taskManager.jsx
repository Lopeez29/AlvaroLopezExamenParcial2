import React, { useState } from "react";

export default function TaskManager() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddTask = () => {
        if (inputValue.trim() === "") {
            alert("Por favor, ingresa una tarea válida");
            return;
        }

        setTasks([...tasks, inputValue]);
        setInputValue("");
    };

    const handleDeleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    const styles = {
        container: {
            maxWidth: "400px",
            margin: "0 auto",
            textAlign: "center",
        },
        input: {
            width: "70%",
            padding: "10px",
            margin: "10px 0",
            fontSize: "16px",
        },
        buttonAdd: {
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
        },
        taskList: {
            listStyle: "none",
            padding: 0,
        },
        taskItem: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#f8f9fa",
            margin: "5px 0",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
        buttonDelete: {
            backgroundColor: "#dc3545",
            color: "#fff",
            border: "none",
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
        },
    };

    return (
        <div style={styles.container}>
            <h1>Gestión de Tareas</h1>
            <input
                style={styles.input}
                type="text"
                placeholder="Ingresa una tarea"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button style={styles.buttonAdd} onClick={handleAddTask}>
                Agregar Tarea
            </button>
            <ul style={styles.taskList}>
                {tasks.map((task, index) => (
                    <li key={index} style={styles.taskItem}>
                        {task}
                        <button
                            style={styles.buttonDelete}
                            onClick={() => handleDeleteTask(index)}
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
