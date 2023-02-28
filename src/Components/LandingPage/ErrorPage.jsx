import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function ErrorPage() {
    return (
        <div className='hero'>
            <div className='text-center hero-content'>
                <div className='max-w-lg'>
                    <img className='ml-24' src='https://media.tenor.com/hLgZBJ7RjzYAAAAi/cute-dog.gif' alt='' />
                    <p className='text-3xl mb-6'>Error 404 - Please check the URL and Try again. </p>
                    <Link to='/' className='btn btn-secondary btn-md'>
                        <FaHome className='mr-2' />
                        Back To Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage