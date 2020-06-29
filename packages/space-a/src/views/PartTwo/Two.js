import React, { useState } from "react";
import Modal from "@root/views/UI/modal.js";

function Two() {
  const [modalShow, setModalShow] = useState(false);

  const handleOpenModal = () => {
    setModalShow(true);
  };

  const handleClickModalOk = () => {
    setModalShow(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>modal</button>
      <Modal
        visible={modalShow}
        title="this is a modal, some code......"
        onClickOk={handleClickModalOk}
      />
    </div>
  );
}

export default Two;
