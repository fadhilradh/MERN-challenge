import { Card, ProductName } from "./ItemCard.style";
import Image from "next/image";

const ItemCard = ({ image, alt, productName }) => {
   return (
      <Card>
         <Image src={image} alt={alt} width={150} height={200} />
         <ProductName>{productName}</ProductName>
      </Card>
   );
};

export default ItemCard;
