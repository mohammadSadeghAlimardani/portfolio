import "./App.css";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Services />
            <Contact />
            <Projects />
            {/* <Experience /> */}
            <Footer />
        </main>
    );
};

export default App;
