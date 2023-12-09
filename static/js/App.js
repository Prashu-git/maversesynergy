import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/pages/home/Home";
import Footer from "./components/footer/Footer";
import Copyright from "./components/copyright/Copyright";
import {
    Route,
    Routes
} from "react-router-dom";
import About from "./components/pages/about/About";
import Courses from "./components/pages/courses/Courses";
import Contact from "./components/pages/contact/Contact";
import SingleCourse from "./components/pages/singleCourse/SingleCourse";
// import Breadcrumbs from "./components/Breadcrumbs";

function App() {
    return (
        <div className="App">
            <Topbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/singleCourse/:id" element={<SingleCourse />} />
            </Routes>
            <Footer />
            <Copyright />
            {/* <Breadcrumbs /> */}
        </div>
    );
}

export default App;
