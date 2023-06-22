import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PostedToy from "./PostedToy";
const ShopByCategory = () => {
    const postedToys=useLoaderData()
    console.log(postedToys);
  return (
    <div className="mx-auto text-center ">
        <h1 className="font-bold text-2xl text-center my-14">Shop By Category</h1>
      <Tabs>
        <TabList>
          <Tab>sports car</Tab>
          <Tab>truck</Tab>
          <Tab>regular car</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        
      </Tabs>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {
        postedToys.map(postedToy=><PostedToy key={postedToy._id} postedToy={postedToy}></PostedToy>)
      }
      </div>
    </div>
  );
};

export default ShopByCategory;
