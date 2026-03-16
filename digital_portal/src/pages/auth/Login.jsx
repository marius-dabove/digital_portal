import React, { useState } from "react";
import coatOfarms from '../../assets/images/coatOfarms.png'

function Login(){
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const [username,setUsername] = useState('');
    const [error,setError] = useState('');
    const [loading,setLoading] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        if(!phone.trim ||!password.trim() || !username.trim()){
            setError('please fill the both phonenumber, password & username');
            setLoading(false);
            
        }
        if(!phone.startsWith('+')&& !phone.startsWith('6')){
            setError('phone number should start with + or 6');
            setLoading(false);
            
        }
    };

    return(
     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-teal-700 text-white py-6 px-8 text-center">
                <h2 className="text-2xl text-white font-bold">Digital e-certificate Portal</h2>
                <p className="text-sm mt-1 opacity-90">Login to access your certificate</p>
            </div>
            <div className="p-8">
                {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                        {error}
                        </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="flex justify-center mb-3">
                            <img src={coatOfarms} alt="coat of arms" className="h-19 w-19 object-contain drop-shadow-md"/>
                        </div>
                    <div className="mb-5">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                        </label>
                        
                        <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+237 6xx xxx xxx"
                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition" required
/>                    </div>
                     <div className="mb-6">
                      <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                         Username
                         </label>  
                         <input id="username" type="tel" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="username"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition" required />
                     </div>
                     <div className="mb-6">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                         Password
                         </label>  
                         <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition" required />
                     </div>
                     <button type="submit" disabled={loading} className={`w-full px-4 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-gray-800 transition duration-200 ${loading ? 'opacity-70 cursor-not-allowed':'' }`} >
                        {loading ? 'Logging in...': 'Log In'}
                     </button>
                     
                </form>
                <div className="mt-6 text-center text-sm">
                    <p className="text-gray-600">
                        Don't have an account?{''}
                        <a href="/register" className="text-teal-600 hover:underline">
                        Register now</a>
                    </p>
                    <p className="mt-2">
                        <a href="/forgot-password" className="text-teal-600 hover:underline">
                        Forgot password?</a>
                    </p>
                </div>
            </div>
        </div>
     </div>
    );
}

export default Login;