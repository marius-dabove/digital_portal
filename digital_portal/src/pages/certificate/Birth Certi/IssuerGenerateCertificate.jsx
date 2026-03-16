import React,{useState, useEffect} from "react";
import { useParams,useNavigate } from 'react-router-dom'


function IssuerGenerateCertificate() {
    const {applicationId} = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        registrationDate: '',
        registrationOffice:'Douala v civil status Office',
        issuanceDate: new Date().toISOString().split('T')[0],
        birthDate: '',
        registrationNumber:  'BIR-20264705-00334',
        sex:'',
        childName:'',
        placeOfBirth:'',
        motherName:'',
        fatherName:'',
        motherNationality:'cameroonian',
        fatherNationality:'cameroonian',
        doneBy:'us civil status officer',
        RegistrarOfficer:'',
        notes:'',
        region:'',
        department:'',
        arrondissement:'',
        civilStatusCentre:'',
        registrarOfficer:'',
        
    });
    const [loading, setLoading] = useState(true)
    const[status,setstatus] = useState('pending')

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData((prev) => ({...prev,[name]: value}));
    };
    const handleApprove = () => {
        setstatus('approved')
            alert('Application approved');
    };
    const handleReject = () => {
        if(!formData.notes.trim()){
            alert('please add rejection reason in notes')
            return;
        }
        setstatus('rejected')
            alert('Application rejected'); 
            
            
    };
     const handleGenerate = () => {
       if(status !=='approved') {
            alert('please approve application first');
        return;
     }
       navigate('/certificate/preview',{ state:{certificateData: formData}});
      
     console.log('Generating certificate:', formData)
     };

   // if(loading){
     //   return(
       //     <div className="min-h-screen flex items-center justify-center text-xl">
         //       Loading application data...
           // </div>
        //);
    //}
    return(
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-green-700 text-white p-6 text-center">
                    <h1 className="text-3xl font-bold">Generate E-Birth Certificate/Academic Certificate</h1>
                    <p className="mt-2 text-lg">
                        Application: {applicationId}
                    </p>
                    
                </div>
                <div className="p-6 border-b">
                    <div className="flex items-center justify-between">
                        <span className="text-lg font-medium">Status:</span>
                        <span className={`text-lg font-bold ${status === 'approved' ? 'text-green-600': status=== 'rejected' ?'text-red-600': 'text-yellow-600'}`}>
                            {status.toUpperCase()}
                        </span>
                    </div>
                </div>
                <div className="p-8 grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Registration Date / Date d'enregistrement</label>
                        <input type="date" name="registrationDate" value={FormData.registrationDate} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"/>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Centre d'Etat civil / Civil Status Centre</label>
                        <input type="text" name="registrationOffice" value={FormData.registrationOffice} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"/>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1"> Date of birth / Date de Naissance</label>
                        <input type="date" name="birthDate" value={FormData.birthDate} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"/>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Child Name / Nom de l'enfant</label>
                        <input type="text" name="childName" value={FormData.childName} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"/>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Sex / Sexe </label>
                        <select  name="sex" value={FormData.sex} onChange={handleChange} required
                        className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500">
                            <option value="">Select</option>
                             <option value="Male">Male</option>
                              <option value="Female">Female</option></select>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Place Of Birth/Lieu de Naissance</label>
                        <input type="text" name="placeOfBirth" value={FormData.placeOfBirth} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"/>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Region/Region</label>
                        <input type="text" name="region" value={FormData.region} onChange={handleChange} required
                        className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"/>
                        
                              
                              
                              
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Departement/ Division</label>
                        <input type="text" name="department" value={FormData.department} onChange={handleChange} required
                        className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Arrondissement/ Sub-Division</label>
                        <input type="text" name="arrondissement" value={FormData.arrondissement} onChange={handleChange} required
                        className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"/>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mother's Name / Nom de la mere</label>
                        <input type="text" name="motherName" value={FormData.motherName} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"/>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Father's Name / Nom du pere</label>
                        <input type="text" name="fatherName" value={FormData.fatherName} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Registrar officer Name / Officier d'Etat civil</label>
                        <input type="text" name="registrarOfficer" value={FormData.registrarOfficer} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Done by us :</label>
                        <input type="text" name="doneBy" value={FormData.doneBy} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"/>
                    </div>
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Verification Notes / Notes de verification</label>
                        <textarea name="notes" value={FormData.notes} onChange={handleChange} placeholder="Add verification comments,corrections, or rejection reason..."
                        rows={5}
                        className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"/>
                    
                    </div>
                </div>
                <div className="p-6 bg-gray-50 flex justify-end space-x-4 border-t">
                    {status === 'pending' &&(
                        <>
                        <button onClick={handleApprove} className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Approve
                        </button>
                         <button onClick={handleReject} className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                        > Reject</button>
                        </>
                    )}
                    <button onClick={handleGenerate} disabled={status !== 'approved'}
                    className={`px-10 py-3 rounded-lg text-white font-bold transition ${status === 'approved' ? 'bg-green-600 hover:bg-green-700': 'bg-gray-400 cursor-not-allowed'}`}>
                        Generate Certificate
                    </button>
                </div>
            </div>
        </div>
    )
    };
    export default IssuerGenerateCertificate;

    

