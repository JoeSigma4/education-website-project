import { useState } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Programs from "./components/program/Programs.jsx";
import Title from "./components/title/Title.jsx";
import About from "./components/about/About.jsx";
import Campus from "./components/campus/Campus.jsx";
import Testimonial from "./components/testimonials/Testimonial.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Videoplayer from "./components/Videoplayer/Videoplayer.jsx";

function App() {
  const [play, setPlay] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our Programs" title="Explore our popular programs" />
        <Programs setPlay={setPlay} />
        <About />
        <Title subtitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subtitle="TESTIMONIALS" title="What our students say about us" />
        <Testimonial />
        <Title subtitle="Contact Us" title="GET IN TOUCH" />
        <Contact />
        <Footer />
      </div>
      <Videoplayer play={play} setPlay={setPlay} />
    </div>
  );
}

export default App;
