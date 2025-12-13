"use client"

import { z } from "zod";
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema } from "@/schemas";
import {Input} from "@/components/ui/input"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {CardWrapper} from "@/components/auth/card-wrapper"
import { Button } from "@/components/ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-suuccess";
import { register } from "@/action/register";
import { useState, useTransition } from "react";


export const RegisterForm = ()=>{

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending,startTransition] = useTransition()

  const form = useForm<z.infer<typeof  RegisterSchema>>({
     resolver:zodResolver( RegisterSchema),
     defaultValues:{
      name:"",
      email:"",
      password:"",
     }
  });

  const onSubmit = async (values:z.infer<typeof  RegisterSchema>)=>{

    setError("")
    setSuccess("")

    startTransition(()=>{
      register(values)
      .then((data)=>{
        setError(data.error);
        setSuccess(data.success);
      })
    })
  }
  
    return (
      <CardWrapper 
        headerLabel="create an account"
        backButtonLabel="Already have an account"
        backButtonHref="/auth/login"
        showSocial
      >
       <Form {...form}>
         <form 
         onSubmit = {form.handleSubmit(onSubmit)}
          className="space-y-6"
          >
            <div className="space-y-4">

             <FormField
              control={form.control}
              name="name"
              render = {({field}) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="enter your name"
                      type="text"
                      disabled = {isPending}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
             />

             <FormField
              control={form.control}
              name="email"
              render = {({field}) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="john.doe@example.com"
                      type="email"
                      disabled = {isPending}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
             />

             <FormField
              control={form.control}
              name="password"
              render = {({field}) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="*******"
                      type="password"
                      disabled = {isPending}
                    />
                  </FormControl>
                  <FormMessage/>
                </FormItem>
              )}
             />
            </div>
            <FormError message= {error}/>
            <FormSuccess message={success}/>
            <Button 
            type="submit"
            className="w-full"
            disabled = {isPending}
            >
              Sign In
            </Button>
         </form>
       </Form>
      </CardWrapper>
    )
}


