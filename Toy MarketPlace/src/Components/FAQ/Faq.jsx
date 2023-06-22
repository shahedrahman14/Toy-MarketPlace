

const Faq = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">FAQ</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 my-12 px-6 gap-4">
                <div >
                    <h1 className="text-xl font-bold">How is the minimum order quantity? </h1>
                    <p className="text-lg font-medium my-4">The minimum order quantity varies depending on the product. In general, the starting quantity for each item ranges between 48 and 200 pieces. A products total value is around $200USD.</p>
                </div>
                <div >
                    <h1 className="text-xl font-bold">Do you have a certificate? </h1>
                    <p className="text-lg font-medium my-4">The majority of our products are En71 & CE certified and suitable for the European market. If you plan to sell in the US market, we can assist you in acquiring CPC product certification.</p>
                </div>
                <div >
                    <h1 className="text-xl font-bold">What’s the price like?  </h1>
                    <p className="text-lg font-medium my-4">Our prices are reasonable because we only mark up the factory price by about 5%. This is significantly less expensive than the offer from the trader on Alibaba, who typically makes a profit of 20-30% or more.</p>
                </div>
                <div >
                    <h1 className="text-xl font-bold">Can you put my company’s logo on the product?  </h1>
                    <p className="text-lg font-medium my-4">If your order is small, we can place your logo label on the product. We can customize your product packaging, including packaging redesign and printing, if you purchase up to 2000 units.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;