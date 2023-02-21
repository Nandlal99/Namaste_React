
const ShimmerCard = () => {
    return (
        <div className="shimmer-box">
            <h5></h5>
        </div>
    );
};


const ShimmerUI = () => {
    return (
        <div className="shimmerUI">
            <div className="shimmer-search">
                <h5></h5>
            </div>
            <div className="shimmer-card-1">
                <ShimmerCard/>
                <ShimmerCard/>
                <ShimmerCard/>
                <ShimmerCard/>
            </div>
            <div className="shimmer-card-2">
                <ShimmerCard/>
                <ShimmerCard/>
                <ShimmerCard/>
                <ShimmerCard/>
            </div>
        </div>
    );
};

export default ShimmerUI;