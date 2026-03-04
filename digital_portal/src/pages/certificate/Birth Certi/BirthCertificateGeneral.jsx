import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


function BirthCertificateGeneral() {
    const navigate = useNavigate();

    const [progress, setProgress] = useState([1,0,0,0])

     const [formData,setFormData] = useState({
            applicationType:'',
            reasons:'',
});

const handleChange = (e) => {
  const{name,value} = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

 setProgress((prev) =>{
        const newProgress = [...prev];
        newProgress[0] = 2;
        newProgress[1] =1;
        return newProgress;
 
});
navigate('/certificate/birth/personal')
  }
const handleCancel = () => {
    navigate('/home')
};

return(
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-white border-b sticky top-0 z-10">
            <div className="max-w-4xl mx-auto px-4 py-4">
                <p className="text-sm text-green-600 mb-3 text-center">
                    Enter general information below
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
                 </div>
                </div>

  <div className="max-w-4xl mx-auto px-4 py-4 text-sm text-gray-600 text-center">
                       APPLICATION NUMBER: BIR-20260987645-00890</div>
   <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow p-6 md:p-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">General Information</h2>

                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Application Type</label>
                            <select name="applicationType" value={formData.applicationType} onChange={handleChange}  required
                            className=" w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                                <option value="">select</option>
                                <option value="first-application">New Birth Registration</option>
                                <option value="renewal">Existing birth registration</option>
                                <option value="replacement"></option>
                               
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Reasons for applying
                            </label>
                            <textarea name="reasons" value={formData.reasons} onChange={handleChange}w
                            rows="4" placeholder="reasons for applying" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 resize-vertical"
                             />
                        </div>

                        <div className="flex justify-between pt-10">
                            <button type="button" onClick={handleCancel} className="px-8 py-3 border border-gray-300rounded-lg font-medium hover:bg-gray-50 transition ">
                                Cancel
                            </button>
                             <button type="submit" className="px-10 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700">
                        Continue
                    </button>
                        </div>

                 </form>

 </div>
</div>
    </div>
)

}
export default BirthCertificateGeneral;

