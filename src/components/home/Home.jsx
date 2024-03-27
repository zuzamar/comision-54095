import "../styles/Home.css" 
import perfume from "../../assets/imagenes/background.jpg"

export const Home = () => {
  return (
    <div className="home">
        <h1> Mi Perfumería </h1>
        <img src={perfume} alt="perfumes" />
    </div>
  )
}
