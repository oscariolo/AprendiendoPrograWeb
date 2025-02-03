import { useState } from "react"

export function InstagramFollowCard ({children,suggestion = 'Error loading suggestion'}) {
    const [isfollowing, setFollowing] = useState(false)

    const text = isfollowing? "Siguiendo" : "Seguir"

    const followButton = isfollowing? 'ins-followCard-Button is-following': 'ins-followCard-Button'
    
    const handleClick = ()=>{setFollowing(!isfollowing)}
    

    return (
        <article className='ins-followCard'>
            <header className="ins-followCardHeader">
                <img className="ins-followCardAvatar"
                alt='No avatar available'
                src={`https://unavatar.io/${children}@gmail.com`}
                />
                <div className='ins-followCardInfo'>
                    <strong>{children}</strong>
                    <span className="ins-followCard-Username">{suggestion}</span>
                </div>
            </header>

            <aside>
                <button className={followButton} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}