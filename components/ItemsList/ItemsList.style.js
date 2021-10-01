import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   margin: 50px 0;
`;

export const CardsWrapper = styled.div`
   display: grid;
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
   grid-gap: 50px;
   align-items: stretch;
   margin: 0 115px;
`;

export const Title = styled.p`
   font-size: 24px;
   font-weight: 600;
   text-align: center;
`;
