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
            <div className="border border-red-500 grid grid-cols-2 rounded-lg p-4 px-16">
                <div className="border border-green-400">
                    <h1 className="font-bold text-2xl">
                        Your trip
                    </h1>
                </div>
                <div className="border border-amber-600">hi 1 </div>
            </div>
        </div>
    )
}