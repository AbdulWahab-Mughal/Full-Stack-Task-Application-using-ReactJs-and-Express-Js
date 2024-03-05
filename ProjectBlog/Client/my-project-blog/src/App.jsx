import { ToastContainer } from "./Components/Toast/Toastify";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Router from "./Components/Router/Router";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <NavBar />

      <Router />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
