import React from 'react'
import HomeHeroPt from '../HomeHero/HomeHeroPt'
import HomeSectionPt from '../HomeSection/HomeSectionPt'
import HomeBaseImage from '../HomeBaseImages'

const HomePt: React.FC = () => {
	return (
		<>
			<HomeHeroPt />
			<HomeSectionPt />
			<HomeBaseImage />
		</>
	)
}

export default HomePt
