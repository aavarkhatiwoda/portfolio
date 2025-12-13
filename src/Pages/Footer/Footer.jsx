import { Link, animateScroll as scroll } from "react-scroll";
import "./Footer.sass";

export default function Footer() {
  return (
    <div className="footer_toplevel">
      <div className="footer">
        <Link
          activeClass="active"
          to={"introduction_toplevel"}
          spy={true}
          smooth={true}
          duration={1000}
          className="fs3 fc1 link bold"
        >
          Aavar Khatiwoda
        </Link>
        <div className="footer_text fs1 fc1">
          Let's do great things together
        </div>
        <div className="footer_text footer_text_bottom fs1 fc1">
          Made with ❤️ with ReactJS
        </div>
      </div>
    </div>
  );
}
