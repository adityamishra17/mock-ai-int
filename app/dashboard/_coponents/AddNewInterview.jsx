"use client"
import { useState } from "react"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { chatSession } from "@/utils/GeminiAIModal"
import { Mockinterview } from "@/utils/schema"
import { LoaderCircle } from "lucide-react"
import { db } from "@/utils/db"
import { v4 as uuidv4 } from 'uuid';
import { useUser } from "@clerk/nextjs"
import moment from "moment"


function AddNewInterview() {
  const [openDailog,setOpenDialog]= useState(false)
  const [jobPosition,setJobposition]= useState();
  const [JobDesc,setJobDesc]= useState();
  const [JobExperience,setJobExperience]= useState();
  const [loading,setLoading]= useState(false);
  const [JsonResponse,setJsonResponse]=useState([]);
  const {user}=useUser();


  const onSubmit=async(e)=>{
    setLoading(true)
    e.preventDefault()
    console.log(jobPosition,JobDesc,JobExperience)

    const inputPrompt= "Job Position: "+jobPosition+", Job Description: "+JobDesc+" , Years of Experience:"+JobExperience+" , Depends on this information please give me "+process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT+" Interview question with Answered in Json Format, Give Question and Answered as field in JSON"

    const result = await chatSession.sendMessage(inputPrompt);
    const MockJsonResp=(result.response.text()).replace('```json', '').replace('```', '')
    console.log(JSON.parse(MockJsonResp));
    setJsonResponse(MockJsonResp);

    if(MockJsonResp)
    {
    const resp=await db.insert(Mockinterview)
    .values({
      mockld:uuidv4(),
      jsonMockResp:MockJsonResp,
      jobPosition:jobPosition,
      JobDesc:JobDesc,
      jobExperience:JobExperience,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD-MM-yyyy')

    }).returning({mockId:Mockinterview.mockld});

    console.log("Inserted ID:",resp)
  }else {
    console,log("ERROR");
  }

    setLoading(false);

  }
  return (
    <div>
      <div className='p-10 border rounded-lg bg-secondary hover:scale-105 
      hover:shadow-md cursor-pointer transition-all'
      onClick={()=>setOpenDialog(true)}
      >
        <h2 className='font-bold text-lg text center'>+Add new </h2>
      </div>
      <Dialog open={openDailog}>
        
        <DialogContent className="max-w-2xl ">
          <DialogHeader>
            <DialogTitle className ="text-2xl">Tell us more about job interview?</DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
              <div>
               
                <h2>Add detail about your job position/role an years of experience  </h2>
                <div  className='mt-7 my-3'>
                  <label> Job Role /Job Position</label>
                  <Input placeholder="Ex.Fullstack Developer" required
                  onChange={(event)=> setJobposition(event.target.value)}
                  />

                </div>
                <div  className=' my-3'>
                  <label> Job Description </label>
                  <Textarea placeholder="Ex, react angular" required
                  onChange={(event)=> setJobDesc(event.target.value)}
                  />

                </div>
                <div  className=' my-3'>
                  <label> Job Role /Job Position</label>
                  <Input placeholder="ex-5" type ="number" required
                  onChange={(event)=> setJobExperience(event.target.value)}
                  />

                </div>
                
              </div>
              <div className='flex gap-5 justify-end'>
                <Button type ="button" variant= "ghost" onClick={()=> setOpenDialog(false)}>Cancel</Button>
                <Button type =" submit" disabled ={loading}>
                  {loading?
                  <>
                  <LoaderCircle className="animate=spin"/>'Generating from AI '
                  </>:'Start Interview'
                 }
                  
                 </Button>
              </div>
              </form>
            </DialogDescription>

          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddNewInterview
