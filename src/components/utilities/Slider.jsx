const Slider = ({ value }) => {
    return (
        <div className="relative w-[50%]">
            <input
                id="disabled-range"
                type="range"
                value={value}
                className="w-full h-2 bg-accent rounded-lg appearance-none cursor-pointer"
                disabled
            />
            <div className="absolute top-[-1.5rem] left-[90%] transform -translate-x-1/2 bg-secondary text-white text-xs font-semibold py-1 px-2 rounded">
                {value}%
            </div>
        </div>
    );
}

export default Slider;