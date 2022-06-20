import "./styles.scss";

export function DefaultButton({ children }) {
  return (
    <button
      type="button"
      className="btn-default"
    >
      <h1>{children}</h1>
    </button>
  );
}