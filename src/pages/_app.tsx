import type { AppProps } from "next/app";

import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, Store } from "@/sp/redux/store";
import "@/styles/globals.css";
import InNhanh_Header from "@/components/Header";
import InNhanh_Footer from "@/components/Footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={persistor}>
        <InNhanh_Header />
        <Component {...pageProps} />
        <InNhanh_Footer />
        <ToastContainer
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
      </PersistGate>
    </Provider>
  );
}
