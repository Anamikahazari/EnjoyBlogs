import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar flex-3 m-10 pb-10 bg-red-100 flex flex-col items-center ">
            <div className="sidebarItem flex flex-col items-center">
                <span className="sidebarTitle m-3 p-1 w-4/5 text-center font-varela border-t-2 border-b-2 border-black font-semibold leading-5">About ME</span>
                <div className="imgWrapper w-60 h-60 mt-10"><img className=" w-full h-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIRv4SvEJ6H9KGNUl5uQIuzQ4PjktQrmjaFw&usqp=CAU"
                alt=""></img></div>
                <p className="mt-10 font-josefinsans p-4 break-word">only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMake</p>
            </div>

            <div className="sidebarItem">
            <span className="sidebarTitle block text-center border-t-2 border-gray-400 border-b-2 p-2 m-6">CATEGORIES</span>
            <ul className="sidebarList text-center">
                <li className="sidebarListItem inline-block w-3/6">Life</li>
                <li className="sidebarListItem inline-block w-3/6">Style</li>
                <li className="sidebarListItem inline-block w-3/6">Content</li>
                <li className="sidebarListItem inline-block w-3/6">Book</li>
                <li className="sidebarListItem inline-block w-3/6">Music</li>
                <li className="sidebarListItem inline-block w-3/6">Ukelele</li>
            </ul>
            </div>


            <div className="sidebarItem  mt-2 ">
            <span className="sidebarTitle block text-center mb-2 border-b-2 border-gray-400 border-t-2 ">FOLLOW US</span>
                <div className="sidebarSocial flex justify-center items-center">
                    <i className="sidebarIcon ml-4 text-gray-600 fab fa-facebook-square"></i>
                    <i className="sidebarIcon ml-4 text-gray-600 fab fa-twitter-square"></i>
                    <i className="sidebarIcon ml-4 text-gray-600 fab fa-pinterest-square"></i>
                    <i className="sidebarIcon ml-4 text-gray-600 fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
