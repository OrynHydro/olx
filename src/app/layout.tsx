import type { Metadata } from 'next'
import { Kanit } from 'next/font/google'
import './globals.scss'

const kanit = Kanit({
	weight: ['400', '500', '700'],
	style: 'normal',
	subsets: ['latin'],
	variable: '--var-kanit',
})

export const metadata: Metadata = {
	title: 'OLX website',
	description: 'OLX website',
	icons: 'favicon.ico',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={kanit.className}>{children}</body>
		</html>
	)
}
