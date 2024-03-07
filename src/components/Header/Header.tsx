import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.header__title}>To-Do List</h1>
    </div>
  );
};

export default Header;
