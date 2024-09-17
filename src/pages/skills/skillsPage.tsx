import Button from "../../components/shared/button";
import TextBox from "../../components/shared/textBox";

const Skills = () => {
	// <span className="text-myGold">frontend developer</span>
	return (
		<>
			<div className="w-full flex flex-col justify-between space-y-10">
				<TextBox header="I work mostly with" subHeader="Frontend Technologies">
					<p className="text-myGray-200">
						Here are some of the <span className="text-myGold">tools</span> I've
						worked with over the years, for my{" "}
						<span className="text-myGold">personal</span> projects
					</p>
				</TextBox>
				<div className="space-y-16">
					<Button text="View Resume" />
				</div>
			</div>
		</>
	);
};

export default Skills;
