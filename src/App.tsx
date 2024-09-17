import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About, Contact, Projects, Skills, AboutRight, ContactRight, ProjectsRight, SkillsRight } from "./pages";
import Navbar from "./components/shared/navbar";

function App() {
	return (
		<>
			<div className="flex px-20 pt-10 pb-10 justify-between h-screen bg-myWhite">
				<div className="w-2/5 flex flex-col justify-between">
					<Routes>
						{/* Add your routes here */}
						<Route path="/" index element={<About />} />
						<Route path="/Skills" element={<Skills />} />
						<Route path="/Projects" element={<Projects />} />
						<Route path="/Contact" element={<Contact />} />
					</Routes>
					<Navbar />
				</div>
				<div className="w-1/2 h-full">
					<Routes>
						<Route path="/" index element={<AboutRight />} />
						<Route path="/Skills" element={<SkillsRight />} />
						<Route path="/Projects" element={<ProjectsRight />} />
						<Route path="/Contact" element={<ContactRight />} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
