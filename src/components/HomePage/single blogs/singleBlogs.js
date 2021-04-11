import React from 'react'
import  "./singleBlogs.css"
import SingleBlog from "./images/singleBlog.jpg"
import {RiPencilFill} from "react-icons/ri"
import {MdDateRange} from "react-icons/md"
import {BsBookmark} from "react-icons/bs"
import {AiOutlineShareAlt} from "react-icons/ai"
import {IoFlashOutline} from "react-icons/io5"
import {CgArrowLongRight} from "react-icons/cg"
import Lawyer from "./images/lawyer.jpeg"
const SingleBlogs = () => {
    return (
        <div className="stat-blog-main">
            <div className="stat-blog-upper-image">
                <img src ={SingleBlog} className="" placeholder="blog"/>

            </div>
            <div className="stat-blog-middle">
               <div className="stat-blog-headings">
                   <div className="stat-blog-cat">
                       <RiPencilFill/>
                       <p>Criminology</p>
                   </div>
                   <div className="stat-blog-date">
                         < MdDateRange/>
                       <p>January 21,2021</p>
                   </div>

               </div>
               <div className="stat-blog-title">
                  <p>Digitalization of Criminology age of modern Law</p>
               </div>
               <div className="stat-blog-des">
                  <p>graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus </p>
               </div>
               <div className="stat-blog-social">
                   <div className="stat-blog-lawyer">
                       
                          <img className="stat-blog-lawyer-img" src={Lawyer} alt="lawyer"/>
                       
                        <div className="stat-blog-lawyer-name">
                            <p>Lawyer Name</p>
                            <p>Law Firm Name</p>
                        </div>
                   </div>
                   <div className="stat-blog-share">
                        <div className='stat-blog-icons'>
                            <AiOutlineShareAlt/>
                        </div>
                        <div className='stat-blog-icons2'>
                            <BsBookmark/>
                        </div>
                   </div>

               </div>
            </div>
            <div className="stat-blog-lower">
                 <div className="stat-blog-popular">
                     <IoFlashOutline style={{fontSize:"1rem"}}/>
                     <p>Popular</p>
                 </div>
                 <div className="stat-blog-read">
                     <p>Read More</p>
                      <CgArrowLongRight style={{fontSize:"1rem"}}/>
                 </div>
            </div>
        </div>
    )
}

export default SingleBlogs
