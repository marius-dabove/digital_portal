import React, {useState}from "react";

import CoatOfarms from '../../assets/images/coatOfarms.png'


function Register() {
    const [formData, setFormData] = useState({
        fullName:'',
        phone:'',
        email:'',
        password:'',
        confirmPassword:''
    });
    const[error,setError]= useState('')
    const [loading,setLoading] = useState('false')

    const handleChange = (e) => {
        setFormData({ ...formData,[e.target.name]:e.target.value});
    };
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('');
        setLoading(true);

    if(!formData.fullName ||!formData.phone || !formData.password){
        setError('Please fill in all the required fields');
        setLoading(false);
        return;
    }
    
    if(formData.password !== formData.confirmPassword){
        setError('Password do not match');
        setLoading(false);
        return;
    }
    };
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-teal-700 text-white py-6 px-8 text-center">
                    <h2 className="text-2xl font-bold">Digital E-certificate Portal</h2>
                    <p className="text-sm mt-1">create an account to access your certificates</p>
                </div>
                <div className="p-8">
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                            {error}
                            </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div className="flex justify-center mb-6">
                            <img src={CoatOfarms} alt="coat of arms" className="h-20 w-20 object-contain drop-shadow-md" />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
                            <input id="fullName" type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter your full name" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline focus:ring-2 focus: ring-teal-500 " required />
                        </div>
                         <div className="mb-5">
                            <label htmlFor="Phone" className="block text-sm font-medium text-gray-600 mb-2">Phone Number (+237...)</label>
                            <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+237 6xx xxx xxx" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline focus:ring-2 focus: ring-teal-500 " required />
                        </div>
                           <div className="mb-5">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">Email</label>
                            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="johnDoe@gmail.com" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline focus:ring-2 focus: ring-teal-500 " required />
                        </div>
                         <div className="mb-5">
                            <label htmlFor="Password" className="block text-sm font-medium text-gray-600 mb-2">Password *</label>
                            <input id="password" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="........." 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline focus:ring-2 focus: ring-teal-500 " required />
                        </div>
                         <div className="mb-6">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600 mb-2">Confirm Password</label>
                            <input id="confirmPassword" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="........" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline focus:ring-2 focus: ring-teal-500 " required />
                        </div>
                        <button type="submit" disabled={loading} className={`w-full py-3 px-4 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-800 transition
                        ${loading ? 'opacity-70 cursor-not-allowed':''}`}>
                            {loading ? 'create account' : 'Register'}
                            </button> 
                        <div className="mt-6 text-center text-sm">
                            <p className="text-gray-600">Already have an account? {''}
                                <a href="/login" className="text-teal-600 hover:underline">
                                Log In</a>
                            </p>

                        </div>
                    </form>
                </div>
            </div>
        </div>

    )


}

export default Register;