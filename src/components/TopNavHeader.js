
import React from 'react'

// Gov.uk components 
import TopNav, { asNavLinkAnchor} from '@govuk-react/top-nav';

export default function TopNavHeader({currentPage, linksList}) {
  const NavAnchor = asNavLinkAnchor('a');
  return (
    <TopNav id="topNavHeader" serviceTitle={"HR App"}>
      {linksList.map(item => (
        <NavAnchor id={item.id} style={item.id === currentPage? {color : "#1d70b8"} : {color: "rgb(255, 255, 255)"}} href={item.link}>{item.name}</NavAnchor>
      ))}
    </TopNav>
  )
}
