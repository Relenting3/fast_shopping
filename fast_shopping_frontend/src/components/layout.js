import React, { Fragment } from 'react'
import { ContainerLayout } from '../styles/generalStyles'
import { Nav } from './nav'

const Layout = ({children}) =>{
	
	return <Fragment>
    <Nav />
		<ContainerLayout>
			{children}
		</ContainerLayout>
	</Fragment>
}
export default Layout