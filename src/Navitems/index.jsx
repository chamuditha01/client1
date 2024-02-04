const NavItems=({id,name,path})=>{
    return(
        <div>
            <a style={{color:'#f1bc0d'}} id={id} class={"nav-link active"} aria-current="page" href={path}>{name}</a>
        </div>
    )
}
export default NavItems;
