import React from 'react'

export const EkibimizCard = ({setIsElementHovered, koclukOzelUrl, imgUrl, isim, siralamabolum}) => {
  return (
    <div
    onPointerEnter={(e) => setIsElementHovered(true)}
    onPointerLeave={(e) => setIsElementHovered(false)}
    className="project-card"
>

    <div>
        <a href={koclukOzelUrl}>Kocluk icin tikla</a>
    </div>
    
    <div>
        <img src={imgUrl} className="project-card-img" alt="" />
        <div className="project-card-desc">
            <span>Mustafa Erdem Yıldırım</span>
            <p>
                Sayısal 23200:
                Samsun TIP
            </p>

        </div>
    </div>

</div>

    )
}
