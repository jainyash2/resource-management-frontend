import "./Lecturehall.css";

export default function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={confirmHandler}>
        confirm
      </button>
      <button className="btn" onClick={cancelHandler}>
        cancel
      </button>
    </div>
  );
}
