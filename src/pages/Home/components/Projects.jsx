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
          href="https://kocluk-app.vercel.app/tumkoclar/erdemyildirim"
          onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src={require("./image/erdo.jpg")} className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>Erdem Yıldırım</span>
              <p>
               Sayısal 23200:
                TIP
              </p>
              <div>
           
              </div>
            </div>
          </a><a
          href="https://kocluk-app.vercel.app/tumkoclar/mehmetnail"
          onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src={"https://media.licdn.com/dms/image/C4D03AQEBJlgYXKNZQA/profile-displayphoto-shrink_800_800/0/1645980997002?e=2147483647&v=beta&t=8A5iqgsmCL0LFwrhT1vXaDGBTFon_eJHf8x6qyUVghk"} className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>Mehmet Nail Mutlu</span>
              <p>
               Sayısal 21000:
               YTÜ Kontrol Otomason Mühendisliği
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
