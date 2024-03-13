import "./about.css";
import { Header } from "../component/header/header";
import { Footer } from "../component/footer/footer";
import MapComponent from "../component/map";
function about() {
  return (
    <>
      <Header></Header>
      <MapComponent></MapComponent>
      <div className="footer">
        {" "}
        <Footer></Footer>
      </div>
    </>
  );
}
export default about;
