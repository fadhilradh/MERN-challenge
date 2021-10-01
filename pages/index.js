import Head from "next/head";
import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import Nav from "../components/Nav";
import ItemsList from "../components/ItemsList";
import Image from "next/image";
import banner from "../public/assets/banner.svg";
import axios from "axios";

const Home = () => {
   const [products, setProducts] = useState([]);
   useEffect(() => {
      axios
         .get("http://localhost:5000/api/products")
         .then((response) => {
            console.log(response);
            setProducts(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);
   return (
      <div>
         <Head>
            <title>Mas Richo Challenge</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <Nav />
         <Image src={banner} alt="banner" layout="responsive" />
         <ItemsList>
            {products.map((product) => (
               <ItemCard
                  key={product.alt}
                  image={product.image}
                  alt={product.alt}
                  productName={product.productName}
               />
            ))}
         </ItemsList>
      </div>
   );
};

export default Home;
