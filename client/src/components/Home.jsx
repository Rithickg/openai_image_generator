import {Link} from 'react-router-dom';
import img1 from '../utils/Artificial-intelligence-pana.svg';
import img2 from '../utils/water-3101241.jpg';
import img3 from '../utils/robot-2301646.jpg';
import NavBar from './NavBar';



export default function Home() {
  
  return (
    <div className='text-xl bg-black font-serif'>
      <NavBar />
        <div className='flex flex-col sm:flex-row items-center'>
          <img className='w-full sm:w-1/2 p-2 h-full sm:h-[500px]' src={img1} alt='ai'/>
          <div className='w-full sm:w-1/2 p-2 flex flex-col'>
            <span className='text-3xl sm:text-4xl px-4 py-3 text-[#407BFF]'>AI Image Generation</span>
            <span className='text-xl sm:text-2xl flex px-4'>
            Artificial intelligence (AI) has made significant advances in recent years, and one area 
            where this is particularly evident is in the generation of images and text. With the help of 
            machine learning algorithms, AI can now create highly realistic images and complete written 
            sentences in a way that is almost indistinguishable from human-generated content.
          </span>
          </div>
        </div>
        <div className='flex flex-wrap justify-center text-center w-full'>
            <div className='bg-gray-500 w-[90%] md:w-[40%] p-3 m-3 rounded-md'>
              <Link to='/createimage'>
                <img className='w-full' src={img2} alt='ai'/>
                <h1 className='text-black text-xl font-bold '>Generate Image</h1>
                <span className='text-white '>
                  Image generation using AI involves the use of neural networks to create new images based
                  on a given set of inputs. This can be used to generate a wide range of images, from photorealistic
                  landscapes to abstract art.
                </span>
              </Link>
            </div>
              <div className='bg-gray-500 w-[90%] md:w-[40%] p-3 m-3 rounded-md'>
              <Link to='/textcompletion'>
                <img className='w-full' src={img3} alt='ai'/>
                <h1 className='text-black text-xl font-bold'>Text Completion</h1>
                <span className='text-white'>
                Text completion, on the other hand, uses AI to predict the next word or phrase in a sentence,
                 making it easier for users to write long-form content or generate quick responses to messages.
                </span>
              </Link>
            </div>
        </div>
    </div>
  )
}
