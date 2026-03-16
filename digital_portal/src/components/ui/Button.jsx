import React from "react";
function Button({children, variant = 'primary',onclick}){
    const classes = variant === 'primary' ? 'bg--600 text-white hover:bg-teal-700': 'bg-gray-200 text-gray-800 hover:bg-gray-300';
    return(
        < button onClick={onclick} className={`px-4 py-2 rounded-medium transition ${classes}`}>
            {children}
        </button>
    );
}

export default Button;