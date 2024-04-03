import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { DatePicker } from '../Common/DatePicker/DatePicker'
import { Link } from 'react-router-dom'
import { SubmitReview } from '../Reviews/SubmitReview'
import { Comments } from '../Reviews/Comments'
import customAxios from '../../utils/customAxios';

export const IndividualListingsPage = () => {

    const { id } = useParams()
    const accomsUrl = process.env.REACT_APP_ACCOMS_URL
    const bookingsUrl = process.env.REACT_APP_BOOKINGS_URL
    const [listing, setListing] = useState({})
    const [bookings, setBookings] = useState([])

    const [dates, setDates] = useState({
        startDate: null,
        endDate: null
    })

    const handleDates = (startDate, endDate) => {
       if (startDate !== null && endDate !== null) {

        setDates({ startDate: new Date(startDate), endDate: new Date(endDate) });
        }
    }

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const source = customAxios.CancelToken.source();
    
        customAxios.get(`${accomsUrl}/listings/${id}`, { cancelToken: source.token })
        .then((resp) => {
            const listing = resp.data.data;
            setListing(listing);
            setLoading(false); // Set loading to false once the data is loaded
        })
        customAxios.get(`${bookingsUrl}/booking/${id}`, { cancelToken: source.token })
        .then((resp) => {
            setBookings(resp.data.data)
        })
    }, [])
    
    if (loading) {
        return <div>Loading...</div>; // Display a loading message while the data is loading
    }
    return ( 
        <div className='mx-20 px-16 m-8'>
            <div>
                <h1 className='text-4xl font-bold my-2'>{listing.name}</h1>
            </div>
            <div className="grid grid-cols-3 gap-12">
                <div className="col-span-2">
                    <div className="h-96 carousel rounded-box object-cover">
                        {
                            [listing.image_1, listing.image_2, listing.image_3, listing.image_4, listing.image_5].map((image, i) => {
                                return  <div 
                                            key={i}
                                            className="carousel-item h-full">
                                            <img src={image} />
                                        </div> 
                            })
                        }
                        
                    </div>
                    {/* description */}
                    <h3 className="text-2xl">Description</h3>
                    <p>{listing.description}</p>
                </div>
                <div className="col-span-1 border-2 border-blue-400 rounded-2xl p-4 h-fit">
                    {/* calendar and booking panel */}
                    <DatePicker 
                        values={{
                            startDate: dates.startDate,
                            endDate: dates.endDate
                        }} 
                        bookings={bookings}
                        onChange={(startDate, endDate) => {
                            handleDates(startDate, endDate)}}
                    />

                    <Link to="/reservations" state={{
                        ...listing,
                        dates
                    }}>
                        <button
                            className="mt-4 rounded-lg bg-blue-400 text-white w-full h-8 font-bold"
                        >
                            Book Now
                        </button>
                    </Link>
                </div>
            </div>
            <div className="mx-auto items-center w-full m-2 p-2">
            <SubmitReview id={id} hostId={listing.hostId} listingId={listing.id}/>
            <Comments id={id}/>
            </div>
        </div>
    )
};