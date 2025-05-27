import Email from "./_components/Email";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function EmailPage() {
  return (
    <div>
      <Email />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}
