import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faWallet } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Balances() {
  const [totalBalances, setTotalBalances] = useState(0);
  const [balances, setBalances] = useState([]);
  const [showBalance, setShowBalance] = useState(true);

  useEffect(() => {
    const getTotalBalances = async () => {
      try {
        const respuesta = await fetch(
          "http://localhost:8080/balances/getTotalBalancesByUserId/4"
        );
        const totalBalances = await respuesta.json();
        setTotalBalances(totalBalances);
      } catch (error) {
        console.error("Error al obtener el total de los balances", error);
      }
    };

    getTotalBalances();
  }, []);

  useEffect(() => {
    const getBalances = async () => {
      try {
        const respuesta = await fetch(
          "http://localhost:8080/balances/getBalancesByUserId/4"
        );
        const Balances = await respuesta.json();
        setBalances(Balances);
      } catch (error) {
        console.error("Error al obtener los balances", error);
      }
    };

    getBalances();
  }, []);

  const handleEyeClick = () => {
    setShowBalance(!showBalance);
  };

  const BalanceItem = ({ name, amount }) => (
    <div>
      <p className="currency">{name}</p>
      <p className="currency_amount">${amount}</p>
    </div>
  );

  return (
    <div className="balances">
      <div className="balances-total">
        <div className="balances-total_left">
          <FontAwesomeIcon className="icon-wallet" icon={faWallet} />
          <h2>Balance</h2>
        </div>
        <div className="balances-total_right" onClick={handleEyeClick}>
          {showBalance ? (
            <h2 className="money">${totalBalances}</h2>
          ) : (
            <h2 className="money">$*******</h2>
          )}
          <FontAwesomeIcon
            className="icon-eye"
            icon={showBalance ? faEye : faEyeSlash}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
      <div className="balances_currencies">
        {balances.map((balance) => (
          <BalanceItem
            key={balance.id}
            name={balance.name}
            amount={balance.amount}
          />
        ))}
      </div>
      <div className="balances-slidebar_container">
        <div className="balances-slidebar"></div>
      </div>
    </div>
  );
}
