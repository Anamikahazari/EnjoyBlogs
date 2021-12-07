import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
    const user = false;
    return (
        <div className="top w-full flex items-center justify-center font-josefinsans h-50 sticky top-0">
            <div className="topLefttext-white flex-3 text-center ">
                <i className="topIcon ml-4 text-gray-600 fab fa-facebook-square"></i>
                <i className="topIcon ml-4 text-gray-600 fab fa-twitter-square"></i>
                <i className="topIcon ml-4 text-gray-600 fab fa-pinterest-square"></i>
                <i className="topIcon ml-4 text-gray-600 fab fa-instagram-square"></i>
                </div>
            <div className="topCenter flex-6 text-center">
                <ul className="topList flex justify-center m-0 p-0 list-none ">
                    <li className="topListItem text-xl mr-10 text-gray-600 cursor-pointer font-josefinsans mr-5 text-lg font-light">
                        <Link className="link" to ="/" style={{textDecoration:"none", color:"inherit"}}>HOME</Link></li>
                    <li className="topListItem text-xl mr-10 text-gray-600 cursor-pointer font-josefinsans mr-5 text-lg font-light">
                    <Link className="link" to ="/about">ABOUT</Link></li>
                    <li className="topListItem text-xl mr-10 text-gray-600 cursor-pointer font-josefinsans mr-5 text-lg font-light">
                    <Link className="link" to ="/contact" >CONTACT</Link></li>
                    <li className="topListItem text-xl mr-10 text-gray-600 cursor-pointer font-josefinsans mr-5 text-lg font-light">
                    <Link className="link" to ="/Write" >WRITE</Link></li>
                    <li className="topListItem text-xl mr-10 text-gray-600 cursor-pointer font-josefinsans mr-5 text-lg font-light">
                        {user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight flex-3 flex text-center justify-end text-white">
                {
                    user ? (
                        <div className="imgWrapper w-8 h-8"><img className ="topImage w-full h-full object-cover  rounded-full"src="https://t4.ftcdn.net/jpg/02/45/28/17/360_F_245281783_3zeOLu7mhjUmYbFlBwSNsfwQmQZzukWo.jpg" alt=""></img></div>

                    ) : (
                        <>
                        <Link className="link text-black mr-4" to ="/Login">Login</Link>
                        <Link className="link text-black" to ="/Register">Register</Link>
                        </>
                    )
                }
                <i className="topSearchIcon fas fa-search mx-1 my-auto text-lg text-gray-600 ml-4 cursor-pointer"></i>
            </div>
        </div>
    )
}
