import "./Header.css"
export default function Header ({contactRef,mediaRef}){
    return(
        <div className="header-base">
            <div className="header-rows-top">
                <a onClick={()=> contactRef.current.scrollIntoView()}>CONTACT</a>
                <a>SHOP</a>
            </div>
            <div className="header-rows-bottom">
                <a>INSTAGRAM</a>
                <a onClick={()=> mediaRef.current.scrollIntoView()}>MEDIA</a>
            </div>
        </div>
    )
}