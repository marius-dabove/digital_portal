import React from "react";
import {Link} from 'react-router-dom'
import {FaHome,FaFileAlt, FaUser, FaClock, FaBell, FaSignOutAlt, FaDownload, FaShareAlt, FaTasks} from 'react-icons/fa'
function Sidebar(){
    return(
        <aside className="w-64 bg-teal-950  text-white flex flex-col p-4 space-y-3">
            <h2 className="text-2xl font-black">E-CERTIFY<br/>CITIZEN</h2>
            <nav className="space-y-4">
                <Link to ="/dashboard" className="flex items-center p-3 rounded hover:bg-teal-800"><FaHome className="mr-3"/>Dashboard</Link>
                 <Link to="/certificates/my" className="flex items-center p-3 rounded hover:bg-teal-800"><FaFileAlt className="mr-3"/>My Certificates</Link>
                  <Link to="/certificate/request" className="flex items-center p-3 rounded hover:bg-teal-800"><FaClock className="mr-3" />Pending requests</Link>
                   <Link to="/notification" className="flex items-center p-3 rounded hover:bg-teal-800"><FaBell className="mr-3"/>Notifications</Link>
                   <Link to="/profile" className="flex items-center p-3 rounded hover:bg-teal-800"><FaUser className="mr-3" />Profile</Link>

                    <Link to="/Logout" className="flex items-center p-3 rounded hover:bg-red-800"><FaSignOutAlt className="mr-3"/>Logout</Link>
            </nav>
        </aside>
    )
}
export default Sidebar;