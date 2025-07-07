import React from 'react'

const Card = ({ item }) => {
    // item is an array, so access first element
    const { img } = item[0];

    return (
        <div className="card">
            <img className='mainImg' src={img} alt="Card" />
            <p className='font-[500] line-clamp-2 w-[90%]'>Title Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className='text-[gray] text-[14px] line-clamp-2 w-[90%]'>Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aut dolores quaerat maxime praesentium!</p>
            <div className='flex item-center gap-[10px] mt-2'>
                <img className='w-[30px] h-[30px] rounded-[50%] object-cover cursor-pointer ' src="https://cdn.prod.website-files.com/62d84e447b4f9e7263d31e94/6399a4d27711a5ad2c9bf5cd_ben-sweet-2LowviVHZ-E-unsplash-1.jpeg" alt="" />
                <p className='mb-3'>Sayan</p>
            </div>
        </div>
    )
}

export default Card
