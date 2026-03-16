import React from "react";
import Sidebar from "./Sidebar.jsx"
import Hero from "./Hero.jsx";


function AdminLayout ({children, pageTitle ='Dashboard'}) {
    return(
        <div className="flex-h-screen bg-background text-foreground">
            <div className=" hidden md:block border-r  bg-card">
        <Sidebar/>
            </div>
            <div className="flex flex-1 flex-col">
                 
               <Hero title={pageTitle} />
                <main className="flex-1 overflow-auto p-4 md:p-6 lg:p-8">
                    <div className="mx-auto ` max-w-[1400px]`">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}
export default AdminLayout;