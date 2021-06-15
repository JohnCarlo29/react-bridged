import React, { lazy, Suspense } from 'react'
import DefaultLayout from './layouts/Default'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const routes = [
    {
        component: DefaultLayout,
        routes: [
            { path: '/', exact: true, component: SuspenseComponent(Home) },
            { path: '/about', component: SuspenseComponent(About) }
        ]
    }
]

export default routes
