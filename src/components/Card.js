import { useState } from "react"
import allData from "../data"

export default function Card() {

    const [data, setData] = useState(allData)
    console.log(data)
    return (
        <div className="cards-list" >


            {data.map((experience) => {
                return (
                    <div className="card" key={experience.id}>
                        {experience.openSpots > 1 && <div className="card--badge">SOLD OUT</div>}
                        <img src={experience.coverImg} alt="cover" className="card--img" />
                        <div className="card--stats">
                            <span>★{experience.stats.rating}</span>
                            <span className="grey">({experience.stats.reviewCount}) </span>
                            <span className="grey">{experience.location}</span>
                        </div>
                        <p className="card--title">{experience.title}</p>
                        <p><span className="bold card--price">From ${experience.price} </span>/ per person</p>
                    </div>
                )
            })}


        </div>
    )
}