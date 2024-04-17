import './App.scss'
import { useEffect, useState } from 'react'
import Header from './components/Header'
import Display from './components/Display'
import { getCollectionAll } from './backend/rarible'
import { filterCollection } from './utilities/utils'
import { CollectionInterface } from './interface/collection'

function App() {
  const [continuation, setContinuation] = useState('')
  const [collections, setCollections ]: Array<any> = useState([])
  const [reload, setReload] = useState(0)

  useEffect( () => {
    setCollections([])
    const loadCollection = async () => {
      const colAll = await getCollectionAll(continuation)
      setContinuation(colAll.continuation)
      const filteredColl: CollectionInterface[] = filterCollection(colAll.collections)
      setCollections(filteredColl)
    }
    loadCollection()
  }, [reload])

  return <div className="app">
    <Header reload={setReload} />
    { collections.length > 0 && <Display collections={collections} /> }
  </div>
}

export default App
