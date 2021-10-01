import styled from "styled-components";

export const Card = styled.div`
   background: #fafafa;
   box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.1);
   height: 400px;
   display: flex;
   flex-direction: column;
   padding: 52px 10px;
   gap: 75px;
   width: 300px;
   &:hover {
      background: #8b8b8b;
      cursor: pointer;
   }
`;

export const ProductName = styled.p`
   text-align: center;
   font-size: 16px;
   font-weight: 600;
`;
