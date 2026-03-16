import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

const mockSummary = {
    general:{
       certificateType: 'HND',
        institution: '',
        program: '',
        graduationYear: '',
        reason:'',
    },
    personal:{
       givenNames:'',
        surnames:'',
        gender:'Male',
        dob:'',
        email: '',
        phone:'',
        nationality:'',
        address1:'',
        additionalinfo:'',
        unknownDob:'',
    }, 
    Details:{
           registrationNumber:'',
        classGrade:'',
        graduationStatus:'completed',
        transcriptNumber:'',
        additionalInfo:'',

    },
    documents:[
        '',
        '',
    ]
      
};

function AcademicReviewPage() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        const today = new Date();
        const dateStr = today.toISOString().slice(0,10).replace(/-/g, '');
        const randomNum = Math.floor(10000 + Math.random()* 900000);
        const applicationId = `PO-#({dateStr}- \){randomNum}`;


        console.log('submitting application:', {applicationId, ...mockSummary});
        alert(`Application submitted successfuly!\n\nYour Application ID: ${applicationId}\nSave this to track your request.`);
        navigate ('/certificate/confirmation',{state:{applicationId}});

    };
    return(
        <div className=" min-h-screen bg-gray-50 pb-20">
            <div className="bg-white border-b dticky top z-10">
                <div className="max-w-full mx-auto px-4 py-6">
                    <div className="flex items-center justify-center">
                        {[1,2,3,4].map((step, index)=>(
                            <React.Fragment key={step}>
                                   <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-medium bg-green-600 border-2 border-green-600">         
                                                   
                                            {step}
                                                </div>
                                                {index < 3 &&
                                                  <div className="h-1 flex-1 mx-3 rounded-full  bg-green-600"/>}
                                                    
                                                
                                                </React.Fragment>
                                            ))}
                                        </div>
                    </div>
                    <p className="text-center text-sm text-gray-500 mt-2">
                step 4 of 4  review & submit page
            </p>
                </div>
                <div className="max-w-4xl mx-auto px-4 py-4 text-sm text-center text-green-600 font-semibold">
                    APPLICATION REVIEW
                </div>
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
                            Review & submit Your Application
                        </h2>
                        <div className="border-b pb-6">
                            <h3 className=" text-xl font-semibold mb-4">GENERAL INFORMATION</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <p><strong> Certificate Type:</strong>{mockSummary.general.certificateType}</p>
                                <p><strong> Institution:</strong>{mockSummary.general.institution}</p>
                                <p><strong> Program:</strong>{mockSummary.general.program}</p>
                                <p><strong> Graduation Year:</strong>{mockSummary.general.graduationYear}</p>
                                <p><strong> Reason:</strong>{mockSummary.general.reason}</p>
                            </div>
                        </div>
                        <div className="border-b pb-6">
                            <h3 className=" text-xl font-semibold mb-4">PERSONAL  INFORMATION</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <p><strong> Give Names :</strong>{mockSummary.personal.givenNames}</p>
                                <p><strong>surname :</strong>{mockSummary.personal.surnames}</p>
                                 <p><strong>gender :</strong>{mockSummary.personal.gender}</p>
                                <p><strong>Date of Birth :</strong>{mockSummary.personal.dob}</p>
                                 <p><strong>Unknown date of Birth :</strong>{mockSummary.personal.unknownDob}</p>
                                <p><strong>Email :</strong>{mockSummary.personal.email}</p>
                                <p><strong> Phone :</strong>{mockSummary.personal.phone}</p>
                                <p><strong> Nationality :</strong>{mockSummary.personal.nationality}</p>
                                <p><strong>Adress:</strong>{mockSummary.personal.address1}</p>
                                <p><strong>Additional Information :</strong>{mockSummary.personal.additionalinfo}</p>
                                
                            </div>
                        </div>
                         <div className="border-b pb-6">
                            <h3 className=" text-xl font-semibold mb-4">DETAILS INFORMATION</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <p><strong>Registration Number:</strong>{mockSummary.Details.registrationNumber}</p>
                                <p><strong>Graduate Status:</strong>{mockSummary.Details.graduationStatus}</p>
                                <p><strong>Class Graduate:</strong>{mockSummary.Details.classGrade}</p>
                                 
                            </div>
                    </div>
                       <div className="pb-6">
                        <h3 className="text-xl font-semibold mb-4">Uploaded Documents</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                            {mockSummary.documents.map((doc, index) => (
                                <li key={index}>{doc}</li>
                            ))}
                        </ul>
                       </div>
                </div>
                <div className="mt-12 text-center space-x-6">
                    <button onClick={() => navigate('/certificate/academic-details')} className="px-10 py-4 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition">
                        Back to Edit
                    </button>
                    <button onClick={handleSubmit} className="px-12 py-4 bg-teal-600 text-white rounded-xl font-boldtext-lg hover:bg-teal-700 shadow-lg transition">
                        Submit application
                    </button>
                </div>
                <p className="mt-6 text-center text-sm text-gray-600">
                    By submitting, you confirm that all information are accurate and true to the best of your knowledge
                </p>
            </div>
            </div>
        
    )

}

export default AcademicReviewPage;