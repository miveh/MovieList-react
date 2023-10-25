import React, { useState } from "react";
import AddModal from "./AddModal";

function buttonHandler() {
  return <div className="z-10 relative  bg-red-300 w-100 h-100">zahra</div>;
}

function AddMovie() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="AddBtn">
        <img
          onClick={() => {
            setOpenModal(true);
          }}
          src="./images/floatinBtn.svg"
        />
      </div>

      {openModal && <AddModal closeModal={setOpenModal} />}
    </div>
  );
}

export default AddMovie;
