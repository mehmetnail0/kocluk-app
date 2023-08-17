import React, { useState } from "react";
import "./Projects.css";
import Carousel from "./Carousel";
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
  const [isElementHovered, setIsElementHovered] = useState(false);
    
  const getCoach = (e) => {
console.log(e.target)
  }
  
  return (
    <div id="projects" className="projects">
      <div className="project-cards">
        <Carousel
          isElementHovered={isElementHovered}
          setIsElementHovered={setIsElementHovered}
        >
          <a
          href="www.google.com"
            onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" className="project-card-img" alt="" />
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
          href="www.google.com"
          onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" className="project-card-img" alt="" />
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
          href="www.google.com"
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
          href="www.google.com"
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

export default Projects;