"use client"

import React, { createContext, useState, useContext } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        personalDetails: {
            fname: '',
            lname: '',
            email: '',
            dOB: '',
            country: '',
            state: '',
            city: '',
            phone: '',
            rePhone: '',
            altPhone: '',
        },
        fileUploads: {
            photo: '',
            signature: '',
            idProof: '',
        },
        fileNames:{
            photo: '',
            signature: '',
            idProof: '',
        },
        files:{
            photo: null,
            signature:null,
            idProof: null,
        },
        centerSelection: {
            examCenter: '',
            examCity:'',
        },
        payment: {
            paymentMethod: '',
        },
    });

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = () => useContext(FormContext);
