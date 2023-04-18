import { Route, Routes } from "react-router-dom"
import { Login, Signup, Netflix } from "../auth";
import Player from "../netflix-ui/pages/Player";

export const NetflixRouter = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="player" element={ <Player /> } /> 
        <Route path="/" element={<Netflix />} />
    </Routes>
  )
}
