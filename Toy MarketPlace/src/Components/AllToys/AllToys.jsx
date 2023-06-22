/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const users = useLoaderData();
console.log(users);

  console.log(users);
  return (
    <div className="my-12 mx-auto">
      <div className="mx-auto  text-center ">
        <div className="overflow-x-auto mx-auto">
          <table className="table table-compact table-auto ">
            <thead>
              <tr>
                <th></th>
                <th>Seller Name</th>
                <th> Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>

                <th>View Details button</th>
              </tr>
            </thead>
            <tbody className="mx-auto text-center ">
              {users.slice(0,20).map((user,i) => (
              
                <tr key={user._id}>
                  <th>{i+1}</th>
                  <td>{user?.SellerName}</td>
                  <td>{user?.ToyName}</td>
                  <td>{user?.categoryName}</td>
                  <td>{user?.price}</td>
                  <td>{user?.quantity}</td>

                  <td>
                    {" "}
                    <Link to={`/postToy/${user._id}`}><button className="btn btn-warning">View Details</button></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
