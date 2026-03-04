import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'

function AcademicCertificateGeneral() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        certificateType: 'HND',
        institution: '',
        program: '',
        graduationYear: '',
        reason:'',

    });
    const handleChange = (e) => {
        setForm({...form,[e.target.name]: e.target.value});

    };
    const handleNext = () => {
        if(!form.certificateType || !form.institution || !form.program){
            alert('please fill the required fields');
            return;
        }
        navigate ('/certificate/academic-personal',{state:{academicData: form}});
    };
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            
            <div className="flex justify-center items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    1
                </div>
                <div className="w-10 h-1 bg-green-600"></div>
               <div className="w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold">2</div>
                <div className="w-10 h-1 bg-gray-300"></div>
               <div className="w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold">
                    3
                </div>
                <div className="w-10 h-1 bg-gray-300"></div>
               <div className="w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold">
                    4
                </div>
               
            
           </div> 
           
           
            <h1 className="text-3xl font-bold text-center mb-10">APPLY FOR ACADEMICS CERTIFICATES</h1>
            <div className="space-y-6 max-w-lg mx-auto">
                <div>
                    <label className="block text-sm font-nedium text-gray-700 mb-1">
                        Certificate Type
                    </label>
                    <select name="certificateType" value={form.certificateType} onChange={handleChange} 
                    className="w-full px-4 py-2 border rounded-md focus:ring-green-500" required>
                        <option value="default">Select</option>

                        <option value="GCE">GCE Advanced Level</option>
                         <option value="BAC">BAC CERTIFICATE</option>
                          <option value="HND">HND CERTIFICATE</option>
                           <option value="BACH">Bachelor's Degree Certificate</option>
                            <option value="MAS">Master's Degree Certificate</option>
                             <option value="Trancript">Academic Transcript</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-nedium text-gray-700 mb-1">
                        School Institution / University 
                    </label>
                    <input type="text" name="institution" value={form.institution} onChange={handleChange} 
                   placeholder="e.g University of Douala" className="w-full px-4 py-2 border rounded-md focus:ring-green-500"required />
            </div>
            <div>
                    <label className="block text-sm font-nedium text-gray-700 mb-1">
                        Program / Course of study
                    </label>
                    <input type="text" name="program" value={form.program} onChange={handleChange} 
                   placeholder="e.g computer engineering, science or Arts ,technical" className="w-full px-4 py-2 border rounded-md focus:ring-green-500" required />
            </div>
            <div>
                    <label className="block text-sm font-nedium text-gray-700 mb-1">
                        Graduation / Completion Year
                    </label>
                    <input type="number" name="graduationYear" value={form.graduationYear} onChange={handleChange} 
                   placeholder="e.g 2024" required className="w-full px-4 py-2 border rounded-md focus:ring-green-500"  />
            </div>
            <div>
                    <label className="block text-sm font-nedium text-gray-700 mb-1">
                        Reason for Request (optional)
                    </label>
                    <textarea  name="reason" value={form.reason} onChange={handleChange} 
                   placeholder="e.g employment, further studies" className="w-full px-4 py-2 border rounded-md focus:ring-green-500" />
            </div>
        </div>
        <div className="flex justify-end mt-10">
                    <button onClick={handleNext}
                    className="px-7 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-white shadow-lg transition ">
                        Continue to personal Information</button>
            </div>
        </div>
        
    )
}
export default AcademicCertificateGeneral;