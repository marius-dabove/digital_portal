import React from "react";

import {FaDownload,FaShareAlt} from 'react-icons/fa'

 //flex flex-col bg-linear-to-b from-sky-100 via-sky-100 to-sky-100


function DocumentCard({title,date,status,idNumber}) {
    return(
        <div className="bg-white p-4 rounded-lg shadow space-y-2">
            <h3 className="font font-semibold text-teal-800">{title}</h3>
            <p className="text-sm text-gray-600 ">Issued:{date}</p>
            <p className="text-sm text-gray-600 ">ID:{idNumber}</p>
            <span className={`px-2 py-1 rounded-full text-xs ${status=== 'valid' ? 'bg-green-100 text-green-700': 'bg-yellow-100 text-yellow-700'}`}>
                {status}
            </span>
            <div className="flex space-x-2 mt-2">
                <button className=" flex items-center px-3 py-1 bg-teal-600 text-white  rounded hover:bg-teal-700"><FaDownload className="mr-3" />Download</button>
                 <button className="flex items-center px-3 py-1 bg-teal-600 text-white  rounded hover:bg-teal-700"><FaShareAlt className="mr-3" />Share</button>
            </div>
        </div>
    );
}
export default DocumentCard;