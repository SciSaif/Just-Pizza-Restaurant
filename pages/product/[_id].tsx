import React,{ useState} from 'react'
import { useRouter } from "next/router";
import Footer from '../../components/Footer';
import Link from 'next/link'

const product = () => {
  const [qut, setQut] = useState<number>(1);
  const [size, setSize] = useState<string>("Medium");
  
  const router = useRouter();
  const _id = router.query._id;
  console.log(_id);
  return (
    <div className=" mt-[5rem]">
    <div className="p-2 lg:justify-between sm:flex">
					<div className="flex m-4  flex-1 justify-center">
						<img
							className="w-full  md:max-w-md sm:max-w-sm max-w-[380px] object-contain "
							src='../image/pizza.png'
						/>
					</div>
          <div className=" flex flex-col flex-1 ">
					<div className=" flex flex-col m-4 mb-0 flex-1">
				
							<h1 className="text-3xl font-bold uppercase">
								CAMPAGNOLA
							</h1>
							<h2 className="text-xl text-rose-400 underline decoration-1 underline-offset-4 ">
                 $ 553
                 </h2>
							<p className=" mb-4 tracking-wider">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ad totam repellendus quod voluptatum voluptatem saepe in maiores pariatur amet! Assumenda nulla necessitatibus quia a amet vel reiciendis, quos rem?
							</p>
              <div>
                <span className="text-lg font-bold">Choose the size</span>
                <div className='mt-4 flex space-x-8'>

                  <div
                  onClick={()=>setSize("Small")}
                  className="relative flex">
                  <img className={`h-8 cursor-pointer rounded-full ${size==="Small"&&"bg-rose-500" }  `} src="../image/size.png" />
                  <span className='rounded-2xl absolute -top-2 left-4 px-1 bg-green-900 text-white '> Small </span>
                  </div>

                  <div
                   onClick={()=>setSize("Medium")}
                  className="relative flex ">
                  <img className={`h-12 cursor-pointer rounded-full ${size==="Medium"&&"bg-rose-600" }  `} src="../image/size.png" />
                  <span className='rounded-2xl absolute -top-2 left-4 px-1 bg-green-900 text-white '> Medium </span>
                  </div>

                  <div
                   onClick={()=>setSize("Large")}
                  className="relative flex">
                  <img className={`h-16 cursor-pointer rounded-full ${size==="Large"&&"bg-rose-700" }  `} src="../image/size.png" />
                  <span className='rounded-2xl absolute -top-2 -right-5 px-1 bg-green-900 text-white '> Large </span>
                  </div>

                </div>

                <div className='mt-4 '>
                <span className="lg:text-lg text-sm font-bold">Choose additional ingredients</span>
				<div className='flex text-base space-x-3 '>
				<div className='flex items-center gap-[1px]' >
					<input className='w-4 h-4' type="checkbox" id="double" name="double" />
					<label htmlFor='double '>Double Ingredients</label>
				</div>
				<div className='flex items-center gap-[1px]'>
					<input  className='w-4 h-4' type="checkbox" id="extra" name="extra" />
					<label htmlFor='extra'>Extra Cheese</label>
				</div>
				<div className='flex items-center gap-[1px]'>
					<input className='w-4 h-4' type="checkbox" id="spicy" name="spicy" />
					<label htmlFor='spicy'>Spicy Sause</label>
				</div>
				<div className='flex items-center gap-[1px]'>
					<input className='w-4 h-4' type="checkbox" id="garlic" name="garlic" />
					<label htmlFor='garlic'>Garlic Sause</label>
				</div>
				</div>
                </div>
              </div>		
							</div>
				
				
						<div className="mt-0 m-4 flex items-center w-80  justify-between">
							<div className="flex items-center space-x-1">
							
							<input className="focus:outline-none border p-1 w-24" defaultValue={qut} onChange={(e)=>setQut(parseInt(e.target.value))} type="number" />
								
							<div className="flex  justify-center items-center space-x-2">
								<Link href='/cart'>
								<button
									disabled={qut<=0}
									
									className="p-1 border-2 text-white bg-rose-800 "
									>
									ADD TO CARD
								</button>
									</Link>
							</div>

						</div>

						</div>
						
					</div>
				</div>
</div>
  
  )
}

export default product;