import * as styles from './styles.module.css';

const MainButton = ({ children, clickHandler, type = 'button' }) => {
  return (
    <button className={styles.button} onClick={clickHandler} type={type}>
      {children}
    </button>
  );
};

export default MainButton;
