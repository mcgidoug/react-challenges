import React from "react";
import { useState } from "react";

const ModalTwo = () => {
  const [modalState, setModalState] = useState(false);

  const handleModalState = () => {
    setModalState(!modalState);
  };

  return (
    <div>
      <button onClick={handleModalState}>Click</button>
      {modalState && <div>WOW</div>}
    </div>
  );
};

export default ModalTwo;
