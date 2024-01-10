import "./input.css";
const Input = ({
  label,
  bg = "",
  placeholder = "",
  name,
  value,
  type,
  onchange,
}) => {
  return (
    <div className="parent">
      <input
        className={`${bg}`}
        type={type}
        name={name || ""}
        placeholder={placeholder}
        value={value || ""}
        onChange={onchange}
      />
      {label && <label>{label}</label>}
    </div>
  );
};
export default Input;
