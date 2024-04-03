import React, { useState, useEffect } from "react";
import customAxios from "../../utils/customAxios";
import { toast } from "react-toastify";
import { CheckInRow } from '../CheckIn/CheckInRow';
import axios from "axios"; 

export const CheckInPage = () => {

  const bookingsUrl = process.env.REACT_APP_BOOKINGS_URL;
  const checkinUrl = process.env.REACT_APP_CHECKIN_URL;
  const accomsUrl = process.env.REACT_APP_ACCOMS_URL;
  const accountsUrl = process.env.REACT_APP_ACCOUNTS_URL;

  const [reservation, setReservation] = useState([]);
  const [loginState, setLoginState] = useState({}); 

  const [checkinInstructions, setCheckinInstructions] = useState("");
 
  useEffect(() => { 
    const storedLoginState = localStorage.getItem('loginState'); 
    if (storedLoginState) { 
      const parsedLoginState = JSON.parse(storedLoginState); 
      setLoginState(parsedLoginState) 
    } 
  }, []);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchReservations = async () => {
      try {
        const response = await customAxios.get(`${bookingsUrl}/booking/${loginState.userId}`, { cancelToken: source.token });
        console.log(response.data);


        const responseWithListing = await Promise.all(response.data.data.map(async (reservation) => {

          const listingId = reservation.listingId
          const listingInfo = await customAxios.get(`${accomsUrl}/listings/${listingId}`)

          return {
            ...reservation,
            image: listingInfo.data.data.image_1,
            hostId: listingInfo.data.data.hostId,
            propertyName: listingInfo.data.data.name
          }
        }))

        setReservation(responseWithListing);
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };

    if (loginState.userId !== null) {
      fetchReservations();
    }

    return () => {
      source.cancel("Request canceled");
    };
  }, [bookingsUrl, loginState.userId]);

  const handleCheckIn = async (bookingId) => {
      // Make a request to the backend endpoint to fetch booking details

      const guestInfo = await customAxios.get(`${accountsUrl}/view/${loginState.userId}`)
      const listingId = reservation.find((booking) => booking.bookingId === bookingId).listingId;

      const hostId = reservation.find((booking) => booking.bookingId === bookingId).hostId;
      const propertyName = reservation.find((booking) => booking.bookingId === bookingId).propertyName;
      const startDate = reservation.find((booking) => booking.bookingId === bookingId).startDate;
      const endDate = reservation.find((booking) => booking.bookingId === bookingId).endDate;

      await customAxios.post(`${checkinUrl}/checkin`, {
        bookingId,
        guestEmail: loginState.email,
        guestName: guestInfo.data.data.firstName,
        hostId,
        listingId, 
        propertyName,
        startDate,
        endDate
      })
      .then((resp) => {
        toast.success("Check-in successful! Click 'See Instructions' for more details.")
        setCheckinInstructions(resp.data.data.instructions)
      })
  }

  return (
    <div className="px-16">
      <h1 className="text-2xl font-bold mb-4">Current Reservations</h1>
      {reservation.map((reservation) => (
        <CheckInRow reservation={reservation} instructions={checkinInstructions} handleCheckIn={handleCheckIn} key={reservation.id}/>
      ))}
    </div>
  );
};
