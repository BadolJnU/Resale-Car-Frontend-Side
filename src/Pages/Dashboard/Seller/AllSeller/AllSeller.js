import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {
  const [remainingseller, setSeller] = useState([])

  const url = `http://localhost:5000/allSellers?role=Seller`;
  const {data: sellers = []} = useQuery({
    queryKey: ['role', 'seller'],
    queryFn: async() => {
        const res = await fetch(url, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}` 
            }
        })
        const data = await res.json();
        setSeller(data)
        return data;
    }
})
const handleDelete = (seller) => {
  const agree = window.confirm(`Are you sure you want to delete: ${seller.name}`);
  if(agree){
    fetch(`http://localhost:5000/user/${seller._id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount > 0) {
        toast('Seller profile deleted successfully')
        const remaining = sellers.filter(user => user._id !== seller._id);
        setSeller(remaining);
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
              <th>Verified</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
                        {
                            remainingseller && 
                            remainingseller?.map((seller, i) => <tr className="hover" key={seller._id}>
                            <th>{i+1}</th>
                            <td>{seller.name}</td>
                            <td>{seller.email}</td>
                            <td><button className='btn btn-outline btn-primary'>Verify</button></td>
                            <td><button className='btn btn-primary' onClick={() => handleDelete(seller)}>Delete</button></td>
                        </tr>)
                        }
                    </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;