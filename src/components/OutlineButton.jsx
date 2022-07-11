import "../styles/outlineButton.scss";

export function OutlineButton({ children }) {
  return (
    <button
      type="button"
      className="btn-outlined"
    >
      <h1>{children}</h1>
    </button>
  );
}