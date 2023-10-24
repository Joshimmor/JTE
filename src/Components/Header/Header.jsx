import "./Header.css"
export default function Header ({aboutRef,mediaRef}){
    return(
        <div className="header-base">
            <div className="header-rows-top">
                <a onClick={()=> aboutRef.current.scrollIntoView()}>ABOUT</a>
                <a>SHOP</a>
            </div>
            <div className="header-rows-bottom">
                <a>INSTAGRAM</a>
                <a onClick={()=> mediaRef.current.scrollIntoView()}>MEDIA</a>
            </div>
        </div>
    )
}