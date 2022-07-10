import "../styles/bullet.scss";

export function Bullet({ bulletColor, title }) {
  return (
    <li>
      <div className="bullet" style={{ background: bulletColor }}></div>
      <span>{title}</span>
    </li>
  );
}