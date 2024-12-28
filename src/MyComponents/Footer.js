import React from "react";

const Footer = () => {
  let footerStyle = {
    position: "relative",
    width: "100%",
    top: "10vh",
  };
  return (
    <footer className="text-white bg-dark py-1" style={footerStyle}>
      <p className="text-center mb-0">Copyright &copy; MyTodoList.com</p>
    </footer>
  );
};

export default Footer;
