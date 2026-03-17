import React from "react";
import {NavLink, useNavigate} from 'react-router-dom'
import { LayoutDashboard,Clock,Award,Ban,ShieldCheck,Users,Building2,BarChart3,Settings,LogOut, } from "lucide-react";


const navItems = [
    {icon: LayoutDashboard,label:'Dashboard',path:'/admin'},
    {icon: Clock, label:'Pending Requests', path:'/admin/requests'},
    {icon: Award,label:'Issued Certificates', path:'/admin/certificates'},
    {icon: Ban,label:'Revocations', path:'/admin/revocations'},
    {icon : ShieldCheck, label:'Verifications', path:'/admin/verifications'},
    {icon : Users, label:'Users' ,path:'/admin/users'},
    {icon: Building2, label:'Issuers',path:'/admin/issuers'},
    {icon: BarChart3,label:'Analytics',path:'/admin/analytics'},
    {icon:Settings,label:'Settings',path:'/admin/settings'}


];
function Sidebar() {
    const navigate = useNavigate();
    const handleLogout = () =>{
    navigate('/')
   };
    return (
        <aside className="w-64 bg-teal-950  text-white flex flex-col p-4 space-y-3 ">
            <div className="border-b p-6">
                <h2 className="text-2xl font-bold text-center">E-CERTI ADMIN</h2>
                <p className="text-xs text-center mt-1">Cameroon</p>
            </div>
            <nav className="flex-1 px-3 py-6 space-y-1">
                {navItems.map((items) =>(
                    <NavLink key={items.path}
                    to={items.path} className={({ isActive}) =>
                        
                           `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                            isActive
                            ?'bg-accent text-accent-foreground font-medium'
                            :'text-muted-foreground hover:bg-muted hover:text-foreground'
                           }`
                        
                }
                >
                    <items.icon className="h-5 w-5" />
                    {items.label}
                </NavLink>
                ))}
            </nav>
            <div className="border-t p-4">
                <button  onClick={() => handleLogout()} className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-green-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors">
                <LogOut className="w-5 h-5"/>Sign Out</button>
            </div>
        </aside>
    );
}

export default Sidebar;