import { BiHeadphone } from "react-icons/bi";
import { BiMoon,BiSolidFilePdf  } from "react-icons/bi";

function Home(){
  return(
    <>
    <div className="bg_container">
    <nav className="flex justify-between p-4">
      <h3 className="text-white">OPEN FOR FREELANCE OPPORTUNITIES</h3>
      <h3 className="text-white">GERALD FAKAA PORTFOLIO/2023-2024</h3>
<div className="flex items-center">
  <BiHeadphone className="text-2xl text-white"/>
  <div className="border_color ml-4">
    <p className="text-white text-l">Dark</p>
    <BiMoon className="text-white text-3xl"/>


  </div>
  <div className="border_color2 ml-4">
    <p className=" text-l">My Resume</p>
    <BiSolidFilePdf className="pdf_icon text-black text-xl"/>


  </div>

</div>

</nav>
    </div>

    </>
  )
}

export default Home;