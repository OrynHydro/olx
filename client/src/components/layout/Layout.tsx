'use client'
import { FC, PropsWithChildren } from 'react'
import s from './Layout.module.scss'
import Header from './header/Header'
import Footer from './footer/Footer'
import { usePathname } from 'next/navigation'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const pathname = usePathname()
	return (
		<div className={s.layout}>
			{pathname !== '/auth' && <Header />}
			<div className={s.main}>{children}</div>
			{pathname !== '/auth' && <Footer />}
		</div>
	)
}

export default Layout
