'use client'
import { useRouter } from "next/navigation";
import React from "react";


const Info = () => {
let navigate=useRouter();

    return (
        <div id="info-page">


            <h1> Info page </h1>
            <h2>I am born in India</h2>
            <h2>and I like to play Cricket </h2>
             <button id="info-to-blog"onClick={()=>navigate.push('/blog')}> Go to Blog</button>
             <button id="info-to-home"onClick={()=>navigate.push('/')}> Go to Home</button>
        </div>
    )
}
export default Info