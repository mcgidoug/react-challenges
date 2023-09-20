import React, { useState } from "react";

const NewModal = () => {
  const [ShowModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!ShowModal);
  };

  return (
    <div className="main">
      <button onClick={toggleModal}>Show Modal</button>
      {ShowModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Modal</h2>
            <p>This is the modal content</p>
            <button>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewModal;
