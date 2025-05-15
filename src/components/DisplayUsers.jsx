import React from 'react'
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../store/Slices/UserSlice';

const DisplayUsers = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.users;
    })
    console.log(data);

    const deleteUser = (id) =>{
        dispatch(removeUser(id));
    }
    
  return (
    <div>
      {
        data.map((curuser,id)=>{
            return <li key={id}>
                <hr className='text-gray-300'/>
                <div className='flex items-center justify-between py-4'>
                {curuser}
                <button onClick={()=> deleteUser(id)} className='text-red-500 text-xl cursor-pointer'><MdDeleteForever /></button>
                </div>
            </li>
        })
      }
    </div>
  )
}

export default DisplayUsers
