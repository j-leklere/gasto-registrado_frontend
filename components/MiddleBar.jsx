"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCoins,
  faPieChart,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { Suspense, useEffect, useState } from "react";
import BarChart from "./BarChart";

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
  const OptionsComponent = () => {
    const handleOptionChange = (selectedOption) => {
      console.log(`Opción seleccionada: ${selectedOption}`);
    };

    return (
      <>
        <select onChange={(e) => handleOptionChange(e.target.value)}>
          <option value="gastos">Gastos</option>
          <option value="ingresos">Ingresos</option>
        </select>
      </>
    );
  };

  return (
    <div className="middle-data">
      <div className="month-data">
        <div className="month-and-options">
          <h2>
            <FontAwesomeIcon className="icon-month" icon={faCalendarDays} />
            Febrero
          </h2>
          <OptionsComponent />
        </div>
        <div className="total-expenses">
          <h3>Gastos Totales</h3>
          <p className="total-expenses_number">- $607.580</p>
        </div>
        <BarChart />
        <div className="middle-bar">
          <Suspense fallback={<p className="loading">Loading...</p>}>
            <Expenses />
          </Suspense>
        </div>
      </div>
      <div className="categories-data">
        <div className="categories-data_category">
          <div className="categories-data_category_name">
            <FontAwesomeIcon icon={faTag} />
            <p>Comida</p>
          </div>
          <div className="categories-data_category_amount">
            <FontAwesomeIcon icon={faCoins} />
            <p>$54.000</p>
          </div>
          <div className="categories-data_category_percentage">
            <FontAwesomeIcon icon={faPieChart} />
            <p>12%</p>
          </div>
        </div>
        <div className="categories-data_category">
          <div className="categories-data_category_name">
            <FontAwesomeIcon icon={faTag} />
            <p>Transporte</p>
          </div>
          <div className="categories-data_category_amount">
            <FontAwesomeIcon icon={faCoins} />
            <p>$32.000</p>
          </div>
          <div className="categories-data_category_percentage">
            <FontAwesomeIcon icon={faPieChart} />
            <p>8,5%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
