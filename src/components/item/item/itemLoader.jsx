import React from "react"
import ContentLoader from "react-content-loader"

const ItemLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={256}
    height={447}
    viewBox="0 0 256 447"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="16" y="367" rx="3" ry="3" width="224" height="22" /> 
    <rect x="16" y="395" rx="3" ry="3" width="224" height="22" /> 
    <rect x="16" y="20" rx="3" ry="3" width="224" height="330" />
  </ContentLoader>
)

export default ItemLoader