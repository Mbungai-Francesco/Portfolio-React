import { ReactNode } from "react";
import './skillBox.css'

interface SkillBoxProps {
	skill: {
		name: string;
		svg: ReactNode;
	};
}

const SkillBox = ({skill}: SkillBoxProps) => {
	return (
		<div className="flex justify-center items-center bg-white py-10 myBlock cursor-pointer">
			<div className="mr-2">{skill.svg}</div>
			<h1 className="capitalize font-semibold text-xl">{skill.name}</h1>
		</div>
	);
};

export default SkillBox;
