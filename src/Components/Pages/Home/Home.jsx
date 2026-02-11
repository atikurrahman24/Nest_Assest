import Footer from "../../Footer";
import Navbar from "../../Navbar";
import Card from "./Card";
import Extra from "./Extra";
import Featured from "./Featured";
import Products from "./Products";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div className="w-11/12 mx-auto mt-4"><img src="/Images/banner.png" alt="Banner" className="w-full"/></div>
        <Featured></Featured>
        <Card></Card>
        <Products></Products>
        <Extra></Extra>
        <Footer></Footer>
      </div>
    </div>
  )
}
