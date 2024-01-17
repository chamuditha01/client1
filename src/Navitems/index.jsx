const NavItems=({id,name,path})=>{
    return(
        <div>
            <a style={{fontStyle:'italic'}} id={id} class={"nav-link active"} aria-current="page" href={path}>{name}</a>
        </div>
    )
}
export default NavItems;
