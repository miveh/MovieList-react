import React from "react";

function AddModal({ closeModal }) {
  document.body.style.overflow = "hidden";

  function submitHandler() {
    document.body.style.overflow = "auto";

    return;
  }

  return (
    <div className="AddModalContainer">
      <form action="" class="Add__Modal__form">
        <input type="text" placeholder="title" />
        <input type="file" />
        <div className="Add__Modal__form__btns">
          <button onClick={""} id="cancel">
            cancel
          </button>
          <input type="submit" onClick={submitHandler} id="add" />
        </div>
      </form>
    </div>
  );
}

export default AddModal;
