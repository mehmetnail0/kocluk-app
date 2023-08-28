import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import "./components.css"
import ReactPlayer from 'react-player'
import { NavbarOnAllCoached } from './NavbarOnAllCoached'
import {Link} from 'react-scroll'
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

        { url: "mustafaerdemyildirim", name: "Mustafa Erdem Yıldırım", rankAndClass:  "Sayısal 23200: Kütahya sağlık bilimleri üniversitesi tıp fakültesi", ppUrl:require("./image/mustafaerdemyildirim.jpg"), contengane:"0", paragrapgheFirst:
        "Ben Erdem, 2023 YKS sınavında TYT'de 13.676, SAY'da 23.200 sıralama yaparak Kütahya Sağlık Bilimleri Üniversitesi Tıp Fakültesi'ne yerleştim. Mezun senemde sınavı kazandığım için heyecanlıydım ve birinci senemdeki sıralamam da umut vericiydi. Ancak, ikinci seneme başladığımda çalışma tarzımı ve bakış açımı değiştirdim.",
         paragrapgheSecond:`Artık üniversite sınavının sadece masabaşı çalışmak olmadığını düşünüyorum. Bu süreçte birçok zorlukla karşılaştım ve psikolojik olarak da birçok kez düştüm. Ancak, sonunda yine de çalışmaktan başka çarem olmadığının farkındaydım. AYT'de en güvendiğim ders olan biyoloji bile beni zorladı ama istediğim bölüme yerleştim.`, paragrpapheThird:`Can kardeşlerime söylemek istiyorum ki, başladığınız bu süreç uzun ve zorlu bir maraton olacak. Ancak, tecrübelerimi aktarmak, yol göstermek ve akademik-psikolojik zorluklara karşı destek olmak için sabırsızlanıyorum. Birlikte bu yolu yürümeye ne dersiniz?`,paraprapgheFourth:`Bu süreçte mottomuz ise şimdiden belli: "No Sacrifice, No Victory" (Fedakarlık olmadan zafer olmaz).`},
        { url: "mehmetnail", name: "Mehmet Nail Mutlu", rankAndClass: "Sayısal 21100: YTÜ Kontrol ve Otomasyon Mühendisliği", ppUrl:"https://media.licdn.com/dms/image/C4D03AQEBJlgYXKNZQA/profile-displayphoto-shrink_800_800/0/1645980997002?e=2147483647&v=beta&t=8A5iqgsmCL0LFwrhT1vXaDGBTFon_eJHf8x6qyUVghk",contengane:"1", paragrapgheFirst:
        "Merhaba, ben Mehmet Nail. Bu sene YKS sınavına ilk kez girdim ve elde ettiğim sonuçlar benim için oldukça gurur verici. TYT netim 100, AYT netim ise 67,5 idi. Türkiye genelinde sayısal sıralamada 21 bininci oldum. Lise dönemimi pek iyi yönetemediğimi söyleyebilirim, sona yaklaştıkça bir şeyler yapmam gerektiğini fark ettim. Bu süreçte, geç kalmış olsam bile, özverili bir şekilde çalışarak 91 OBP ile bu sıralamayı elde etmek benim için önemli bir başarı. Bu süreçte zekanın değil, çalışmanın önemli olduğunu kanıtladığımı düşünüyorum ve şimdi yeni bir sezona başlıyoruz.", paragrapgheSecond:"Hedeflerimden biri olan mühendislik bölümüne yerleşmek için Yıldız Teknik Üniversitesi veya İstanbul Teknik Üniversitesi'ni tercih edeceğim. Deneyimlerimi sizlerle paylaşmak benim için büyük bir mutluluk olacak ve umarım sizler de sarf ettiğiniz emeğin karşılığını alacaksınız. Başarıya giden yolculuğumuzda birlikte ilerlemek dileğiyle."},
        { url: "mervetoprakci", name: "Merve Toprakçı", rankAndClass: "Sayısal 6633: YTÜ Endüstri Mühendisliği", ppUrl:require("./image/mervetoprakci.jpeg"),contengane:"2", paragrapgheFirst:
        "Merhaba, ben Merve Toprakçı. 2023 YKS'ye ilk kez girip sayısalda 6633. oldum. Bu sıralamayla YTÜ Endüstri Mühendisliği'ne yerleştim. Sınav senemde oldukça hata yaptım ve sonlara doğru bu hatalarımı düzelterek istediğim bantta bir sıralama yaptım. Başarının iyi bir plan ve programa ihtiyaç duyması ve bu yönde yaptığımız hataları geç fark etmemiz, potansiyelimizin altında bir sıralama yapmamıza neden olabilir. Biatlet Koçluk ekibinin bir parçası olarak, kendi hatalarımdan ve gözlemlerimden yola çıkarak size iyi bir yol gösterici olacağımdan mutluluk duyarım. Umarım başarıya birlikte emin adımlarla ulaşırız."},
        { url: "ibrahimegedogan", name: "İbrahim Ege Doğan", rankAndClass: "Sayısal 4267: KOÇ Elektrik Elektronik Mühendisliği", ppUrl:require("./image/ibrahimegedogan.jpeg"),contengane:"0", paragrapgheFirst:
        "İbrahim Ege Doğan, Cemil Meriç Fen Lisesi'nde 12. sınıfı kazandım. Formaliteleri hallettiğimize göre asıl meseleye gelebiliriz. Benden koçluk aldığınızda ne yapmanız konusunda herhangi bir derde girmeyeceğinizi ve sadece işinizle ilgilenebilme imkanınızın olacağını söyleyebilirim. Kendi sınav sürecimde kimseye koçluk veya rehberlik almadan kendi başıma çalışarak ilerlediğim için bir kişinin yapabileceği her hatayı yaptım. Sizi bu hatalara düşürmeyeceğim. Detaylar için ulaşabilirsiniz."},
      { url: "burakarikan", name: "Burak Arıkan", rankAndClass: "Eşit Ağırlık 65: KOÇ Ekonomi", ppUrl:require("./image/burakarikan.jpeg"),contengane:"0", paragrapgheFirst:
        "Merhaba ben Burak. YKS 2023'te eşit ağırlık alanında 65. oldum ve Koç Ekonomi bölümüne yerleştim. Lise hayatımın başlangıcında akademik olarak düzenli bir çalışma programına sahip olduğum söylenemez bu yüzden sürecin başlangıcında herkes gibi benim de stres yaptığım şeyler vardı ama sınava çalışmaya devam ettikçe kendime göre olan çalışma sistemini oturtup eksik olduğum yerleri kapatmayı başardım ve istediğim üniversiteye girebildim.", paragrapgheSecond: "Bu süreçte öğrendiğim bilgileri ve deneyimleri sizlerle paylaşıp sizin de kendinizi rahat hissettiğiniz bir çalışma sistemi oluşturmanıza ve hedefinize ulaşmanıza yardım etmek için buradayım. Önündeki engelleri aşmanda yardımcı olmayı çok isterim, umarım başarılarla dolu bir yıl geçirirsin."},
    { url: "abdulkadirmanisa", name: "Abdulkadir Manisa", rankAndClass: "Sayısal 880: Hacettepe TIP (İngilizce)", ppUrl:require("./image/abdulkadirmanisa.jpeg"),contengane:"0", paragrapgheFirst:
        "YKS çalışmam gerektiğini 11. sınıfta anladım. Okul arkadaşlarıma göre düşük bir OBP ile 11'de çalışmaya başladım. 12. sınıfta 4349 olan MSÜ sıralamamı yaptığım büyük hatalarla YKS'de 11.119 TYT 14.418 yerleştirmeye çektim. Daha iyi yapabileceğime inandığım için tekrar denemek istedim", paragrapgheSecond:" İkinci sene YKS'nin sadece çalışma olmadığını ayrıca psikolojik bir süreç olduğunu anladım, hatalarımı görüp daha farklı yollar denedim. İkinci sene 3850 MSÜ sıralamasını süreci daha iyi yöneterek sayısal ham 689 yerleştirme 880 yaptım, şu anda Hacettepe Tıp'ta (İng) okuyorum. Amacım sizlere bu 5 senede öğrendiklerimle yol göstermek. Hedeflerinize ulaşmanızda yardımım dokunursa ne mutlu bana..."},
        { url: "kemalkayraergin", name: "Kemal Kayra Ergin", rankAndClass: "Sayısal 13203: İTÜ Fizik Mühendisliği", ppUrl:require("./image/kemalkayraergin.jpeg"),contengane:"0", paragrapgheFirst:
        "Merhabalar! Ben Kayra, 2023 YKS'de Sayısal Alanda 13203. olarak İstanbul Teknik Üniversitesi Fizik Mühendisliği bölümüne yerleştim.Zaten başlıktan bildiğiniz bilgileri geçip içeriğime geçecek olursak sizinle tanışıp seviyenizi öğrendikten sonra dershanenize, okulunuza göre yapmanız gereken programları size sağlayacağım.", paragrapgheSecond:" Size balığı vereceğiz ama balık tutmayı da öğreteceğiz, program yapmayı öğrenmek de sizi çok geliştirecektir. PDR mezunları gibi olaydan uzak olup tepeden inme emirler bütünleri yerine sizlerin neler yaşadığını, yaşayacağını bilen, bu süreçten doğrudan geçmiş birisi olarak sizlerin yanınızda olacağım."},
        { url: "ikraaksahin", name: "İkra Akşahin", rankAndClass: "Sayısal 13192: Pamukkale TIP", ppUrl:require("./image/ikraaksahin.jpeg"),contengane:"0", paragrapgheFirst:
        "Merhaba ben İkra.  Yukarıdan da gördüğünüz gibi YKS’23 sayısal 13.192.si oldum ve eğitim hayatıma tıp fakültesinde devam edeceğim. Diğer ekip arkadaşlarımın da olduğu gibi benim de amacım sizlerin üniversite sınavı sürecini en az hasarla atlatabilmeniz için size destek olmak. YKS gerçekten düzgün bir psikoloji ve düzenli çalışma gerektiren bir yol ve bu yolda iyi bir iş ortağına sahip olmak avantaj olacaktır.", paragrapgheSecond:" Kendi sınav yılımda yaşadığım pek çok sorun oldu ve bunları aşmak konusunda yeterince tecrübe edindiğimi düşünüyorum.  Bu tecrübeleri sizinle paylaşmaktan büyük mutluluk duyacağımdan şüpheniz olmasın. Dilerim mükemmel bir sınav yılı geçirir ve hedeflerimize ulaşırız."},
        { url: "ikraaksahin", name: "İkra Akşahin", rankAndClass: "Sayısal 13192: Pamukkale TIP", ppUrl:require("./image/ikraaksahin.jpeg"),contengane:"0", paragrapgheFirst:
        "Merhaba ben İkra.  Yukarıdan da gördüğünüz gibi YKS’23 sayısal 13.192.si oldum ve eğitim hayatıma tıp fakültesinde devam edeceğim. Diğer ekip arkadaşlarımın da olduğu gibi benim de amacım sizlerin üniversite sınavı sürecini en az hasarla atlatabilmeniz için size destek olmak. YKS gerçekten düzgün bir psikoloji ve düzenli çalışma gerektiren bir yol ve bu yolda iyi bir iş ortağına sahip olmak avantaj olacaktır.", paragrapgheSecond:" Kendi sınav yılımda yaşadığım pek çok sorun oldu ve bunları aşmak konusunda yeterince tecrübe edindiğimi düşünüyorum.  Bu tecrübeleri sizinle paylaşmaktan büyük mutluluk duyacağımdan şüpheniz olmasın. Dilerim mükemmel bir sınav yılı geçirir ve hedeflerimize ulaşırız."},
        { url: "ahmetefeakbulut", name: "Ahmet Efe Akbulut", rankAndClass: "Sayısal 10274: Boğaziçi Fizik", ppUrl:require("./image/ahmetefeakbulut.jpeg"),contengane:"0", paragrapgheFirst:
        "Merhaba, adım Ahmet Efe Akbulut. Y-SAY 10.274 mezunuyum ve YKS'ye girdiğim ilk sene Boğaziçi Üniversitesi Fizik bölümünü kazandım. Herhangi bir koç ve özel ders yardımı olmadan sınava kendim hazırlandım. Bir insanın yapabileceği tüm hataları yaptım. Kendimi bir deneme tahtası olarak kullandım. Bu deneme yanılma yolculuğumda bir sürü tecrübe edindim. Amacım, sizin yaşayacağınız sorunları tecrübelerimle en az seviyeye indirerek neredeyse mükemmel bir şekilde sınava hazırlanmanızı sağlamak. Ben sınavın zor olduğuna inanmıyorum; asıl zor olan şey sınav hazırlık sürecidir. Bu süreci birlikte atlatalım.", paragrapgheSecond:"Siz de aynı yoldan geçerek sınav stresi, konu eksikliği ve zaman yönetimi gibi konularda yaşadıklarımı ve öğrendiklerimi paylaşarak avantaj elde edebilirsiniz. Sadece bir öğrenci olarak değil, aynı zamanda bir yol arkadaşı olarak da buradayım. Beraber çalışarak, sınav hedeflerinizi gerçekleştirmek için elimden gelen yardımı sağlayabilirim. Unutmayın, başarı hazırlık ve azimle gelir. Umarım birlikte çalışma fırsatı buluruz."},
        
   
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
                        <Link activeClass="active" smooth spy to="detaylar" className="nav-link text-white">
                        <img style={{ width: "35px", height: "35px", borderRadius: "100%" }} src="https://w7.pngwing.com/pngs/356/276/png-transparent-computer-icons-information-others-miscellaneous-text-logo.png" alt="" />
                        
                        
                        </Link>
                         
                        </div>
                         </span>

                    </div>
                    <div className="koc-kart-right-top-right">
                    <a href="https://wa.me/905364901880">
                    <button >SATIN AL | ☎️</button>
                      </a> 
                        <button><i className="fa fa-user-o" aria-hidden="true"></i>
 0/5</button>
                    </div>
                    
                </div>



                <div className="koc-kart-right-bottom">
                    <p>
                    {/* Ben Erdem. 2023 YKS sınavında yerleştirme TYT 13.676SAY 23.200 sıralama yaparak ……….. ‘ne yerlestim.Mezun senemde sınavı kazandım ilk sene 47.507 sıralama yaptım. 2.senemde 12. sınıfa göre çalışma tarzımı değiştirdim. Ama daha da önemlisi bakış açımı değiştirdim.Üniversite sınavının sadece masa başına geçerek çalışmak olmadığını düşünüyorumBu süreçte çok sıkıntı yaşadım elbette psikolojik olarak düştüğüm çok zaman olduAma en nihayetinde yine çalışmaktan başka çarem yoktu. Evet Ayt'de en <br /> <br /> güvendiğim ders olan biyoloji beni bitirmiş olsa da 😅istediğim bölüme yerleştim. Evet can kardeşlerimm😎 bir sürece başladınız uzun zamanlı zor bir maraton. Bu sürede size tecrübelerimi aktarmak yol göstermek akademik ve psikolojik zorluklara karşı yanınızda olmak için sabırsızlanıyorum.Bu yolu beraber yürümeye ne dersiniz?Bu süreçte mottomuz da şimdiden belli diyebilirim“No Sacrifice No Victory” ✨                     */}
                    {found?.paragrapgheFirst}
                    <br />
                    <br />
                    {found?.paragrapgheSecond}
                    <br />
                    <br />
                    {found?.paragrpapheThird}
                    <br />
                    <br />
                    {found?.paraprapgheFourth}

                    </p>
                </div>
            </div>


            </div>
            <div className="koc-third-section">

      <h3 id="detaylar">Detaylar:</h3>
      <Accordion title="✍️ Koçluk İçeriği">
      Başarıya ulaşmanız için ortaklık edip hedeflediğiniz noktalara, tecrübeli öğrencilerle beraber daha konforlu bir şekilde hazırlanacaksınız.
<br/> <br/>
-Kaynak/Kanal önerisi 
-Hangi konuya nasıl yaklaşmalısın
-Çalışma saati/süresi ile ilgili tecrübe aktarımı
-İyi bir tekrar sistemi nasıl olmalı
-TYT ve AYT sınavlarına nasıl yaklaşmalı, bu iki sınavın raconu nedir
-İdeal uyku düzeni nasıl olmalıdır
-Deneme analizleri nasıl yapılmalı
<br/> <br/>
Ve diğer şahsi, çalışma noktasında karşılaştığınız problemlerinize çözümler bulabileceksiniz.
</Accordion>
      <Accordion  title="📞 İletişim">
      Koçunuz, öğrenci tanıma formunu doldurduktan sonra 24 saat içinde size ulaşmak için iletişim bilgilerinizi kullanacaktır. Eğer süreçle ilgili bir sorun yaşıyorsanız, WhatsApp destek hattımızdan bize ulaşabilirsiniz.
      </Accordion>
      <Accordion title="🧑‍🏫 Koçlukla ilgili DEĞİŞECEK">
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
