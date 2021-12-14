const Button = (props) => {
    const btnClass = ['btn', props.type].join(' ');
  return (
    <button className={btnClass} onClick={props.onClickHandler}>
      {props.label}
    </button>
  );
};

export default Button;
