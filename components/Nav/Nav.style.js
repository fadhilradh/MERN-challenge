import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   background-color: #6cbe5e;
   padding: 25px 62px;
   display: flex;
   align-items: center;
`;

export const Spacer = styled.div`
    flex-grow: 1;
`

export const Logo = styled.a`
   font-size: 24px;
   font-weight: bold;
   color: #fff;
   &:hover {
        cursor: pointer;
    }
`;

export const LinksWrapper = styled.div`
    display: flex;
    gap: 35px;
    align-items: center;
`

export const NavLink = styled.a`
   font-size: 24px;
   color: #fff;
   &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const SubscribeButton = styled.a`
    border: 1px solid #fff;
    background-color: transparent;
    font-size: 18px;
    padding: 12px 27px;
    color: #fff;
    border-radius:10px;

    &:hover {
        cursor: pointer;
        background-color: white;
        color: #6cbe5e;
    }
`;


