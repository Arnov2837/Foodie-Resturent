import AboutRestaurant from "@/component/home/AboutRestaurant";
import CustomerReviews from "@/component/home/CustomerReviews";
import Hader from "@/component/home/Hader";
import OrderCTA from "@/component/home/OrderCTA";
import Popular from "@/component/home/Popular";
import SpecialOffer from "@/component/home/SpecialOffer";
import ToodaySpecial from "@/component/home/ToodaySpecial";
import WhyChooseUs from "@/component/home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
     <Hader></Hader>
     <Popular></Popular>
     <ToodaySpecial></ToodaySpecial>
     <SpecialOffer></SpecialOffer>
     <WhyChooseUs></WhyChooseUs>
     <CustomerReviews></CustomerReviews>
     <AboutRestaurant></AboutRestaurant>
     <OrderCTA></OrderCTA>
    </>
  );
}
