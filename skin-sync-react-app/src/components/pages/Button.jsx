function Button({ type, onClick, disabled, children }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="button"
    >
      {children}
    </button>
  );
}

export default Button;