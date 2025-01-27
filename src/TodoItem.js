function TodoItems(props) {
    return(
      <li>
        <span>v</span>
        <p> {props.text} </p>
        <span>x</span>
      </li>
    );
  }

  export { TodoItems }