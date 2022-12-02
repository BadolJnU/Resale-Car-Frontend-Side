import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AllBuyer = () => {
    const [remainingBuyer, setBuyer] = useState([])
    const url = `https://server-side-flame.vercel.app/allSellers?role=Buyer`;
  const {data: buyers = []} = useQuery({
    queryKey: ['role', 'buyer'],
    queryFn: async() => {
        const res = await fetch(url, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}` 
            }
        })
        const data = await res.json();
        setBuyer(data)
        return data;
    }
})
const handleDelete = (buyer) => {
    const agree = window.confirm(`Are you sure you want to delete: ${buyer.name}`);
    if(agree){
      fetch(`https://server-side-flame.vercel.app/user/${buyer._id}`, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount > 0) {
          toast('Seller profile deleted successfully')
          const remaining = buyers.filter(user => user._id !== buyer._id);
          setBuyer(remaining);
        }
      })
    }
  }
    return (
      <div>
      <div className="overflow-x-auto my-10 mx-10">
        <table className="table w-full">

          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
                        {
                            remainingBuyer && 
                            remainingBuyer?.map((buyer, i) => <tr className="hover" key={buyer._id}>
                            <th>{i+1}</th>
                            <td>{buyer.name}</td>
                            <td>{buyer.email}</td>
                            <td><button className='btn btn-primary' onClick={() => handleDelete(buyer)}>Delete</button></td>
                        </tr>)
                        }
                    </tbody>
        </table>
      </div>
    </div>
    );
};

export default AllBuyer;