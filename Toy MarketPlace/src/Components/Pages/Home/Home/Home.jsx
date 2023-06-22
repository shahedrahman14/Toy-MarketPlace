
import BestSection from "../../../BestSection/BestSection";
import Faq from "../../../FAQ/Faq";
import ShopByCategory from "../../../ShopByCategory/ShopByCategory";
import Banner from "../../Banner/Banner";
import PhotoGalery from "../../PhotoGalery/PhotoGalery";

<script src="bower_components/aos/dist/aos.js"></script> 
const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <ShopByCategory></ShopByCategory>
            <PhotoGalery></PhotoGalery>
            <BestSection></BestSection>
            <Faq></Faq>
            <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"></div>
        </div>
    );
};

export default Home;