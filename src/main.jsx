import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import appRouter from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './Utils/appStore.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
    <RouterProvider router={appRouter}/>
    </Provider>
  </StrictMode>,
)

