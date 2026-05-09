
const Heading = ({ title, subtitle }) => {
    return (
        <div className="flex flex-col text-center my-2">
            <h1 className="text-3xl font-bold" >{title}</h1>
            <p className="text-sm py-2 ">{subtitle}</p>

        </div>
    );
};

export default Heading;