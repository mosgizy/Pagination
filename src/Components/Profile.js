import React from 'react'

const Profile = ({login,avatar,url}) => {
    return (
        <article className='bg-white rounded-lg text-center py-7 shadow-lg'>
            <img src={avatar} alt={login} className='w-[130px] h-[130px] object-cover rounded-full m-auto' />
            <p className='mt-3.5 mb-4 tracking-wide capitalize'>{login}</p>
            <a href={url} className='bg-green-600 uppercase text-xs text-white px-4 py-1 rounded-full text-center'>view profile</a>
        </article>
    )
}

export default Profile
