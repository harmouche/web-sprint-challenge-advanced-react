// write your custom hook here to control your checkout form
import React, {useState} from 'react';

export const useForm = initialVlaue => {
    const [values, setValues] = useState (initialVlaue);


        const handleChanges = (e) => {
            setValues({ ...values, [e.target.name]: e.target.value });
          };

return [values, handleChanges];

};
