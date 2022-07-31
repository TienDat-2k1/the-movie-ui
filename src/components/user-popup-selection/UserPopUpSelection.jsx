import './UserPopUpSelection.scss';
function UserPopUpSelection({ children }) {
  return (
    <div className="user-popup-container">
      <ul className="user-list-items">{children}</ul>
    </div>
  );
}
export default UserPopUpSelection;
