import { useContext } from "react";
import { AuthContext } from './../Provider/AuthProvider';
import Swal from 'sweetalert2'

const AddaToy = () => {

  const {user}=useContext(AuthContext)
  const handleAddToy=event=>{
    event.preventDefault();
    const form = event.target;
    const ToyName = form.ToyName.value;
    const SellerName = user?.displayName;
    const photo = form.photo.value;
    const categoryName = form.categoryName.value;
    const email = user?.email;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const postToy ={
      ToyName,SellerName,photo,categoryName, email,price,rating,quantity,description
    }
    console.log(postToy);
    fetch('http://localhost:5000/postToy',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(postToy)
    })
    .then(res=>res.json())
    .then(data=>{

      console.log(data);
      if(data.insertedId){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You have added a toy post successfully',
          showConfirmButton: false,
          timer: 1500
        })
        form.reset()
      }
    })
  
  }
    return (
        <div className="text-center">
        <h1>ADD TOY</h1>
        <form onSubmit={handleAddToy} className="card-body">
          <div className="grid grids-cols-1 gap-6 md:grid-cols-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Name</span>
              </label>
              <input
                type="text"
                placeholder="Toy Name"
                
                name="ToyName"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                placeholder="Seller Name"
                defaultValue={user?.displayName}
                name="SellerName"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Photo Url</span>
              </label>
              <input
                type="text"
                placeholder="Toy Photo Url"
                
                name="photo"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub-category Name</span>
              </label>
              <input
                type="text"
                placeholder=""
                name="categoryName"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
               defaultValue={user?.email}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                placeholder="price"
                name="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                placeholder="rating"
                name="rating"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available quantity</span>
              </label>
              <input
                type="number"
                placeholder="Available quantity"
                name="quantity"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Detail description</span>
              </label>
             <textarea className="border" name="description" placeholder="write your description" id="" cols="30" rows="10"></textarea>
            </div>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="ADD A TOY"
            />
          </div>
        </form>
      </div>
    );
};

export default AddaToy;