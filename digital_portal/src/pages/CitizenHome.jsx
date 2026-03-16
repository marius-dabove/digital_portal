import React from "react";
import{Link} from 'react-router-dom';
import {FaHome,FaBaby, FaGraduationCap, FaUserCog} from 'react-icons/fa'
import coatOfarms from '../assets/images/coatOfarms.png'


function CitizenHome(){
    const userName ='Marius';
    

    return(
        <div className="min-h-screen bg-gray-200 flex flex-col">
            <header className="bg-teal-500 text-white py-6 px-6 md:px-12  text-center shadow-md">
                <img src={coatOfarms} alt="coat of arms cmr" className=" w-14 h-14 md:w-16 md:h-16 object-contain drop-shadow-lg" />
                <h1 className="text-3xl md:text-4xl font-bold mb-3">
                    WELCOME, {userName.toUpperCase}
                </h1>
                <p className="text-lg md:text-xl opacity-100">
                    What would you like to do ?
                </p>
            </header>

            <main className={`grow flex items-center justify-center p-6`}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
                    <Link to ="/dashboard" className="bg-sky-100 rounded-2xl shadow-xl p-10 flex flex-col items-center 
                    text-center hover:shadow-2xl transition transform hover:-translate-y-2 border border-teal-100">
                        <FaHome className="text-teal-600 text-7xl mb-6" />
                        <h2 className="text-2xl font-bold text-black mb-3">Dashboard</h2>
                        <p className="text-gray-700 text-lg">view & monitor your documents and application</p>
                    </Link>
                     <Link to ="/profile" className="bg-sky-100 rounded-2xl shadow-xl p-10 flex flex-col items-center 
                    text-center hover:shadow-2xl transition transform hover:-translate-y-2 border border-teal-100">
                        <FaUserCog className="text-teal-600 text-7xl mb-6" />
                        <h2 className="text-2xl font-bold text-black mb-3">Profile</h2>
                        <p className="text-gray-700 text-lg">Update your personal information & settings </p>
                    </Link>

                     <Link to ="/certificate/birth" className="bg-sky-100 rounded-2xl shadow-xl p-10 flex flex-col items-center 
                    text-center hover:shadow-2xl transition transform hover:-translate-y-2 border border-teal-100">
                        <FaBaby className="text-teal-600 text-7xl mb-6" />
                        <h2 className="text-2xl font-bold text-black mb-3">Birth Certificate</h2>
                        <p className="text-gray-700 text-lg">Apply for e-birth certificate, Replacement of Affidavit of birth</p>
                    </Link>

                     <Link to ="/certificate/academic" className="bg-sky-100 rounded-2xl shadow-xl p-10 flex flex-col items-center 
                    text-center hover:shadow-2xl transition transform hover:-translate-y-2 border border-teal-100">
                        <FaGraduationCap className="text-teal-600 text-7xl mb-6" />
                        <h2 className="text-2xl font-bold text-black mb-3">Academic Certificate</h2>
                        <p className="text-gray-700 text-lg">Request official electronic and authenticated certificate (Diploma , degree, Attestation)</p>
                    </Link>
                </div>
            </main>
            <footer className="bg-teal-800 text-white py-6 text-center text-sm">
                <p>Copyright {'\u00A9'} {new Date().getFullYear()} Republic of cameroon. All rights reserved</p>
            </footer>
        </div>
    )
}

export default CitizenHome;