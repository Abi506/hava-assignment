import {Container,Navbar,Nav,Row,Col} from 'react-bootstrap'
import './sidenavbar.css'
import { IoMdHome } from "react-icons/io";
import { MdDialpad } from "react-icons/md";


const SideNavbar=()=>{
    return(
        <div fluid className='bg-body-tertiary side-navbar' style={{width:"100px"}}>
            <div className='d-flex each-container'>
            <IoMdHome style={{marginTop:"15px", marginBottom:"10px",smarginLeft:" 10px",height:'20px'}}/>
            <h1 className='side-text'>Home</h1>
            </div>

            <div className='d-flex each-container'>
            <MdDialpad style={{marginTop:"15px",marginLeft:" 5px",height:'20px'}}/>
            <h1 className='side-text'>Dashboard</h1>
            </div>

            <div className='each-container'>
                <h1  className='side-text'>Services</h1>
            </div>

            <div className='each-container'>
                <h1  className='side-text'>Airports</h1>
            </div>
            <div className='each-container'>
                <h1  className='side-text'>Videos</h1>
            </div>
            
            <div className='each-container'>
                <h1  className='side-text'>Others</h1>
            </div>
            <div className='each-container'>
                <h1  className='side-text'>List 1</h1>
            </div>
            <div className='each-container'>
                <h1  className='side-text'>List 2</h1>
            </div>
            <div className='each-container'>
                <h1  className='side-text'>List 3</h1>
            </div>

        </div>
    )
}
export default SideNavbar