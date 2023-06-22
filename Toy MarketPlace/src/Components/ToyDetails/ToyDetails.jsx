import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const ToyDetails = useLoaderData();
  const {
    ToyName,
    SellerName,
    photo,
    categoryName,
    email,
    price,
    rating,
    quantity,
    description,
  } = ToyDetails;
  return (
    <div className="hero font-mono mx-auto min-h-screen bg-base-200">
      <div className="hero-content mx-auto text-center ">
        <div className="max-w-md grid gap-4 mx-auto">
          <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
          <h1 className="text-3xl mt-7 font-bold">ToyName: {ToyName}</h1>
          <p className=""><span className="font-bold">SellerName:</span> {SellerName}</p>
          <p className=""><span className="font-bold">Seller Email:</span>{email}</p>
          <p className=""><span className="font-bold">CategoryName:</span> {categoryName}</p>
          <p className=""><span className="font-bold">Description: </span>{description}</p>
          <p className=""><span className="font-bold">Price:</span> ${price}</p>
          <p className=""><span className="font-bold">Quantity:</span> {quantity}</p>
          <p ><span className="font-bold">Rating:</span> {rating}</p>
         
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
