import { Route, Routes } from "react-router-dom"
import TypePage from "./components/type/TypePage"
import Layout from "./components/layout/Layout"

function App() {
  return <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<TypePage/>}/>
    </Route>
  </Routes>
}
export default App
