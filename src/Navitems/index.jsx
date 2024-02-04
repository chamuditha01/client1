const NavItems=({id,name,path})=>{
    return(
        <div>
            <a style={{color:'#0de2f1'}} id={id} class={"nav-link active"} aria-current="page" href={path}>{name}</a>
        </div>
    )
}
export default NavItems;
