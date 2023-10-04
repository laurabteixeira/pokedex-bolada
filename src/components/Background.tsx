import React from 'react'
import { bucketAssetsUrl } from '../utils/Constants'

function Background() {
  return (
    <div className="background">
      <img
        src={`${bucketAssetsUrl}/pokeball.png`}
        alt="pokeball"
        className="pokeball pokeball1"
      />
      <img
        src={`${bucketAssetsUrl}/pokeball2.png`}
        alt="pokeball"
        className="pokeball pokeball2"
      />
      <img
        src={`${bucketAssetsUrl}/pokeball.png`}
        alt="pokeball"
        className="pokeball pokeball3"
      />
      <img
        src={`${bucketAssetsUrl}/pokeball2.png`}
        alt="pokeball"
        className="pokeball pokeball4"
      />
      <img
        src={`${bucketAssetsUrl}/pokeball.png`}
        alt="pokeball"
        className="pokeball pokeball5"
      />
      <img
        src={`${bucketAssetsUrl}/pokeball2.png`}
        alt="pokeball"
        className="pokeball pokeball6"
      />
    </div>
  )
}

export default Background
