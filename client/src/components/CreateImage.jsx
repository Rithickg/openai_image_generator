import React from 'react'
import {useState} from 'react';
import axios from 'axios'
import NavBar from './NavBar';

export default function CreateImage() {
    const [imgText,setImgText]=useState('');
    const [imgSize,setImgSize]=useState('medium');
    const [imgUrl,setImgUrl]=useState('');
    const [question,setQuestion]=useState('');
    const [loader,setLoader]=useState(false);


   

        const handleSubmit =async(e)=>{
            e.preventDefault()

            if(imgText===''){
                alert("Please Enter Text")
            }else{
                setLoader(!loader);
            }
            try {
              const response = await axios.post('https://openaiimagegeneratorapi-production.up.railway.app/openai/generateimage',{
                    prompt:imgText,
                    size:imgSize
                })

                // if(!response.ok){
                //     throw new Error("Image could not be generated")
                // }

                console.log(response)
                console.log(response.data.data)
                const url =response.data.data
                setImgUrl(url);
                setQuestion(imgText);
                setImgText('');


            } catch (error) {
                console.log(error);
            }
        }
  return (
    <div className='flex flex-col text-center justify-center text-white'>
        <NavBar/>
       <div className='bg-[#00171f] w-full h-[300px] sm:h-[400px] flex flex-col justify-center items-center my-auto mx-auto'>
        <h1 className='sm:text-5xl text-3xl p-3 my-2'>Generate Image</h1>
        <div className='flex flex-col w-full'>
            <input className='mx-auto sm:w-[70%] w-[80%] h-10 p-1 rounded-md text-black text-lg' required type='text' value={imgText} onChange={(e)=>{setImgText(e.target.value)}} placeholder='Enter Text...'/>
            <select className='bg-[#407BFF] text-black font-semibold w-fit p-2 mx-auto my-3 rounded-md text-xl ' value={imgSize} onChange={(e)=>{setImgSize(e.target.value)}}>
                <option value='medium'>Medium</option>
                <option value='small'>Small</option>
                <option value='large'>Large</option>
            </select>
            <button className='bg-[#407BFF] text-black font-semibold w-fit p-2 mx-auto my-2 rounded-md text-2xl' onClick={handleSubmit}>Generate Image</button>
        </div>
        </div>
        { imgUrl ?
         (<div className=' mx-auto p-1 w-full h-[600px] text-black bg-[#edf2f4]'>
          <h1 className='p-1 text-xl font-semibold'>{question}</h1>
          <img className='mx-auto' src={imgUrl} alt='OpenAi Generated'/>
      </div>) :
     (<div className={`mx-auto my-6 ${loader ? 'visible' : 'hidden'}`}>
     <svg aria-hidden="true" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
         <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
     </svg>
     <span className="sr-only">Loading...</span>
     </div>)
        }

    </div>
  )
}
