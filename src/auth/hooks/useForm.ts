import { SyntheticEvent, useState } from "react";
import { FormData } from "../interfaces";


export const useForm = ( initialForm: FormData ) => {
    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}: SyntheticEvent ) => {
        
        const {name, value} = target as HTMLInputElement;
        setFormState({
           ...formState,
           [ name ] : value
        })
     };

     const onResetForm = () => {
        setFormState(initialForm)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
 
}