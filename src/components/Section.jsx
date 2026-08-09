import "./Section.css";

export function Section({ title, time, date, description1, image, image2, description2 }) {
  return (
    <div className="card">
      {title && <h2>{title}</h2>}
      {time && <p className="time">{time} hours</p>}
      {date && <h5>{date}</h5>}
      {description1 && <p>{description1}</p>}
      {image && <img src={image} alt={title} />}
      {image2 && <img src={image2} alt={title} />}
      {description2 && <p>{description2}</p>}
    </div>
  )
}