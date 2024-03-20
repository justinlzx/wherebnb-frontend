import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
import { DatePicker } from '../Common/DatePicker/DatePicker'
import { Link } from 'react-router-dom'

export const IndividualListingsPage = () => {

    const { id } = useParams()
    const accomsUrl = process.env.REACT_APP_ACCOMS_URL
    const [listing, setListing] = useState({})

    const [dates, setDates] = useState({
        startDate: null,
        endDate: null
    })

    const handleDates = (startDate, endDate) => {
       if (startDate !== null && endDate !== null) {

        setDates({ startDate: new Date(startDate), endDate: new Date(endDate) });
        }
    }

    
    // TODO: use this useEffect when backend is ready 
    useEffect(() => {
        axios.get(`${accomsUrl}/accoms/${id}`)
        .then((resp) => {
            setListing(resp.data.data)
        })
    }, [])

    // TODO: connect to backend after left join to booking table is created 

    console.log('listing:', listing)

    return ( 
        <div className='mx-12'>
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
                        bookings={listing.bookings}
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
        </div>
    )
};