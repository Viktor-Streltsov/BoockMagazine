'use client'

import React from 'react'
import Link from 'next/link'
import Logo from '../icons/Logo'
import { signOut, useSession } from 'next-auth/react'
import User from '@/components/theHeader/icons/User'
import Search from '@/components/theHeader/icons/Search'

import styles from './TheHeader.module.scss'

const TheHeader = () => {
	const session = useSession()

	return (
		<header className={styles.wrapperHeader}>
			<div className={styles.menu}>
				<div className={styles.logo}><Logo /></div>
				<div className={styles.inputSearch}>
					<input className={styles.search} type='text' placeholder='Ищите здесь по названию, автору или ISBN...' />
					<div className={styles.imagesSearch}><Search /></div>
				</div>
			</div>
			<div className={styles.linck}>
				{
					session?.data && (
						<Link className={styles.textLink} href='/profile'>Профиль</Link>
					)
				}
				{
					session?.data ?
						<Link className={styles.textLink} href='#'
									onClick={() => signOut({ callbackUrl: '/' })}>Выйти</Link>
						:
						<>
							<User /><Link className={styles.textLink} href='/signin'>Войти</Link>/<Link className={styles.textLink}
																																													href='/signin'>Зарегистрироваться</Link>
						</>
				}
			</div>
		</header>
	)
}

export { TheHeader }
