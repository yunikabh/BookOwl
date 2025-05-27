import { ToastContainer } from "react-toastify";
import SignupForm from "./_components/SignupForm";

export default function SignUpPage() {
  return (
    <div>
      <SignupForm />
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
