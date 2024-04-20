const ShimmerCard = () => {
    return (
        <div className="shimmerCard">
        </div>
    )
}
const ShimmerHeader = () => {
    return (
        <div id="shimmerHader"></div>
    )
}
const Shimmer = () => {
    const shimmers = ['1','2','3','4','5','6','7','8','9'];
    return (
        <div className="shimmerContainer">
            <ShimmerHeader />
            <div id='shimmerCards'>
                {
                    shimmers.map((item) => {
                        return <ShimmerCard key={item}/>;
                    })
                }
            </div>
        </div>
    )
}

export default Shimmer;