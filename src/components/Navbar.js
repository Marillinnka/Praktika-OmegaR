import {NavLink} from "./NavLink";
export function Navbar() {
  return (
    <div className="menu">
      <div className="menu__icon">
        <p>zest<br /> le zeste<br /> la scorza</p>
      </div>
      <div className="menu__sections">
        <NavLink href="#" text="Works" />
        <NavLink href="#" text="About" />
        <NavLink href="#" text="Menu" />
      </div>
    </div>
  );
}

