import Sidebar from "../../../components/Sidebar";
import TopBar from "../../../components/TopBar";
import MiddleBar from "../../../components/MiddleBar";
import BottomBar from "../../../components/BottomBar";
import "../../../sass/main.scss";

export default function Board() {
  return (
    <main>
      <Sidebar />
      <div className="right-side">
        <TopBar />
        <MiddleBar />
        <BottomBar />
      </div>
    </main>
  );
}
