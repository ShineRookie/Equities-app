const Button = ({ children, handleClick, item, disabled }) => {
  return (
    <button
      onClick={handleClick}
      disabled={item === disabled}
      className={"btn"}
    >
      {children}
    </button>
  );
};

export default Button;
