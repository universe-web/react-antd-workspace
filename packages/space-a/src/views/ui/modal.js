import React, { Fragment } from "react";
import styles from "./modal.module.css";

function Modal(props) {
  const { visible, title, okText = "OK", onClickOk } = props;

  const handleClickOk = () => {
    onClickOk();
  };

  if (!visible) {
    return null;
  }

  return (
    <Fragment>
      <div className={styles.bg} />
      <div className={styles.wrapper}>
        <div className={styles.modal}>
          <span>{title}</span>
          <div className={styles.buttonRow}>
            <span className={styles.button} onClick={handleClickOk}>
              {okText}
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Modal;
