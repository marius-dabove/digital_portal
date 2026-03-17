import React, {useState} from "react";
import AdminLayout from "./AdminLayout.jsx";
import { Building2,Edit,Trash2,Search,X } from "lucide-react";


function ManageIssuers(){
    const issuers = [
        { id: 1,  name:'Marius Dabove', institution:'University of Douala',email:'dabove@gmail.com', status: 'active', joined:'10/02/2026', certificateIssued:2450},
         { id: 1, name:'yann samir', institution:'University of Douala',email:'mariusdabove@gmail.com', status: 'active', joined:'10/02/2026', certificateIssued:2450},
          { id: 1,name:'Wealth holy', institution:'University of Douala',email:'dabove@gmail.com', status: 'active', joined:'10/02/2026', certificateIssued:2450}
    ];
   const [search, setSearch] = useState('');
   const [showAddModal,setShowAddModal] = useState(false);
   const[newIssuer, setNewIssuer]= useState({
    name:'',
    email:'',
    institution:'',
    phone:'',
    status:'',
    certificateIssued:'',
    joined:'',

   })
    const filtereredIssuers = issuers.filter ( i =>
        i.name.toLowerCase().includes(search.toLowerCase())||
        i.email.toLowerCase().includes(search.toLowerCase())
    );
    const handleAddIssuers = (e) => {
        e.preventDefault()
        if(!newIssuer.name.trim() || !newIssuer.email.trim()|| !newIssuer.phone.trim()|| !newIssuer.joined.trim()||  !newIssuer.status.trim()|| !newIssuer.institution.trim());
            alert('please fill trhe required field');
        return;

 setNewIssuer({name:'',email:'',
    institution:'',
    phone:'',
    status:' active',
    certificateIssued:0,
    joined:'',

    });
    setShowAddModal(false);
    };

    return (
        <AdminLayout pageTitle="Manage Issuers">
            <div className="space-x-8">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div className="relative flex-1 max-w-md">
                        < Search className="absolute left-3 top-6 flex items-center transform -translate-1/2 text-gray-400 mr-3 " size={18}/>
                        <input type="text" placeholder="Search issuers by name or email..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500  focus:border-teal-500 dark:bg-gray-800 dark:text-white mb-8"/>
                    </div>
                    <button onClick={() => setShowAddModal(true)} 
                    className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-colors">Add New Issuer</button>

                </div>
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-x-auto border border-gray-200 dark:border-gray-800">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400  uppercase -tracking-wider">Name</th>
                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400  uppercase -tracking-wider">Institution</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400  uppercase -tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400  uppercase -tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400  uppercase -tracking-wider">Joined</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400  uppercase -tracking-wider">Certificates Issued</th>
                                <th className="px-1 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400  uppercase -tracking-wider">Actions</th>
                                

                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {filtereredIssuers.map(issuers =>(
                                <tr key={issuers.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-gray-200 ">{issuers.name}</td>
                                     <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700 dark:text-gray-200 ">{issuers.institution}</td>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700 dark:text-gray-200 ">{issuers.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap ">
                                        <span className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${issuers.status === 'active' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200' :'bg-yellow-100 text-yellow-700 dark:yellow-900 dark:text-green-200' }`}>{issuers.status}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700 dark:text-gray-200 ">{issuers.joined}</td>
                                    <td className="px-8 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-gray-200 ">{issuers.certificateIssued}</td>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-right text-sm">
                                        <button className="text-blue-600 hover:text-blue-900 mr-3"><Edit size={18}/></button>
                                         <button className="text-red-600 hover:text-red-900 mr-3"><Trash2 size={18}/></button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {showAddModal && (
                    <div className="fixed inset-0 bg-teal-600 bg-opacity-60 flex items-center justify-center z-50 p-4">
                        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
                            <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">

                          <h2 className="text-2xl font-bold">Add new issuer</h2>
                          <button onClick={() => setShowAddModal(false)}
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"><X size={24}/></button>
                             </div>
                             <form onSubmit={handleAddIssuers} className="p-6 space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Institution Name
                                    </label>
                                    <input type="text" value={newIssuer.institution} onChange={(e) => setNewIssuer({...newIssuer,institution: e.target.value})} required
                                    className="w-full px-4 py-2 border border-gray-300 dark:text-gray-600 rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-teal-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Issuer Name
                                    </label>
                                    <input type="text" value={newIssuer.name} onChange={(e) => setNewIssuer({...newIssuer, name: e.target.value})} required
                                    className="w-full px-4 py-2 border border-gray-300 dark:text-gray-600 rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-teal-500" />
                                </div>
                                 <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Email
                                    </label>
                                    <input type="email" value={newIssuer.email} onChange={(e) => setNewIssuer({...newIssuer, email: e.target.value})} required
                                    className="w-full px-4 py-2 border border-gray-300 dark:text-gray-600 rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-teal-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Phone number
                                    </label>
                                    <input type="tel" value={newIssuer.phone} onChange={(e) => setNewIssuer({...newIssuer, phone: e.target.value})} required
                                    className="w-full px-4 py-2 border border-gray-300 dark:text-gray-600 rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-teal-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Joined
                                    </label>
                                    <input type="date" value={newIssuer.joined ||'' } onChange={(e) => setNewIssuer({...newIssuer, joined: e.target.value})} required
                                    className="w-full px-4 py-2 border border-gray-300 dark:text-gray-600 rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-teal-500" />
                                </div>
                                   <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Status
                                    </label>
                                    <select  value={newIssuer.status || 'active'} onChange={(e) => setNewIssuer({...newIssuer,  status: e.target.value})} required
                                    className="w-full px-4 py-2 border border-gray-300 dark:text-gray-600 rounded-lg dark:bg-gray-800 focus:ring-2 focus:ring-teal-500" >
                                        <option value="active">Active</option> 
                                        <option value="inactive">Inactive</option>
                                        </select>
                                </div>
                                <input type="hidden" value={newIssuer.certificateIssued || 0}
                                name="certificateIssued" />
                                  <div className="flex justify-end gap-4 border-t border-gray-200">
                                    <button type="button" onClick={() =>setShowAddModal(false)}
                                    className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                        Cancel
                                    </button>
                                    <button type="submit" className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Add Issuer</button>"
                                  </div>
                                
                             </form>
                            </div>
                        </div>
                )}
                
            </div>
        </AdminLayout>
    )

}

export default ManageIssuers;