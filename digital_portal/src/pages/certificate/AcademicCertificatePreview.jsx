import React from "react";
import { useLocation,useNavigate } from "react-router-dom";
import { QRCode } from "react-qr-code";
import coatOfarms from '../../assets/images/coatOfarms.png'
import signature from '../../assets/images/signature.png'
import signature2 from '../../assets/images/signature2.png'
import logoUni from '../../assets/images/logo UniverDla.jpg'
import seal from '../../assets/images/seal.jpg'
import obc from '../../assets/images/obc.jpg'

function AcademicCertificatePreview(){
    const {state} = useLocation();
    
     const navigate = useNavigate();
     console.log('Preview page received',state?.certificateData)
   
    const certificate = state?.certificateData || {
        certificateType:'Bachelor Degree',
        institution:'University Of Bamenda',
        Departmentprogram:'',
        graduationYear: '',
        MatriculeNumber:'',
        registrationNumber:'',
        certificateNumber:'',
        classGrade:'',
        DateOfBirth:'',
        placeOfBirth:'',
        fullName:'MARIUS DABOVE',
        issuanceDate:'2026-04-28',
        registrarName:'Prof Jacques Fame Ndongo',
        registrarTitle:'Minister of Higher education'
    };
    const qrValue = `https://your.cm/verify/academic?appId=${certificate.MatriculeNumber}`;
    return(
          <div className="min-h-screen bg-gray-100 py-8 px-4 print:bg-white print:p-0">
          <div className="bg-white shdow-2xl print:shadow-none"
          style={{
            width: '297mm',
            height:'210mm',
            transform:'scale(0.9)',
            transformOrigin: 'top left',
            overflow:'hidden',
            position:'relative',
            margin:'0 auto',
        
          }}>
            <div className="reltive h-24 `bg-gradient-to-r` from-green-800 to green-600 flex items-center justify-center">
                <div className="flex items-center space-x-4">
                <img src={logoUni} alt="institution logo" className="absolute left-8 top-4 w-20 h-20 object-contain"/>
                <div className="text-left text-xl font-medium text-gray-800 ">
                    <p>Ministry of Higher Education</p>
                     <p>Divisions of certificates Issuance</p>
                </div>
                </div>
                <img src={coatOfarms} alt="coat of arms" className="w-20 h-20  object-contain"/>
                <p className="font-bold justify-end text-green-600">CMR</p>
                <div className="text-right space-x-8 text-xl font-medium text-gray-800">
                     <p>Republic of Cameroon</p>
                      <p>Peace-Work-FatherLand</p>
                      <p className="text-sm text-gray-700  ">Cert No :    <strong>{certificate.certificateNumber}</strong></p>
                
                      
                </div>
            </div>
            <div className="text-center py-8 px-16">
                <h1 className="text-3xl font-bold text-green-800 mb-2">
                    {certificate.institution.toUpperCase()}
                </h1><h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    {certificate.certificateType} 
                </h2>
                  
                <div className="text-lg text-gray-800 leading-relaxed mb-5">
                      <p className="italic text-xl font-serif " > This is to certify that </p><br />
                       
                <span className="text-3xl font-extrabold text-gray-900 mb-1  ">{certificate.fullName}</span><br/>
                <p className="text-base text-gray-700 " >Born on :   <strong>{certificate.DateOfBirth}</strong>      in  :    <strong className="gap-3">{certificate.placeOfBirth}</strong></p>
               <p className="text-base text-gray-700 mb-3">Registration No :    <strong>{certificate.registrationNumber}</strong></p>
               <p className="mb-5 italic text-xl font-serif">
                    having fulfill all the requirements of the university and <br />
                    satisfactorily completed the prescribed Courses of study in the <br/>
                    
                    Department of <span className="font-bold">
                        {certificate.Departmentprogram}</span>
                    </p>
                    <p className="text-xl font-bold text-blue-900 mb-1">
                        has been awarded the degree/diploma of <br/>
                        <span className="text-2xl italic">Bachelor of Technology</span>     in    <span className="font-semibold text-xl text-black">Software Engineering</span><br/>
                        with <span className="font-semibold text-green-500">{certificate.classGrade}</span>
                    </p>
                    <p  className="text-sm text-black font-semibold mb-1">
                    Matric No :       {certificate.MatriculeNumber} <br />  Graduation Year   :    {certificate.graduationYear}
                </p></div>
                <p className="text-sm text-gray-600 mb-2" >Issued on : {certificate.issuanceDate   || new Date().toLocaleDateString}</p>
                
            </div>
            <div className="absolute bottom-0 left-0 right-0 px-10 pb-6 flex justify-between items-end">
                <div className="text-center">
                    <img src={signature} alt="signature of inst" className="h-16 mx-auto mb-1"/>
                    <div className="w-20 h-20 mx-auto mb-1">
                        <img src={seal} alt="seal 1" className="w-full h-full object-contain"/>
                        
                    </div>
                    <p className="text-sm font-medium">{certificate.registrarName}</p>
                    <p className="text-xs text-gray-600">{certificate.registrarTitle}</p>
                </div>
                <div className="text-center">
                    <QRCode value={qrValue} size={95} level="H"/>
                    <p className="text-xs text-gray-600 mt-2">scan to verify</p>
                    </div>
                <div className="text-center">
                <img src={signature2} alt="signature of inst" className="h-16 mx-auto mb-1"/>
                <div className="w-20 h-20 mx-auto mb-1">
                        <img src={seal} alt="seal 1" className="w-full h-full object-contain"/>
                        </div>
                        <p className="text-sm font-medium">Dr Rajest Kumar</p>
                        <p className="text-xs text-gray-600">vice-chancelor UD</p>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center space-x-8 print:hidden">
                <button onClick={() => navigate(-1)} className="px-10 py-4 bg-gray-700 text-white rounded-xl font-medium hover:bg-gray-50 shadow-lg transition ">
                    Back
                </button>
                <button onClick={() => window.print()} className="px-12 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 shadow-lg">
                    Print Certificate
                </button>
                
            </div>
            
          </div>





          
    )
}
export default AcademicCertificatePreview;