import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useAuth } from '../../../Hooks/useAuth';

const MySelectedClasses = () => {
    const {user} = useAuth()
    const { data: selectedClasses = [] } = useQuery({
        queryKey: ['selected-classes'],
        queryFn: async () => {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/selected-classes?email=${user?.email}`)
            return response.data
        }
    })
    console.log(selectedClasses)
    return (
        <div className='w-11/12 py-10 px-5 bg-base-300 shadow-2xl my-10'>
        <p className='text-3xl font-bold my-5 text-center'>My Selected Classes : {selectedClasses.length}</p>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead className='bg-slate-600 text-white'>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Instructor Name</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedClasses.map((classes, index) =>
                        <tr key={classes._id} className='hover'>
                            <th>{index + 1}</th>
                            <td><img className='w-20' src={classes.image} alt="" /></td>
                            <td>{classes.className}</td>
                            <td>{classes.instructorName}</td>
                            <td>{classes.seats}</td>
                            <td>{classes.price}</td>
                            <td><button onClick={()=>handleSelect(classes)} className='btn btn-primary'>Select</button></td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MySelectedClasses;