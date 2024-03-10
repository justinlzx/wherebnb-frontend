import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
import { DatePicker } from '../Common/DatePicker/DatePicker'

export const IndividualListingsPage = () => {

    // const { id } = useParams()
    const id = 9
    const url = process.env.REACT_APP_ACCOMS_URL
    const [listing, setListing] = useState({

    })

    const [dates, setDates] = useState({
        startDate: null,
        endDate: null
    })

    const handleDates = (startDate, endDate) => {
       if (startDate !== null && endDate !== null) {
        setDates({ startDate, endDate });
        }
    }


    // TODO: use this useEffect when backend is ready 
    useEffect(() => {
        axios.get(`${url}/accoms/${id}`)
        .then((resp) => {
            // console.log('data:', resp.data.data)
            setListing(resp.data.data)
        })
       
    }, [])

    

    return ( 
        <div className='mx-12'>
            <div>
                <h1 className='text-4xl font-bold my-2'>{listing.name}</h1>
            </div>
            <div className="grid grid-cols-3 gap-12">
                <div className="col-span-2">
                    <div className="h-96 carousel rounded-box object-cover">
                        {
                            [listing.image_1, listing.image_2, listing.image_3, listing.image_4, listing.image_5].map((image) => {
                                return  <div className="carousel-item h-ful">
                                            <img src={image} />
                                        </div> 
                            })
                        }
                        
                    </div>
                    {/* description */}
                    <h3 className="text-2xl">Description</h3>
                    <p>{listing.description}</p>
                </div>
                <div className="col-span-1 border-2 border-slate-400 rounded-xl p-4 h-fit">
                    {/* calendar and booking panel */}
                    <DatePicker 
                        values={{
                            startDate: dates.startDate,
                            endDate: dates.endDate
                        }} 
                        onChange={(startDate, endDate) => {
                            handleDates(startDate, endDate)}}
                    />
                </div>
            </div>
        </div>
    )
};