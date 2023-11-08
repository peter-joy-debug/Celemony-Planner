import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import {HeaderMegaMenu} from '../src/components/navbar/navbar.component';
import Carousels from '../src/components/carousel/carousel.component';
import {Features} from '../src/components/features/feature.component';
import {Promotion} from '../src/components/promotional/promotion.component';
import {Property} from '../src/components/property/property.component';
import {EmailBanner} from '../src/components/banners/email.banner';
import { ColorSchemeProvider } from '@mantine/core';
import { data } from '../src/data/footerData/footerLinks';
import { FooterLinks } from '../src/components/footer/footer.component';
import {CategoryComponent} from '../src/components/categories/category.component';
import {HeroWelcomeComponent} from '../src/components/carousel/hero.header.component';
import {Testmonial} from '../src/components/testmonial/testmonial.component';
import  BookingFilter  from '../src/components/booking/bookings.component';


const inter = Inter({ subsets: ['latin'] })
const products = [
  {
    id: 1,
    name: 'iPhone 13 Pro',
    category: 'Phone',
    brand: 'Apple',
    color: 'Silver',
    size: '6.1 inch',
    price: 999,
  },
  {
    id: 2,
    name: 'Samsung Galaxy S21',
    category: 'Phone',
    brand: 'Samsung',
    color: 'Black',
    size: '6.2 inch',
    price: 799,
  },
  {
    id: 3,
    name: 'MacBook Pro 13',
    category: 'Laptop',
    brand: 'Apple',
    color: 'Space Gray',
    size: '13 inch',
    price: 1499,
  },
  {
    id: 4,
    name: 'LG OLED TV',
    category: 'TV',
    brand: 'LG',
    color: 'Black',
    size: '55 inch',
    price: 1499,
  },
  {
    id: 6,
    name: 'Apple Watch Series 7',
    category: 'Smartwatch',
    brand: 'Apple',
    color: 'Graphite',
    size: '42mm',
    price: 399,
  },
  {
    id: 7,
    name: 'Dell XPS 15',
    category: 'Laptop',
    brand: 'Dell',
    color: 'Platinum Silver',
    size: '15.6 inch',
    price: 1899,
  },
  {
    id: 8,
    name: 'Sony Playstation 5',
    category: 'Gaming Console',
    brand: 'Sony',
    color: 'White',
    size: 'Standard',
    price: 499,
  },
  {
    id: 9,
    name: 'Nikon Z7 II',
    category: 'Camera',
    brand: 'Nikon',
    color: 'Black',
    size: 'Mirrorless',
    price: 2499,
  },
  {
    id: 10,
    name: 'Google Pixel 6 Pro',
    category: 'Phone',
    brand: 'Google',
    color: 'Stormy Black',
    size: '6.7 inch',
    price: 899,
  },
  {
    id: 11,
    name: 'Microsoft Surface Laptop 4',
    category: 'Laptop',
    brand: 'Microsoft',
    color: 'Platinum',
    size: '13.5 inch',
    price: 1399,
  },
  {
    id: 12,
    name: 'Canon EOS R6',
    category: 'Camera',
    brand: 'Canon',
    color: 'Black',
    size: 'Mirrorless',
    price: 1999,
  },
  {
    id: 13,
    name: 'Fitbit Charge 4',
    category: 'Fitness Tracker',
    brand: 'Fitbit',
    color: 'Rosewood',
    size: 'One Size',
    price: 129,
  },
  {
    id: 14,
    name: 'Sony 65" A80J OLED TV',
    category: 'TV',
    brand: 'Sony',
    color: 'Black',
    size: '65 inch',
    price: 2499,
  },
  {
    id: 15,
    name: 'Bose QuietComfort 45',
    category: 'Headphones',
    brand: 'Bose',
    color: 'Triple Black',
    size: 'One Size',
    price: 329,
  },
  {
    id: 16,
    name: 'Nintendo Switch OLED Model',
    category: 'Gaming Console',
    brand: 'Nintendo',
    color: 'White',
    size: 'Standard',
    price: 349,
  },
  {
    id: 17,
    name: 'HP Spectre x360',
    category: 'Laptop',
    brand: 'HP',
    color: 'Nightfall Black',
    size: '13.3 inch',
    price: 1099,
  },
  {
    id: 18,
    name: 'Bose SoundLink Revolve+',
    category: 'Bluetooth Speaker',
    brand: 'Bose',
    color: 'Lux Gray',
    size: 'One Size',
    price: 249,
  },
  {
    id: 19,
    name: 'Fujifilm X-T4',
    category: 'Camera',
    brand: 'Fujifilm',
    color: 'Silver',
    size: 'Mirrorless',
    price: 1699,
  },
  {
    id: 20,
    name: 'Garmin Forerunner 955 LTE',
    category: 'Smartwatch',
    brand: 'Garmin',
    color: 'Black',
    size: '6.2 inch',
    price: 549,
  },
  {
    id: 21,
    name: 'Garmin Forerunner 955',
    category: 'Smartwatch',
    brand: 'Garmin',
    color: 'Black',
    size: '13 inch',
    price: 649,
  },
  {
    id: 22,
    name: 'Garmin Forerunner',
    category: 'TV',
    brand: 'Samsung',
    color: 'Black',
    size: '55 inch',
    price: 649,
  }

  // Add more products...
];



export default function Home() {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <ColorSchemeProvider>
    {/* <HeaderMegaMenu/> */}
    {/* <HeaderMegaMenu onLanguageChange={handleLanguageChange} /> */}
    <HeaderMegaMenu language={language} onLanguageChange={handleLanguageChange} />
    {/* <Carousels/> */}
  <HeroWelcomeComponent/>
    <CategoryComponent/>
    <Features/>
    <Property language={language} onLanguageChange={handleLanguageChange} /> 
   
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    {/* <Property/>  */}
    <Promotion/>  
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Testmonial/>
    {/* <EmailBanner/>  */}
    {/* <BookingFilter/>  */}
    {/* <BookingFilter products={products} /> */}
    <FooterLinks data={data.data} />
   </ColorSchemeProvider>
  )
}
