import "./App.scss";
import Header from "./components/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ItemList } from "./Container/ItemList/ItemList";

function App() {
  return (
    <>
      <Header />

      <ItemList />

      <ToastContainer
        theme="light"
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
