import React from "react";
import{useLocation ,useNavigate} from 'react-router-dom';
import { QRCode } from "react-qr-code";
import seal from '../../../assets/images/seal.jpg';
import signature from '../../../assets/images/signature.png';
import coatOfarms from '../../../assets/images/coatOfarms.png'


function CertificatePreview(){
    const navigate = useNavigate();
    const {state} = useLocation();

    const certificate = state?.certificateData  ||{
        registrationDate:'25/02/2026',
        registrationOffice:'Douala v civil status Office',
        issuanceDate: '25/02/2026',
        birthDate: '15/06/2003',
        registrationNumber:  'BIR-20260217-008673',
        sex:'Male',
        childName:'',
        placeOfBirth:'Edea,south',
        department:'',
        region:'',
        arrondissement:'',

        motherName:'lovelyne fonyui',
        fatherName:'Kamdem frederic',
        motherNationality:'cameroonian',
        fatherNationality:'cameroonian',
        doneBy:'us civil status officer',
        registrarOfficer:'',
        notes:'All documents verified.No discrepensies Found'
    };
    const qrValue = `https://your-portal.cm/verify? appId=${certificate.registrationNumber}`;

    const handlePrint = () => {
        window.print();
    };

    return(
        <div className="min-h-screen bg-gray-100 py-8 px-4  print:bg-white print:p-0">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-green-100 text-black p-8 text-center relative">
                    <div className="flex items-start justify-between">
                     <div className="text-left text-sm font-medium text-black leading-tight w-5/12 ">
                        <p>République Du Cameroun</p>
                        <p>Paix-Travail-Patrie</p>
                        <p>Région : {certificate.region || '' }</p>
                        <p>Département : {certificate.department || 'MAYO-KANI' }</p>
                        <p>Arrondissement : {certificate.arrondissement || 'KAELE' }</p>
                    </div>
                    <div className="flex items-center flex-1 ">
                     <img src={coatOfarms} alt="cort of arms of cmr" className="h-24 w-24  object-contain"/>
                     
                    </div>
                   <div className="text-right text-sm font-medium text-black  ">
                        <p>Republic Of Cameroon</p>
                        <p>Peace-Work-FatherLand</p>
                        <p>Region : {certificate.region || '' }</p>
                        <p>Division : {certificate.department || 'MAYO-KANI' }</p>
                        <p>Subdivision : {certificate.arrondissement || 'KAELE' }</p>
                    </div>
                
                    
                     </div>
    
                    <h1 className="text-3xl font-bold mt-5">REPUBLIC OF CAMEROON</h1>
                    <p className="text-xl mt-2 font-semibold text-red-500">{certificate.registrationOffice || 'CENTRE D ETAT CIVIL/ MAIRIE DE KAELE'}</p>
                    <p className="mt-1">Birth Registration Divison</p>
                     </div>
                <div className="p-10 no-break">
                    <h2 className="text-2xl font-bold text-center mb-5 underline">
                      ACTE DE NAISSANCE / BIRTH CERTIFICATE RECORD 
                    </h2>
                    <div className="grid grid-col-1 md:grid-cols-3 gap-5">
                        <div className="md:col-span-2">
                            <table className="w-full border-collapse mb-7 text-left text-lg">
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-3 font-semibold w-1/3">Registration Date :</td>
                                        <td className="py-3">{certificate.registrationDate}</td>
                                    </tr>
                                     <tr className="border-b">
                                        <td className="py-3 font-semibold ">Registration Office  :</td>
                                        <td className="py-3">{certificate.registrationOffice}</td>
                                    </tr>
                                     <tr className="border-b">
                                        <td className="py-3 font-semibold ">Issuance Date :</td>
                                        <td className="py-3">{certificate.issuanceDate}</td>
                                    </tr>
                                     <tr className="border-b">
                                        <td className="py-3 font-semibold ">Birth Date :</td>
                                        <td className="py-3">{certificate.birthDate}</td>
                                    </tr>
                                     <tr className="border-b">
                                        <td className="py-3 font-semibold ">Registration Number:</td>
                                        <td className="py-3">{certificate.registrationNumber}</td>
                                    </tr>
                                     <tr className="border-b">
                                        <td className="py-3 font-semibold w-1/3">Sex :</td>
                                        <td className="py-3">{certificate.sex}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-3 font-semibold w-1/3">Child's Name :</td>
                                        <td className="py-3">{certificate.childName}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-3 font-semibold w-1/3">Place of Birth :</td>
                                        <td className="py-3">{certificate.placeOfBirth}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-3 font-semibold w-1/3">Mother's name :</td>
                                        <td className="py-3">{certificate.motherName}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-3 font-semibold w-1/3">Mother's Nationality :</td>
                                        <td className="py-3">{certificate.motherNationality}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-3 font-semibold w-1/3">Father's name</td>
                                        <td className="py-3">{certificate.fatherName}</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-3 font-semibold w-1/3">Father's Nationality :</td>
                                        <td className="py-3">{certificate.fatherNationality}</td>
                                    </tr>
                                     <tr className="border-b">
                                        <td className="py-4 font-semibold  ">Done by us :</td>
                                        <td className="py-2 text-sm underline">{certificate.doneBy}</td>
                                    </tr>
                                </tbody>
                            </table>
                           {/* <div className="space-y-4 text-lg mb-10">
                                <p><strong>Child's Name :                  </strong>{certificate.childName}</p>
                                <p><strong>Place of Birth:                 </strong>{certificate.placeOfBirth}</p>
                                <p><strong>Mother's Name:                  </strong>{certificate.motherName}</p>
                                <p><strong>Mother's Nationality :          </strong>{certificate.motherNationality}</p>
                                 <p><strong>Father's Name :                </strong>{certificate.fatherName}</p>
                                 <p><strong>Father's Nationality :        </strong>{certificate.fatherNationality}</p>
                            </div>*/}
                                                    </div>
                        <div className="flex flex-col items-left justify-left mt-">
                            <div className="inline-block">
                                <QRCode value={qrValue} size={120} level="H"/>
                                <p className="mt-3 text-left text-sm text-gray-500">
                                Scan to verify authencity
                                </p> 
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center  text-right">
                            <div className="mb-1 ">
                                <img src={seal} alt="seal of cmr" className="w-24 h-24 mx-auto mb-2 mt-0 object-contain"/>
                                </div>
                                <div className="mb-2">
                                    <img src={signature} alt="digital sign" className="w-48 h-20 object-contain"/></div>
                                    <p className="text-sm font-semibold">Signature of Registrar</p>
                                    <p className="text-sm font-semibold">{certificate.registrarOfficer}</p>
                                    <p className="text-sm text-gray-600">Chief  Registrar</p>
                                </div>
                                
                        
                    {certificate.notes && (
                    <div className="mt-3 border-t pt-4">
                        <h3 className="text-xl font-semibold mb-4">VERIFICATION REMARKS</h3>
                        <p className="text-green-500" italic>{certificate.notes}</p>
                    </div>
                    )}
                </div>
                <div className="bg-gray-50 p-4 text-center border-t">
                   
                    <p className="text-sm text-gray-600">
                        REPUBLIC OF CAMEROON - {new Date().getFullYear()}
                    </p>
                </div>
            </div>
            <div className="mt-8 text-center space-x-6 print:hidden">
                <button onClick={handlePrint} className="px-10 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 shadow-lg transition">
                    Print/Download PDF
                </button>
                <button onClick={() => navigate(-1)} className="px-10 py-4 bg-gray-300 text-white rounded-xl font-medium hover:bg-gray-50 shadow-lg transition">
                    Back
                </button>
            </div>
        </div>
    )
}

export default CertificatePreview;