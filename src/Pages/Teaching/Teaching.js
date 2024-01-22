import "./Teaching.sass";
import { TeachingCarousel } from "./TeachingCarousel";

export default function Teaching() {
  return (
    <div className="teaching_toplevel" id="teaching">
      <div className="teaching">
        <div className="teaching_grid1" />
        <div className="teaching_grid2">
          <div
            className="teaching_grid2_intro fs3"
            style={{ fontWeight: "bold" }}
          >
            Teaching History
          </div>
          <TeachingCarousel />
        </div>
      </div>
    </div>
  );
}
