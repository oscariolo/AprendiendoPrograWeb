import { InstagramFollowCard } from "./InstagramFollowCard"
import './App.css'
import React, {useEffect,useState} from 'react'

export function App () {

    const [posts,setPosts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/api/products/all/').then((response)=>response.json()).then((data)=>{
            console.log(data);
            setPosts(data);
        })
        .catch((err)=>{
            console.log(err.message);
        })
    })


    return (
        <section className="ins-FriendSuggestions">
            <InstagramFollowCard suggestion="Te sigue a ti">
                Oscar Orellana
            </InstagramFollowCard>
                
            <InstagramFollowCard>
                Joshua Cueva
            </InstagramFollowCard>

            <InstagramFollowCard suggestion="Te sigue a ti">
                Aaron Ortiz
            </InstagramFollowCard>
        </section>
    )
}