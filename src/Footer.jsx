import React from "react";
let y=new Date().getFullYear(); 
const Footer=()=>{
    return(
        <>
            <footer className="footer">
                <p>Copyright &copy; {y}</p>
            </footer>
        </>
    )
}
export default Footer;