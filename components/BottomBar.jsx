import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendarDay,
  faCoins,
  faCreditCard,
  faExchangeAlt,
  faFeatherAlt,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

function BottomBar() {
  return (
    <div className="bottom-data">
      <h2>
        <FontAwesomeIcon className="icon-expenses" icon={faExchangeAlt} />
        Últimos Movimientos
      </h2>
      <div className="bottom-bar">
        <div className="transaction">
          <div className="transaction-detail">
            <FontAwesomeIcon className="icon-expenses" icon={faFeatherAlt} />
            <p>McDonalds</p>
          </div>
          <div className="transaction-detail">
            <FontAwesomeIcon className="icon-expenses" icon={faCalendarDay} />
            <p>12 de Febrero, 2024</p>
          </div>
          <div className="transaction-detail">
            <FontAwesomeIcon className="icon-expenses" icon={faCreditCard} />
            <p>Mercado Pago</p>
          </div>
          <div className="transaction-detail">
            <FontAwesomeIcon className="icon-expenses" icon={faCoins} />
            <p className="expense">- $9.200</p>
          </div>
          <div className="transaction-detail">
            <FontAwesomeIcon className="icon-expenses" icon={faTag} />
            <p>Comida</p>
          </div>
          <div className="transaction-detail">
            <FontAwesomeIcon
              className="icon-expenses_arrow"
              icon={faArrowRight}
            />
          </div>
        </div>
        <div className="transaction">
          <div className="transaction-detail">
            <FontAwesomeIcon className="icon-expenses" icon={faFeatherAlt} />
            <p>McDonalds</p>
          </div>
          <div className="transaction-detail">
            <FontAwesomeIcon className="icon-expenses" icon={faCalendarDay} />
            <p>12 de Febrero, 2024</p>
          </div>
          <div className="transaction-detail">
            <FontAwesomeIcon className="icon-expenses" icon={faCreditCard} />
            <p>Mercado Pago</p>
          </div>
          <div className="transaction-detail">
            <FontAwesomeIcon className="icon-expenses" icon={faCoins} />
            <p className="expense">- $9.200</p>
          </div>
          <div className="transaction-detail">
            <FontAwesomeIcon className="icon-expenses" icon={faTag} />
            <p>Comida</p>
          </div>
          <div className="transaction-detail">
            <FontAwesomeIcon
              className="icon-expenses_arrow"
              icon={faArrowRight}
            />
          </div>
        </div>
        <div className="transaction">
          <div className="transaction-detail">
            <FontAwesomeIcon className="icon-expenses" icon={faFeatherAlt} />
            <p>McDonalds</p>
          </div>
          <div className="transaction-detail">
            <FontAwesomeIcon className="icon-expenses" icon={faCalendarDay} />
            <p>12 de Febrero, 2024</p>
          </div>
          <div className="transaction-detail">
            <FontAwesomeIcon className="icon-expenses" icon={faCreditCard} />
            <p>Mercado Pago</p>
          </div>
          <div className="transaction-detail">
            <FontAwesomeIcon className="icon-expenses" icon={faCoins} />
            <p className="expense">- $9.200</p>
          </div>
          <div className="transaction-detail">
            <FontAwesomeIcon className="icon-expenses" icon={faTag} />
            <p>Comida</p>
          </div>
          <div className="transaction-detail">
            <FontAwesomeIcon
              className="icon-expenses_arrow"
              icon={faArrowRight}
            />
          </div>
        </div>
        <div className="transaction">
          <div className="transaction-detail">
            <FontAwesomeIcon className="icon-expenses" icon={faFeatherAlt} />
            <p>McDonalds</p>
          </div>
          <div className="transaction-detail">
            <FontAwesomeIcon className="icon-expenses" icon={faCalendarDay} />
            <p>12 de Febrero, 2024</p>
          </div>
          <div className="transaction-detail">
            <FontAwesomeIcon className="icon-expenses" icon={faCreditCard} />
            <p>Mercado Pago</p>
          </div>
          <div className="transaction-detail">
            <FontAwesomeIcon className="icon-expenses" icon={faCoins} />
            <p className="expense">- $9.200</p>
          </div>
          <div className="transaction-detail">
            <FontAwesomeIcon className="icon-expenses" icon={faTag} />
            <p>Comida</p>
          </div>
          <div className="transaction-detail">
            <FontAwesomeIcon
              className="icon-expenses_arrow"
              icon={faArrowRight}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomBar;
