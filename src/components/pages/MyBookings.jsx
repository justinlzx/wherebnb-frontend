import React, { useCallback, useState, useEffect } from 'react';
import logo from "../../assets/logo/long-logo.png";
import HeaderPrompt from "../Register/RegisterHeader";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import customAxios from '../../utils/customAxios';


// Change data here if hardcoding
const bookingsData = [
    { id: 1, accommodation: 'Cozy Apartment', checkInDate: '2022-03-01', checkOutDate: '2022-03-05', thumbnail: logo, location: 'Singapore' },
    { id: 2, accommodation: 'Seaside Villa', checkInDate: '2023-04-10', checkOutDate: '2023-04-15', thumbnail: logo, location: 'Singapore' },
];

export const MyBookingsPage = () => {
    const [bookings, setBookings] = useState([]);   // Delete later
    const navigate = useNavigate();   // Initialize useNavigate

    const handleReviewClick = () => {
        navigate('/reviews');
    };

    // Change here if not hardcoding, update var bookings to store data
    const bookingsUrl = process.env.REACT_APP_BOOKINGS_URL;   // Add Review msvc url if not hardcoding

    const getBookings = useCallback(async () => {   // Function to retrieve user bookings if not hardcoding
      await customAxios.get(`${bookingsUrl}/listings`)    // Update to call Add Review msvc if not hardcoding
        .then((res) => {
          setBookings(res.data.data);
        })
        .catch((err) => {
          console.log('err', err);
        });
    }, [bookingsUrl]);

    useEffect(() => {
      getBookings();
    }, [getBookings]);

    return (
        <div style={{ textAlign: 'center', maxWidth: '95%', margin: '0 auto' }}>
            <HeaderPrompt
                heading="Review Past Bookings"
            />
            <div className="grid grid-cols-2 gap-4">
                {bookings.map(booking => (
                    <div key={booking.id} className='text-md text-gray-600' style={{ boxShadow: '0 0 0 1px #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ width: '40%', height: '75%', marginRight: '20px', marginLeft: '20px' }}>
                                <img src={booking.thumbnail} alt="Accommodation Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div style={{ width: '50%', textAlign: 'left', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <strong>{booking.accommodation}</strong>
                                    <p>Location: {booking.location}</p>
                                    <p>Check-in: {booking.checkInDate}</p>
                                    <p>Check-out: {booking.checkOutDate}</p>
                                </div>
                                <button className="group relative py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-950 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 mt-4" onClick={() => handleReviewClick(booking.id)}>Leave a review!</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

