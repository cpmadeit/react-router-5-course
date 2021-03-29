import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import Router from './utils/Router'
// import { AuthUserProvider } from './utils/AuthUser'
// import AuthorizedRoute from './utils/AuthorizedRoute'
// import UnauthorizedLayout from './layouts/UnauthorizedLayout'
// import AuthorizedLayout from './layouts/AuthorizedLayout'
import './styles/main.scss'

function Home() {
  return <h1>Home Page</h1>;
}

function Contact() {
  return <h1>Contact</h1>;
}

const App = () => {
  return (
  <BrowserRouter>
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="/contact">Contact</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </BrowserRouter>
  )
}

// const App = () => (
//   <Router>
//     <AuthUserProvider>
//       <Switch>
//         <Route path="/auth" component={UnauthorizedLayout} />
//         <AuthorizedRoute path="/projects" component={AuthorizedLayout} />
//         <Redirect to="/projects" />
//       </Switch>
//     </AuthUserProvider>
//   </Router>
// )

ReactDOM.render(<App />, document.getElementById('root'))
