import React, {useState, useEffect} from "react";

export default function ColorChanger() {
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");
    const [text, setText] = useState("");


    const styles = {
        container: {
            backgroundColor: backgroundColor,
            padding: "20px",
            borderRadius: "8px",
            textAlign: "center",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        },
        button: {
            backgroundColor: "#ff6600",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
        },
        paragraph: {
            fontSize: "18px",
            margin: "10px 0",
        },
    };

    useEffect(() => {
        setText("Color modificado");
    }, []);

    const handleChangeColor = () => {
        setBackgroundColor("#ffcc00");
    };

    return (
        <div style={styles.container}>
            <p style={styles.paragraph}>{text}</p>
            <button style={styles.button} onClick={handleChangeColor}>
                Cambiar Color
            </button>
        </div>
    );
}