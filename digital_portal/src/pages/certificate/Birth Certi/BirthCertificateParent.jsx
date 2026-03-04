import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function BirthCertificateParent(){
    const navigate = useNavigate();
    
     const [progress, setProgress] = useState([2,2,1,0])

  const [formData,setFormData] = useState({
          motherGivenNames:'',
          motherSurnames:'',
          fatherGivenNames:'',
          fatherSurnames:'',
          representative:'',


});
const handleChange = (e) => {
  const{name,value,type,checked} = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]:type === 'checkbox' ? checked : value,
  }));
};

const handleNext = () =>{
    if(!formData.motherSurnames.trim() || !formData.fatherSurnames.trim()){
        alert('please enter parent information');
        return;
}
          navigate('/certificate/birth/documents');
          navigate('/certificate/birth/personal')
};
const handleSubmit = (e) => {
    e.preventDefault();
 console.log('Continue clicked-parent submitted trigerrered')


    if(!formData.motherSurnames){
    alert('Personal information saved');
    
     setProgress((prev) =>{
        const newProgress = [...prev];
        newProgress[0] = 2;
        newProgress[1] =1;
        return newProgress;

        });
    
   
};
}
return(
     <div className="min-h-screen bg-gray-50 pb-20">
        <div className="bg-white border-b sticky top-0 z-10">
            <div className="max-w-4xl mx-auto px-4 py-4">
                <div className="flex overflow-auto space-x-4 pb-2">
                    <div className="`flex-shrink-0` px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                        General information
                    </div>
                     <div className="`flex-shrink-0` px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                        personal information
                    </div>
                     <div className="`flex-shrink-0` px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                        Parent information
                    </div>
                     <div className="`flex-shrink-0` px-4 py-2 bg-gray-100 rounded-full text-sm font-medium">
                        Document information
                    </div>
                </div>
            </div>
        </div>
        

        <div className="max-w-4xl mx-auto px-4 py-4 text-sm text-gray-600">
            APPLICATION NUMBER: BIR-20260987645-00890

        </div>
         <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Parent Information</h2>
                <p className="text-sm text-green-600 mb-8">
                    Enter parents details
                </p>
                 <div className="flex items-center justify-center">
                                    {[1,2,3,4].map((step, index)=>(
                                    <React.Fragment key={step}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-medium border-2 transition-colors duration-300 ${
                                 progress[index] === 2
                                ? 'bg-green-600 border-green-600'
                                :progress[index] === 1
                               ?'bg-blue-600 border-blue-600'
                             :'bg-blue-600 border-blue-600'
                                                        }`}
                                                        >
                            {step}
                            </div>
                            {index < 3 &&(
                            <div className={`h-1 flex-1 mx-3 rounded-full ${
                             progress[index] === 2 ? 'bg-green-600' : 'bg-blue-300'
                                 }`}  
                                     />
                                      )}
                                  </React.Fragment>
                                    ))}
                                    </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-6">
                        <h3 className="text-lg font-medium text-gray-800 mt-4">Mother</h3>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Mother given names</label>
                            <input type="text" name="motherGivenNames" value={formData.motherGivenNames} onChange={handleChange} placeholder=" Mother Given names" required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"/>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Mother Surname(s)</label>
                            <input type="text" name="motherSurnames" value={formData.motherSurnames} onChange={handleChange} placeholder=" Mother surname(s)" required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"/>
                        </div>
                        </div>
                         <div className="space-y-6">
                        <h3 className="text-lg font-medium text-gray-800">Father</h3>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Father given names</label>
                            <input type="text" name="fatherGivenNames" value={formData.fatherGivenNames} onChange={handleChange} placeholder=" Father Given names" required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"/>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Father Surname(s)</label>
                            <input type="text" name="fatherSurnames" value={formData.fatherSurnames} onChange={handleChange} placeholder=" Father surname(s)" required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"/>
                        </div> 

                    </div>
                     <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Add Representative data</label>
                             <select name="represntative" value={formData.representative} onChange={handleChange}  required
                            className=" w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                                <option value="tutor">Tutor</option>
                                <option value="guardian">Guardian</option>
                                <option value="Others">Other representative</option>
                               
                                </select>
                   </div>
                   <div className="flex justify-between pt-10">
                    <button type="button" onClick={() => navigate('/certificate/birth/personal')} className="px-8 py-3 border border-gray-300rounded-lg font-medium hover:bg-green-700 transition shadow-md">
                        Back
                    </button>
                     <button type="button" onClick={handleNext}  className="px-10 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700">
                        Continue
                    </button>
                   </div>
                </form>

                 </div>

                </div>

        </div>
)
}

export default BirthCertificateParent;
