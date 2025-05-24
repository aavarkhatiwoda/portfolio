import "./Leadership.sass";
import { LeadershipCarousel } from "./LeadershipCarousel";

export default function Leadership() {
  return (
    <div className="leadership_toplevel" id="leadership">
      <div className="leadership">
        <div className="leadership_grid1" />
        <div className="leadership_grid2">
          <div
            className="leadership_grid2_intro fs3"
            style={{ fontWeight: "bold" }}
          >
            Leadership
          </div>
          <LeadershipCarousel />
        </div>
      </div>
    </div>
  );
}
