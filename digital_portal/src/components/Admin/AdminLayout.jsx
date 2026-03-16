import React from "react";
import Sidebar from "./Sidebar.jsx"
import Hero from "./Hero.jsx";


function AdminLayout ({children, pageTitle ='Dashboard'}) {
    return(
        <div className="flex-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 ">
            <div className="flex-1 p-6 overflow-y-auto">
                 <Hero title={pageTitle} />
             <div className=" hidden md:flex   border-r  ">
        <Sidebar/>
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
                    <div className="mx-auto max-w-3xl ">
                        {children}
                    </div>
                       
                </main>
            </div>
            
              
            </div>
        </div>
    )
}
export default AdminLayout;