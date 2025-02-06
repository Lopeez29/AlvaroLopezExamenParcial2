import React from "react";
import ColorChanger from "./components/colorChanger";
import TaskManager from "./components/taskManager";
import PizzaMenu from "./components/pizzaMenu";
import ReservationForm from "./components/reservationForm";

function App() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Examen DOM</h1>
            <ColorChanger />
            <TaskManager />
            <PizzaMenu />
            <ReservationForm />
        </div>
    );
}

export default App;