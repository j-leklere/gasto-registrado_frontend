"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { Suspense, useEffect, useState } from "react";

function Expenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const obtenerExpenses = async () => {
      try {
        const respuesta = await fetch(
          "http://localhost:8080/expenses/getExpensesByUser/4"
        );
        const expenses = await respuesta.json();
        setExpenses(expenses);
      } catch (error) {
        console.error("Error al obtener expenses", error);
      }
    };

    obtenerExpenses();
  }, []);

  return (
    <>
      {expenses.length > 0 && (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>{expense.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default function MiddleBar() {
  return (
    <>
      <div className="middle-bar">
        <h2>
          <FontAwesomeIcon className="icon-stats" icon={faChartLine} />
          Estadísticas
        </h2>
        <Suspense fallback={<p className="loading">Loading...</p>}>
          <Expenses />
        </Suspense>
      </div>
    </>
  );
}
