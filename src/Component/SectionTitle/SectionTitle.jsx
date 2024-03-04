

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center my-8 md:w-3/12">
            <p className="text-yellow-700 mb-2">---{subHeading}---</p>
            <h3 className="text-4xl uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;