import React from "react";
import AdminLayout from "../../components/Admin/AdminLayout.jsx";

function AdminDashboard(){

    

 const monthlyData = [
    {month:'Aug' ,issue:230},
    {month:'Aug' ,issue:230},
    {month:'Aug' ,issue:230},
    {month:'Aug' ,issue:230},
];
    return(
        <AdminLayout pageTitle="Dashboard">
            <div className="space-y-8">
                <div className="grid-gap-6 sm:grid-cols-3 lg:grid-cols-4 flex gap-5">
                    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 py-3 px-9 shadow-sm mb-3">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Issued</h3><p className="mt-2 text-3xl font-bold">4509</p>
                        <p className="mt-1 text-sm text-green-600 dark:text-green-400">+12.4% last months</p>
                    </div>
                     <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900  py-3 px-7 shadow-sm mb-3">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 ">Pending Request</h3><p className="mt-2 text-3xl font-bold">100</p>
                        <p className="mt-1 text-sm text-green-600 dark:text-green-400">38 urgent</p>
                    </div>
                     <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-4 px-12 shadow-sm mb-3">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Revoked</h3><p className="mt-2 text-3xl font-bold">00</p>
                        <p className="mt-1 text-sm text-green-600 dark:text-green-400">last 30 days</p>
                    </div>
                     <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-9 py-2 shadow-sm mb-3">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Verification rate</h3><p className="mt-2 text-3xl font-bold">95%</p>
                        <p className="mt-1 text-sm text-green-600 dark:text-green-400">+1.4% </p>
                    </div>
                </div>
                <div className="grid gap-2 lg:grid-cols-7 mt-2">
        
                        
                       
                        
                        </div>
                            <p className="text-gray-500 dark:text-gray-500">

                            </p>
                        </div>
                
            

            
        </AdminLayout>
    )
}
export default AdminDashboard;