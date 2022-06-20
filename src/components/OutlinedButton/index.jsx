import "./styles.scss";

export function OutlinedButton({ children }) {
  return (
    <button
      type="button"
      className="btn-outlined"
    >
      <h1>{children}</h1>
    </button>
  );
}