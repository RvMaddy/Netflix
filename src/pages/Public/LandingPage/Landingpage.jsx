import Banner from "../../../Components/banner/Banner";
import tv1 from "../../../source/tv.png";
import { useState } from "react";
import tv2 from "../../../source/tvImg2.png";
import Button from "../../../components/button/Button";
import children from "../../../source/children.png";
import strangeThings from "../../../source/strangeThings.jpg";
import netflex_logo from "../../../source/netflix.svg";
import Footer from "../../../Components/footer/Footer";
import Content from "../../../Components/heading/Content";
import Heading from "../../../Components/heading/Heading";
import Accordian from "../../../Components/accordian/Accordian";
import { IoIosArrowForward } from "react-icons/io";
// import Button from "../../../Components/button/Button";
import Input from "../../../Components/input/Input";
import "./landingpage.css";
const Landingpage = () => {
  const [email, setEmail] = useState("");
  console.log(email);
  return (
    <div className="landingpage-container">
      <div className="banners">
        {/* <Nav /> */}
        <div className="linear">
          <div className="logo">
            <div className="logo-img">
              <img src={netflex_logo} alt=" logo" />
            </div>
            <div className="buttons">
              <select>
                <option>English</option>
                <option>हिन्दी</option>
              </select>
              <button>sign in</button>
            </div>
          </div>
          <div className="contents">
            <div className="head">
              <h1> Laughter. Tears. Thrills. Find it all on Netflix.</h1>
            </div>
            <div className="para">
              Endless entertainment starts at just ₹149. Cancel anytime.
            </div>
            <div className="paraaa">
              Ready to watch? Enter your email to create or restart your
              membership.
            </div>
            <div className="last_line">
              <Input
                bg="bg-transparent"
                label="Email Address"
                value={email}
                onchange={(event) => setEmail(event.target.value)}
              />
              <Button
                size="large"
                rounded="rounded"
                color="white"
                bg="bg-2"
                iconProp="rightarrow"
                icon={<IoIosArrowForward />}
                value="Get Started"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="landingpage-content-container">
        <Banner
          heading={"Enjoy on your TV"}
          para={
            "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
          }
          image={tv1}
        />

        <Banner
          heading={"Download your shows to watch offline"}
          para={
            "Save your favourites easily and always have something to watch.."
          }
          image={strangeThings}
          reverse
        />
        <Banner
          heading={"Watch everywhere"}
          para={
            "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.."
          }
          image={tv2}
        />
        <Banner
          heading={"Create profiles for kids"}
          para={
            "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
          }
          image={children}
          reverse
        />
      </div>
      <div className="accordian-section">
        <Heading align="faq-heading" title="Frequently Asked Questions" />
        <Accordian />

        <Content
          color="white"
          className="center"
          content="Ready to watch? Enter your email to create or restart your membership."
        />
        <div className="content-box">
          <Input
            bg="bg-transparent"
            label="Email Address"
            value={email}
            onchange={(event) => setEmail(event.target.value)}
          />
          <Button
            size="large"
            rounded="rounded"
            color="white"
            bg="bg-2"
            iconProp="rightarrow"
            icon={<IoIosArrowForward />}
            value="Get Started"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landingpage;
