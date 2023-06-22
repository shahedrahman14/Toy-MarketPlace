import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
/* eslint-disable react/prop-types */
const PostedToy = ({ postedToy }) => {
  const {user}=useContext(AuthContext)
  const { photo, ToyName, price, rating } = postedToy;
const handleUser=()=>{
  if(!user){
    Swal.fire({
      icon: 'error',
      text: 'You have to log in first to view details',
      
    })
  }
}

  return (
    <div>
      <div className="card w-96 h-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={photo}
            alt="Shoes"
            className="rounded-xl h-28"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{ToyName}</h2>
          <p>Price:{price}</p>
          <p>Rating:{rating}</p>
          <div className="card-actions">
            <button onClick={handleUser} className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostedToy;
