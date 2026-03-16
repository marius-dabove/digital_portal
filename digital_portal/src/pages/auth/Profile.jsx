import { Phone } from "lucide-react";
import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'

const mockUser = {
 id:'user-123',
 fullName:'Marius',
 email:'mariusdabove@example.com',
 phone:'678 123 456',
 dob:'',
 placeOfBirth:'douala-littoral',
 nationality:'cameroonian',
 profilepic:'pic',
 joined:'2026-15-07'
}

function Profile(){
    const navigate = useNavigate();
    const[user] = useState(mockUser);
    const [isEditing,setIsEditing] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        
        navigate('/login');

        alert('you log out sucessfuly')
    };
    const handleEdit = () => {
        setIsEditing(true);
    };
    return(
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                    <div className="bg-linear-to-r from-green-700 to-green-900 p-10 text-white text-center relative">
                        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 ">
                        <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-2xl bg-white">
                            <img src={user.profilepic} alt="profile" className="w-full h-full object-cover"/>
                            
                            </div>
                            </div >
                            <div className="text-center pt-24 text-white">
                            <h1 className="text-4xl font-bold ">{user.fullName}</h1>
                            <p className="text-lg mt-2 opacity-90">{user.email}</p>
                            <p className="text-sm mt-1">Member since      {user.joined}</p></div>
                    </div>
                    <div className="flex justify-center gap-6 p-5">
                        <button onclick={handleEdit} className="px-3 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                            Edit Profile
                        </button>
                        <button onclick={handleLogout} className="px-3 py-2 bg-red-400 text-white rounded-lg hover:bg-red-50 transition">
                            Logout
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
                            Personal Information
                        </h2>
                        <div className="space-y-5">
                            <div className="flex justify-between">
                                <span className="text-gray-600 font-medium">Full Name</span>
                                <span className="font-semibold">{user.fullName}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 font-medium">Email</span>
                                <span className="font-semibold">{user.email}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 font-medium">Phone</span>
                                <span className="font-semibold">{user.phone}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 font-medium">Date of Birth</span>
                                <span className="font-semibold">{user.dob}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 font-medium">Place of Birth</span>
                                <span className="font-semibold">{user.placeOfBirth}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600 font-medium">Nationality</span>
                                <span className="font-semibold">{user.nationality}</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <h2 className="text-2xl font-boldmb-6 text-gray-800 border-b pb-3">
                            Recent Applications
                        </h2>
                        <div className="space-y-6">
                            <div className="border rounded-lg p-4 hover:bg-gray-50 transition">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-semibold">Birth Certificate</h3>
                                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                                        Issued
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600">Application ID: BIR-0459-098700</p>
                                <p className="text-sm text-gray-500 mt-1">Issued on : 2026-02-26</p>
                            </div>

                            <div className="border rounded-lg p-4 hover:bg-gray-50 transition">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-semibold">HND Certificate</h3>
                                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Pending</span>
                                </div>
                                <p className="text-sm text-gray-600">Application ID: HND-20250220-09870</p>
                                <p className="text-sm text-gray-500 mt-1">Submitted on : 2026-02-20</p>
                            </div>
                            <button className="w-full text-center text-green-600 hover:text-green-800 font-medium mt-4">
                                View Applications 
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white  rounded-xl shadow-md p-8 mt-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
                        Security & Settings
                    </h2>
                    <div className="space-y-4">
                        <button className="w-full text-left px-6 py-4 border rounded-lg hover:bg-gray-50 transition">
                            Change Password
                        </button>
                         <button className="w-full text-left px-6 py-4 border rounded-lg hover:bg-gray-50 transition">
                            Two-Factor Authentication
                        </button>
                         <button className="w-full text-left px-6 py-4 border rounded-lg hover:bg-gray-50 transition text-red-600 ">
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;