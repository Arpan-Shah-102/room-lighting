import { Section } from "./components/Section";
import './App.css'

function App() {
  return (
    <>
      <h1>My Room Lighting</h1>
      <Section
        title="About"
        description1="This is a project to add cool lighting to my room."
        description2="This is an online documentation of my journey."
      />
      <Section
        title="Thinking"
        time="0.2"
        date="Aug 8, 2026, 2:29 AM"
        description1="My room has a smart light that can change colors but that's the only colorful light in my room. I want more. I have some rgb strips and some wire lights that I think will look good. I think I will add the lights under my desk, near my dresser, and behind my bed."
        image="https://cdn.hackclub.com/019fe00e-c3a6-7a2b-a995-99bfa14c43cf/25289.jpg"
        image2="https://cdn.hackclub.com/019fe00e-e2cc-7800-ace2-778520c9cc82/25290.jpg"
      />
      <Section
        title="First light installed"
        time="0.1"
        date="Aug 8, 2026, 2:38 AM"
        description1="I got the first wire light installed under my desk. It looks nice. I have a couple of them so I may put them in more places."
        image="https://cdn.hackclub.com/019fe017-36a3-7697-9bfb-735b3c76985f/25291.jpg"
      />
      <Section
        title="Finding the right button"
        time="0.1"
        date="Aug 8, 2026, 2:44 AM"
        description1="My wire lights that I'm using have a button to turn them on and I just realized that not all of them are clicky enough so I had to find 2 more with the right click."
        image="https://cdn.hackclub.com/019fe01a-44e5-7a66-b4f4-9e6b2bde6186/25292.jpg"
      />
      <Section
        title="Second light installed"
        time="0.1"
        date="Aug 8, 2026, 2:50 AM"
        description1="I have now put on both wire lights under my desk and it looks very good! I'm happy with the results. I think I should work on the rgb strip light now. I may do it tomorrow through (aka in the morning) because it's getting late"
        image="https://cdn.hackclub.com/019fe01f-68d8-76d6-b2c1-903da4c7ac42/25293.jpg"
        image2="https://cdn.hackclub.com/019fe01f-8c89-7225-952f-783bbf897252/25294.jpg"
      />
      <Section
        title="Finished installing rgb light strip."
        time="0.3"
        date="Aug 8, 2026, 3:00 AM"
        description1="This was considerably longer and more tedious because the light strip is longer and it's behind my things which I had to move to get them in. I'm calling it a night today as it's too late now."
        image="https://cdn.hackclub.com/019fe029-eb2c-7dd8-8319-40b1a5e03957/25295.jpg"
      />
      <Section
        title="Installing under bed light"
        time="0.1"
        date="Aug 8, 2026, 11:25 PM"
        description1="Today I realized that I should probably add a light under the bed in case I need it at night. I will move on to adding in the last led strip I have."
        image="https://cdn.hackclub.com/019fe48e-21c2-7091-bb1b-2301d4a8f15b/25305.jpg"
      />
      <Section
        title="Finished lights"
        time="0.3"
        date="Aug 8, 2026, 11:42 PM"
        description1="I have finally put in my bed frame light and it looks peak. I am very happy with the results and all the lights I added. Since I need to add a GitHub repo and stuff I'll probably create a react site for it tomorrow."
        image="https://cdn.hackclub.com/019fe49d-ad54-7cfe-befa-f6016c345e71/25306.jpg"
      />
      <Section
        title="Making demo video"
        time="0.5"
        date="Aug 9, 2026, 11:31 PM"
        description1="Apparently, you can't have a website as the demo so I had to spend a little while making a video. I also finished making a website for this. Video link is: https://youtu.be/2hm3IfCPdcY?is=76xDpU2hL98abZto and website Link is: https://room-lighting.vercel.app/"
        image="https://cdn.hackclub.com/019fe9b9-e471-7246-8422-e4a2f7891338/25385.jpg"
      />
    </>
  )
}

export default App
