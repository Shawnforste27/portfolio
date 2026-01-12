import Home from "./components/HomePage/Home";
import About from "./components/About/About";
import Skills from "./components/skill/Skills"
import Projects from "./components/work/Projects";
import Contact from "./components/contact.jsx/Contact";
export default function App() {
    return (
        <div className="min-h-screen bg-[#0B0E11] text-white">
            <div id="home"><Home /></div>
            <div id="about"><About /></div>
            <div id="skills"><Skills /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>
        </div>
    );
}
