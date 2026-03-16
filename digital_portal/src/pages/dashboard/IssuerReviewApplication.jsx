import React ,{useState, useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";

function IssuerReviewApplication() {
    const {id} = useParams();
    const navigate = useNavigate();

    const [application, setApplication] = useState(null);
    const[loading, setLoading] = useState(true);

    const[comment, setComment] = useState('');

    useEffect(() =>{
        setTimeout(() =>{
            setApplication({
                id,
                type:'birth',
                submittedBy:'',
                submittedAt:'',
                status:'pending',
                childname:' Donald trump',
                dob:'',
                placeOfBirth:'',
                unknownDob:'false',
        birthCountry:'CAMEROON',
        birthRegion:'',
        birthDepartment:'',
        birthPlace:'',
        phone:'+237',
        
        residenceCountry:'',
        residenceRegion:'',
        residenceDepartment:'',
        residenceLocation:'',
        street:'',
        occupation:'',
        reason:'',
        motherGivenNames:'',
          motherSurnames:'',
        fatherGivenNames:'',
        fatherSurnames:'',
        gender:'Male',

        email: '',
        graduationYear:'',
        
        nationality:'',
        address1:'',
        motherNationality:'',
        registrationNumber:'',
        institution:'University of Bamenda',
        matriculeNumber:'',
        classGrade:'',
        graduationStatus:'completed',
        transcriptNumber:'',
        additionalInfo:'',
        documents:['birth_certificate_scan.pdf',
                        'NIC of parent.jpg'],
        departmentprogram:'',
        arrondissement:'',
        registrationOffice:'Douala v civil status Office',
            });
            setLoading(false);
        },800);
    },[id]);

  const handleApprove = () => {
    if(window.confirm('Confirm approval?you will proceed to generate certificate '))
    navigate('/issuer/generate/:applicationId');
  };

  const handleReject = () => {
    const reason = prompt('Enter rejection reason')
    if(reason){
        alert(`rejected with reason: ${reason}`);
        navigate('/issuer/dashboard');
    }else {
        alert('Rejection reason is required')
    }
  };

  const handleAddComment = () => {
    if(Comment.trim()){
        alert(`Internal comment added:${comment}`);
        setComment('');
    }else{
        alert('Comment cannot be empty')
    }
  }
  const isBirth = application?.type === 'birth';

  if (loading) return <div className="p-10 text-center">Loading application....</div>
  return (
    <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-8 overflow-hidden">
        <div className="bg-indigo-600 text-white px-8 py-6">
         <h1 className="text-2xl font-bold">
            Review   {isBirth ? 'Birth': 'Academic'}  Certificate Application
         </h1>
         <p className="mt-2 opacity-90">
           Application ID:{application.id}                         submitted at:{application.submittedAt}
         </p>
        </div>
        <div className="p-8 space-y-10">
            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                    General Information
                </h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                    <label className="block text-sm font-medium text-gray-600">Submitted By</label>
                    <p className="mt-1 text-gray-900 capitalize">{application.submittedBy}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600">Application type</label>
                    <p className="mt-1 text-gray-900 capitalize">{application.type}</p>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600">Reasons of application</label>
                    <p className="mt-1 text-gray-900 capitalize">{application.reason}</p>
                </div>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                    {isBirth ? 'child & parents Information': 'student Information'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                    <label className="block text-sm font-medium text-gray-600">
                        {isBirth ? 'child full Name':'student Full Name'}</label>
                        <p className="mt-1 text-gray-900">
                    {isBirth? application.childFullName : application.studentFullName}</p>
                </div>
                {isBirth ? (
                    <>
                    <div>
                      <label className="block text-sm font-medium text-gray-600">  Date Of Birth</label>
                      <p className="mt-1 text-gray-900">{application.dob}</p></div>
                       <div>
                      <label className="block text-sm font-medium text-gray-600">  Place Of Birth</label>
                      <p className="mt-1 text-gray-900">{application.placeOfBirth}</p></div>
                       <div>
                      <label className="block text-sm font-medium text-gray-600"> Father's Given name</label>
                      <p className="mt-1 text-gray-900">{application.fatherGivenNames}</p></div>
                       <div>
                        <div>
                      <label className="block text-sm font-medium text-gray-600"> Father's Surname</label>
                      <p className="mt-1 text-gray-900">{application.fatherSurnames}</p></div>
                       </div>
                       <div>
                      <label className="block text-sm font-medium text-gray-600">Mother's Given Name</label>
                      <p className="mt-1 text-gray-900">{application.motherGivenNames}</p></div>
                       <div>
                      <label className="block text-sm font-medium text-gray-600">Mother's SurNames</label>
                      <p className="mt-1 text-gray-900">{application.motherSurnames}</p></div>
                       <div>
                      <label className="block text-sm font-medium text-gray-600">Mother's Nationality</label>
                      <p className="mt-1 text-gray-900">{application.motherNationality}</p></div>
                     </>


                ) : (
                    <>

                     <div>
                      <label className="block text-sm font-medium text-gray-600">Matricule Number</label>
                      <p className="mt-1 text-gray-900">{application.matriculeNumber}</p></div>
                      <div>
                      <label className="block text-sm font-medium text-gray-600">Program / course of study</label>
                      <p className="mt-1 text-gray-900">{application.departmentprogram}</p></div>
                      <div>
                      <label className="block text-sm font-medium text-gray-600">Graduation Year</label>
                      <p className="mt-1 text-gray-900">{application.graduationYear}</p></div>
                      <div>
                      <label className="block text-sm font-medium text-gray-600">Institution</label>
                      <p className="mt-1 text-gray-900">{application.institution}</p></div>
                       <div>
                      <label className="block text-sm font-medium text-gray-600">class Grade</label>
                      <p className="mt-1 text-gray-900">{application.classGrade}</p></div>
                      </>
                      
                )
            }
                </div>
            </section>
            <section>
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                    Location & Administrative
                </h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Region</label>
                      <p className="mt-1 text-gray-900">{application.region}</p> 
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            {isBirth ? 'Departement':'Division'}
                        </label>
                      <p className="mt-1 text-gray-900">{application.birthDepartment}</p> 
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">
                            {isBirth ? 'Arrondissement':'Sub-Division'}
                        </label>
                      <p className="mt-1 text-gray-900">{application.arrondissement}</p> 
                    </div>
                    {isBirth && (
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Registration office</label>
                      <p className="mt-1 text-gray-900">{application.registrationOffice}</p> 
                    </div>
                    )}
                </div>
            </section>
            <section>
           <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">Supporting Documents</h2>
           {application.documents.length === 0 ? (
            <p className="text-gray-500">No documents uploaded</p>
           ) : (

            <ul className="space-y-3">
                {application.documents.map((doc,index) => (
                    <li key={index} className="flex item-center">
                        <svg className="w-5 h-5 text-blue-600 mr-3 fill='currentColor'viewBox='0 0 20 20'  ">
                            <path d="M10 2a8 8 0 100 16 8 8 0 0000-16zM9 15H7v-2h2v2zmo"/>

                        </svg>
                        <a href="link" className="text-blue-600 hover:underline">
                            
                            {doc}
                        </a>
                    </li>
                ))}
            </ul>
           )
        }
            </section>
            <section className="border-t pt-8">
                <h2 className="text-xl font-semiboldtext-gray-800 mb-6">Issuer Actions</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button onClick={handleAddComment} className="flex-1 py-3 px-6 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">
                        Add Internal Comment
                    </button>
                    <button onClick={handleReject} className="flex-1 py-3 px-6 bg-red-600 text-white rounded-lg hover:bg-green-700 transition">
                        Reject application
                    </button>
                    <button onClick={handleApprove} className="flex-1 py-3 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold">
                        Approve & Proceed to Generate Certificate
                    </button>
                </div>
                {comment && (
                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-700">Internal note (not visible to applicant) : </p>
                        <p className="mt-2">{comment}</p>
                    </div>
                )}

            </section>
        </div>
        </div>
    </div>
  )









}
export default IssuerReviewApplication;
