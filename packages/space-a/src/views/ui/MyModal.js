import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./MyModal.module.css";

class MyModal extends React.Component {
  handleDestroy = () => {
    const divs = document.getElementsByClassName("myModalDiv");
    const div = divs && divs.length !== 0 ? divs[divs.length - 1] : null;

    if (div) {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    }
  };

  render() {
    const { title = "", content } = this.props;

    return (
      <Fragment>
        <div className={styles.bg} />
        <div className={styles.wrapper}>
          <div className={styles.container}>
            {title && <div className={styles.title}>{title}</div>}
            {content && content.length !== 0 && (
              <div className={styles.content}>
                {content.map((item, idx) => (
                  <span key={idx}>{item}</span>
                ))}
              </div>
            )}
            <div className={styles.buttons}>
              <span className={styles.button} onClick={this.handleDestroy}>
                OK
              </span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

/* export default {
  open: (props) => {
    let div = document.createElement("div");
    div.className = "myModalDiv";
    document.body.appendChild(div);

    ReactDOM.render(React.createElement(MyModal, props || {}), div);
  },
}; */

export default function (props) {
  let div = document.createElement("div");
  div.className = "myModalDiv";
  document.body.appendChild(div);

  ReactDOM.render(React.createElement(MyModal, props || {}), div);
}
