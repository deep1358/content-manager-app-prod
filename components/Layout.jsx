import ActiveResource from "./ActiveResource";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ActiveResource />
      {children}
    </>
  );
};

export default Layout;
