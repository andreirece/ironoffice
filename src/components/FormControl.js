function FormControl(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input style={{
          width: 323,
          height: 36,
          top: 0,
          margin:4,
          backgroundColor: "#FFFFFF",
          borderColor:"#ADD8E6",
          borderRadius: "8px",
          font:"lato",
          }}
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
