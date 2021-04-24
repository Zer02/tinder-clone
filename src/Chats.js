import React from 'react'
import './Chat.css'
import Chat from './Chat'

function Chats() {
  return (
    <div className="chats" >
      <Chat
        name="Jeff"
        message="What are you reading?"
        timestamp="45 minutes ago"
        profilePic="https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"
      />
      <Chat
        name="Elon"
        message="Yo what's up"
        timestamp="40 seconds ago"
        profilePic="https://i.insider.com/6038b0ec05ddb100195f656f?width=700"
      />
      <Chat
        name="Steve"
        message="Your time is limited.."
        timestamp="10 years ago"
        profilePic="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg"
      />
      <Chat
        name="Mark"
        message="Hey, why are you watching that?"
        timestamp="4 minutes ago"
        profilePic="https://cdn.i-scmp.com/sites/default/files/styles/1920x1080/public/d8/images/methode/2020/02/03/7ffc02a0-432a-11ea-9fd9-ecfbb38a9743_image_hires_115830.jpeg?itok=E3rd9X6j&v=1580702317"
      />

    </div>
  )
}

export default Chats
