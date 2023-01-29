import { Route, Routes } from "react-router-dom"
import Home from './components/pages/Home';
import View from './components/students/View';
import Edit from './components/students/Edit';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/edit/:id" element={<Edit />} />

      </Routes>
    </>
  )
}

export default App;