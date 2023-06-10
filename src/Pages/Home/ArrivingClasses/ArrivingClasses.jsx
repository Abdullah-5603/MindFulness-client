import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { AttentionSeeker } from 'react-awesome-reveal';

const ArrivingClasses = () => {

    const { data: arrivingClasses = [] } = useQuery({
        queryKey: ['arriving-classes'],
        queryFn: async () => {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/arriving-classes`)
            return response.data
        }
    })
    // console.log(arrivingClasses)
    return (
        <div className='px-6 md:px-10 mt-16 mb-10 mx-auto w-11/12'>
            <p className='text-4xl uppercase font-bold text-center mb-8'>Our new classes are arriving soon. Get ready to enroll.</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    arrivingClasses.map(arrivingClass =>
                        <AttentionSeeker animate__lightSpeedInLeft>
                        <div key={arrivingClass._id} className="card w-80 glass shadow-2xl group">
                            <figure><img className='h-64 w-full group-hover:scale-110' src={arrivingClass.image} alt={arrivingClass.className} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{arrivingClass.className}</h2>
                                <p className='font-semibold'>Seats: <span className='font-normal'>{arrivingClass.seats}</span></p>
                                <p className='font-semibold'>Price: <span className='font-normal'>${arrivingClass.price}</span></p>
                                <button className="btn btn-primary font-bold">Enroll Now</button>
                            </div>
                        </div>
                        </AttentionSeeker>
)
                }
            </div>
        </div>
    );
};

export default ArrivingClasses;