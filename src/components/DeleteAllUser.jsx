import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteUsers } from '../store/Slices/UserSlice';

const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteAllUsers = () =>{
    dispatch(deleteUsers());
  }
  return (
    <div className='flex justify-end py-5'>
      <button onClick={()=> deleteAllUsers()} className='px-5 py-2 rounded-[12px] text-white bg-linear-65 from-purple-500 to-pink-500'>Delete All Users</button>
    </div>
  )
}

export default DeleteAllUser
