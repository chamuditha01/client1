import './index.css';

const NavItems=({name,path})=>{
    return(
        <div >
            <a id="nav1"  href={path}><p id="nav">{name}</p></a>
        </div>
    )
}
export default NavItems;
