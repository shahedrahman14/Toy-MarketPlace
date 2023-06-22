const BestSection = () => {
  return (
    <div className=" grid mb-12 my-16">
      <h1 className="text-2xl text-center font-bold my-20">
        Why We Are Best In The Market?
      </h1>
    
        <div className=" mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-16  gap-6 ">
          <div className="card text-left  card-compact w-72 bg-base-100 shadow-xl p-4">
            <figure>
              <img className="w-20" src="https://rb.gy/h9c6u" alt="photo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">Lowest Prices guaranteed</h2>
              <p>
                ToyCarShop price match applies only to USA internet retailers
                that have the identical product and/or good IN STOCK available.{" "}
              </p>
            </div>
          </div>
          <div className="card text-left  card-compact w-72 bg-base-100 shadow-xl p-4">
            <figure>
              <img className="w-20" src="https://rb.gy/bom5f" alt="photo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
                Same Day Dispatch before 3 Pm
              </h2>
              <p>
                Please note if an order has different delivery timesales, the
                fulfillment time for the order will be the olderst timescale.
              </p>
            </div>
          </div>
          <div className="card text-left  card-compact w-72 bg-base-100 shadow-xl p-4">
            <figure>
              <img className="w-20" src="https://rb.gy/e0skx" alt="photo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">
                Rearrange Delivery If Canage Mind
              </h2>
              <p>
                Everything we sell online is covered under Distance Selling
                Regulations by a 14 day cooling-off period.
              </p>
            </div>
          </div>
          <div className="card text-left  card-compact w-72 bg-base-100 shadow-xl p-4">
            <figure>
              <img className="w-20" src="https://rb.gy/ltqox" alt="photo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">Established 31 years Ago</h2>
              <p>
                In 1992 We made our first Move to our current premises in the
                heart of Newyork. We are located in a poking Outdoor Market.
              </p>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default BestSection;
