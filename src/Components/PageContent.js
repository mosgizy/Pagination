import React from 'react'
import { useGlobalContext } from '../context'
import Profile from '../Components/Profile'
import NavigationBtn from '../Components/NavigationBtn'

const PageContent = () => {
    const { profiles } = useGlobalContext()

    return (
        <section className='max-w-[1170px] w-[90vw] m-auto'>
            <article className='flex flex-col mt-24 gap-8 profiles flex-wrap sm:flex-row'>
                {
                    profiles.map((profile) => {
                        return <Profile key={profile.id} login={profile.login} avatar={profile.avatar_url} url={profile.html_url} />
                    })
                }
            </article>
            <article>
                <NavigationBtn />
            </article>
        </section>
    )
}

export default PageContent
