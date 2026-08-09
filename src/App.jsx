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
        description1="My room has a smart light that can change colors but that's the only colorful light in my room. I want more. I have some rgb strips and some wire lights that I think will look good. I think I will add the lights under my desk, near my dresser, and behind my bed."
        image="https://cdn.hackclub.com/019fe00e-c3a6-7a2b-a995-99bfa14c43cf/25289.jpg"
        image2="https://cdn.hackclub.com/019fe00e-e2cc-7800-ace2-778520c9cc82/25290.jpg"
      />
      <Section
        title=""
        description1=""
        image=""
        description2=""
      />
      <Section
        title=""
        description1=""
        image=""
        description2=""
      />
      <Section
        title=""
        description1=""
        image=""
        description2=""
      />
    </>
  )
}

export default App
