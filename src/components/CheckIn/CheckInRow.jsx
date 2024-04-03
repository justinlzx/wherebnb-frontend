import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
import { useState } from "react";

export const CheckInRow = ({ reservation, instructions, handleCheckIn }) => {

    const {
        bookingId,
        image,
        booking,
        startDate,
        endDate,
        propertyName,
    } = reservation;

    const [showInstructions, setShowInstructions] = useState(false);
    const [checkedIn, setCheckedIn] = useState(false);

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        const formattedDate = date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

        return formattedDate;
    };  

    console.log(instructions)
    console.log(showInstructions)

    return (
        <div className="pb-4 mb-4 border-b">
            <div
                key={bookingId}
                className="flex justify-between items-center"
            >
                <div className="flex items-center">
                <img
                    src={image}
                    alt="Booking"
                    className="w-24 h-24 rounded-lg mr-4"
                />
                <div>
                    <h2 className="text-lg font-semibold">{propertyName}</h2>
                    <p className="text-gray-600">
                    {formatDate(startDate)} -{" "}
                    {formatDate(endDate)}
                    </p>
                </div>
                </div>
                <div>
                <button
                    onClick={() => {
                        handleCheckIn(bookingId);
                        setCheckedIn(true);
                    }}
                    className="btn btn-primary mr-2"
                >
                    Check-in Now
                </button>
                <button className={`btn btn-gray ${!checkedIn && "disabled"}`} onClick={() => {
                    if (!checkedIn) return;
                    setShowInstructions(!showInstructions);
                }}>
                    <p>See Instructions</p>
                    <div className={showInstructions? "rotate-180": ""}><ArrowCircleDownRoundedIcon/></div>
                </button>
                </div>
            </div>

            {showInstructions && instructions &&
                <div className="transition ">
                    <h3 className="text-lg font-semibold">Check-in Instructions</h3>
                    <p>{instructions}</p>
                </div>
            }
        </div>
)};