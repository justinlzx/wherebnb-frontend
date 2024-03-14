import axios from "axios";
import { useEffect } from "react";
import left from "../../assets/icons/left.png";
import star from "../../assets/icons/star.png";


export const ReservationsPage = () => {
    // Axios.get comes here
    // Initialise data here
    // State stored inside component

    const [num, setNum] = useState(0)

    useEffect(() => {
        axios.get(url)
        .then()
    }, [num])

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
                    <button className="btn btn-block mt-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 h-16 text-white text-center grid place-content-center text-xl font-semibold">
                        {/* call Stripe API */}
                        Make payment for reservation
                    </button>
                </div>
                {/* Second Half */}
                <div className="flex justify-center ">
                    <div className="card w-4/5 bg-base-100 border-2 border-neutral-100 ">
                        <figure className="h-52"><img src="https://images.unsplash.com/photo-1623050804066-42bcedb4e81d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2371&q=80" alt="specific" className="w-full"/></figure>
                        <div className="card-body">
                            <div className="flex justify-between">
                                <h2 className="card-title text-lg">Cozy Cottage</h2>
                                <div className="flex items-center">
                                    <p className="text-md font-semibold mr-4">4.5</p>
                                    <img src={star} alt="" className="h-5"/>
                                </div>
                            </div>
                            <hr className="mt-2"/>
                            {/* Pricing Details */}
                            <div className="mt-2">
                                <h1 className="font-semibold text-lg">
                                    Pricing details
                                </h1>
                                {/* To be replaced with dynamic data */}
                                <div className="flex justify-between">
                                    <div className="underline mt-2">
                                        $100.00 SGD x 5 nights
                                    </div>
                                    <div>  
                                        $500.00 SGD
                                    </div>
                                </div>
                            </div>
                            {/* Final Price */}
                            <hr className="mt-2"/>
                            <div className="mt-2 font-bold flex justify-between">
                                <div className="">
                                    Total
                                </div>
                                <div>
                                    $500.00 SGD
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}