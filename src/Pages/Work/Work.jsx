import { WorkCardsList } from "./WorkCardsList";

export default function Work() {
  return (
    <div className="informationpage_toplevel" id="work">
      <div className="informationpage">

          <div className="informationpage_title fontsize3 bold">
            Professional History
          </div>
          <WorkCardsList />

      </div>
    </div>
  );
}
