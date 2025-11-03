import React from 'react';
import Catagory from './Catagory1';
import Catagory2 from './Catagory2';
import AllProduct from './AllProduct';
import Banner from '../Component/Banar';
import CategorySection from '../categories/CategorySection';
import ShoppingEvent from '../Component/Home/ShoppingEvent';

const page = () => {
    return (
        <div>
             <Banner></Banner>
           <AllProduct></AllProduct>
           <Catagory></Catagory>
           <ShoppingEvent></ShoppingEvent>
           <Catagory2></Catagory2>
        </div>
    );
};

export default page;