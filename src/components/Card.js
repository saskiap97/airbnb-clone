import goat from "../images/goat.jpeg"

export default function Card() {
    return (
        <div className="card">
            <img src={goat} alt="goat" className="card--img" />

            <div className="card--stats">
                <span>★ 5.0</span>
                <span className="grey">(6)</span>
                <span className="grey">USA</span>
            </div>
            <p>Pet a goat at the farm</p>
            <p><span className="bold">From $136 </span>/ per person</p>
        </div>
    )
}