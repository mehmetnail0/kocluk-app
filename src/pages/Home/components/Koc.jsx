import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import "./components.css"
import ReactPlayer from 'react-player'
import { NavbarOnAllCoached } from './NavbarOnAllCoached'
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
const [found, setFound] = useState(null)
    let { paramName } = useParams()
    const kocData = [

        { url: "erdemyildirim", name: "Erdem Yıldırım", rankAndClass:  "Sayısal 23200: Samsun Tıp", ppUrl:"/static/media/erdo.1eb6b15a45e1288326f4.jpg",contengane:"0", paragrapghe:
        "Ben Erdem. 2023 YKS sınavında yerleştirme TYT 13.676SAY 23.200 sıralama yaparak ……….. ‘ne yerlestim.Mezun senemde sınavı kazandım ilk sene 47.507 sıralama yaptım. 2.senemde 12. sınıfa göre çalışma tarzımı değiştirdim. Ama daha da önemlisi bakış açımı değiştirdim.Üniversite sınavının sadece masa başına geçerek çalışmak olmadığını düşünüyorumBu süreçte çok sıkıntı yaşadım elbette psikolojik olarak düştüğüm çok zaman olduAma en nihayetinde yine çalışmaktan başka çarem yoktu. Evet Ayt'de en güvendiğim ders olan biyoloji beni bitirmiş olsa da 😅istediğim bölüme yerleştim. Evet can kardeşlerimm😎 bir sürece başladınız uzun zamanlı zor bir maraton. Bu sürede size tecrübelerimi aktarmak yol göstermek akademik ve psikolojik zorluklara karşı yanınızda olmak için sabırsızlanıyorum.Bu yolu beraber yürümeye ne dersiniz?Bu süreçte mottomuz da şimdiden belli diyebilirim“No Sacrifice No Victory” ✨"},
   
        { url: "mehmetnail", name: "Mehmet Nail", rankAndClass: "Sayısal 21100: YTÜ Kontrol ve Otomasyon Mühendisliği", ppUrl:"https://media.licdn.com/dms/image/C4D03AQEBJlgYXKNZQA/profile-displayphoto-shrink_800_800/0/1645980997002?e=2147483647&v=beta&t=8A5iqgsmCL0LFwrhT1vXaDGBTFon_eJHf8x6qyUVghk",contengane:"1", paragrapghe:
        " Merhaba, ben Mehmet Nail, Bu sene YKS sınavına ilk kez girdim ve elde ettiğim sonuçlar benim için oldukça gurur verici. TYT netim 100, AYT netim ise 67,5 idi. Türkiye genelinde sayısal sıralamada 21 bininci oldum. Lise dönemimi pek iyi yönetemediğimi söyleyebilirim, sona yaklaştıkça bir şeyler yapmam gerektiğini fark ediyordum. Bu süreçte ,geç kalmış olsam bile, özverili bir şekilde çalışarak 91 OBP ile bu sıralamayı elde etmek benim için önemli bir başarı. Bu süreçte zekanın değil, çalışmanın önemli olduğunu kanıtladığımı düşünüyorum ve şimdi yeni bir sezona başlıyoruz. Hedeflerimden biri olan mühendislik bölümüne yerleşmek için Yıldız Teknik Üniversitesi veya İstanbul Teknik Üniversitesi'ni tercih edeceğim.   Deneyimlerimi sizlerle paylaşmak benim için büyük bir mutluluk olacak ve umarım sizler de sarf ettiğiniz emeğin karşılığını alacaksınız. Başarıya giden yolculuğumuzda birlikte ilerlemek dileğiyle."},
        { url: "mervetoprakci", name: "Merve Toprakçı", rankAndClass: "Sayısal 6633: YTÜ Endüstri Mühendisliği", ppUrl:require("./image/mervetoprakci.jpeg"),contengane:"2", paragrapghe:
        "Merhaba, ben merve toprakçı.  2023 yksye ilk kez girip sayısal 6633. oldum. Bu siralamayla ytü endustri mühendisliğine yerleştim. Sınav senemde oldukça hata yapıp sonlara doğru hatalarımı düzelterek istediğim bantta bir sıralama yaptım. başarının iyi bir plan ve programa ihtiyaç duyması ve bu yönde yaptığımız hataları gec fark etmemiz potansiyelimizin altında bir sıralama yapmamıza neden olabilir.rehber(!) koçluk  ekibinin bir parçası olarak kendi hatalarımdan ve gozlemlerimden yola çıkarak sizlere iyi bir yol gösterici olacağımdan mutluluk duyarım. Umarım basarina birlikte emin adımlarla ulaşırız."},
        { url: "ibrahimegedogan", name: "İbrahim EGe Doğan", rankAndClass: "Sayısal 4267: KOÇ Elektrik Elektronik Mühendisliği", ppUrl:require("./image/ibrahimegedogan.jpeg"),contengane:"0", paragrapghe:
        "Ibrahim Ege Dogan, Cemil Meric Fen Lisesi, 12. Sinifta kazandim. Formaliteleri hallettigimize gore asil meseleye gelebiliriz. Benden kocluk aldiginizda ne yapmaniz konusunda herhangi bir derde girmeyeceginizi ve sadece isinize bakabilme imkaninizin olacagini soyleyebilirim. Kendi sinav surecimde kimseden kocluk veya rehberlik almadan kendi basima calisarak ilerledigim icin bir kisinin yapabilecegi her hatayi yaptim. Sizi bu hatalara dusurmeyecegim. Detaylar icin ulasabilirsiniz."},
   
      ]



    useEffect(() => {
        // setFound(kocData.find(obj => { return obj.url == paramName }))
      // console.log(found);
try {
  setFound(kocData.find(obj => { return obj.url == paramName }));
  
} catch (error) {
  
}
      
      console.log(found);
      }
        , [paramName])

    return (
      <>
      <NavbarOnAllCoached/>
      {found ?    <div className='koc'>
            <div className="koc-first-section">
            <div className="koc-kart-left">
                <img src={found?.ppUrl} alt="hizmetlerimiz fotograf" />

            </div>


            <div className="koc-kart-right">
                <div className="koc-kart-right-top">

                    <div className="koc-kart-right-top-left">
                        <h2>{found?.name  }</h2>



                        <span><p>{found?.rankAndClass}</p> 
                        <div className="koc-kart-right-top-left-end">
                        <button>1 AYLIK</button>
                            <img style={{ width: "35px", height: "35px", borderRadius: "100%" }} src="https://w7.pngwing.com/pngs/356/276/png-transparent-computer-icons-information-others-miscellaneous-text-logo.png" alt="" />
                         
                        </div>
                         </span>

                    </div>
                    <div className="koc-kart-right-top-right">
                        <button>SATIN AL | ☎️</button>
                        <button><i className="fa fa-user-o" aria-hidden="true"></i>
 0/5</button>
                    </div>
                </div>
                <div className="koc-kart-right-bottom">
                    <p>
                    {/* Ben Erdem. 2023 YKS sınavında yerleştirme TYT 13.676SAY 23.200 sıralama yaparak ……….. ‘ne yerlestim.Mezun senemde sınavı kazandım ilk sene 47.507 sıralama yaptım. 2.senemde 12. sınıfa göre çalışma tarzımı değiştirdim. Ama daha da önemlisi bakış açımı değiştirdim.Üniversite sınavının sadece masa başına geçerek çalışmak olmadığını düşünüyorumBu süreçte çok sıkıntı yaşadım elbette psikolojik olarak düştüğüm çok zaman olduAma en nihayetinde yine çalışmaktan başka çarem yoktu. Evet Ayt'de en <br /> <br /> güvendiğim ders olan biyoloji beni bitirmiş olsa da 😅istediğim bölüme yerleştim. Evet can kardeşlerimm😎 bir sürece başladınız uzun zamanlı zor bir maraton. Bu sürede size tecrübelerimi aktarmak yol göstermek akademik ve psikolojik zorluklara karşı yanınızda olmak için sabırsızlanıyorum.Bu yolu beraber yürümeye ne dersiniz?Bu süreçte mottomuz da şimdiden belli diyebilirim“No Sacrifice No Victory” ✨                     */}
                    {found?.paragrapghe}
                    </p>
                </div>
            </div>


            </div>
            <div className="koc-third-section">


      <Accordion title="✍️ Koçluk İçeriği">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Accordion>
      <Accordion  title="📞 İletişim">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </Accordion>
      <Accordion title="🧑‍🏫 Koçlukla ilgili">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
      </Accordion>

  </div>

            <hr />

            <div className="koc-second-section">
             <h4 style={{fontWeight:"bold"}}>Diğer koçlar :
</h4>             {/* <ReactPlayer className="react-player" style={{alignSelf: "center", marginLeft: "60px"}} width={480} height={240} url='https://youtu.be/iu-LBY7NXD4' /> */}
{/* <ProjectsTwo/> */}
<Projects />          


  </div>
  
        </div> : <>Üzgünüz, böyle bir kullanıcı bulunamadı</>}
     
      </>

    )
}
