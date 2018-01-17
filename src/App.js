import React from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import 'normalize.css/normalize.css';
import Layout from './components/Layout'
import HomePage from "./pages/HomePage";
import ProfessionalPage from "./pages/ProfessionalPage";
import PersonalPage from "./pages/PersonalPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = ({ location }) => {
  const currentKey = location.pathname.split('/')[1] || '/'
  const timeout = { enter: 600, exit: 600, appear: 600 }
  const iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
  const sectionClass = iOS ? "page-wrapper" : "page-wrapper hovers";

  return (
  	<Layout>
      <TransitionGroup component="main" className="page-main">
        <CSSTransition key={currentKey} timeout={timeout} classNames="fade" appear={true} mountOnEnter>
          <section className={sectionClass}>
            <Switch location={location}>
              <Route path="/" exact={true} component={HomePage} />
              <Route path="/professional" component={ProfessionalPage} />
              <Route path="/personal" component={PersonalPage} />
              <Route path="/contact" component={ContactPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  )
}

export default withRouter(App)
