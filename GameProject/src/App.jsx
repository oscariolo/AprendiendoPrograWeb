import { InstagramFollowCard } from "./InstagramFollowCard"
import './App.css'

export function App () {


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