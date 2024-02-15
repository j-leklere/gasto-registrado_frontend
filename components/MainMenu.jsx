import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendDown,
  faGear,
  faHandHoldingDollar,
  faHouse,
  faPiggyBank,
  faScaleBalanced,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function MainMenu() {
  return (
    <nav className="main_navbar">
      <ul>
        <li className="link">
          <Link href="/home">
            <FontAwesomeIcon icon={faHouse} />
            <p>Home</p>
          </Link>
        </li>
        <li className="link">
          <Link href="/balances">
            <FontAwesomeIcon icon={faScaleBalanced} />
            <p>Balances</p>
          </Link>
        </li>
        <li className="link">
          <Link href="/incomes">
            <FontAwesomeIcon icon={faHandHoldingDollar} />
            <p>Ingresos</p>
          </Link>
        </li>
        <li className="link">
          <Link href="/expenses">
            <FontAwesomeIcon icon={faArrowTrendDown} />
            <p>Gastos</p>
          </Link>
        </li>
        <li className="link">
          <Link href="/savings">
            <FontAwesomeIcon icon={faPiggyBank} />
            <p>Ahorros</p>
          </Link>
        </li>
        <li className="link">
          <Link href="/adjustments">
            <FontAwesomeIcon icon={faGear} />
            <p>Ajustes</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
