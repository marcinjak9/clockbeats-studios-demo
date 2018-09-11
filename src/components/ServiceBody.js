import React from 'react'

const ServiceBody = ({ content, contentComponent: ContentComponent }) => (
  <div className="container">
    <div className="post-content">
      <ContentComponent content={content} />
    </div>
  </div>
)

export default ServiceBody
