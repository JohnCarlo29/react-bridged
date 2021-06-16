import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import DefaultLayout from './layouts/Default'
import { authenticationService } from './services/autheticationService'

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const LoanType = SuspenseComponent(lazy(() => import('./pages/LoanType')))
const Home = SuspenseComponent(lazy(() => import('./pages/Home')))
const Login = SuspenseComponent(lazy(() => import('./pages/Login')))

const hasAuthenticatedUser = authenticationService.currentUserValue

const routes = [
    {
      component: DefaultLayout,
      routes: [
        { path: '/', exact: true, component: Home },
        { path: '/login', exact: true, component: Login },
        { path: '/loan-types', render: (props) => hasAuthenticatedUser ? <LoanType /> : <Redirect to="/login" /> }
      ]
    }
]

export default routes
