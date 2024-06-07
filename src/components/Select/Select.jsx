import "./Select.css";

const Select = ({ lista, funcao }) => {
  return (
    <>
      <select
        className="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
        onChange={(ev) => funcao(ev.target.value)}
      >
        {lista.map((item) => (
          <option value={item.value}>{item.text}</option>
        ))}
      </select>
    </>
  );
};

export default Select;
