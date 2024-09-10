import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About, Contact, Projects, Skills } from "./pages";

function App() {
	return (
		<>
			<div className="px-20 py-10">
				<Routes>
					{/* Add your routes here */}
					<Route path="/" element={<About />} />
					<Route path="/Skills" element={<Skills />} />
					<Route path="/Projects" element={<Projects />} />
					<Route path="/Contact" element={<Contact />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
