'use client'
import { FC, PropsWithChildren } from 'react'
import s from './Layout.module.scss'
import Header from './header/Header'
import Footer from './footer/Footer'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div className={s.layout}>
			<Header />
			<div className={s.main}>
				<div className='wrapper'>{children}</div>
			</div>
			<Footer />
		</div>
	)
}

export default Layout
