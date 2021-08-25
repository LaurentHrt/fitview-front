import './NutrimentCard.css'

export default function NutrimentCard({ image, title, value, unit }) {
    return (
        <div className="nutrimentCard">
            <img src={image} alt={title} />
            <div className="textContainer">
                <div className="value">{value}{unit}</div>
                <div className="title">{title}</div>
            </div>
        </div>
    )
}