import './App.css'
import Home from './components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Notfound from './components/Notfound'
import About from './components/About'
import Portfolio from "./components/Portfolio"
import Contact from './components/Contact'

function App() {

  let routers = createBrowserRouter([{
    path: "/", element: <Layout></Layout>, children: [
      { index: true, element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/portfolio", element: <Portfolio></Portfolio> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "*", element: <Notfound></Notfound> }
    ]
  }])
  return (
    <RouterProvider router={routers}></RouterProvider>

  )
}

export default App
