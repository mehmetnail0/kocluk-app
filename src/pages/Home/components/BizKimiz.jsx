import React from 'react'
import "./components.css"

export const BizKimiz = () => {
    return (
        <div className="bizkimiz" id='about'>
            <div className="bizkimiz-content">
                <div className="bizkimiz-image">
                    <img src={require("./image/anaresim.jpg")} alt="bizkimiz fotograf" />
                    {/* <img src="./image/firstExte.jpg" alt="s" /> */}
                </div>
                
                <div className="bizkimiz-text">
                <div className="bizkimiz-linetext">
                        <svg width="156" height="17" viewBox="0 0 156 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M77.046 9.574C77.718 9.694 78.288 10.048 78.756 10.636C79.224 11.224 79.458 11.89 79.458 12.634C79.458 13.27 79.29 13.846 78.954 14.362C78.63 14.866 78.156 15.268 77.532 15.568C76.908 15.856 76.182 16 75.354 16H70.35V3.49H75.12C75.972 3.49 76.704 3.634 77.316 3.922C77.928 4.21 78.39 4.6 78.702 5.092C79.014 5.572 79.17 6.112 79.17 6.712C79.17 7.432 78.978 8.032 78.594 8.512C78.21 8.992 77.694 9.346 77.046 9.574ZM72.402 8.746H74.94C75.612 8.746 76.134 8.596 76.506 8.296C76.89 7.984 77.082 7.54 77.082 6.964C77.082 6.4 76.89 5.962 76.506 5.65C76.134 5.326 75.612 5.164 74.94 5.164H72.402V8.746ZM75.174 14.326C75.87 14.326 76.416 14.158 76.812 13.822C77.208 13.486 77.406 13.018 77.406 12.418C77.406 11.806 77.196 11.32 76.776 10.96C76.356 10.6 75.798 10.42 75.102 10.42H72.402V14.326H75.174ZM83.7399 3.49V16H81.6879V3.49H83.7399ZM82.7139 2.23C82.4139 2.23 82.1559 2.128 81.9399 1.924C81.7359 1.708 81.6339 1.45 81.6339 1.15C81.6339 0.849999 81.7359 0.597999 81.9399 0.393999C82.1559 0.177999 82.4139 0.0699991 82.7139 0.0699991C83.0139 0.0699991 83.2659 0.177999 83.4699 0.393999C83.6859 0.597999 83.7939 0.849999 83.7939 1.15C83.7939 1.45 83.6859 1.708 83.4699 1.924C83.2659 2.128 83.0139 2.23 82.7139 2.23ZM88.414 14.218H94.228V16H85.984V14.398L91.78 5.272H85.984V3.49H94.228V5.092L88.414 14.218ZM108.041 16L103.199 10.402V16H101.147V3.49H103.199V9.196L108.059 3.49H110.633L105.197 9.754L110.723 16H108.041ZM114.59 3.49V16H112.538V3.49H114.59ZM113.563 2.23C113.264 2.23 113.006 2.128 112.79 1.924C112.586 1.708 112.484 1.45 112.484 1.15C112.484 0.849999 112.586 0.597999 112.79 0.393999C113.006 0.177999 113.264 0.0699991 113.563 0.0699991C113.864 0.0699991 114.116 0.177999 114.32 0.393999C114.536 0.597999 114.644 0.849999 114.644 1.15C114.644 1.45 114.536 1.708 114.32 1.924C114.116 2.128 113.864 2.23 113.563 2.23ZM130.46 3.49V16H128.408V7.432L124.592 16H123.17L119.336 7.432V16H117.284V3.49H119.498L123.89 13.3L128.264 3.49H130.46ZM135.209 3.49V16H133.157V3.49H135.209ZM134.183 2.23C133.883 2.23 133.625 2.128 133.409 1.924C133.205 1.708 133.103 1.45 133.103 1.15C133.103 0.849999 133.205 0.597999 133.409 0.393999C133.625 0.177999 133.883 0.0699991 134.183 0.0699991C134.483 0.0699991 134.735 0.177999 134.939 0.393999C135.155 0.597999 135.263 0.849999 135.263 1.15C135.263 1.45 135.155 1.708 134.939 1.924C134.735 2.128 134.483 2.23 134.183 2.23ZM139.883 14.218H145.697V16H137.453V14.398L143.249 5.272H137.453V3.49H145.697V5.092L139.883 14.218ZM151.306 3.31C152.53 3.31 153.508 3.646 154.24 4.318C154.984 4.99 155.356 5.908 155.356 7.072C155.356 8.284 154.972 9.196 154.204 9.808C153.436 10.42 152.416 10.726 151.144 10.726L151.072 12.148H149.29L149.2 9.322H149.794C150.958 9.322 151.846 9.166 152.458 8.854C153.082 8.542 153.394 7.948 153.394 7.072C153.394 6.436 153.208 5.938 152.836 5.578C152.476 5.218 151.972 5.038 151.324 5.038C150.676 5.038 150.166 5.212 149.794 5.56C149.422 5.908 149.236 6.394 149.236 7.018H147.31C147.31 6.298 147.472 5.656 147.796 5.092C148.12 4.528 148.582 4.09 149.182 3.778C149.794 3.466 150.502 3.31 151.306 3.31ZM150.154 16.126C149.782 16.126 149.47 16 149.218 15.748C148.966 15.496 148.84 15.184 148.84 14.812C148.84 14.44 148.966 14.128 149.218 13.876C149.47 13.624 149.782 13.498 150.154 13.498C150.514 13.498 150.82 13.624 151.072 13.876C151.324 14.128 151.45 14.44 151.45 14.812C151.45 15.184 151.324 15.496 151.072 15.748C150.82 16 150.514 16.126 150.154 16.126Z" fill="black" />
                            <rect y="10" width="44" height="2" fill="#D27100" />
                        </svg>
                    </div>
        <div className="bizkimiz-text-left">
        <h3>Bi'Atalet koçluk olarak sınav sürecini öğrencilerin iyi yönetebilmesi adına hizmet veren bir oluşumuz</h3>
                    <h6 >Oluşturulan çalışma programı ve mevcut durumu analiz etmek maksatlı görüşmelerle sizi dinç tutacak bir hizmet sunuyoruz. <br /> Aklınızdaki sorulara YKS sürecini tecrübe etmiş derece öğrencilerinden cevaplar bulacaksınız.</h6>
     
        </div>
        <div className="bizkimiz-text-right">
        <div className="bizkimiz-buton">
                  <a className='bizkimizEkibimizButton' href="/tumkoclar"> <button>EKİBİMİZ</button></a> 
                </div>
        </div>
                   

                             </div>
             
            </div>


        </div>
    )
}
