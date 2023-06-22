import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyToyDetails from "./MyToyDetails";
import Swal from "sweetalert2";
const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const url = `https://assignment11-server-site-lemon.vercel.app/simpleToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user?.email,url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment11-server-site-lemon.vercel.app/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted.", "success");
              const remaining = MyToys.filter((myToy) => myToy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };
  // const handleUpdate = (id) => {
  //   fetch(`http://localhost:5000/myToys/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({ status: "confirm" }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.modifiedCount > 0) {
  //         const remaining = myToys.filter((myToy) => myToy._id !== id);
  //         const updated = myToys.find((myToy) => myToy._id === id);
  //         updated.status = "confirm";
  //         const newToy = [updated, ...remaining];
  //         setMyToys(newToy);
  //       }
  //     });
  // };

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

                <th>Edit button</th>
                <th>Delete button</th>
              </tr>
            </thead>
            <tbody className="mx-auto text-center ">
              {myToys.map((myToy, i) => (
                <MyToyDetails
                  key={myToy?._id}
                  i={i}
                  myToy={myToy}
                  handleDelete={handleDelete}
                 
                ></MyToyDetails>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
