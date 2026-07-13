import React from 'react'
import CollectionsHeader from '../components/collections/CollectionsHeader'
import CollectionToolbar from '../components/collections/CollectionToolbar'
import CollectionGrid from '../components/collections/CollectionGrid'

const Collections = () => {
  return (
     <div className="space-y-6">

      <CollectionsHeader />

      <CollectionToolbar />

      <CollectionGrid />

    </div>
  )
}

export default Collections
