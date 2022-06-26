import "./styles.scss";

export function MethodBullet({ bulletColor, title }) {
  return (
    <li>
      <div className="bullet" style={{ background: bulletColor }}></div>
      <span>{title}</span>
    </li>
  );
}