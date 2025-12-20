"use client";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { useCallback, useEffect,useState } from "react";
import {BeatLoader} from "react-spinners";
import { useSearchParams } from "next/navigation";
import { newVerification } from "@/action/new-verification";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-suuccess";

export const NewVerificationForm = () => {

  const [error,setError] =  useState<string | undefined>();
  const [success,setSuccess] = useState<string | undefined>();
   
   const searchParams = useSearchParams();

   const token = searchParams.get("token");


   const onSubmit = useCallback(() => {

    // if(success || error) return;

    if(!token) {
      setError("Missing token");
      return;
    };
        newVerification(token)
        .then((data)=> {
          setSuccess(data.success);
          setError(data.error);
        })
        .catch(() => {
           setError("something went wrong!")
        })
   }, [token]);

     useEffect(()=>{
       onSubmit();
     },[onSubmit]);
  
  return (
   <CardWrapper
      headerLabel = "Confirming your verification"
      backButtonLabel = "Back to Login"
      backButtonHref="/auth/login"
   >
    <div className="flex items-center w-full justify-center">
      {!success && !error && (
        <BeatLoader />
      )}
     
     <FormSuccess message={success}/>
     <FormError message={error}/>

    </div>
   </CardWrapper>
  )
}