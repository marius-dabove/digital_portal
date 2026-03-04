import React,{createContext,useState,useContext} from "react";

const FormContext = createContext();

export function FormProvider({children}){
     const [progress, setProgress] = useState([1,0,0,0]);

    const[formData, setFormData] = useState({
       general:{applicationType:'', reasons:''},
       personal:{},
       parent:{},
       documents:{files:[]}
    });

    const updateFormData = (step, data) => {
        setFormData((prev) => ({
            ...prev,
            [step]:{...prev[step],...data},
        }));
    };

return (
        <FormContext.Provider value={{progress, setProgress,formData, updateFormData}}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () =>useContext(FormContext);