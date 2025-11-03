
import Navbar from "./Navbar/Navbar";
import Sarvis from "./Component/Sarvis";
import Hero1 from "./Component/Hero1";
import Hero2 from "./Component/Hero/Hero2";
import Hero3 from "./brands/Hero3";
import CategorySection from "./categories/CategorySection";
import FullHome from "./Component/Home/FullHome";
import Catagory1 from "./shop/Catagory1";
import Banar from "./Component/Banar";
import Catagory2 from "./shop/Catagory2";
import LatestArtical from "./Component/LatestArtical";
import Lastfotar from "./Component/Lastfotar";
// import All_Ct from "./ct/All_Ct";



export default function Home() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
        {/* <All_Ct></All_Ct> */}
        <Hero1></Hero1>
      </div>
      <Hero2></Hero2>

    
      <Sarvis></Sarvis>
     <Hero3></Hero3>
     <CategorySection></CategorySection>
     <FullHome></FullHome>

     <Catagory1></Catagory1>
     <Banar></Banar>
     <Catagory2></Catagory2>

     <LatestArtical></LatestArtical>
     <Lastfotar></Lastfotar>


     
    </div>
  );
}
