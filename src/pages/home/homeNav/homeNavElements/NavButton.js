const NavButton = function (props) {
  return (
    <button className="navigation__button" onClick={props.handleClick}>
      <div></div>
      <span></span>
      <span></span>
    </button>
  );
};

export default NavButton;
