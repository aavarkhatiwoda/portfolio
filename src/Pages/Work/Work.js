import "./Work.sass";
import { WorkCardsList } from "./WorkCardsList";

export default function Work() {
  return (
    <div className="work_toplevel" id="work">
      <div className="work">
        <div className="work_grid1" />
        <div className="work_grid2">
          <div className="work_grid2_intro fs3" style={{ fontWeight: "bold" }}>
            Professional History
          </div>
          <WorkCardsList />
        </div>
      </div>
    </div>
  );
}
