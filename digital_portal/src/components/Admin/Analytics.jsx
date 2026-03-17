import React from "react";
import AdminLayout  from "./AdminLayout.jsx";
import { BarChart3,TrendingUp,Users,Award, XCircle } from "lucide-react";

function Analytics(){
    const stats ={
        totalIssued:4509,
        growth:'+12.4%',
        pending:'43',
        revoked:'00',
        verificationRate:'98.7%',
        topIssuer:'University of buea',
    };
    return(
        <AdminLayout pageTitle="Analytics">
            <div className="space-y-8">
                <div className="grid-gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white p-6 shadow-sm mb-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-teal-100 dark:bg-teal-900 rounded-lg">
                    <Award className="text-teal-600 dark:text-teal-400 " size={24}/>
                </div>
                <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Issued</h3>
                    <p className="text-3xl font-bold mt-1">{stats.totalIssued}</p>
                    <p className="text-xl font-bold dark:text-green-400 text-green-600 mt-1">{stats.growth} last month</p>
                </div>
                 </div>
                  </div>
                 <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                     <div className="p-3 bg-amber-100 dark:bg-amber-900 rounded-lg">
                     <BarChart3 className="text-amber-600 dark:text-amber-400 " size={24}/>
                    </div>
                      <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Pending Request</h3>
                    <p className="text-3xl font-bold mt-1">{stats.pending}</p>
                   </div>
                </div>
                  </div>   

                    </div>
                    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-4">
                     <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                     <XCircle className="text-red-600 dark:text-red-400 " size={24}/>
                    </div>
                      <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Revoked Certificates</h3>
                    <p className="text-3xl font-bold mt-1">{stats.revoked}</p>
                   </div>
                </div>
                 </div>
                  <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white p-6 shadow-sm mb-4">
                    <div className="flex items-center gap-4">
                     <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                     <TrendingUp className="text-green-600 dark:text-green-400 " size={24}/>
                    </div>
                      <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Verification Rate Certificates</h3>
                    <p className="text-3xl font-bold mt-1">{stats.verificationRate}</p>
                   </div>
                </div>
                 </div>


            </div>
            <div className="grid gap-6 lg-grid-cols-2">
                <div className="rounded-xl border border-gray-200 dark:border-gray-800  bg-white p-6 shadow-sm">
                   <h3 className="text-lg font-semibold mb-4">Issuance Trend(Last 12 months)</h3>
                   <div className="h-80 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 dark:text-gray-400"></p>


                   </div>
                   </div> 

                    <div className="rounded-xl border border-gray-200 dark:border-gray-800  bg-white p-6 shadow-sm">
                      <h3 className="text-lg font-semibold mb-4">Top Issuers</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 dark:text-teal-300 font-medium">
                                    UB
                                </div>
                            </div>
                            <p className="font-medium text-right ">University of Buea</p><br/>
                            <p className="text-sm text-gray-500 dark:text-gray-400 ">2450 certificates</p>
                        </div>
                        </div>
                        <span className="text-green-600 dark:text-green-400 font-medium">+18%</span>  
                    </div>
            </div>
        </AdminLayout>
    )
}
export default Analytics;