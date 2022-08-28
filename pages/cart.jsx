import React from 'react'
import Footer from '../components/Footer'
import Link from 'next/link'
const cart = () => {
  return (
 <div className=' mt-[5rem]'>
       <div className=' justify-center  flex p-4'>
            <div className='grow-[2] max-w-[710px]'>
                 <table className='w-full border-separate  border-spacing-4'>
                    <tbody className=' border-spacing-12'>
        <tr>
            <th>
                Product
            </th>
            <th>
                Name
            </th>
            <th>
                Extra
            </th>
            <th>
                Price
            </th>
            <th>
                Quantity
            </th>
            <th>
                Total
            </th>
        </tr>
        <tr className=' text-center'>
            <td className=''>
               <img className='object-cover h-36' src="../image/pizza.png" alt="pizza image"/>
            </td>
            <td className='font-semibold text-base text-rose-500'>
                CAMPAGNOLA
            </td>
            <td className=''>
                Double ingredient spicy sauce
            </td>
            <td className=''>
                $596
            </td>
            <td className=''>
                2
            </td>
            <td className=''>
                $586
            </td>
        </tr>
        <tr className=' text-center'>
            <td className=''>
               <img className='object-cover h-36' src="../image/pizza.png" alt="pizza image"/>
            </td>
            <td className='font-semibold text-rose-500'>
                CAMPAGNOLA
            </td>
            <td className=''>
                Double ingredient spicy sauce
            </td>
            <td className=''>
                $596
            </td>
            <td className=''>
                2
            </td>
            <td className=''>
                $586
            </td>
        </tr>
        </tbody>
             </table>
        </div>
                <div className="grow-[1] max-w-[400px] h-fit bg-black">
    <div className='p-10 font-bold text-white'>
<h1 className='text-white text-2xl '>CART TOTAL</h1>
<span>Subtotal: <span className='font-normal'>$102.50</span></span><br/>
<span>Discount: <span className='font-normal'>$102.50</span></span><br/>
<span>Total: <span className='font-normal'>$102.50</span></span><br/>
<Link href="/orders/458876633">
<button className='p-1 my-4 bg-white text-rose-400 w-full'>CHECKOUT NOW</button>
</Link>
    </div>
                 </div>
   </div>
        <Footer/>
 </div>
  )
}

export default cart