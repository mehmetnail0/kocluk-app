import React, { useState } from "react";
import "./Projects.css";
import CarouselTwo from "./CarouselTwo";
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
  const [isElementHovered, setIsElementHovered] = useState(false);
    
  
  return (
    <div id="projectsTwo" className="projectsTwo">
      <div className="projectTwo-cards">
        <CarouselTwo
          isElementHovered={isElementHovered}
          setIsElementHovered={setIsElementHovered}
        >
          <a
          href="www.google.com"
            onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="projectTwo-card"
          >
            <img src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" className="projectTwo-card-img" alt="" />
            <div className="projectTwo-card-desc">
              <span>Erdem Yıldırım</span>
              <p>
               Sayısal 23200:
               Samsun TIP
              </p>
              <div>
           
              </div>
            </div>


          </a>
          <a
          href="www.google.com"
          onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="projectTwo-card"
          >
            <img src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" className="projectTwo-card-img" alt="" />
            <div className="projectTwo-card-desc">
              <span>Erdem Yıldırım</span>
              <p>
               Sayısal 23200:
               Samsun TIP
              </p>
              <div>
           
              </div>
            </div>
          </a>
          <a
          href="www.google.com"
          onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="projectTwo-card"
          >
            <img src={require("./image/erdo.jpg")} className="projectTwo-card-img" alt="" />
            <div className="projectTwo-card-desc">
              <span>Erdem Yıldırım</span>
              <p>
               Sayısal 23200:
               Samsun TIP
              </p>
              <div>
           
              </div>
            </div>
          </a>
          <a
          href="www.google.com"
          onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="projectTwo-card"
          >
            <img src={require("./image/erdo.jpg")} className="projectTwo-card-img" alt="" />
            <div className="projectTwo-card-desc">
              <span>Erdem Yıldırım</span>
              <p>
               Sayısal 23200:
               Samsun TIP
              </p>
              <div>
           
              </div>
            </div>
          </a>
         
        </CarouselTwo>
      </div>
    </div>
  );
};

export default Projects;