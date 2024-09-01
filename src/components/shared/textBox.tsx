interface TextBoxProps {
  header: string
  subHeader: string
  text: React.ReactNode
}

const TextBox: React.FC<TextBoxProps> = ({ header, subHeader, text}) =>{
  return (
    <>
      <h1>{header}</h1>
      <p>{subHeader}</p> 
      <div>{text}</div>
    </>
  )
}

export default TextBox