
const ShimmerUI = () => {
    return (
        <>
            <div className="shimmer-search"></div>
            <div className="restaurant-list">
                {/* <div  className="shimmer-box"></div> */}
                {Array(15).fill("").map((e, index) => (
                    <div key={index} className="shimmer-box"></div>))}
            </div>
        </>
    );
};

export default ShimmerUI;