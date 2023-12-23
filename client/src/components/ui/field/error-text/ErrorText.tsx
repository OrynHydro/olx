import { FC } from 'react'
import s from './ErrorText.module.scss'

const ErrorText: FC<
	React.HTMLAttributes<HTMLDivElement> & { children: string | undefined }
> = ({ children, ...rest }) => {
	return (
		<>
			{children && (
				<div className={s.error} {...rest}>
					{children}
				</div>
			)}
		</>
	)
}

export default ErrorText
