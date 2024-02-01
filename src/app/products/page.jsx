'use client'
import { useRouter } from 'next/navigation';
const page = () => {
    const router = useRouter()
    const addProduct = () =>{
        alert('added product')
        router.push('/')
    }
    return (
        <div>
            <h2>this is our products</h2>
            <button className='bg-teal-500 text-white px-3 py-2' onClick={addProduct}>Add product</button>
        </div>
    );
};

export default page;