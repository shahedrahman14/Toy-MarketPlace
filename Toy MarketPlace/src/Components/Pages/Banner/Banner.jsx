const Banner = () => {
  return (
    <div className="my-16 shadow-lg rounded-xl">
       <div data-aos="fade-up" data-aos-anchor-placement="top-center shadow-lg rounded-xl"></div>
      <div className=" w-full shadow-lg rounded-xl p-8 bg-slate-200  ">
        <div className="md:flex justify-between items-center ">
          <div className="grid gap-7 w-1/2">
            <h2 className="text-6xl font-medium">Affordable Price For toy car</h2>
            <p>
              A model car, or toy car, is a miniature representation of an
              automobile. Other miniature motor vehicles, such as trucks, buses,
              or even ATVs, etc. are often included in this general category.{" "}
            </p>
            <div className="flex  gap-3">
              <button className="btn btn-primary">Discover More</button>
            </div>
          </div>
          <div className="mt-16">
          <img src="https://rb.gy/3u0p5" className="w-96 h-96 rounded-lg" />
        </div>
        </div>
      
      
      </div>
    </div>
  );
};

export default Banner;
