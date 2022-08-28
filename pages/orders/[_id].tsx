import React from 'react'
import Footer from '../../components/Footer'

const Orders = () => {

  const status:number=1;

  const statusClass=(index:number)=>{
    if(index-status<1) return "";
    if(index-status==1) return "animate-pulse inProgress ";
    if(index-status>1) return "opacity-20 undone";
  }

  return (
    <div className=" mt-[5rem]">
      
      <div className=' justify-center  md:flex p-4'>
            <div className='grow-[2] max-w-[710px]'>
                 <table className='w-full border-separate  md:border-spacing-4 border-spacing-1'>
                    <tbody className=' border-spacing-12'>
        <tr>
            <th>
                Order ID
            </th>
            <th>
                Customer
            </th>
            <th>
                Address
            </th>
            <th>
                Total
            </th>
           
        </tr>
        <tr className=' text-center'>
            <td className=''>
              1236589745
            </td>
            <td className=''>
                John Doe
            </td>
            <td className=''>
               Elton st. 212-33 LA
            </td>
            <td className=''>
                $596
            </td>
           
        </tr>
        
        </tbody>
             </table>
             <div className='mt-8 flex justify-between w-[80%]'>
              <div className={`flex flex-col items-center ${statusClass(0)}`}>
                <img className='h-12' src='../image/paid.png'/>
                <span>Payment</span>
                <img className='h-5 checkedIcon' src='../image/checked.png'/>
              </div>
              <div className={`flex flex-col items-center ${statusClass(1)}`}>
                <img className='h-12' src='../image/bake.png'/>
                <span>Payment</span>
                <img className='h-5 checkedIcon' src='../image/checked.png'/>
              </div>
              <div className={`flex flex-col items-center ${statusClass(2)}`}>
                <img className='h-12' src='../image/bike.png'/>
                <span>On the Way</span>
                <img className='h-5 checkedIcon' src='../image/checked.png'/>
              </div>
              <div className={`flex flex-col items-center ${statusClass(3)}`}>
                <img className='h-12' src='../image/delivered.png'/>
                <span>Delivered</span>
                <img className='h-5 checkedIcon' src='../image/checked.png'/>
              </div>
             </div>
        </div>
                <div className="grow-[1] mt-8 md:mt-0 mx-auto max-w-[400px] h-fit bg-black">
    <div className='p-10 font-bold text-white'>
<h1 className='text-white text-2xl '>CART TOTAL</h1>
<span>Subtotal: <span className='font-normal'>$102.50</span></span><br/>
<span>Discount: <span className='font-normal'>$102.50</span></span><br/>
<span>Total: <span className='font-normal'>$102.50</span></span><br/>
<button className='p-1 my-4 bg-white  text-teal-500   w-full'>PAID</button>
    </div>
                 </div>
   </div>
   <Footer/>
      </div>
  )
}

export default Orders
