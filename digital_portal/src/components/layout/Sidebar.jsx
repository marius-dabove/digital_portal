import React from "react";
import {Link} from 'react-router-dom'
import {FaHome,FaFileAlt, FaUser, FaClock, FaBell, FaSignOutAlt, FaDownload, FaShareAlt, FaTasks} from 'react-icons/fa'
function Sidebar({activeTab,onTabChange}){
    
    return(
        <aside className="w-64 bg-teal-950  text-white flex flex-col p-4 space-y-3">
            <h2 className="text-2xl font-black">E-CERTIFY<br/>CITIZEN</h2>
            <nav className="mt-6">
                <button onClick={() => onTabChange('dashboard')}
                 className={`w-full flex items-center px-6 py-3 rounded hover:bg-blue-800 transition ${activeTab === 'dashboard'? 'bg-blue-800': ''}`}>
                    <FaHome className="mr-3"/>Dashboard</button>
                 <button onClick={() => onTabChange('documents')} className= {`w-full  flex items-center text-left p-3 rounded hover:bg-blue-800 transition ${activeTab === 'documents'? 'bg-teal-800': ''}`}>
                    <FaFileAlt className="mr-3"/>My Certificates</button>
                  <button onClick={() => onTabChange('pending')} className={`w-full flex items-center p-3 rounded hover:bg-blue-800 transition ${activeTab === 'pending'? 'bg-teal-800': ''}`}>
                    <FaClock className="mr-3" />Pending requests</button>
                   <button onClick={() => onTabChange('notifications')} className={`w-full flex items-center p-3 rounded hover:bg-blue-800 transition ${activeTab === 'notifications'? 'bg-teal-800': ''}`}>
                    <FaBell className="mr-3"/>Notifications</button>
                   <Link to="/profile" className="flex items-center p-3 rounded hover:bg-teal-800"><FaUser className="mr-3" />Profile</Link>

                    <button onClick={() => navigate('/home')} className="flex items-center p-3 rounded hover:bg-red-800" ><FaSignOutAlt className="mr-3"/>Logout</button>
            </nav>
        </aside>
    )
}
export default Sidebar;