import React, { useState } from "react";
import { message } from "antd";
import "antd/lib/message/style/css";
import Modal from "@root/views/UI/modal.js";
import MyModal from "@root/views/UI/MyModal";

function UI() {
  const [modalShow, setModalShow] = useState(false);

  const handleOpenModal = () => {
    setModalShow(true);
  };

  const handleClickModalOk = () => {
    setModalShow(false);
  };

  const handleOpenMyModal = () => {
    let content = [];
    for (let i = 0; i < 20; i++) {
      content.push("xxx: xadadaad, sss: dweduhacc");
    }
    MyModal({ title: "特殊提示", content });
  };

  const handleShowMessage = () => {
    message.success("ok");
  };

  return (
    <div>
      <button onClick={handleOpenModal}>modal</button>
      <Modal
        visible={modalShow}
        title="this is a modal, some code......"
        onClickOk={handleClickModalOk}
      />
      <br />
      <button onClick={handleOpenMyModal}>myModal</button>
      <br />
      <button onClick={handleShowMessage}>message</button>
    </div>
  );
}

export default UI;
