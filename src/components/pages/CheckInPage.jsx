import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";
import customAxios from "../../utils/customAxios";
import axios from "axios";

export const CheckInPage = () => {

  const { bookingId } = useParams(); 
  const bookingsUrl = process.env.REACT_APP_BOOKINGS_URL;
  const checkinUrl = process.env.REACT_APP_CHECKIN_URL;

  const [reservation, setReservation] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setBooking] = useState({});

  const [checkin, setCheckin] = useState({});

  const [dates, setDates] = useState({})

  const [userId, setUserId] = useState(null); 
  const [loginState, setLoginState] = useState({}); 
 
  useEffect(() => { 
    const storedLoginState = localStorage.getItem('loginState'); 
    if (storedLoginState) { 
      const parsedLoginState = JSON.parse(storedLoginState); 
      setLoginState(parsedLoginState) 
      setUserId(parsedLoginState.userId);
    } 
  }, []);

  console.log(userId)


  const handleDates = (startDate, endDate) => {
    if (startDate !== null && endDate !== null) {
      setDates({ startDate: new Date(startDate), endDate: new Date(endDate) });
    } 
  }; 

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchReservations = async () => {
      try {
        const response = await customAxios.get(`${bookingsUrl}/booking/${userId}`, source);
        console.log(response.data);
        setReservation(response.data);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    if (userId !== null) {
      fetchReservations();
    }

    return () => {
      source.cancel("Request canceled");
    };
  }, [bookingsUrl, userId]);

  const handleCheckIn = async (bookingId) => {
      // Make a request to the backend endpoint to fetch booking details
      const response = await customAxios.get(`${bookingsUrl}/booking/${bookingId}`);

      const bookingData = response.data;

      // Extract required data from bookingData
      const { guestEmail, guestName, hostId } = bookingData;


      console.log('Guest Email:', guestEmail);
      console.log('Guest Name:', guestName);
      console.log('Booking ID:', bookingId);
      console.log('Host ID:', hostId);
          // axios.put(`${checkinUrl}/checkin/${bookingId}`)
    // .then((resp) => {
    //   setCheckin(resp.data.data)
    // })
  }

  console.log(reservation)

  return (
    <div className="px-16 m-8">
      <h1 className="text-2xl font-bold mb-4">Current Reservations</h1>
      {reservation.length && reservation.map((reservation) => (
        <div
          key={reservation.id}
          className="flex justify-between items-center border-b pb-4 mb-4"
        >
          <div className="flex items-center">
            <img
              src={reservation.image}
              alt="Booking"
              className="w-24 h-24 rounded-lg mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">{reservation.booking}</h2>
              <p className="text-gray-600">{reservation.description}</p>
              <p className="text-gray-600">
                {reservation.startDate.toLocaleDateString()} -{" "}
                {reservation.endDate.toLocaleDateString()}
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() => handleCheckIn(reservation.id)}
              className="btn btn-primary mr-2"
            >
              Check-in Now
            </button>
            <div className="btn btn-gray">
              <a href={reservation.instructionsLink}>See Instructions</a>
              <ArrowCircleDownRoundedIcon />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
