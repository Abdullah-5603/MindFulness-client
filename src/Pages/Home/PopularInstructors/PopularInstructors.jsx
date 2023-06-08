import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const PopularInstructors = () => {

    const { data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/instructors`)
            return response.data
        }
    })
    console.log(instructors)
    return (
        <div className='px-6 md:px-10 mb-10'>
            <p className='text-4xl uppercase font-bold text-center mb-5'>Our Popular Instructors</p>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            {
                instructors.map(ict => <img className='w-96 h-64' src={ict.classImage}></img>)
            }
            </div>
        </div>
    );
};

export default PopularInstructors;