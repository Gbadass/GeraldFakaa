import { BiHeadphone } from "react-icons/bi";
import { BiMoon, BiSolidFilePdf } from "react-icons/bi";
import projectImg from "../Images/joblance.png";
import { LuArrowUpRight } from "react-icons/lu";
import { FaDiagramProject } from "react-icons/fa6";
import projectImg1 from "../Images/joblance.png";
import projectImg2 from "../Images/softwash.png";
import projectImg3 from "../Images/cinetube.png";
import geraldfakaa from "../Images/geraldfakaa.jpeg";
import geraldfakaa2 from "../Images/WhatsApp Image 2024-02-23 at 11.42.26 AM.jpeg";

function Home() {
  return (
    <>
      <div className="bg_container">
        <nav className="md_nav_style p-4 w-full grid lg:grid-cols-3 md:grid-cols-1 flex-col justify-between items-center sm:flex-row">
          <h3 className="md_h3_style text-white  whitespace-nowrap">OPEN FOR FREELANCE OPPORTUNITIES</h3>
          <h3 className="md_h3_style2 text-white lg:mt-0 sm:mt-5 order-3 sm:order-2 md:mt-0">GERALD FAKAA PORTFOLIO/2023-2024</h3>
          <div
            className="md_lastdiv_style flex justify-evenly items-center lg:mt-0 sm:mt-5 order-2 sm:order-3">
            <BiHeadphone className="text-2xl text-white" />
            <div className="border_color ml-5">
              <p className="text-white text-l">Dark</p>
              <BiMoon className="text-white text-3xl" />
            </div>
            <div className="border_color2 ml-5">
              <p className="text-l whitespace-nowrap">My Resume</p>
              <BiSolidFilePdf className="pdf_icon text-xl" />
            </div>
          </div>
        </nav>
        <section className="section_one">
          <div className="">
          <h1 className="dev_title">FULLSTACK DEVELOPER</h1>
          </div>

          <div className="ml-10">
            <div className="image_style_div">
              <img src={geraldfakaa} className="image_style" alt="" />
            </div>

            <div className="bio_content bio_details">
              <div className="flex items-center mt-6">
                <h3 className="primary_redd font-bold">ABOUT ME</h3>
                <hr className="first_hr" />
              </div>
              <h3 className="text-white text-sm">
                I am fullstack developer based in Abuja, Nigeria, I bring a
                wealth of experience in crafting sophisticated and interactive
                digital experiences on the web. My expertise spans both frontend
                and backend development, allowing me to deliver comprehensive
                solutions that meet the diverse needs of clients and projects.
              </h3>
            </div>
          </div>

        </section>

        <section className="mt-20 grid sm:grid-cols-1">
          <h1 className="text-white">FEATURED/PERSONAL PROJECT[5]</h1>
          <hr className="mt-8" />
          <div className="project_content grid sm:grid-cols-1 lg:grid-cols-2 p-4">
            <div className="project_content_div1">
              <h1 className="text-white font_fam">JOBLANCE</h1>
              <h3 className="text_color text-sm lg:mt-5 lg:w-full md:w-full sm:w-full">
                Discover a revolutionary platform for effortlessly finding job
                opportunities and securing employment. Our platform seamlessly
                combines cutting-edge technology with user-friendly simplicity,
                empowering you to confidently navigate the job market.
              </h3>
              <div className="flex items-center mt-3">
                <h1 className="text_color">React</h1>
                <LuArrowUpRight className="text-white ml-2" />
              </div>
              <div className="flex items-center mt-2">
                <h1 className="primary_redd">VISIT NOW</h1>
                <FaDiagramProject className="ml-2 primary_redd" />
              </div>
            </div>
            <div className="project_content_div2">
              <img
                src={projectImg1}
                className="w-full centered h-auto"
                alt=""
              />
            </div>
          </div>
          <hr className="mt-8" />
          <div className="project_content grid sm:grid-cols-1 lg:grid-cols-2 p-4">
            <div className="project_content_div1">
              <h1 className=" text-white font_fam2">SOFTWASH LUANDRY</h1>
              <h3 className="text_color text-sm sm:mt-5 lg:mt-5 lg:w-full md:w-full">
                Experience the convenience of managing your laundry with our
                revolutionary platform. Our application seamlessly blends
                cutting-edge technology with user-friendly simplicity,
                empowering you to effortlessly schedule pickups, track the
                status of your laundry, and enjoy a seamless laundry experience.
              </h3>
              <div className="flex items-center mt-3">
                <h1 className="text_color">React</h1>
                <LuArrowUpRight className="text-white ml-2" />
              </div>
              <div className="flex items-center mt-2">
                <h1 className="primary_redd">VISIT NOW</h1>
                <FaDiagramProject className="ml-2 primary_redd" />
              </div>
            </div>
            <div className="project_content_div2">
              <img
                src={projectImg2}
                className="w-full centered h-auto"
                alt=""
              />
            </div>
          </div>

          <hr className="mt-8" />
          <div className="project_content grid sm:grid-cols-1 lg:grid-cols-2 p-4">
            <div className="project_content_div1">
              <h1 className=" text-white font_fam2">CINETUBE</h1>
              <h3 className="text_color lg:mt-5 text-sm sm:mt-5 lg:w-full md:w-full">
                Embark on a cinematic journey like never before with our movie
                recommendation platform. Discover a revolutionary platform that
                seamlessly blends cutting-edge technology with user-friendly
                simplicity, empowering you to explore and find the perfect movie
                recommendations tailored to your preferences.
              </h3>
              <div className="flex items-center mt-3">
                <h1 className="text_color">React</h1>
                <LuArrowUpRight className="text-white ml-2" />
              </div>
              <div className="flex items-center mt-2">
                <h1 className="primary_redd">VISIT NOW</h1>
                <FaDiagramProject className="ml-2 primary_redd" />
              </div>
            </div>
            <div className="project_content_div2">
              <img
                src={projectImg3}
                className="w-full centered h-auto"
                alt=""
              />
            </div>
          </div>
          <hr className="mt-8" />
        </section>

        <section className="skill_content grid gap-24 sm:grid-cols-1 lg:grid-cols-2 mt-32 ">
          <div className="">
            <h1 className="text-white text-xl">MAJOR SKILLS[12]</h1>

            <div className="flex items-center justify-between mt-5">
              <h1 className="text_color text-xl">REACT</h1>
              <LuArrowUpRight className="text-white ml-2" />
            </div>
            <hr className="skill_hr mt-2" />
            <div className="flex items-center justify-between mt-5">
              <h1 className="text_color text-xl">JAVASCRIPT</h1>
              <LuArrowUpRight className="text-white ml-2" />
            </div>
            <hr className="skill_hr mt-2" />
            <div className="flex items-center justify-between mt-5">
              <h1 className="text_color text-xl">BOOSTRAP</h1>
              <LuArrowUpRight className="text-white ml-2" />
            </div>
            <hr className="skill_hr mt-2" />
            <div className="flex items-center justify-between mt-5">
              <h1 className="text_color text-xl">TAILWIND CSS</h1>
              <LuArrowUpRight className="text-white ml-2" />
            </div>
            <hr className="skill_hr mt-2" />
            <div className="flex items-center justify-between mt-5">
              <h1 className="text_color text-xl">REDUX</h1>
              <LuArrowUpRight className="text-white ml-2" />
            </div>
            <hr className="skill_hr mt-2" />
            <div className="flex items-center justify-between mt-5">
              <h1 className="text_color text-xl">SASS</h1>
              <LuArrowUpRight className="text-white ml-2" />
            </div>
            <hr className="skill_hr mt-2" />
            <div className="flex items-center justify-between mt-5">
              <h1 className="text_color text-xl">TYPESCRIPT</h1>
              <LuArrowUpRight className="text-white ml-2" />
            </div>
            <hr className="skill_hr mt-2" />
            <div className="flex items-center justify-between mt-5">
              <h1 className="text_color text-xl">JQUERY</h1>
              <LuArrowUpRight className="text-white ml-2" />
            </div>
            <hr className="skill_hr mt-2" />
            <div className="flex items-center justify-between mt-5">
              <h1 className="text_color text-xl">NODE JS</h1>
              <LuArrowUpRight className="text-white ml-2" />
            </div>
            <hr className="skill_hr mt-2" />
            <div className="flex items-center justify-between mt-5">
              <h1 className="text_color text-xl">EXPRESS</h1>
              <LuArrowUpRight className="text-white ml-2" />
            </div>
            <hr className="skill_hr mt-2" />
            <div className="flex items-center justify-between mt-5">
              <h1 className="text_color text-xl">MONGODB</h1>
              <LuArrowUpRight className="text-white ml-2" />
            </div>
            <hr className="skill_hr mt-2" />
            <div className="flex items-center justify-between mt-5">
              <h1 className="text_color text-xl">MYSQL</h1>
              <LuArrowUpRight className="text-white ml-2" />
            </div>
            <hr className="skill_hr mt-2" />
          </div>
          <div className="">
            <h1 className="text-white text-xl">MY HOBBIES/INTEREST</h1>

            <p className="text-white mt-5">
              Beyond my professional pursuits, I engage in designing and
              showcase my creative skills. Outside of work, I have a passion for
              playing basketball and video games ; collaborating with me ensures
              these endeavors are sustained. Feel free to GET IN TOUCH for more
              insights into my professional and personal pursuits.
            </p>
            <div className="picture_frame">
              {/* <img src={geraldfakaa2} className="image_style2" alt="" /> */}
            </div>
          </div>
        </section>
        <section className="inquires_section">
          <h1 className="text-white inquires_section_p">
            If you have any inquiries, proposals, or exciting projects in mind,
            feel free to reach out. I'm open to collaboration and always ready
            to discuss new opportunities.
          </h1>
        </section>
        <hr className="text-white inquiry_hr" />
        <section className="COLLABORATE_div">
          <h1 className="COLLABORATE_p">TRYNA COLLABORATE? REACH OUT....</h1>
        </section>
        <hr className="inquiry_hr" />
      </div>
    </>
  );
}

export default Home;
