
import React, {useState} from "react";
import AdminLayout from "./AdminLayout.jsx";
import {Search,UserCheck,UserX,Edit,Trash2} from 'lucide-react'

function Users(){
    const Users = [
        { id: 1,  name:'Marius Dabove', email:'dabove@gmail.com', role:'issuer', status: 'active', joined:'10/02/2026', certificateIssued:2450},
         { id: 2, name:'yann samir',email:'mariusdabove@gmail.com', role:'citizen', status: 'active', joined:'10/02/2026', certificateIssued:2450},
          { id: 3,name:'Wealth holy', email:'dabove@gmail.com', role:'admin', status: 'active', joined:'10/02/2026', certificateIssued:2450}
    ]
    const [search, setSearch] = useState('');
    const[newUser, setNewUser]= useState({
        name:'',
        email:'',
         phone:'',
        status:'',
        certificateIssued:'',
        joined:'',
        role:'',
    
       })
        const filtereredUsers = Users.filter ( u =>
        u.name.toLowerCase().includes(search.toLowerCase())||
        u.email.toLowerCase().includes(search.toLowerCase())
    );

return(
    <AdminLayout pageTitle="Manage Users">
     <div className="space-x-8">
                     <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                         <div className="relative flex-1 max-w-md">
                             < Search className="absolute left-3 top-6 flex items-center transform -translate-1/2 text-gray-400 mr-3 " size={18}/>
                             <input type="text" placeholder="Search issuers by name or email..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500  focus:border-teal-500 dark:bg-gray-800 dark:text-white mb-8"/>
                         </div>
                         <button
                         className="px-6 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-colors">Add New User</button>
                           
                         </div>
                          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-x-auto border border-gray-200 dark:border-gray-800">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400  uppercase -tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400  uppercase -tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400  uppercase -tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400  uppercase -tracking-wider">Role</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400  uppercase -tracking-wider"> Joined</th>
                                <th className="px-1 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400  uppercase -tracking-wider">Actions</th>
                                 </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                    {filtereredUsers.map(Users =>(
                             <tr key={Users.id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-gray-200 ">{Users.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700 dark:text-gray-200 ">{Users.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${
        Users.role === 'admin' ? 'bg-purple-100 text-purple-800 dark:text-purple-900 ':
        Users.role === 'issuer' ? 'bg-purple-100 text-purple-800 dark:text-purple-900':
                                    'bg-green-100 text-green-600 dark:bg-green-700 dark:text-green-200'
                                    }`}>
                                        {Users.role.charAt(0).toUpperCase() + Users.role.slice (1)
                                    }</span>
                                </td>
 <td className="px-6 py-4 whitespace-nowrap ">
  <span className={`px-3 py-1 inline-flex text-xs font-semibold rounded-full ${
        Users.status === 'active '
        ? 'bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-200'
        : 'bg-red-100 text-red-600 dark:bg-red-800 dark:text-red-200'
  }`}>
     {Users.status.charAt(0).toUpperCase() + Users.status.slice (1)}</span>
  </td>
        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-700 dark:text-gray-200 ">{Users.joined}</td>
        
                <td className="px-6 py-4 whitespace-nowrap font-medium text-right text-sm">
            <button className="text-blue-600 hover:text-blue-900 mr-3">
                            <Edit size={18}/></button>
                     <button className="text-red-600 hover:text-red-900 mr-3">
                        <Trash2 size={18}/></button>
                                                            </td>
                        
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>

                        

                    </div>
                   </AdminLayout>
)
}

export default Users;








