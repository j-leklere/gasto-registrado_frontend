import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

export default function Incomes() {
  const [totalMonthlyIncomes, setTotalMonthlyIncomes] = useState(0);
  const [monthlyIncomes, setMonthlyIncomes] = useState([]);
  const [showIncome, setShowIncome] = useState(true);

  useEffect(() => {
    const getTotalMonthlyIncomes = async () => {
      try {
        const respuesta = await fetch(
          "http://localhost:8080/incomes/getTotalMonthlyIncomesByUserId/4"
        );
        const totalMonthlyIncomes = await respuesta.json();
        setTotalMonthlyIncomes(totalMonthlyIncomes);
      } catch (error) {
        console.error(
          "Error al obtener el total de los ingresos mensuales",
          error
        );
      }
    };

    getTotalMonthlyIncomes();
  }, []);

  useEffect(() => {
    const getMonthlyIncomes = async () => {
      try {
        const respuesta = await fetch(
          "http://localhost:8080/incomes/getMonthlyIncomesByUserId/4"
        );
        const monthlyIncomes = await respuesta.json();
        setMonthlyIncomes(monthlyIncomes);
      } catch (error) {
        console.error("Error al obtener los ingresos mensuales", error);
      }
    };

    getMonthlyIncomes();
  }, []);

  const handleEyeClick = () => {
    setShowIncome(!showIncome);
  };

  const ExpenseItem = ({ name, amount }) => (
    <div>
      <p className="currency">{name}</p>
      <p className="currency_amount">${amount}</p>
    </div>
  );

  return (
    <div className="incomes">
      <div className="incomes-total">
        <div className="incomes-total_left">
          <FontAwesomeIcon
            className="icon-incomes"
            icon={faHandHoldingDollar}
          />
          <h2>Ingresos Mensuales</h2>
        </div>
        <div className="incomes-total_right" onClick={handleEyeClick}>
          {showIncome ? (
            <h2 className="money">${totalMonthlyIncomes}</h2>
          ) : (
            <h2 className="money">$*******</h2>
          )}
          <FontAwesomeIcon
            className="icon-eye"
            icon={showIncome ? faEye : faEyeSlash}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="incomes_currencies">
        {monthlyIncomes.map((income) => (
          <ExpenseItem
            key={income.id}
            name={income.name}
            amount={income.amount}
          />
        ))}
      </div>

      <div className="incomes-slidebar_container">
        <div className="incomes-slidebar"></div>
      </div>
    </div>
  );
}
