import { BiHeadphone } from "react-icons/bi";
import { BiMoon, BiSolidFilePdf } from "react-icons/bi";

function Home() {
  return (
    <>
      <div className="bg_container">
        <nav className="flex justify-between p-4">
          <h3 className="text-white">OPEN FOR FREELANCE OPPORTUNITIES</h3>
          <h3 className="text-white">GERALD FAKAA PORTFOLIO/2023-2024</h3>
          <div className="flex items-center">
            <BiHeadphone className="text-2xl text-white" />
            <div className="border_color ml-4">
              <p className="text-white text-l">Dark</p>
              <BiMoon className="text-white text-3xl" />
            </div>
            <div className="border_color2 ml-4">
              <p className=" text-l">My Resume</p>
              <BiSolidFilePdf className="pdf_icon text-xl" />
            </div>
          </div>
        </nav>
        <section className="flex mt-4">
          <h1 className="dev_title">FULLSTACK DEVELOPER</h1>
          <div className="ml-10">
            <img src="" className="image_style" alt="" />
            <div>
              <div className="flex items-center mt-6">
                <h3 className="primary_redd font-bold">ABOUT ME</h3>
                <hr className="first_hr" />
              </div>
              <h3 className="text-white text-sm">
                I am fullstack developer based in Abuja, Nigeria, I
                bring a wealth of experience in crafting sophisticated and
                interactive digital experiences on the web. My expertise spans
                both frontend and backend development, allowing me to deliver
                comprehensive solutions that meet the diverse needs of clients
                and projects.
              </h3>
            </div>
          </div>

          <div></div>
        </section>

        <section className="mt-20">
          <h1 className="text-white">FEATURED/PERSONAL PROJECT[5]</h1>
          <hr className="mt-8"/>
          <div className="project_content flex p-4">
            <div className="project_content_div1">
              <h1 className="text-white font_fam">JOBLANCE</h1>
              <h3 className="text-white">Discover a revolutionary platform for effortlessly finding job opportunities and securing employment. Our platform seamlessly combines cutting-edge technology with user-friendly simplicity, empowering you to confidently navigate the job market. Join our community for a journey into precise job tracking and career advancement.</h3>
            </div>
            <div className="project_content_div2">

            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
