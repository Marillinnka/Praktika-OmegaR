export function NavLink(props) {
  return (
    <div>
      <a className="menu__sections-link" href={props.href}>{props.text}</a>
    </div>
  );
}
