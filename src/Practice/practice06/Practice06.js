import { Routes, Route, Link, useNavigate } from "react-router";
import Cart from "./Cart";

function Practice06(){

    //생성한 프로젝트
    //npm install react-router
    //index.js <BrowserRouter> 설정

    //Link to
    //navigate

    let navigate = useNavigate();

    return (

        <div>

            {/* <button><Link to="/">Main</Link></button>
            <button><Link to="/info">/info</Link></button>
            <button><Link to="/mypage">/mypage</Link></button>
            <button><Link to="/cart">/cart</Link></button> */}
            <button onClick={()=>{navigate("/")}}>Main</button>
            <button onClick={()=>{navigate("/info")}}>/info</button>
            <button onClick={()=>{navigate("/mypage")}}>/mypage</button>
            <button onClick={()=>{navigate("/cart")}}>/cart</button>

            <Routes>
                <Route path="/" element={<div>Main</div>}></Route>
                <Route path="/info" element={<div>info</div>}></Route>
                <Route path="/mypage" element={<div>mypage</div>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
            </Routes>
        </div>
    );

}
export default Practice06;