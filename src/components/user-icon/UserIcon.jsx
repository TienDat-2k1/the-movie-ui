import classes from './UserIcon.module.scss';
function UserIcon({ urlImage, ...otherProps }) {
  return (
    <div className={classes.user} {...otherProps}>
      <img src={urlImage} alt="" />
    </div>
  );
}
export default UserIcon;
