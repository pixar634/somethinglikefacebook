import React from 'react'
import StoryCard from './StoryCard'
import { useSession } from "next-auth/client"



function Stories() {
    const [session] = useSession()
    const stories = [
        {
            name: "Soumava Paul",
            src: "https://links.papareact.com/4zn",
            profile: session.user.image,
        },
        {
            name: "Elon Musk",
            src: "https://links.papareact.com/4zn",
            profile: "https://links.papareact.com/kxk",
        },
        {
            name: "Jeff Bezoz",
            src: "https://links.papareact.com/k2j",
            profile: "https://links.papareact.com/f0p",
        },
        {
            name: "Mark Zuckerberg",
            src: "https://links.papareact.com/xql",
            profile: "https://links.papareact.com/snf",
        },
        {
            name: "Bill Gates",
            src: "https://links.papareact.com/4u4",
            profile: "https://links.papareact.com/zvy",
        },
        {
            name: "Bill Gates",
            src: "https://links.papareact.com/4u4",
            profile: "https://links.papareact.com/zvy",
        },
    ];

    return (
        <div className="flex justify-centre space-x-3 mx-auto">
            {/* <h1>testing</h1> */}
            {stories.map((story) => (
                <StoryCard
                    name={story.name} src={story.src} profile={story.profile}
                />
            )
            )}

        </div>
    )
}

export default Stories
