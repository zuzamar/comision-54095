import { Footer } from "./footer/Footer"
import { NavBar } from "./navBar/NavBar"

export const Layout = ({children}) => {
  return (
    <div>
        <NavBar/>

            {children}

        <Footer/>

    </div>
  )
}
