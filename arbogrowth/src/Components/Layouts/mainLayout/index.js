import React from "react";
import Header from "../../../Components/header";
import Footer from "../../../Components/footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
