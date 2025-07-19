
import { createBrowserRouter, Outlet} from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import Browse from './Components/Browse'
import Header from './Components/Header'
import Body from './Components/Body'




function App() {


  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/Header",
    element: <Header />
  },
  {
    path: "/Browse",
    element: <Browse />
  },
  {
    path: "/Body",
    element: <Body />
  },


])

export default appRouter
