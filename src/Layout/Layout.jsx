// import Footer from "../Component/Footer/footer";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="layout-page">
      <Navbar />
      <div className="main">
        <div className="container">{children}</div>
      </div>
      {/* <div>Hello</div> */}
      {/* <Footer /> */}
    </div>
  );
}
