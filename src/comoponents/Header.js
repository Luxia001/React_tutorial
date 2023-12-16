import logo from "../images/1280px-Gundam_serpentine.svg.png";
import "./Header.css";
export function Header(props, { title2 }) {
  return (
    <nav>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <div>
        <a href="/" style={{ textDecoration: "none" }}>
          home
        </a>
        <a href="/" style={{ textDecoration: "none" }}>
          {props.title}
        </a>
      </div>
    </nav>
  );
}
