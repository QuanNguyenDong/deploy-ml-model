import logo from "../../assets/images/TechJam.png";

function Banner() {
    return (
        <div style={{
            backgroundColor: 'black',
            textAlign: 'right'
        }}>
            <img src={logo} alt="Tech Jam"/>
        </div>
    )
}

export default Banner;