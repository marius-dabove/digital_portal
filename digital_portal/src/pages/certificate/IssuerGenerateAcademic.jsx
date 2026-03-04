import React,{useState,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";

function IssuerGenerateAcademic(){
    const{applicationId} = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        certificateType:'   Bachelor degree',
        institution:'University of Bamenda',
        Departmentprogram:'',
        graduationYear: '2024-2025',
        matriculeNumber:'UD-0973890',
        registrationNumber:'',
        certificateNumber:'',
        classGrade:'',
        fullName:'MARIUS DABOVE ',
        issuanceDate:new Date().toISOString().split('T')[0],
        registrarName:'Dr Epoh Eric',
        registrarTitle:'Director of HND commision',
        notes:'',
        DateOfBirth:'',
        placeOfBirth:'',
        status: 'pending',
    });
    const [loading, setLoading ] = useState(true);
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
    };
    const handleGenerate = () => {
       if(status !=='approved') {
            alert('please approve application first');
        return;
     }
     console.log('Data being sent to preview:',formData);
       navigate('/academic/preview', { state:
        {certificateData:  formData}});
      
    
     };

     return(
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-green-700 text-white p-6 text-center">
                    <h1 className="text-3xl font-bold">Generate E-Academic Certificate</h1>
                    <p className="mt-2 text-lg">
                        Application: {applicationId}
                    </p>
                    </div>
                    <div className="p-6 bg-gray-50 text-center">
                        <p className="text-lg font-semibold">Current Status:  {''}
                        <span className={` font-bold ${status === 'approved' ? 'text-green-600': status=== 'rejected' ?'text-red-600': 'text-yellow-600'}`}>
                            {status.toUpperCase()}
                        </span></p>
                    </div>
                
                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Certificate Type</label>
                        <input type="text" name="certificateType" value={FormData.certificateType} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-green-500"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                        <input type="text" name="institution" value={FormData.institution} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"/>
                            </div>
                            <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                        <input type="date" name="DateOfBirth" value={FormData.DateOfBirth} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"/>
                    </div>
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Place Of Birth</label>
                        <input type="text" name="placeOfBirth" value={FormData.placeOfBirth} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md focus:ring-green-500 focus:border-green-500"/>
                    </div>
                            <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" name="fullName" value={FormData.fullName } onChange={handleChange} placeholder="e.g yoan joel"
                        className="w-full px-4 py-2 border rounded-md focus:ring-green-500"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                        <input type="text" name="Departmentprogram" value={FormData.Departmentprogram} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Graduation Year</label>
                        <input type="text" name="graduationYear" value={FormData.graduationYear} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"/>
                            </div>
                         <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Class Grade</label>
                        <select  name="classGrade" value={FormData.classGrade} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md">
                            <option>Distinction</option>
                            <option value="">Second Class Upper</option>
                            <option value="">Second Class lower</option>
                            <option>First Class Honours</option>
                            <option>Passed</option></select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Matricule Student Number</label>
                        <input type="text" name="MatriculeNumber" value={FormData.matriculeNumber} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"/>
                            </div>
                             <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Registration Number</label>
                        <input type="text" name="registrationNumber" value={FormData.registrationNumber} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Certificate Number</label>
                        <input type="text" name="certificateNumber" value={FormData.certificateNumber} onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-md"/>
                            </div>
                           < div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1"> Notes/ observations</label>
                        <textarea name="notes" value={FormData.notes} onChange={handleChange} placeholder="Add verification comments,corrections, or rejection reason..."
                        rows={4}
                        className="w-full px-4 py-3 border rounded-md"/>
                    
                    </div>
                        </div>
                        <div className="p-6 bg-gray-50 flex justify-end space-x-8 border-t">
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
                </div>
                
     )
}
export default IssuerGenerateAcademic;