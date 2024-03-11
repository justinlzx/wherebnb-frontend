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
            <div className="border border-red-500 grid grid-cols-2 gap-8 rounded-lg p-4 px-16">
                {/* 2 halves contained here */}
                <div className="border border-green-400">
                    <h1 className="font-bold text-2xl">
                        Your trip
                    </h1>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <h1 className="font-bold">
                                Dates
                            </h1>
                            <button>Edit</button>
                        </div>
                        <h1 className="font-semibold mt-1">
                            {/* To be replaced with dynamic data */}
                            11–16 Mar
                        </h1>
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between">
                            <h1 className="font-bold mt-1">
                                Guests
                            </h1>
                            <button>Edit</button>
                        </div>
                        <h1 className="font-semibold">
                            {/* To be replaced with dynamic data */}
                            1 Guest
                        </h1>
                    </div>
                </div>
                <div className="border border-amber-600">hi 1 </div>
            </div>
        </div>
    )
}