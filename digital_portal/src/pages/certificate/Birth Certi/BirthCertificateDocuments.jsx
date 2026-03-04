import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';


function BirthCertificateDocuments(){
    const navigate = useNavigate();

    const progress=[2,2,2,1];
    const setProgress = () => {}

    const [files, setFiles]= useState([]);
    const [error, setError]= useState('');

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFiles(selectedFiles);
        setError('')
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(files.length === 0) {
            setError('please upload at least one reuired document');
            return;
        }
         
    console.log('Documents submitted - progress would update here')
       navigate('/certificate/birth/review-page');
       navigate('/certificate/birth/parents')
    
    }
    
       

    return(
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="bg-white border-b sticky top-0 z-10">
                <div className="max-w-4xl mx-auto px-4 py-6">
                  <p className="text-sm text-green-600 mb-3 text-center">
                    Upload Supporting Documents
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
                  <div className="max-w-4xl mx-auto px-4 py-4 text-sm text-gray-600 text-center">
                       APPLICATION NUMBER: BIR-20260987645-00890</div>
                        <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-lg shadow p-6 md:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Document Information</h2>
                   <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
                    <p className="text-sm text-gray-700 font-medium">
                        Please upload the following 4 required documents(clear scans or photos):
                    </p>
                    <ul className="list-disc list-inside mt-3 text-sm text-gray-700 space-y-1">
                        <li><strong>Birth Notification/Declaration de Naissance</strong>- hospital or midwife document</li>
                         <li><strong>National Identity Card/CNI</strong>- happlicant/parent/guardian(front & back)</li>
                          <li><strong>Proof of Parents' identity /Preuve d'identite des parents</strong>- CNI or passport of father and or mother</li>
                           <li><strong>Marriage Certificate/Acte de Mariage(optional)</strong>- of the parents (if applicable)</li>
                           <li><strong>Document Renaming</strong> -e.g:  birth-Notification-2026.pdf, National-identity-card-2026.jpg</li>
                     </ul>
                     <p className="mt-4 text-sm text-gray-600 italic">
                        Formats: PDF ,JPG, PNG Max not more than 2MB for all the total 4 docs. All 4 are important but 3 are mandatory.
                     </p>
                   </div>
                   <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xl font-medium text-black mb-2">
                        Birth Notification/Declaration de Naissance
                    </label>
                    <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileChange(e,'birthNotification')}
                    />{files.birthNotification && <p className="mt-1 text-sm text-gray-600">Uploaded:{files.birthNotification.name}</p>}
                  </div>
                   <div>
                    <label className="block text-xl font-medium text-black mb-2">
                       National Identity Card /CNI - Applicant
                    </label>
                    <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileChange(e,'nationalId')}
                    />{files.nationalId && <p className="mt-1 text-sm text-gray-600">Uploaded:{files.nationalId.name}</p>}
                  </div>
                   <div>
                    <label className="block text-xl font-medium text-black mb-2">
                        Proof of parents Identity(CNI / Passport)/Preuve d'identite des parents
                    </label>
                    <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileChange(e,'parentsId')}
                    />{files.parentsId && <p className="mt-1 text-sm text-gray-600">Uploaded:{files.parentsId.name}</p>}
                  </div>
                   <div>
                    <label className="block text-xl font-medium text-black mb-2" placeholder="Optional">
                        Marriage Certificate/Acte de Mariage de parents (optional)
                    </label>
                    <input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => handleFileChange(e,'bithNotification')}
                    />{files.marriageCertificate && <p className="mt-1 text-sm text-gray-600" >Uploaded:{files.marriageCertificate.name} </p>}
                  </div>
                  <div className="flex justify-between pt-8">
                    <button type="button" onClick={() => navigate('/certificate/birth/parent')} className="px-8 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50">
                        Back
                    </button>
                    <button onClick={() => navigate('/certificate/birth/review-page')} className="px-10 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700">
                        Review & submit
                    </button>
                </div>







                   </form>




                </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default BirthCertificateDocuments;