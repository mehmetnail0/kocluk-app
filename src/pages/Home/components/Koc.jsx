import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import "./components.css"
import ReactPlayer from 'react-player'
import ProjectsTwo from "./ProjectsTwo"
import Projects from "./Projects"
import Carousel from './Carousel'

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
            <ReactPlayer width={260} height={200} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
{/* <ProjectsTwo/> */}
<Projects/>            </div>
        </div>
    )
}
