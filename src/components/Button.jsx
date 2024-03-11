const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-3 self-end place-self-start text-sm bg-secondary rounded-sm text-white"
    >
      {children}
    </button>
  );
};

export default Button;
