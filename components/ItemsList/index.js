import { Container, Title, CardsWrapper } from "./ItemsList.style";

const ItemsLIst = ({ children }) => {
   return (
      <Container>
         <Title>Products</Title>
         <CardsWrapper>{children}</CardsWrapper>
      </Container>
   );
};

export default ItemsLIst;
