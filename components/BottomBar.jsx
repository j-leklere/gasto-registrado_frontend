import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";

function BottomBar() {
  return (
    <>
      <div className="bottom-bar">
        <h2>
          <FontAwesomeIcon className="icon-expenses" icon={faArrowTrendDown} />
          Últimos Gastos
        </h2>
      </div>
    </>
  );
}

export default BottomBar;
