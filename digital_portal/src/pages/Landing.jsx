import React, {useState}  from "react";
import coatOfarms from '../assets/images/coatOfarms.png';
import backgroundImg from '../assets/images/backgroundimg.jpg'

function Landing(){
    const [Language,setLanguage] = useState('EN')
    const t = (en, fr) => (Language === 'EN' ? en : fr);

    return(
        <div className="min-h-screen flex flex-col bg-linear-to-b from-sky-100 via-sky-100 to-sky-100">
        <header className="bg-teal-700 text-white py-3 px-4 md:px-8 flex justify-between items-center shadow-md ">
                <div className="flex items-center space-x-3">
                    <img src={coatOfarms} alt="cort of arms of cmr" className="h-10 w-10 object-contain"/>
                    <h1 className="text-lg md:text-xl font-bold">
                        {t('DIGITAL E-CERTIFICATE PORTAL','PORTAIL NUMERIQUE DES CERTIFICAT OFFICIELS')}
                    </h1>

                </div>
                <div className="flex items-center space-x-4">
                    <select value={Language} onChange={(e) => setLanguage (e.target.value)} className="bg-teal-500 border border-teal-600
                     text-white px-2 py-1 rounded text-sm focus:outline-none" >
                        <option value="EN">English</option>
                        <option value="FR">Français</option>
                     </select>
                     <div className="flex space-x-3"> 
                        <a href="/Login" className="px-4 py-2 bg-white text-teal-600 font-medium rounded hover:bg-gray-100 transition">
                        {t('Log In','SE CONNECTER')}</a>
                         <a href="/register" className="px-5 py-2 bg-white text-teal-600 font-medium rounded hover:bg-gray-100 transition">
                        {t('REGISTER NOW','ENREGISTREZ-VOUS')}</a>
                     </div>
                </div>
            </header>
            <main className="grow flex flex-col items-center justify-center px-4 py-12 md:py-20 text-center"
            >
                <img src={coatOfarms} alt="republic cmr" className="h-32 md:h-48 mb-6 object-contain drop-shadow-lg"/>
                <h2 className="text-3xl md:text-5xl font-bold text-teal-800 mb-4 leading-tight">
                    {t('REPUBLIC OF CAMEROON','REPUBLIQUE DU CAMEROUN')}</h2> 

                <p className="text-2xl md:text-2xl font-bold text-gray-800 mt-8 mb-6 max-w-3xl">
                   {t('PEACE-WORK-FATHERLAND', 'PAIX-TRAVAIL-PATRIE')} 
                </p>
                <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mt-8 mb-6 max-w-3xl">
                {t('Digital Portal for E-certificates and Official Documents','PORTAIL NUMERIQUE DES CERTIFICAT OFFICIELS')}</h3>
                <p className="text-lg md:text-xl text-gray-950 mb-10 max-w-2xl">
                 {t('Securely request, acess , download and verify your official certificate anytime,anywhere',
                    'Demandez, accedez ,telechargez et verifiez vos certificats officiels en toute securite.')}
               </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <a href="/register" className="px-10 py-5 bg-teal-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-white transition transform hover:-ttranslate-y-1">
                {t('REGISTER NOW',' ENREGISTREZ-VOUS')}</a>
                <a href="/Login" className="px-10 py-5 bg-teal-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-white transition transform hover:-ttranslate-y-1">
                {t('LOG IN','SE CONNECTER')}</a>
              </div>


 </main>

 <footer className="bg-teal-800 text-white py-6 px-4 text-center">
    <p>Copyright {'\u00A9'} {new Date().getFullYear()} {t('Republic of cameroon. All rights reserved','République du cameroun. Tout droits reservés')} </p>
 </footer>
        </div>
        

    )
}

export default Landing;