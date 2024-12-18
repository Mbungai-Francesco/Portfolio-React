import { Route, Routes } from "react-router-dom";
import "./App.css";
import {
	About,
	Contact,
	Projects,
	Skills,
	AboutRight,
	ContactRight,
	ProjectsRight,
	SkillsRight,
} from "./pages";
import Navbar from "./components/shared/navbar";
import { motion, useMotionValue } from "framer-motion";
import { Toaster } from "./components/ui/toaster";

function App() {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	// const shadowX = useTransform(x, [0, window.innerWidth], [-50, 50]);
	// const shadowY = useTransform(y, [0, window.innerHeight], [-50, 50]);

	const handleMouseMove = (event: React.MouseEvent) => {
		x.set(event.clientX);
		y.set(event.clientY);
	};

	return (
		<>
			<div className="relative bg-myWhite">
				<motion.div
					className="blur-ball"
					style={{
						x: x,
						y: y,
						width: "3em",
						aspectRatio: "1/1",
						borderRadius: "50%",
						backgroundColor: "orange",
						filter: "blur(20px)",
						position: "absolute",
						pointerEvents: "none",
					}}
				/>
				<div
					className="relative flex px-20 pt-20 pb-10 justify-between h-screen overflow-y-scroll skills-right-container bg-transparent"
					onMouseMove={handleMouseMove}
				>
					<Toaster />
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
			</div>
		</>
	);
}

export default App;
