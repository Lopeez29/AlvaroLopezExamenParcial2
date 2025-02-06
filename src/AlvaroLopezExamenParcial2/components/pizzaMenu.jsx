import React, { useState } from "react";

export default function PizzaMenu() {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchMenu = async () => {
        setLoading(true);
        setError("");
        setPizzas([]);

        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));

            const response = await fetch("https://fake-api-pizzas.com/menu");

            if (!response.ok) {
                throw new Error("Error al cargar el menu.");
            }

            const data = ["Margarita", "Pepperoni", "Hawaiana"];
            setPizzas(data);
        } catch (err) {
            setError("No se pudo cargar el menu. Intentalo nuevamente.");
        } finally {
            setLoading(false);
        }
    };

    const styles = {
        container: {
            maxWidth: "400px",
            margin: "20px auto",
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
        },
        button: {
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
        },
        list: {
            marginTop: "20px",
            padding: "0",
            listStyleType: "none",
            textAlign: "left",
        },
        listItem: {
            backgroundColor: "#f8f9fa",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
        error: {
            color: "red",
            marginTop: "10px",
        },
    };

    return (
        <div style={styles.container}>
            <h1>Menú de Pizzas</h1>
            <button style={styles.button} onClick={fetchMenu} disabled={loading}>
                {loading ? "Cargando..." : "Cargar Menu"}
            </button>
            {error && <p style={styles.error}>{error}</p>}
            <ul style={styles.list}>
                {pizzas.map((pizza, index) => (
                    <li key={index} style={styles.listItem}>
                        {pizza}
                    </li>
                ))}
            </ul>
        </div>
    );
}