import './UserPopUpSelection.scss';
function UserPopUpSelection({ children, ...otherProps }) {
  return (
    <div className="user-popup-container" {...otherProps}>
      <ul className="user-list-items">{children}</ul>
    </div>
  );
}
export default UserPopUpSelection;
