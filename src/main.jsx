import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './Redux/store.js'
import { Provider } from 'react-redux'
import { AppProvider } from './Context/AppContext.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DetailsLayout from './Components/Layout/DetailsLayout.jsx'
import Details from './Components/Products_Details/Details.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: '/',
    element: <DetailsLayout />,
    children:[
      {
        path:'/details/:id',
        element: <Details />
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<div className='bg-white'>
<AppProvider>
<Provider store={store}>
<RouterProvider router={router} />
    </Provider>,
</AppProvider>
</div>
  </StrictMode>,
)
