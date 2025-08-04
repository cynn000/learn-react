
export default function Entry(props) {
     return (
          <article className="journal-entry">
               <div className="entry-image-container">
                    <img 
                         className="entry-image"
                         src={props.entry.img.src}
                         alt={props.entry.img.alt}
                    />
               </div>
               <div className="entry-info-container">
                    <img className="marker-icon" src="/src/assets/marker.png" alt="Marker icon"/>
                    <span className="entry-country">{props.entry.country}</span>
                    <a className="entry-map-link" href={props.entry.mapLink}>
                         View on Google Maps
                    </a>
                    <h2 className="entry-title">{props.entry.title}</h2>
                    <p className="entry-dates">{props.entry.dates}</p>
                    <p className="entry-text">
                         {props.entry.text}
                    </p>
               </div>
          </article>
     )
}