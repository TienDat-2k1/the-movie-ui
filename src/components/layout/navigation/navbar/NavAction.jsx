function NavAction({ className }) {
  return (
    <div className={`nav__actions ${className}`}>
      <div className="nav__action nav__action--search">
        <i className="fa-solid fa-magnifying-glass nav__icon"></i>
      </div>
      <div className="nav__action">
        <i className="fa-solid fa-clock-rotate-left nav__icon"></i>
      </div>
      <div className="nav__action">
        <i className="fa-solid fa-bell nav__icon"></i>
      </div>
    </div>
  );
}
export default NavAction;
