import { ChangeEvent, FormEvent, useState } from "react";

export const useForm = <T>(initState: T) => {
    const [formData, setFormData] = useState(initState);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();        
    }

    const reset = () => {
        setFormData({...initState});
    }

    return {
        ...formData,
        onChange, 
        isValidEmail,
        reset,
        onSubmit
    }
}