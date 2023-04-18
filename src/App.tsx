import { BrowserRouter } from "react-router-dom"
import { NetflixRouter } from "./router/NetflixRouter";


export const App = () => {
  return (
    <BrowserRouter>
      <NetflixRouter />
    </BrowserRouter>
  )
}
