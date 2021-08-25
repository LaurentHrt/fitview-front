import iconSwim from "../../assets/icon-swim.png"
import iconYoga from "../../assets/icon-yoga.png"
import iconBike from "../../assets/icon-bike.png"
import iconDumpbell from "../../assets/icon-dumpbell.png"
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="iconsContainer">
                <a href='/'><img src={iconYoga} alt="Icone yoga" /></a>
                <a href='/'><img src={iconSwim} alt="Icone Swim" /></a>
                <a href='/'><img src={iconBike} alt="Icone Bike" /></a>
                <a href='/'><img src={iconDumpbell} alt="Icone Dumpbell" /></a>
            </div>
            <p className="copyright">Copyright, SportSee 2020</p>
        </footer>
    )
}