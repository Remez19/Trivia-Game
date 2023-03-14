import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Header from "../UI/Header";
import Footer from "../UI/Footer";

function RootLayout() {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
}

export default RootLayout;
