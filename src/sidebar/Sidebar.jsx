import './sidebar.css'

export default function Sidebar() {
    return (
        <div className="sidebar flex-3">
            <div className="sidebarItem">
                <span className="sidebarTitle">About ME</span>
                <div className="imgWrapper w-40 h-40"><img className=" w-full h-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIRv4SvEJ6H9KGNUl5uQIuzQ4PjktQrmjaFw&usqp=CAU"
                alt=""></img></div>
                <p>only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMake</p>
            </div>

            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Content</li>
                <li className="sidebarListItem">Book</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Ukelele</li>
            </ul>
            </div>


            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon ml-4 text-gray-600 fab fa-facebook-square"></i>
                    <i className="sidebarIcon ml-4 text-gray-600 fab fa-twitter-square"></i>
                    <i className="sidebarIcon ml-4 text-gray-600 fab fa-pinterest-square"></i>
                    <i className="sidebarIcon ml-4 text-gray-600 fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
