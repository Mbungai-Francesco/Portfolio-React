import './button.css'

interface ButtonProps {
  text: string;
  type : string
  link?: string
  className?: string
}

const Button = ({text, link, type, className}: ButtonProps) =>{
  return (
    <>
    <a href={link} target='_blank' className='w-fit'>
      <div className={className? ('flex relative rounded-sm z-10 myMain cursor-pointer ' + className) : 'flex relative w-fit rounded-sm z-10 myMain cursor-pointer'}>
        <div className="w-full text-center bg-myGold p-4 rounded-sm m-[3px] relative z-10 hover:bg-transparent hover:text-myGold text-white">
          <input className="text-3xl" type={type} value={text}/>
        </div>
        <div className="absolute h-full w-full border-[3px] border-black rounded-sm z-0 left-3 top-3 myBorder"></div>
      </div>
    </a>
    </>
  )
}

export default Button