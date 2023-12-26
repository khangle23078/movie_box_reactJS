import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/PublicRoute'
import './sass/index.scss'
import Loading from './components/Loading/Loading'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Suspense fallback={<Loading />}>
        <RouterProvider router={routes} />
      </Suspense>
    </SkeletonTheme>
  </React.StrictMode >,
)
