function FormControl(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        checked={props.checked}
      />
    </div>
  );
}

export default FormControl;