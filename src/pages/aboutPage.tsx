import Navbar from "../components/shared/navbar";
import Button from "../components/shared/button";
import TextBox from "../components/shared/textBox";

const About = () => {
	return (
		<>
			<div>
        <TextBox header="" subHeader="">
          <p>text</p>
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
