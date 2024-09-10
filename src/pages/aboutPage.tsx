import Navbar from "../components/shared/navbar";
import Button from "../components/shared/button";
import TextBox from "../components/shared/textBox";

const About = () => {
	return (
		<>
			<div>
        <TextBox header="Hello I'm" subHeader="Forche Mbungai Francesco">
          <p className="text-myGray">I am a <span className="text-myGold">frontend developer</span> I have a strong background in creating visually appealing and <span className="text-myGold">user-friendly web experiences</span>. I am motivated to find a role where I can challenge myself <span className="text-myGold">and provide value to website users</span>. I am excited to bring my knowledge and experience to a team and contribute to a company's success.</p>
        </TextBox>
				<div>
					<Button text="View Resume" />
					<Navbar />
				</div>
				<div></div>
			</div>
		</>
	);
};

export default About;
