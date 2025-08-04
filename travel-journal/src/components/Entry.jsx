
export default function Entry() {
     return (
          <article className="journal-entry">
               <div className="entry-image-container">
                    <img className="entry-image"src="/src/assets/namsan-tower.png" alt="Namsan Tower image"/>
               </div>
               <div className="entry-info-container">
                    <img className="marker-icon" src="/src/assets/marker.png" alt="Marker icon"/>
                    <span className="entry-country">SOUTH KOREA</span>
                    <a className="entry-map-link" href="https://www.google.com/maps/place/N+Seoul+Tower/@37.5511694,126.9856517,17z/data=!3m1!4b1!4m6!3m5!1s0x357ca257a88e6aa9:0x5cf8577c2e7982a5!8m2!3d37.5511694!4d126.9882266!16zL20vMDJxcGYx?entry=ttu&g_ep=EgoyMDI1MDcyOS4wIKXMDSoASAFQAw%3D%3D">
                         View on Google Maps
                    </a>
                    <h2 className="entry-title">N Seoul Tower</h2>
                    <p className="entry-dates">16 July, 2024 - 29 July, 2024</p>
                    <p className="entry-text">
                         The N Seoul Tower, officially the YTN Seoul Tower and a.k.a. the Namsan Tower, is a communication and observation tower located on the summit of Namsan in central Seoul, South Korea. The 236-metre-tall structure marks the second highest point in Seoul and is considered a local landmark.
                    </p>
               </div>
          </article>
     )
}