// import { useState } from 'react'
import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import { getCollectionAll, getCollectionId } from './backend/rarible'
import { filterCollection } from './utilities/utils'

function App() {
  const [continuation, setContinuation] = useState('')

  const loadCollection = async () => {
    const colAll = await getCollectionAll(continuation)
    console.log(colAll)
    const filteredColl = filterCollection(colAll.collections)

    // const col = await getCollectionId('BASE:0x43d2e1f58952a0d497f1d46d005e85f21241d6e4')
    console.log(filteredColl)
  }
  loadCollection()

  return <div className="app">
    <Header />
  </div>
}

export default App
