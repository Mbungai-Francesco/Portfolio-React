import Button from "../../components/shared/button";
import TextBox from "../../components/shared/textBox";

import resume from '../../assets/files/FM.pdf'

const About = () => {
	return (
		<>
			<div className="w-full flex flex-col justify-between space-y-10">
				<TextBox header="Hello I'm" subHeader="Forche Mbungai Francesco">
					<p className="text-myGray-200">
						I am a <span className="text-myGold">frontend developer</span> I
						have a strong background in creating visually appealing and{" "}
						<span className="text-myGold">user-friendly web experiences</span>.
						I am motivated to find a role where I can challenge myself{" "}
						<span className="text-myGold">
							and provide value to website users
						</span>
						. I am excited to bring my knowledge and experience to a team and
						contribute to a company's success.
					</p>
				</TextBox>
				<div className="space-y-16">
					<Button type="button" text="View Resume" link={resume}/>
				</div>
			</div>
		</>
	);
};

export default About;
