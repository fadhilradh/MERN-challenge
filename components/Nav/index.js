import { Container, NavLink, Logo, SubscribeButton, Spacer, LinksWrapper } from "./Nav.style"

const Nav = () => {
    return (
        <Container>
            <Logo>LOGO</Logo>
            <Spacer/>

             <LinksWrapper>
                 <NavLink>ABOUT</NavLink>
                 <NavLink>PRODUCTS</NavLink>
                 <NavLink>ARTICLE</NavLink>

                 <SubscribeButton>Subscribe</SubscribeButton>
             </LinksWrapper>

        </Container>
    )
}

export default Nav
