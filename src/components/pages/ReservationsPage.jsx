import { useLocation, Link } from "react-router-dom";
import { toast } from "react-toastify";
import customAxios from "../../utils/customAxios";
import left from "../../assets/icons/left.png";
import star from "../../assets/icons/star.png";
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";

export const ReservationsPage = () => {
    const location = useLocation()

    const {
        dates: {
            startDate,
            endDate
        },
        id: listingId,
        name: listingName,
        pricePerNight,
        rating,
        image_1: image,
        hostId
    } = location.state

    const [loginState, setLoginState] = useState({}); 

    useEffect(() => { 
        const storedLoginState = localStorage.getItem('loginState'); 
        if (storedLoginState) { 
        const parsedLoginState = JSON.parse(storedLoginState); 
        setLoginState(parsedLoginState) 
        } 
    }, []);

    const getNumberOfNights = (checkInDate, checkOutDate) => {
        const oneDay = 1000 * 60 * 60 * 24; // milliseconds in a day
        const diffInTime = checkOutDate.getTime() - checkInDate.getTime();
        const diffInDays = Math.round(diffInTime / oneDay);
        return diffInDays;
    }

    const formatDate = (date) =>{
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    }
    
    const numNights = getNumberOfNights(startDate, endDate)

    const createBooking = async () => {

        const hostInfo = await customAxios.get(`${process.env.REACT_APP_ACCOUNTS_URL}/view/${loginState.userId}`)

        const payload = {
            hostId,
            guestId: loginState.userId,
            listingId,
            startDate, 
            endDate, 
            firstName: hostInfo.data.data.firstName,
            lastName: hostInfo.data.data.lastName,
            email: hostInfo.data.data.email,
            pricePerNight,
            name: listingName,
            duration: numNights
        };

        await customAxios.post(`${process.env.REACT_APP_PROCESS_BOOKING_URL}/payment`, payload)
        .then(response => {
            toast.success('Payment initiated successfully')
            window.location.href = response.data.data.checkout_url
        })
        .catch(error => {
            toast.error('Error initiating payment:', error)
        });
    };

    if (!location.state) return <div>Loading...</div>;

    return (
        <div className="px-20 py-14">
            <div className="flex items-center pb-8">
                <Link to={`/listings/${listingId}`}>
                    <button className="btn btn-circle ">
                        <img src={left} alt="" className="h-6"/>
                    </button>
                </Link>
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
                                    {formatDate(startDate)} - {formatDate(endDate)}
                                </h1>
                            </div>
                            <Link to={`/listings/${listingId}`}><button className="btn rounded-lg bg-neutral-100">Edit</button></Link>
                        </div>
                    </div>
                   
                    <hr className="mt-10 "/>
                    {/* below the line */}
                    <button className="btn btn-block mt-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 h-16 text-white text-center grid place-content-center text-xl font-semibold" onClick={createBooking}>
                        {/* call Stripe API */}
                       Book
                    </button>
                </div>
                {/* Second Half */}
                <div className="flex justify-center ">
                    <div className="card w-4/5 bg-base-100 border-2 border-neutral-100 ">
                        <figure className="h-52"><img src={image} alt={listingName} className="w-full"/></figure>
                        <div className="card-body">
                            <div className="flex justify-between">
                                <h2 className="card-title text-lg">{listingName}</h2>
                                <div className="flex items-center">
                                    <p className="text-md font-semibold mr-4">{rating.toFixed(2)}</p>
                                    <img src={star} alt="" className="h-5"/>
                                </div>
                            </div>
                            <hr className="mt-2"/>
                            {/* Pricing Details */}
                            <div className="mt-2">
                                <h1 className="font-semibold text-lg">
                                    Pricing details
                                </h1>
                                {/* To be replaced with dynamic data, not dynamic yet */}
                                <div className="flex justify-between">
                                    <div className="underline mt-2">
                                        ${pricePerNight} SGD x {numNights} nights
                                    </div>
                                    <div>  
                                        ${pricePerNight * numNights} SGD
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
                                    ${pricePerNight * numNights} SGD
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}