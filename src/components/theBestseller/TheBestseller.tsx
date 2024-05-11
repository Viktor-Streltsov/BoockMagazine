import React from 'react'
import Link from 'next/link'
import styles from './TheBestseller.module.scss'
import AroowLinck from '@/components/theBestseller/icons/AroowLinck'

const TheBestseller = () => {
	return (
		<div className={styles.Bestseller}>
			<div className={styles.info}>
				<p className={styles.text}><span className={styles.scidcka}>Скидка 20%</span> на избранные книги</p>
				<h2 className={styles.nameBestseller}><span className={styles.textName}>Бестселлер</span><br /> Нехудожественные
					книги!</h2>
				<Link href={'/'} className={styles.linckBestseller}>Купить сейчас <AroowLinck /></Link>
			</div>
			<ul className={styles.imgBestseller}>
				<li className={styles.imageOne}></li>
				<li className={styles.imageTwo}></li>
				<li className={styles.imageThere}></li>
			</ul>
		</div>
	)
}

export default TheBestseller