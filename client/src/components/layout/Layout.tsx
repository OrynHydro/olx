'use client'
import { FC, PropsWithChildren, useEffect, useState } from 'react'
import s from './Layout.module.scss'
import Header from './header/Header'
import Footer from './footer/Footer'
import { usePathname } from 'next/navigation'
import { Provider, useDispatch } from 'react-redux'
import store from '@/store/store'
import { setUser } from '@/store/user/userSlice'
import { IUser } from '../../../../api/models/User'
import axios from 'axios'
import AuthProvider from '@/providers/Provider'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const pathname = usePathname()
	return (
		<Provider store={store}>
			<AuthProvider>
				<div className={s.layout}>
					{pathname !== '/auth' && <Header />}
					<div className={s.main}>{children}</div>
					{pathname !== '/auth' && <Footer />}
				</div>
			</AuthProvider>
		</Provider>
	)
}

export default Layout
