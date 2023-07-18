import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
  return (
    <>
      <TwitterFollowCard isFollowing={true} userName="axelyeray1" >
        <h1>Axel yeray</h1>
      </TwitterFollowCard>
      
      <TwitterFollowCard isFollowing={false} userName="pablo" >
        <h1>Pablo</h1>
      </TwitterFollowCard>
    </>
  )
}