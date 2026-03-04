import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AcademicPersonal(){
    const navigate = useNavigate();
    const {state} = useLocation();
    const academicData = state?.academicData || {};

    const [formData,setFormData] = useState({
        givenNames:'',
        surnames:'',
        gender:'Male',
        dob:'',
        email: '',
        phone:'',
        nationality:'',
        address1:'',
        address2:'',
    });
   const handleChange = (e) => {
        setForm({...form,[e.target.name]: e.target.value});

    };
    const handleNext = () => {
        if(!form.givenNames.trim() || !form.dob || !form.phone.trim() || !form.email.trim() ){
            alert('please fill the required fields');
            return;
        }
        navigate ('/certificate/academic-details',{state:{academicData, personalData: form}});
};
   return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-3xl mx-auto  bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-6">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    1</div>
                <div className="w-20 h-1 bg-green-600"></div>
               <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">2</div>
               <div className="w-20 h-1 bg-gray-300"></div>
                <div className="w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold">3
                </div><div className="w-20 h-1 bg-gray-300"></div>
                <div className="w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center font-bold">4</div>
                
                </div>
                 <h1 className="text-3xl font-bold text-center mb-10">PERSONAL INFORMATION</h1>
                 <div className="space-y-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Given names</label>
                            <input type="text" name="givenNames" value={formData.givenNames} onChange={handleChange} placeholder="Given names" required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md  focus:ring-green-500 focus:border-green-500"/>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Surnames</label>
                            <input type="text" name="surnames" value={formData.surnames} onChange={handleChange} placeholder="Surname(s)" required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg  focus:ring-green-500 focus:border-green-500"/>
                        </div>
                        < div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                            <select name="gender" value={formData.gender} onChange={handleChange}  required
                            className=" w-full px-4 py-3 border border-gray-300 rounded-md  focus:ring-green-500 focus:border-green-500">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        < div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                            <input type="text" name="dob" value={formData.dob} onChange={handleChange} placeholder="dd mm yyyy"required
                            className=" w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"/>
                            <label className="flex items-center mt-2 text-sm text-gray-600">
                                <input type="checkbox" name="unknownDob" checked={formData.unknownDob} onChange={handleChange} className="mr-2 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"/>
                                I don't know my date of birth
                            </label>
                        </div>
                         <div >
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                        </label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md  focus:ring-green-500 focus:border-green-500"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address" required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md  focus:ring-green-500 focus:border-green-500"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Nationality *</label>
                            <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} placeholder=" country" required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"/>
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Residential address
                            </label>
                            <textarea name="address" value={formData.address1} onChange={handleChange} placeholder="e.g  bonaberi Douala" rows={2}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-50 focus:border-green-500"/>
                        </div>
                        </div>
                  <div className="flex justify-between mt-10">
                    <button onClick={() => navigate(-1)} className="px-8 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                        Back
                    </button>
                     <button onClick={handleNext} className="px-10 py-3 bg-green-600 text-white rounded-xl font-bold  hover:bg-gray-300 shadow-lg transition">
                        Continue to Academic Details
                    </button>
                </div>
            </div>
           </div> 
           </div>
           
           
   )


}

export default AcademicPersonal;