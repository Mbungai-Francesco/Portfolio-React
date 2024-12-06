import Button from '../../components/shared/button'
import TextBox from '../../components/shared/textBox'

import resume from '../../assets/files/FM.pdf'

const Contact = () =>{
  return (
    <>
      <div className="w-full flex flex-col justify-between space-y-10">
				<TextBox header="Want to wotk with me" subHeader="Let's Connect">
					<p className="text-myGray-200">
            I am open to <span className="text-myGold">remote</span> and{" "}
						<span className="text-myGold">onsite full-time</span>,
						part time, and contract frontend web development <span className="text-myGold">jobs.</span>
					</p>
				</TextBox>
				<div className="space-y-16">
					<Button type="button" text="View Resume" link={resume}/>
				</div>
			</div>
    </>
  )
}

export default Contact