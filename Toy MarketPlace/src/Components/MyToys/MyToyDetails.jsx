/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const MyToyDetails = ({myToy,i,handleDelete}) => {
    const {SellerName,ToyName,categoryName,price,quantity,_id}=myToy

 
    return (
        <tr key={myToy._id}>
        <th>{i + 1}</th>
        <td>{SellerName}</td>
        <td>{ToyName}</td>
        <td>{categoryName}</td>
        <td>{price}</td>
        <td>{quantity}</td>

        <td>
          {" "}
          <Link to={`/UpdateToy/${_id}`}><button className="btn btn-secondary">Edit</button></Link>
        </td>

        <td>
          {" "}
          <button onClick={()=>handleDelete(_id)} className="btn btn-warning">Delete    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
        </td>
      </tr>
    );
};

export default MyToyDetails;