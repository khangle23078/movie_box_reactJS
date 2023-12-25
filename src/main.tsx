import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/index.scss'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/PublicRoute'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)