import React from "react";

import Footer from "./common/Footer";
import Header from "./common/Header";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
