import Counter from './day01/r1-counter/Counter'
import { ProfileForm } from './day01/r2-profile-form/Profile-form'
import { SearchList } from './day01/r3-search/SearchList'
import {items} from './day01/r3-search/data'
import './App.css'

function App() {

  return (
    <>
      <Counter></Counter>
      <ProfileForm></ProfileForm>
      <SearchList source={items} ></SearchList>
    </>
  )
}

export default App
