import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";
import CurrentlyWorkingOn from "../sections/CurrentlyWorkingOn";

function Home({ content }) {
  return (
    <>
      <Hero content={content} />
      <About content={content} />
      <Projects content={content} />
      <CurrentlyWorkingOn content={content} />
      <Experience content={content} />
      <Contact content={content} />
    </>
  );
}

export default Home;
