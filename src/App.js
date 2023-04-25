
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import Card from './components/shared/Card'
import { FeedbackProvider } from './context/FeedbackContext'
function App(){   
    //this returns JSX which is a javascript syntax extension
    //We write in html but it's actually javascript under the hood
    return (
        <FeedbackProvider>
      <Router>
            <Header/>
        <div className="container">
            <Routes>
                <Route exact path='/'
                     element={
                    <>
                         <FeedbackForm />
                        <FeedbackStats/>
                        <FeedbackList/>
                    
                    </>
                }>      
                </Route>

                <Route path="/about" element={<AboutPage/>}/>
           </Routes>
                {/* Not related to project */}
                {/* <Card>
                    <NavLink to='/' activeClassName='active'>
                        Home
                    </NavLink>
                    <NavLink to='/about' activeClassName='active'>
                        About
                    </NavLink>
                </Card> */}

           <AboutIconLink />
        </div>
        </Router>
    </FeedbackProvider>
    //Below is an alternative in case one doesn't wants to work with JSX but with react
    /*return React.createElement('div', {className: 'container'}, 
    React.createElement('h1',{},'My Ap')) */
        
    )
}

export default App