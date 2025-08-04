
export default function Entry(props) {
     return (
          <article className="journal-entry">
               <div className="entry-image-container">
                    <img 
                         className="entry-image"
                         src={props.img.src} 
                         alt={props.img.alt}
                    />
               </div>
               <div className="entry-info-container">
                    <img className="marker-icon" src="/src/assets/marker.png" alt="Marker icon"/>
                    <span className="entry-country">{props.country}</span>
                    <a className="entry-map-link" href={props.mapLink}>
                         View on Google Maps
                    </a>
                    <h2 className="entry-title">{props.title}</h2>
                    <p className="entry-dates">{props.dates}</p>
                    <p className="entry-text">
                         {props.text}
                    </p>
               </div>
          </article>
     )
}