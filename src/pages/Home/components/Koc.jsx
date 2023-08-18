import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import "./components.css"
import ReactPlayer from 'react-player'
import {Projects} from "./Projects"

const Accordion = ({ children, title, isExpand = false }) => {
    const [expand, setExpand] = useState(isExpand);
    return (
      <div className="accordion-box">
        <div className="accordion-title-box" onClick={() => setExpand(expand => !expand)}>
          <span className="accordion-title">{title}</span>
          <span className="accordion-icon"><i className={`fa fa-play-circle${!expand ? ' down' : ''}`}></i></span>
          <div className="accordion-clearfix"></div>
        </div>
        {expand && <div className="accordion-content">{children}</div>}
      </div>
    )
  }

export const Koc = () => {

    let { paramName } = useParams()
    const kocData = [

        { url: "erdemyildirim", name: "Erdem Yıldırım", rankAndClass: "23200 Samsun Tıp" },
        { url: "erdemyildirim2", name: "Erdem Yıldırım", rankAndClass: "23200 Samsun Tıp" },
        { url: "erdemyildirim3", name: "Erdem Yıldırım", rankAndClass: "23200 Samsun Tıp" }
    ]
    useEffect(() => {
        const found = kocData.find(obj => { return obj.url == paramName })
        console.log(found)

    }
        , [paramName])

    return (
        <div className='koc'>
            <div className="koc-first-section">
            <div className="koc-kart-left">
                <img src="https://media.istockphoto.com/id/1449085762/tr/foto%C4%9Fraf/soccer-coach-and-men-team-in-sport-strategy-and-plan-to-players-before-game-or-match.jpg?s=1024x1024&w=is&k=20&c=myfgku9Az5FQrEcGW6QcENkXi1z2J6r1lGfCfpIVg40=" alt="paketlerimiz fotograf" />

            </div>


            <div className="koc-kart-right">
                <div className="koc-kart-right-top">

                    <div className="koc-kart-right-top-left">
                        <h2>Erdem Yıldırım</h2>



                        <span><p>Sayısal 23200</p> <button>1 AYLIK</button>
                            <img style={{ width: "35px", height: "35px", borderRadius: "100%" }} src="https://w7.pngwing.com/pngs/356/276/png-transparent-computer-icons-information-others-miscellaneous-text-logo.png" alt="" />
                        </span>
                    </div>
                    <div className="koc-kart-right-top-right">
                        <button>SATIN AL | ☎️</button>
                        <button>Ps 0/5</button>
                    </div>
                </div>
                <div className="koc-kart-right-bottom">
                    <p>
                    Ben Erdem. 2023 YKS sınavında yerleştirme TYT 13.676SAY 23.200 sıralama yaparak ……….. ‘ne yerlestim.Mezun senemde sınavı kazandım ilk sene 47.507 sıralama yaptım. 2.senemde 12. sınıfa göre çalışma tarzımı değiştirdim. Ama daha da önemlisi bakış açımı değiştirdim.Üniversite sınavının sadece masa başına geçerek çalışmak olmadığını düşünüyorumBu süreçte çok sıkıntı yaşadım elbette psikolojik olarak düştüğüm çok zaman olduAma en nihayetinde yine çalışmaktan başka çarem yoktu. Evet Ayt'de en <br /> <br /> güvendiğim ders olan biyoloji beni bitirmiş olsa da 😅istediğim bölüme yerleştim. Evet can kardeşlerimm😎 bir sürece başladınız uzun zamanlı zor bir maraton. Bu sürede size tecrübelerimi aktarmak yol göstermek akademik ve psikolojik zorluklara karşı yanınızda olmak için sabırsızlanıyorum.Bu yolu beraber yürümeye ne dersiniz?Bu süreçte mottomuz da şimdiden belli diyebilirim“No Sacrifice No Victory” ✨                    </p>
                </div>
            </div>


            </div>
            <div className="koc-second-section">
            <ReactPlayer className="react-player" style={{alignSelf: "center", marginLeft: "60px"}} width={480} height={240} url='https://youtu.be/iu-LBY7NXD4' />
{/* <ProjectsTwo/> */}
{/* <Projects />           */}


  </div>
  <hr />
  <div className="koc-third-section">


      <Accordion title="What is Lorem Ipsum?">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Accordion>
      <Accordion isExpand={true} title="Why do we use it?">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </Accordion>
      <Accordion title="Where does it come from?">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
      </Accordion>
      <Accordion title="Where can I get some?">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.
      </Accordion>

  </div>
        </div>
    )
}
