import React,{useState} from "react";
import {useNavigate, useLocation} from 'react-router-dom'


function AcademicDetails(){
    const navigate = useNavigate();
    const {state} = useLocation();


    const academicData = state?.academicData || {}
    const personalData = state?.personalData || {}

    const[form, setForm] = useState({
        registrationNumber:'',
        classGrade:'',
        graduationStatus:'completed',
        transcriptNumber:'',
        additionalInfo:'',
        transcriptFile:'',
        resultListFile:'',
    });
    const handleChange = (e) =>{
         const{name,value,type,checked} = e.target;
  setFormData((prev) => ({...prev, [name]: value
  }));
    };
    const handleFileChange = (e) => {
        const{name,files} = e.target;
        if(files && files[0]){
            setForm((prev) => ({...prev, [name]: files[0]}));
        };
    }
    const handleNext = () => {
        if(!form.registrationNumber.trim() || !form.classGrade){
            alert('please fill the required fields');
            return;
        }
        if(!form.transcriptFile){
            alert('Transcript document required');
            return;
        }
        if(!form.resultListFile){
            alert('resultslip document required');
            return;
        }
        navigate('/certificate/academic/review',{
            state:{
                academicData,
                personalData,
                academicDetails: form,
            },
        });
}
return(
     <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className=" max-w-3xl mx-auto  bg-white rounded-xl shadow-lg p-8">
                <div className="mb-6">
            <div className="flex justify-center items-center">
                <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    1
                </div>
                <div className="w-16 h-1 bg-green-600"></div>
               <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">2</div>
               <div className="w-16 h-1 bg-green-600"></div>
               <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">3</div>
               <div className="w-16 h-1 bg-green-600"></div>
               <div className="w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold">4</div>
               
           </div> 
            </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
                step 3 of 4 Academic Details
            </p>

            </div>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden  justify-center">
            <div className="bg-green-700 text-white px-8 py-6">
                <h1 className="text-2xl font-bold">ACADEMICS DETAILS</h1>
            <p className="text-green-100 mt-1">
                provide accurate academic information as shown on your physical official documents
            </p>
            </div>
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div> 
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Registration /Exam Number
                        </label>
                        <input type="text" name="registrationNumber" value={form.registrationNumber} onChange={handleChange} placeholder="e.g 2020/12345"
                        className="w-full px-4 py-3 boorder border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"/>

                    </div>
                     <div>
                    <label className="block text-sm font-nedium text-gray-700 mb-1">
                        Class / Grade
                    </label>
                    <select name="certificateType" value={form.classGrade} onChange={handleChange} 
                    className="w-full px-4 py-2 border rounded-md focus:ring-green-500"required>
                        <option value="GCE">First class</option>
                         <option value="BAC">Second Class Upper </option>
                          <option value="HND">Second Class Lower</option>
                           <option value="BACH">passed</option>
                            <option value="MAS">Distinction</option>
                             <option value="Trancript">credit</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-nedium text-gray-700 mb-1">
                      Graduation Status
                    </label>
                    <select name="certificateType" value={form.graduationStatus} onChange={handleChange} 
                    className="w-full px-4 py-2 border rounded-md focus:ring-green-500"required>
                        <option value="GCE">Completed</option>
                         <option value="BAC">In progress </option>
                          <option value="HND">withdrawn</option>
                          </select>
                </div>
                 <div> 
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                Transcript / Certificate Number
                        </label>
                        <input type="text" name="transcript number" value={form.transcriptNumber} onChange={handleChange} placeholder="e.g 2020/12345"
                        className="w-full px-4 py-3 boorder border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"/>

                    </div>
                    <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Additional Information
                            </label>
                            <textarea name="address" value={form.additionalInfo} onChange={handleChange} placeholder="e.g  bonaberi Douala" rows={2}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-50 focus:border-green-500"/>
                        </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800">Required Documents</h3>
                <p className="text-sm text-gray-600 mb-6 pt-2">
                    Please Upload the two mandatory documents in PDF,JPG, or PNG format(max 500KB for the two file)
                </p>
                <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Transcript
                    </label>
                    <div className="flex items-center gap-4">
                        <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-5 py-3 rounded-lg border border-gray-300 transition">
                            <span className="text-gray-700">Choose Transcript File</span>
                            <input type="file" name="transcriptfile" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} className="hidden" required/>
                        </label>
                        <span className="text-sm text-gray-500">
                            {form.transcriptFile ? form.transcriptFile.name : 'No file chosen'}
                        </span>
                    </div>
                </div>
                 <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Result List for the Session
                    </label>
                    <div className="flex items-center gap-4">
                        <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-5 py-3 rounded-lg border border-gray-300 transition">
                            <span className="text-gray-700">Choose Results List File</span>
                            <input type="file" name="resultListFile" accept=".pdf,.jpg,.jpeg,.png" onChange={handleFileChange} className="hidden" required/>
                        </label>
                        <span className="text-sm text-gray-500">
                            {form.resultListFile ? form.resultListFile.name : 'No file chosen'}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-12">
                    <button onClick={() => navigate(-1)} className="px-8 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                        Back
                    </button>
                     <button onClick={handleNext} className="px-10 py-3 bg-green-600 text-white rounded-xl font-bold  hover:bg-gray-300 shadow-lg transition">
                        Continue to review & submit
                    </button>
                </div>
            </div>
            </div>
            </div>
)
}
export default AcademicDetails;