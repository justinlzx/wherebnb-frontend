import left from "../../assets/icons/left.png";



export const ReservationsPage = () => {
    return (
        <div className="px-20 py-14">
            <div className="flex items-center pb-8">
                <button className="btn btn-circle ">
                    <img src={left} alt="" className="h-6"/>
                </button>
                <h1 className="text-4xl font-bold ml-4">
                    Request to book
                </h1>
            </div>
            <div className="border border-red-500 grid grid-cols-2">
                <div>hi 1 </div>
                <div>hi 1 </div>
            </div>
        </div>
    )
}