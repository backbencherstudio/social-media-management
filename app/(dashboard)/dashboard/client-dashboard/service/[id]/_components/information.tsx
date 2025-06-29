
const Information = ({header, text}) => {
    return (
        <div className="mt-8">
        <p className="text-gray-600 text-sm mb-2">{header}</p>
        <p className="text-black text-base text-xl">{text}</p>
      </div>
    );
};

export default Information;