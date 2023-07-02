
import { Inter } from 'next/font/google'
import Image from 'next/image';
import FileSaver, { saveAs } from 'file-saver';
import { VideoHTMLAttributes, useContext } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { FireStorage} from "../firebaseconnect/firecon"
import { useState } from 'react';
import { basePath } from '@/next.config';
import { Context } from './ContextApi/contextapi';
import { Document, pdfjs } from 'react-pdf';

const inter = Inter({ subsets: ['latin'] })
  const names="default name"
       
export default function Home() {
 
  const [currentfile,setfile]=useState("");
  const photoupload=async(file)=>{
          try {

      console.log(file)
const storageRef = ref( FireStorage, 'images/');

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);

     console.log(downloadURL)
      setfile(downloadURL)
    });
  }
);
            
          } catch (error) {
            
          }
  }
  const getimage=()=>{


// Create a reference to the file we want to download

const starsRef = ref(FireStorage, 'images.pdf');


getDownloadURL(starsRef)
  .then((url) => {
  
    setfile(url)
    console.log(currentfile)
    console.log("this is download image url"+url)
    // Insert url into an <img> tag to "download"
  })
  .catch((error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        break;
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
  });
  }

  const usecon=useContext(Context)
  const {names,setnames}=usecon;
  const [bgs,bgsset]=useState("black")
  setnames("hello setname is calling")

  return (
   <>
      <div className={`bg-${bgs} w-full h-[80px]`}>
         <div className='flex fle-row  justify-end'>
        <button id='btn1' className='flex justify-center items-center h-[60px] w-[100px] bg-green-700 rounded-full hover:bg-green-900' onClick={getimage}hidden>enable dark</button>

        </div>
        <form onSubmit={photoupload}>
         <label htmlFor="filesUpload.pdf"></label>
           <input type="file"
                 id='file'
                 onChange={(e)=>{
                photoupload(e.target.files[0])  
                 }}
                 className='w-[100px] h-[50px] '
            />
            <button>button</button>
        </form>
        
        <Image 
       
        src={currentfile}
        alt="user"
        width={100}
        height={100}/>

        
 
        
      <iframe src={currentfile} frameBorder={0}></iframe>
           
         {names? ( <h1 className='flex  flex-row justify-center items-center text-2xl  cursor-pointer ' >
            {names}</h1>):(<h1 className='bg-white text-black' >name is not present</h1>)
         }
      </div>
    
    </>
  )
}
   

const reducer=(state,action)=>{
  console.log(state,action);
//    return {Count:state.Count+1}
  if(action.type==="increment"){
const I=  {Count:state.Count+1,lastaction:action.payload,color:action.color,tcolor:action.tcolor}
return I
     }
   if(action.type==="decrement"){
   
   const D=   {Count:state.Count-1,lastaction:action.payload,color:action.color,color:action.color,tcolor:action.tcolor}
  
 
   return D
   }



}
// const increment=()=>{
// //   setCount((v)=>{
// //       return v+1
// //   })
// dispatch({type:"increment",payload:"Increment",color:"green",tcolor:"white"});
// }
// const decrement=()=>{
// // setCount((v)=>{
// //     return v-1
// // })
// dispatch({type:"decrement" , payload:"Decrement",color:"red",tcolor:"brown"});
// }
// const [Count,setCount]=useState(0)
// const  [state,dispatch]=useReducer(reducer,{Count:0 ,lastaction:"",color:"",tcolor:""})