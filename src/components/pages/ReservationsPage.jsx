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
            <div className=" grid grid-cols-2 gap-8 rounded-lg px-16">
                {/* 2 halves contained here */}
                <div className="">
                    <h1 className="font-bold text-2xl">
                        Your trip
                    </h1>
                    <div className="mt-8">
                        <div className="flex justify-between">
                            <div>
                                <h1 className="font-bold">
                                    Dates
                                </h1>
                                <h1 className="font-semibold mt-1">
                                    {/* To be replaced with dynamic data */}
                                    11–16 Mar
                                </h1>
                            </div>
                            <button className="btn rounded-lg bg-neutral-100">Edit</button>
                        </div>
                    </div>
                    <div className="mt-6">
                        <div className="flex justify-between">
                            <div>
                                <h1 className="font-bold">
                                    Guests
                                </h1>
                                <h1 className="font-semibold mt-1">
                                    {/* To be replaced with dynamic data */}
                                    1 Guest
                                </h1>
                            </div>
                            <button className="btn rounded-lg bg-neutral-100">Edit</button>
                        </div>
                    </div>
                    <hr className="mt-10 "/>
                    {/* below the line */}
                    <div className="mt-10 rounded-lg bg-neutral-100 h-40 text-center font-bold">
                        {/* call Stripe API */}
                        Stripe API <br />
                        OR Payment Details if Stripe cannot be called here
                    </div>
                </div>
                {/* Second Half */}
                <div className="flex justify-center">
                    <div className="card w-4/5 bg-base-100 border-2 border-neutral-100 ">
                        <figure className="h-52"><img src="https://source.unsplash.com/WLUHO9A_xik/200x200" alt="specific" className="w-full"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}