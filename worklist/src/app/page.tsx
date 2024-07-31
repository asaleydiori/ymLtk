"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import * as z from 'zod';
import {useForm} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { Form,FormControl,FormField,FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SelectValue,SelectTrigger, SelectContent,SelectItem,Select } from "@/components/ui/select";

const formSchema=z.object({
  firstname: z.string().min(3),
  paientid:z.string().min(3),
  examType:z.enum(["Radio","Scanner","IRM"]),
  birthdate:z.date(),
  examDate:z.date(),
  referedMD:z.string().min(7),
  
})

export default function Home() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver:zodResolver(formSchema),
    defaultValues:{
      firstname:"",
    },  
  })

  const handleSubmit =(values:z.infer<typeof formSchema>)=>{
    console.log(values)
  }

  return <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} 
               className="max-w-md w-full flex flex-col gap4">

                <FormField control={form.control} name="firstname" render={({field} )=> {
                  return <FormItem>
                    <FormLabel>Prénom</FormLabel>
                    <FormControl>
                      <Input placeholder="Entrez le nom du Patient"  {...field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                }}/ >

            <FormField control={form.control} name="birthdate" render={({field} )=> {
                  return <FormItem>
                    <FormLabel>Date de Naissance du Patient</FormLabel>
                    <FormControl>
                      <Input placeholder="Entrez la Date de Naissane du patient" {...field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                }}/ >

            <FormField control={form.control} name="paientid" render={({field} )=> {
                  return <FormItem>
                    <FormLabel>Numero de Patient</FormLabel>
                    <FormControl>
                      <Input placeholder="Entrez le numero de patient"  {...field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                }}/ >


            <FormField control={form.control} name="examType" render={({field} )=> {
                  return <FormItem>
                    <FormLabel>L'examen a passer</FormLabel>
                    <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="L'examen a passer"/> 
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Radio">Radio</SelectItem>
                      <SelectItem value="Scanner">Scanner</SelectItem>
                      <SelectItem value="IRM">IRM</SelectItem>
                    </SelectContent>
                    </Select>
                    <FormMessage/>
                  </FormItem>
                }}/ >

            <FormField control={form.control} name="examDate" render={({field} )=> {
                  return <FormItem>
                    <FormLabel>Date de L'examen</FormLabel>
                    <FormControl>
                      <Input placeholder="Entrez la Date de l'examen"  {...field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                }}/ >

            <FormField control={form.control} name="referedMD" render={({field} )=> {
                  return <FormItem>
                    <FormLabel>Nom du medecin Referent</FormLabel>
                    <FormControl>
                      <Input placeholder="Entrez le medecin referent "  {...field}/>
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                }}/ >

                <Button className="w-full" type="submit">Enregistrer</Button>
              </form>
            </Form>
        </main>
  
}