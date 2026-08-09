import "./Section.css";

export function Section({ title, description1, image, image2, description2 }) {
  return (
    <div className="card">
      {title && <h2>{title}</h2>}
      {description1 && <p>{description1}</p>}
      {image && <img src={image} alt={title} />}
      {image2 && <img src={image2} alt={title} />}
      {description2 && <p>{description2}</p>}
    </div>
  )
}