import { Link } from "react-router-dom";
import Heading from "./Heading";


const Footer = () => {
    return (
       <div className="bg-white p-10 ">
         <Heading title = {'Gadget Heaven'} subtitle = {'Leading the way in cutting-edge technology and innovation.'} ></Heading>
          <div className="divider container mx-auto py-10"></div>
         <footer className="inter footer container mx-auto flex justify-around  sm:footer-horizontal   text-base-content ">


            <nav>
                <h6 className=" text-xl text-black font-bold">Services</h6>
                <Link to='/' className="link link-hover text-gray-500">Branding</Link>
                <Link to='/' className="link link-hover text-gray-500 ">Design</Link>
                <Link to='/' className="link link-hover text-gray-500">Marketing</Link>
                <Link to='/' className="link link-hover text-gray-500">Advertisement</Link>    
            </nav>
            <nav>
                <h6 className=" text-xl text-black font-bold">Company</h6>
                <Link to='/' className="link link-hover text-gray-500 ">About us</Link>
                <Link to='/' className="link link-hover text-gray-500">Contact</Link>
                <Link to='/' className="link link-hover text-gray-500">Jobs</Link>
                <Link to='/' className="link link-hover text-gray-500">Press kit</Link>    
            </nav>
            <nav>
                <h6 className=" text-xl text-black font-bold">Legal</h6>
                <Link to='/' className="link link-hover text-gray-500 ">Terms of use</Link>
                <Link to='/' className="link link-hover text-gray-500">Privacy policy</Link>
                <Link to='/' className="link link-hover text-gray-500">Cookie policy</Link>    
            </nav>
        
        </footer>
       </div>

    );
};

export default Footer;