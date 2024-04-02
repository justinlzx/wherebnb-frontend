import React from 'react'

const CheckInPage = () => {
  return (
    <div>CheckInPage</div>
  )
}

export default CheckInPage
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
// import customAxios from "../../utils/customAxios";
// import axios from "axios";

// export const CheckInPage = () => {

//   const { userId, bookingId } = useParams(); 
//   const bookingUrl = process.env.REACT_APP_BOOKING_URL;
//   const notificationsUrl = process.env.REACT_APP_NOTIFICATIONS_URL;

//   const [reservations, setReservation] = useState([]);
//   const [booking, setBooking] = useState([]);
//   const [checkin, setCheckin] = useState([]);

//   const [dates, setDates] = useState({
//     startDate: null,
//     endDate: null,
//   });

//   const handleDates = {stardDate, endDate} => {
//     if (startDate !== null && endDate !== null) {
//       setDates({ startDate: new Date(startDate), endDate: new Date(endDate) });
//     } 
//   }; 

//   const [loading, setLoading] = useState(true); 


//   useEffect(() => {
//     const source = axios.CancelToken.source();

//     axios.get(`${bookingsUrl}/bookings/${bookingId}`, { cancelToken: source.token })
//     .then((resp) => {
//       const booking = resp.data.data.find(booking => booking.id === Number(bookingId));
//       setBooking(booking); 
//       setLoading(false); 
//     })
//     axios.put(`${}`)
//     .then((resp) => {
//       setCheckin(resp.data.data)
//     })

//     const fetchReservations = async () => {
//       try {
//         const response = await customAxios.get(`${bookingUrl}/booking/{}`);
//         setReservations(response.data);
//       } catch (error) {
//         console.error("Error fetching reservations:", error);
//       }
//     };

//     fetchReservations();
//   }, [bookingUrl]);

//   const handleCheckIn = async (bookingId) => {
//     try {
//       // Make a request to the backend endpoint to fetch booking details
//       const response = await customAxios.get(`${bookingUrl}/booking/${bookingId}`);
//       const bookingData = response.data;

//       // Extract required data from bookingData
//       const { guestEmail, guestName, hostId } = bookingData;


//       console.log('Guest Email:', guestEmail);
//       console.log('Guest Name:', guestName);
//       console.log('Booking ID:', bookingId);
//       console.log('Host ID:', hostId);

   
//     } catch (error) {
//       console.error("Error during check-in:", error);
//     }
//   };

//   return (
//     <div className="px-16 m-8">
//       <h1 className="text-2xl font-bold mb-4">Current Reservations</h1>
//       {reservations.map((reservation) => (
//         <div
//           key={reservation.id}
//           className="flex justify-between items-center border-b pb-4 mb-4"
//         >
//           <div className="flex items-center">
//             <img
//               src={reservation.image}
//               alt="Booking"
//               className="w-24 h-24 rounded-lg mr-4"
//             />
//             <div>
//               <h2 className="text-lg font-semibold">{reservation.booking}</h2>
//               <p className="text-gray-600">{reservation.description}</p>
//               <p className="text-gray-600">
//                 {reservation.startDate.toLocaleDateString()} -{" "}
//                 {reservation.endDate.toLocaleDateString()}
//               </p>
//             </div>
//           </div>
//           <div>
//             <button
//               onClick={() => handleCheckIn(reservation.id)}
//               className="btn btn-primary mr-2"
//             >
//               Check-in Now
//             </button>
//             <div className="btn btn-gray">
//               <a href={reservation.instructionsLink}>See Instructions</a>
//               <ArrowCircleDownRoundedIcon />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
