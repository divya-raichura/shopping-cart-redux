import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

function Modal() {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  console.log("dispatch", dispatch);
  console.log("open", isOpen);

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from the shopping cart?</h4>
        <div className="btn-container">
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            className="btn clear-btn"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
}
export default Modal;
