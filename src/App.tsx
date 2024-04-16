// import { useState } from 'react'
import './App.scss'
import { useState } from 'react'
import Header from './components/Header'
import Display from './components/Display'
import { getCollectionAll } from './backend/rarible'
import { filterCollection } from './utilities/utils'

function App() {
  const [continuation, setContinuation] = useState('')
  const[collections, setCollections ] = useState()

  const loadCollection = async () => {
    const colAll = await getCollectionAll(continuation)
    const temp: string = colAll.continuation
    setContinuation(temp)

    const filteredColl = await filterCollection(colAll.collections)
    setCollections(filteredColl)
  }
  if( continuation === '' ) loadCollection()

  return <div className="app">
    <Header />
    {collections && <Display collections={collections} />}
    <button onClick={() => loadCollection()}>Random</button>
  </div>
}

export default App
