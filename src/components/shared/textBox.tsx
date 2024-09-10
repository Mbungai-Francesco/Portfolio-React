interface TextBoxProps {
	header?: string;
	subHeader?: string;
	children?: React.ReactNode;
}

const TextBox: React.FC<TextBoxProps> = ({ header, subHeader, children }) => {
	return (
		<>
			<div className="text-4xl font-bold">
				<h1 className="text-myGray">{header}</h1>
				<p className="text-black">{subHeader}</p>
			</div>
			<div className="text-2xl">{children}</div>
		</>
	);
};

export default TextBox;
