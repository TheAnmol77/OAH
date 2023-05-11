import StoreItems from '../store'
import Image from "next/image"
export default function Store(){
    
    StoreItems.map((item)=>{
        console.log(item.name)
    })
    return(
        <div className='h-screen m-[14vh] grid grid-cols-4 gap-2'>
            {StoreItems.map((items)=>(
                    <div style={{boxShadow: "0px -1px 9px 9px rgba(237, 224, 202, 0.976)"}} className="bg-[#f2eadd] flex rounded-xl overflow-hidden h-[50vh] flex-col justify-center p-2 ">
                        <div style={{backgroundImage:`url(${items.image})`}} className="img h-[60%] bg-center bg-no-repeat bg-cover">
                            
                        </div>
                        <div className="h-[4vh] flex justify-between">
                            <p className="text-2xl" data-name>{items.name}</p>
                            <p className="text-lg" data-price>Rs.{items.price}</p>
                        </div>
                        <div className="rating_div">
                            <i className="fi fi-ss-star-octogram"></i><span data-rating></span>
                        </div>
                        <div className="text-sm">
                            <p data-description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non optio suscipit deleniti tempora sint voluptatum quo provident dignissimos dolore saepe vero dolores aliquid, obcaecati aliquam.</p>
                            <button className="border-2 p-2 bg-orange-900 text-white rounded-l border-orange-900" data-add-button>Add to Cart</button>
                        </div>
                    </div>
            ))}
        </div>
    )
}