const Button = ({ children, onClick, customClass }) => {
  return (
    <button
      onClick={onClick}
      className={`p-3 self-end place-self-start text-sm bg-secondary rounded-sm text-white ${customClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
