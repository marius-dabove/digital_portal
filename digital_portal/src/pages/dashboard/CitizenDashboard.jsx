import React,{useState} from "react";
import Sidebar from '../../components/layout/Sidebar.jsx'
import DocumentCard from '../../components/ui/DocumentCard.jsx'
import Button from '../../components/ui/Button.jsx'
import {FaHome,FaFileAlt,FaPlusCircle,FaBell,FaSignOutAlt,FaDownload,FaShareAlt} from 'react-icons/fa'
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const mockDocuments = [
    {id:1, title: 'Birth Certificate', date:'15/03/2000', status: 'valid', idNumber:'CM-BIR-20230013457'},
    {id:1, title: 'Bac certificate', date:'15/03/2000', status: 'pending', idNumber:'CM-BIR-20230013457'},
    {id:1, title: 'GCE certificate', date:'15/03/2000', status: 'pending', idNumber:'CM-BIR-20230013457'}
]

const mockPendingRequests = [
   {id:3,type:'Academic Certificate', submitted:'20/02/2026', status:'In review'}
]
const mockNotifications = [
    {id:1, message: 'your birth certificate is ready for download', date: '21/02/2026'}
]

function CitizenDashboard(){
    const [activeTab,setActiveTab] = useState('documents');
    const navigate = useNavigate();
    const userName ='Marius';

    const [documents, setDocuments] = useState([]);
    const [pendingRequest, setPendingRequest] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    return(
        <div className="flex h-screen bg-white">
            <Sidebar
            activeTab={activeTab}
            onTabChange={setActiveTab}
            
            />

        <main className="flex-1 p-6 overflow-y-auto">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-teal-700">Citizen Dashboard</h1>
                <h1 className="text-3xl md:text-2xl font-bold mb-3">
                    WELCOME, {userName.toUpperCase}
                </h1>
                <div className="bg-teal-600 text-black">
                <Button variant="primary"  onclick={() => navigate('/home')}>
                    New Certificate Request
                </Button></div>
            </header>
            <div className="flex space-x-4 mb-6">
                <button className={`pb-2 ${activeTab === 'documents'? 'border-b-2 border-teal-600 text-teal-600 font-bold ': 'text-gray-600'}`} onclick={()=> setActiveTab('documents')}>
                    My Documents
                </button>
                <button className={`pb-2 ${activeTab === 'requests'? 'border-b-2 border-teal-600 text-teal-600 font-bold ': 'text-gray-600'}`} onclick={()=> setActiveTab('requests')}>
                    Pending Request
                </button>
                <button className={`pb-2 ${activeTab === 'notifications'? 'border-b-2 border-teal-600 text-teal-600 font-bold ': 'text-gray-600'}`} onclick={()=> setActiveTab('notifications')}>
                    Notifications
                </button>
            </div>
            {activeTab === 'documents' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mockDocuments.map(doc =>(
                        <DocumentCard key={doc.id}{...doc} />
                    ))}
                </div>
            )}

            {activeTab === 'requests' && (
                <div className="space-y-4">
                    {mockPendingRequests.map(req => (
                        <div key={req.id} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold">{req.type}</h3>
                                <p className="text-sm text-gray-600 ">Submitted: {req.submitted}</p>
                            </div>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">{req.status}</span>
                            </div>
                    ))}
                </div>


            )}
            {activeTab === 'notifications' && (
                <div className="space-y-4">
                    {mockNotifications.map(notif =>(
                        <div key={notif.id} className="bg-whitep-4 rounded-lg shadow">
                            <p>{notif.message}</p>
                            <p className="text-sm text-gray-500">{notif.date}</p>
                            </div>
                    ))}
                </div>
            )}
        </main>

        </div>
    );
}

export default CitizenDashboard;