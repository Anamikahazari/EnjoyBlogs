import './header.css'

export default function Header() {
    return (
        <div className="header mt-14">
           <div className="headerTitles flex flex-col font-loraserif items-center text-gray-600">
               <span className="headerTitleSmall absolute text-xl text-gray-600">React & Node</span>
               <span className="headerTitleLarge  absolute text-8xl text-gray-600">Blog</span>
           </div>
           <div className="imgWrapper w-full h-auto mt-5">
            <img className="w-full h-full object-cover " src="https://media.istockphoto.com/photos/white-office-desk-with-copy-space-open-notebook-keyboard-coffee-and-picture-id1277758901?b=1&k=20&m=1277758901&s=170667a&w=0&h=u_dkWMN7S3d4czXzxM_2YNTXBS3M6FTLb8KEhQ-uCME=" alt=""></img>
           </div>
        </div>
    )
}
