import React, {useState} from "react";

export default function ReservationForm() {
    const [name, setName] = useState("");
    const [people, setPeople] = useState("");
    const [date, setDate] = useState("");
    const [feedback, setFeedback] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // control de errores
        if (name.trim() === "") {
            setError("Por favor, ingresa tu nombre.");
            return;
        }
        if (!people || people < 1 || people > 10) {
            setError("El número de personas debe estar entre 1 y 10.");
            return;
        }
        if (date.trim() === "") {
            setError("Por favor, selecciona una fecha y hora.");
            return;
        }
        if (new Date(date) < new Date()) {
            setError("La fecha y hora debe ser mayor a la actual.");
            return;
        }

        setError("");
        setFeedback(`Reserva confirmada para ${name} el ${date} para ${people} personas.`);
        setName("");
        setPeople("");
        setDate("");
    };

    const styles = {
        container: {
            maxWidth: "400px",
            margin: "20px auto",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontFamily: "Arial, sans-serif",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
        title: {
            color: "#ff6600",
            textAlign: "center",
            marginBottom: "20px",
        },
        input: {
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            fontSize: "16px",
        },
        button: {
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
        },
        error: {
            color: "red",
            marginTop: "10px",
        },
        feedback: {
            color: "green",
            marginTop: "10px",
        },
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Reserva en el Restaurante</h1>
            <form onSubmit={handleSubmit}>
                <input
                    style={styles.input}
                    type="text"
                    placeholder="Ingresa tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    style={styles.input}
                    type="number"
                    placeholder="Número de personas (1-10)"
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    min="1"
                    max="10"
                />
                <input
                    style={styles.input}
                    type="datetime-local"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <button style={styles.button} type="submit">
                    Reservar
                </button>
            </form>
            {error && <p style={styles.error}>{error}</p>}
            {feedback && <p style={styles.feedback}>{feedback}</p>}
        </div>
    );
}