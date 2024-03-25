import { Link } from "react-router-dom"




const Navbar = () => {
    return (
        <header>
            <Nav>
                <Link to={"/"}>홈</Link> {/*main 으로 할거*/}
                <Link to={"/"}>상품추가</Link> {/*itemadd 으로 할거*/}
                <Link to={"/"}>레시피</Link> {/*recipe 으로 할거*/}
                <Link to={"/"}>마이페이지</Link> {/*member 으로 할거*/}
            </Nav>
        </header>
    )
}

export default Navbar;