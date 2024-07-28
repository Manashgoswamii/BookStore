import React from 'react'
import list from "../../public/list.json";
import Cards from './Cards';
import { Link } from 'react-router-dom';
function Course() {
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className="text-pink-500">  Here! :)</span> </h1>
                    <p className='mt-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vero nesciunt voluptate tenetur libero a distinctio magnam ducimus? Voluptates sapiente error non nam! Nesciunt odio ullam perferendis expedita distinctio repellat.
                        Aliquid iure odit mollitia nemo dolores voluptas aspernatur repellendus ullam amet inventore autem nisi dolorum laudantium, at pariatur. Nulla fuga, fugiat placeat cumque minima voluptates eius deserunt repudiandae harum repellat.
                        Iure, incidunt. Sed nesciunt qui rerum exercitationem repellendus eaque est expedita id, unde harum necessitatibus perferendis odit officiis minima? Corporis ea laudantium in tenetur repudiandae. Eaque illo vitae ex accusamus!</p>
                   <Link to="/">
                   <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
                   </Link>
                </div>
            
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4 justify-between'>
                {
                    list.map((item) =>(
                        <Cards key={item.id} item={item}/>
                    ))
                }
            </div>
            </div>
        </>
    )
}

export default Course
