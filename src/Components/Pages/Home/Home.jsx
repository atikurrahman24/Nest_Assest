import Navbar from "../../Navbar";
import Featured from "./Featured";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div className="w-11/12 mx-auto"><img src="/Images/banner.png" alt="Banner" className="w-full"/></div>
        <Featured></Featured>
      </div>
    </div>
  )
}
