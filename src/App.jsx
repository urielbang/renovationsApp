import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandPage from "./pages/LandPage";
import Home2 from "./components/Home2";
import Services from "./components/Services";
import NavBar from "./components/NavBar";
import ServiceInterior from "./components/ServiceInterior";
import ServiceDesign from "./components/ServiceDesign";
import Projects from "./pages/ProjectsPage";
import OurTeamPage from "./pages/OurTeamPage";
import About from "./pages/About";
import BlogPage from "./pages/BlogPage";
import Calculator from "./pages/Calculator";
import Contact from "./pages/Contact";
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/SignUp";
import { UserContext } from "./context/User";
import { useContext, useEffect, useState } from "react";
import ProjectDising from "./components/ProjectDising";

function App() {
  const { logedUser, token } = useContext(UserContext);
  const [userLogIn, setUserLogin] = useState(null);

  useEffect(() => {
    setUserLogin(logedUser);
  }, [logedUser]);
  return (
    <BrowserRouter>
      {userLogIn != null ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandPage />} />
            <Route path="/home2" element={<Home2 />} />
            <Route path="/services" element={<Services />} />
            <Route path="/serviceInterior" element={<ServiceInterior />} />
            <Route path="/serviceDesign" element={<ServiceDesign />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/ourTeam" element={<OurTeamPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projectDesign" element={<ProjectDising />} />
            <Route path="/oneProject/:id" element={<ProjectDising />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
