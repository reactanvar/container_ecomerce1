import React from "react";
import "./Hero.css";
import hero_img from '../Assets/Container-PNG-Image-File.png'
// Imported Icons
import { FaArrowRightLong } from "react-icons/fa6";
import { Button } from "@material-tailwind/react";


const Hero = () => {
  return (
    <div className="hero wrapper">
  
      <div className="hero-left">
        <h1>Rental containers We are container traders</h1>
        <p>
          Dimensions
          External size	Internal size
          Length	6036 mm	5898 mm
          Width	2438 mm	2362 mm
          Height	2591 mm	2393 mm
          Tare	Max. payload	Max. gross
          1970 kg	28510 kg	30480 kg To know whether buying or renting containers is the best option for you, you should consider different factors. At CARU Containers we offer both options. Below you can read everything you need to know about renting containers and which is the best option to choose.</p>
        
        <Button className="view_btn">View New Products</Button>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  );
};

export default Hero;
