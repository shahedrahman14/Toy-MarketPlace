const Blog = () => {
  return (
    <div className="">
      <div className="my-4 grid gap-2">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-bold">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </div>
          <div className="collapse-content grid gap-3 font-medium">
            <p>
              Access token is a credential that can be used by an application to
              access an API.
            </p>
            <p>
              Refresh token is a credential artifact that can be used to get a
              new access token without user interaction.
            </p>
            <p>
              We can store them in both Local Storage and cookie in client side.
              We should use cookie in client side. Because, it is more safer
              than local storage.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-bold">
            Compare SQL and NoSQL databases?
          </div>
          <div className="collapse-content">
            <div className="overflow-x-auto ">
              <table className="table font-medium w-full">
                {/* head */}
                <thead>
                  <tr className="font-bold">
                    <th>SQL</th>
                    <th>NoSQL</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>
                      {" "}
                      SQL databases are primarily called RDBMS or Relational
                      Databases
                    </td>
                    <td>
                      {" "}
                      NoSQL databases are primarily called as Non-relational or
                      distributed database
                    </td>
                  </tr>
                  <tr>
                    <td> vertically scalable</td>
                    <td> horizontally scalable</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td> table-based</td>
                    <td>document based, or wide-column stores</td>
                  </tr>
                  {/* row 3 */}

                  <tr>
                    <td> better for multi-row transactions</td>
                    <td>
                      {" "}
                      better for unstructured data like documents or JSON
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-bold">
          What is express js? What is Nest JS? 
          </div>
          <div className="collapse-content">
            <p className="font-medium">
            Express is a  framework  of Node. js that is minimalist and flexible also  easy to use . So it has a large community of developers. <br /> <br />
            NestJS is a framework for developing modern server-side applications in Node. js.
             It is used to create outstanding, well-organized, and lightweight microservices in site.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-bold">
          What is MongoDB aggregate and how does it work ?
          </div>
          <div className="collapse-content">
            <p className="font-medium">
            Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
            </p>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default Blog;
