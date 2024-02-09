import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import MainMenu from "./MainMenu";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="account">
          <FontAwesomeIcon className="icon-user" icon={faUser} />
          <h2>Joaquin Leklere</h2>
        </div>
        <MainMenu />
        <div className="btn-logout">Cerrar Sesión</div>
      </div>
    </>
  );
}

export default Sidebar;
