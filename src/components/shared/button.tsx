import './button.css'

interface ButtonProps {
  text: string;
  link?: string
}

const Button = ({text}: ButtonProps) =>{
  return (
    <>
      <div className="flex relative w-fit rounded-sm z-10 myMain cursor-pointer">
        <div className="bg-myGold p-2 rounded-sm m-[3px] relative z-10">
          <h1 className="text-white text-2xl">{text}</h1>
        </div>
        <div className="absolute h-full w-full border-[3px] border-black rounded-sm z-0 left-3 top-3 myBorder"></div>
      </div>
    </>
  )
}

export default Button