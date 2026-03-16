import React from "react";
import AdminLayout from "../../components/Admin/AdminLayout.jsx";
import { LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,ResponsiveContainer,} from 'recharts';

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
                <div className="grid-gap-6 sm:grid-cols-3 lg:grid-cols-4 inline-flex gap-5">
                    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-7 shadow-sm mb-3">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Issued</h3><p className="mt-2 text-3xl font-bold">4509</p>
                        <p className="mt-1 text-sm text-green-600 dark:text-green-400">+12.4% last months</p>
                    </div>
                     <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-7 shadow-sm mb-3">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Pending Request</h3><p className="mt-2 text-3xl font-bold">100</p>
                        <p className="mt-1 text-sm text-green-600 dark:text-green-400">38 urgent</p>
                    </div>
                     <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-7 shadow-sm mb-3">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Revoked</h3><p className="mt-2 text-3xl font-bold">4</p>
                        <p className="mt-1 text-sm text-green-600 dark:text-green-400">last 30 days</p>
                    </div>
                     <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm mb-3">
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Verification rate</h3><p className="mt-2 text-3xl font-bold">95%</p>
                        <p className="mt-1 text-sm text-green-600 dark:text-green-400">+1.4% </p>
                    </div>
                </div>
                <div className="grid gap-2 lg:grid-cols-7">
                    <div className="lg:col-span-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white p-6 shadow-sm">
                        <h3 className="mb-4 text-lg font-semibold">Certificate Issued(Last 6 months)</h3>
                        <div className="h-80">
                       {/* <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={monthlyData} margin={{top:10, right:30 , left:0, bottom:0}}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" dark:stroke="#374151"/>
                                    <XAxis dataKey="month" stroke="#6b7280" fontSize={12}/>
                                    <YAxis stroke="#6b7280" fontSize={12}/>
                                <Tooltip contentStyle={
                                    {
                                        backgroundColor: 'rgba(255,255,255,0.95)',
                                        border: '1px solid #e5e7eb',
                                        borderRadius:'8px',
                                        boxShadow:'0 4px 6px -1px rgba(0,0,0,0.1)'
                                    }}
                                    labelStyle={{fontWeight:'bold'}} />
                                    <Line type="monotone" dataKey="isssued" strokeWidth={3} stroke="#14b8a6" />
                                
                                    
                                </LineChart>
                           </ResponsiveContainer>*/}
                        
                            <p className="text-gray-500 dark:text-gray-500">

                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </AdminLayout>
    )
}
export default AdminDashboard;