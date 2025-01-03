import Nav from "./Header/Nav"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Search from "./Pages/Search";
import Faq from "./Pages/Faq";
import Testimonials from "./Pages/Testimonials";
import Properties from "./Pages/Properties";
import Publications from "./Pages/Publications";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";
import Archive from "./Pages/Archive"
import './Styles/pages.css'
import Footer from "./Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
    return (

        <Router>
            <div className="AppContainer">
                <Nav />
                <main className="mainContent">
                    <Routes>
                        <Route path='/Home' element={<Home />} />
                        <Route path='/About' element={<About />} />
                        <Route path='/Service' element={<Service />} />
                        <Route path='/Contact' element={<Contact />} />
                        <Route path='/Search' element={<Search />} />
                        <Route path='/Faq' element={<Faq />} />
                        <Route path='/Testimonials' element={<Testimonials />} />
                        <Route path='/Publications' element={<Publications/>}/>
                        <Route path='/Properties' element={<Properties/>}/>
                        <Route path='/Login' element={<Login/>}/>
                        <Route path='/Admin' element={<Admin/>}/>
                        <Route path='/Archive' element={<Archive/>}/>
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>

    );
}

export default App
