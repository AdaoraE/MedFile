import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ErrorImg from './images/ErrorImg.png'

function ErrorPage() {
    return (

        <div className='flex justify-center h-screen items-center'>
                <div className='max-w-xl text-center -mt-36'>
                <img className='' src={ErrorImg} alt='' />
                    <h2 className='text-5xl -mt-28  font-bold '>PAGE NOT FOUND  </h2>
                    <p>Please check the URL and Try again.</p> 
                    <Link to='/' className='flex gap-3 justify-center mt-5 shadow-2xl'>
                        <FaHome className='text-2xl text-center' />
                        Back To Home
                    </Link>
                </div>
            </div>
    )
}

export default ErrorPage