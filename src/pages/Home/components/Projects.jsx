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
            href="https://biataletkocluk.vercel.app/tumkoclar/abdulkadirmanisa"
            onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src={require("./image/abdulkadirmanisa.jpeg")} className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>Abdülkadir Manisa</span>
              <p>
                Sayısal 880:
                Hacettepe TIP (İngilizce)
              </p>
              <div>

              </div>
            </div>
          </a>

       


<a
            href="https://biataletkocluk.vercel.app/tumkoclar/ahmetefeakbulut"
            onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src={require("./image/ahmetefeakbulut.jpeg")} className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>Ahmet Efe Akbulut</span>
              <p>
                Sayısal 10274:
                Boğaziçi Fizik
              </p>
              <div>

              </div>
            </div>
          </a>

          
          <a
            href="https://biataletkocluk.vercel.app/tumkoclar/kemalkayraergin"
            onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src={require("./image/kemalkayraergin.jpeg")} className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>Kemal Kayra Ergin</span>
              <p>
                Sayısal 13203:
                İTÜ Fizik Mühendisliği
              </p>
              <div>

              </div>
            </div>
          </a>
          <a
            href="https://biataletkocluk.vercel.app/tumkoclar/burakarikan"
            onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src={require("./image/burakarikan.jpeg")} className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>Burak Arıkan</span>
              <p>
                Eşit Ağırlık 65:
                Koç Ekonomi
              </p>
              <div>

              </div>
            </div>
          </a>
          <a
            href="https://biataletkocluk.vercel.app/tumkoclar/mervetoprakci"
            onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src={require("./image/mervetoprakci.jpeg")} className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>Merve Toprakçı</span>
              <p>
                Sayısal 6633:
                YTÜ Endüstri
              </p>
              <div>

              </div>
            </div>
          </a>

          <a
            href="https://biataletkocluk.vercel.app/tumkoclar/ibrahimegedogan"
            onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src={require("./image/ibrahimegedogan.jpeg")} className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>İbrahim Ege Doğan</span>
              <p>
                Sayısal 4267:
                KOÇ Elektrik Elektronik Mühendisliği
              </p>
              <div>

              </div>
            </div>
          </a>

   
  <a
            href="https://biataletkocluk.vercel.app/tumkoclar/alperenesunal"
            onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src={require("./image/alperenesunal.jpeg")} className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>Alper Enes Ünal</span>
              <p>
                Eşit Ağırlık 4219:
                Hacettepe Psikoloji
              </p>
              <div>

              </div>
            </div>
          </a>
          <a
            href="https://biataletkocluk.vercel.app/tumkoclar/ikraaksahin"
            onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src={require("./image/ikraaksahin.jpeg")} className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>İkra Akşahin</span>
              <p>
                Sayısal 13192:
                Pamukkale TIP
              </p>
              <div>

              </div>
            </div>
          </a>
          
          <a
            href="https://biataletkocluk.vercel.app/tumkoclar/mustafaerdemyildirim"
            onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src={require("./image/mustafaerdemyildirim.jpg")} className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>Mustafa Erdem Yıldırım</span>
              <p>
                Sayısal 23200:
                Kütahya sağlık bilimleri üniversitesi tıp fakültesi
              </p>
              <div>

              </div>
            </div>
          </a><a
            href="https://biataletkocluk.vercel.app/tumkoclar/mehmetnail"
            onPointerEnter={(e) => setIsElementHovered(true)}
            onPointerLeave={(e) => setIsElementHovered(false)}
            className="project-card"
          >
            <img src={"https://media.licdn.com/dms/image/C4D03AQEBJlgYXKNZQA/profile-displayphoto-shrink_800_800/0/1645980997002?e=2147483647&v=beta&t=8A5iqgsmCL0LFwrhT1vXaDGBTFon_eJHf8x6qyUVghk"} className="project-card-img" alt="" />
            <div className="project-card-desc">
              <span>Mehmet Nail Mutlu</span>
              <p>
                Sayısal 21000:
                YTÜ Kontrol Otomasyon Mühendisliği
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
