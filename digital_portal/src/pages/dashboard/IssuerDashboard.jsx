import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import { FaHome, FaSignOutAlt, FaTasks, FaEye, FaCheck, FaTimesCircle, FaBan, FaHistory, FaCommentDots, FaCheckCircle } from "react-icons/fa";


const mockPendingRequests = [
    {id:1, requester: 'Marius Dabove', type :'Birth certificate' ,submitted:'20/02/2026', status:'pending'},
     {id:2, requester: 'yann samir', type :'HND certificate' ,submitted:'20/02/2026', status:'pending'},
      {id:3, requester: 'Blessing Awah', type :'GCE certificate' ,submitted:'20/02/2026', status:'pending'},
];

const mockIssued = [
 {id:4, requester: 'Franck Simonet', type :'Bachelor certificate' ,issued:'20/05/2026', status:'issued'}
]

const mockRevoked = [
 {id:4, requester: 'Emilie Atife', type :'birth  certificate' ,revoked:'20/02/2026', reason:'Duplicate identity'}
];
const navigate = useNavigate();
const handleReview = () =>{
    navigate('/issuer/review/:id')
};

function IssuerDashboard (){
    
    const [activeTab,setActiveTab]= useState('pending');
   
    return(
        
        <div className="flex h-screen bg-gray-50">
            <aside className="w-64 bg-teal-900 text-white flex flex-col">
                <div className="p-6 border-b border-teal-800">
                    <h2 className="text-xl font-bold">Issuer Portal</h2>
                    <p className="text-sm opacity-80">Adminstrative institution</p>
                </div>
                <nav className="flex-1 p-4 space-y-1">
                    <Link to ="/issuer/dashboard" className="flex items-center p-3 rounded hover:bg-teal-800">
                    <FaHome className="mr-3" />Dashboard</Link>
                    <button className={`p-3 flex items-center rounded hover:bg-teal-800 ${activeTab === 'pending' ?' text-white font semibold':'text-white'}`} 
                    onClick={() => setActiveTab('pending')}
                    >
                        <FaTasks className="mr-2" />Pending requests</button>
                        <button className={`p-3 flex items-center  hover:bg-teal-800 ${activeTab === 'issued' ?' text-white font semibold':'text-white'}`} 
                    onClick={() => setActiveTab('issued')}
                    >
                        <FaCheckCircle className="mr-2" />Issued certificates</button>
                     <button className={`p-3 flex items-center  hover:bg-teal-800 ${activeTab === 'revoked' ?' text-white font semibold':'text-white'}`} 
                    onClick={() => setActiveTab('revoked')}
                    >
                        <FaTimesCircle className="mr-2" />Revoked Certificates</button>
                    
                    <Link to ="/issuer/history" className="flex items-center p-3 rounded hover:bg-teal-800">
                    <FaHistory className="mr-3" />Audit History</Link>
                </nav>
                <div className="p-4 border-t border-teal-800">
                    <Link to ="/logout" className="flex items-center p-3 rounded hover:bg-red-100">
                    <FaSignOutAlt className="mr-3" />Logout</Link>
                </div>
            </aside>
            <main className="flex-1 p-8 overflow-y-auto">
                <header className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-teal-900">Issuer Dashboard</h1>
                        <p className="text-gray-600">Review and manage certificate requests</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm">
                            Pending:{mockPendingRequests.Length}
                        </span>
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-lg font-semibold text-gray-700">Pending Requests</h3>
                        <p className="text-4xl font-bold text-teal-600">{mockPendingRequests.Length} 3</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-lg font-semibold text-gray-700">Issued Today</h3>
                        <p className="text-4xl font-bold text-green-600">9</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="text-lg font-semibold text-gray-700">Revoked This Week</h3>
                        <p className="text-4xl font-bold text-teal-600">1</p>
                    </div>
                </div>
                <div className="flex space-x-6 mb-8 border-b border-gray-200">
                    <button className={`pb-3 flex items-center ${activeTab === 'pending' ?'border-b-2 border-teal-600 text-teal-600 font semibold':'text-gray-600'}`} 
                    onClick={() => setActiveTab('pending')}
                    >
                        <FaTasks className="mr-2" />Pending requests</button>
                     <button className={`pb-3 flex items-center ${activeTab === 'issued' ?'border-b-2 border-teal-600 text-teal-600 font semibold':'text-gray-600'}`} 
                    onClick={() => setActiveTab('issued')}
                    >
                        <FaCheckCircle className="mr-2" />Issued certificates</button>
                         <button className={`pb-3 flex items-center ${activeTab === 'revoked' ?'border-b-2 border-teal-600 text-teal-600 font semibold':'text-gray-600'}`} 
                    onClick={() => setActiveTab('revoked')}
                    >
                        <FaTimesCircle className="mr-2" />Revoked Certificates</button>
                </div>

                {activeTab ==='pending' && (
                    <div className="bg-white rounded-xl shadow overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6  py-4 text-left text-sm font-medium text-gray-700">Requester</th>
                                    <th className="px-6  py-4 text-left text-sm font-medium text-gray-700">Type</th>
                                    <th className="px-6  py-4 text-left text-sm font-medium text-gray-700">Submitted</th>
                                    <th className="px-6  py-4 text-left text-sm font-medium text-gray-700">Status</th>
                                    <th className="px-6  py-4 text-right text-sm font-medium text-gray-700">Actions</th>
                                </tr>
                            </thead>
                          <tbody className="divide-y divide-gray-200">
                            {mockPendingRequests.map(req =>(
                                <tr key={req.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-900">{req.requester}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{req.type}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{req.submitted}</td>
                                    <td className="px-6 py-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">
                                            {req.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <div className="flex justify-end space-x-2">
                                            <button onClick={() => handleReview()}   className="text-blue-600 hover:text-blue-900 flex items-center gap-1" title="Review this request">
                                                <FaEye/> Review
                                            </button>
                                             <button className="p-2 text-teal-600 hover:text-teal-800">
                                                <FaCheck />
                                            </button>
                                             <button className="p-2 text-teal-600 hover:text-teal-800">
                                                <FaBan />
                                            </button>
                                             <button className="p-2 text-teal-600 hover:text-teal-800">
                                                <FaCommentDots />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                          </tbody>
                        </table>
                    </div>
                )}

                 {activeTab ==='issued' && (
                    <div className="bg-white rounded-xl shadow overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6  py-4 text-left text-sm font-medium text-gray-700">Requester</th>
                                    <th className="px-6  py-4 text-left text-sm font-medium text-gray-700">Type</th>
                                    <th className="px-6  py-4 text-left text-sm font-medium text-gray-700">Issued</th>
                                    <th className="px-6  py-4 text-right text-sm font-medium text-gray-700">Actions</th>
                                </tr>
                            </thead>
                          <tbody className="divide-y divide-gray-200">
                            {mockIssued.map(item =>(
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-900">{item.requester}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{item.type}</td>
                                    <td className="px-6 py-4 text-sm text-gray-900">{item.issued}</td>
                                    <td className="px-6 py-4 text-right">  </td>
                                            <button className="p-2 text-teal-600 hover:text-teal-800">
                                                <FaEye /> Review
                                            </button>
                                             <button className="p-2 text-teal-600 hover:text-teal-800">
                                                <FaCheck />
                                            </button>
                                             <button className="p-2 text-teal-600 hover:text-teal-800">
                                                <FaBan />
                                            </button>
                                             <button className="p-2 text-teal-600 hover:text-teal-800">
                                                <FaCommentDots />
                                            </button>
                                        
                                    
                                </tr>
                            ))}
                          </tbody>
                        </table>
                    </div>
                )}
            </main>
        </div>
    )
}

export default IssuerDashboard;



