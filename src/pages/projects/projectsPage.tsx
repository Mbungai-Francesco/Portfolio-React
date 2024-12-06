import Button from "../../components/shared/button";
import TextBox from "../../components/shared/textBox";

const Projects = () => {
	return (
		<>
			<div className="w-full flex flex-col justify-between space-y-10">
				<TextBox header="I love working on" subHeader="fun projects">
					<p className="text-myGray-200">
						In my leisure time, I enjoy <span className="text-myGold">experimenting</span>{" "}
						with and building things that I find personally
						<span className="text-myGold"> interesting</span> or{" "}
						<span className="text-myGold">useful</span>. A few examples of these projects
						can be found on my <span className="text-myGold">GitHub page</span>, where you
						can also find other{" "}
						<span className="text-myGold">miscellaneous creations </span>I have worked on.
					</p>
				</TextBox>
				<div className="space-y-16">
					<Button text="View Github" type="button" link="https://github.com/Mbungai-Francesco"/>
				</div>
			</div>
		</>
	);
};

export default Projects;
