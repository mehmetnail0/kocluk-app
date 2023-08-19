import React, { useState } from "react";
import "./Projects.css";
import Carousel from "./Carousel";

export const Projects = () => {
  const [isElementHovered, setIsElementHovered] = useState(false);
    
  
  return (
    <div id="projects" className="projects">
      <div className="project-cards">
        <Carousel
          isElementHovered={isElementHovered}
          setIsElementHovered={setIsElementHovered}
        >
     <a
          href="tumkoclar/erdemyildirim"
          onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src={require("./image/erdo.jpg")} className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>Erdem Yıldırım</span>
              <p>
               Sayısal 23200:
               Samsun TIP
              </p>
              <div>
           
              </div>
            </div>
          </a><a
          href="erdemyildirim"
          onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src={require("./image/erdo.jpg")} className="project-card-img" alt="" />
            <div className="project-card-desc">
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
          href="tumkoclar/erdemyildirim"
          onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src={require("./image/erdo.jpg")} className="project-card-img" alt="" />
            <div className="project-card-desc">
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
          href="tumkoclar/erdemyildirim"
          onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src={require("./image/erdo.jpg")} className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>Erdem Yıldırım</span>
              <p>
               Sayısal 23200:
               Samsun TIP
              </p>
              <div>
           
              </div>
            </div>
          </a>
         
        </Carousel>
      </div>
    </div>
  );
};
