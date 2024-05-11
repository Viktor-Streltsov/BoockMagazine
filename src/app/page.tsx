import React from 'react'
import TheOpenWorld from '@/components/theOpenWorld/TheOpenWorld'
import TheCriteria from '@/components/theCriteria/TheCriteria'
import TheFeatured from '@/components/theFeatured/TheFeatured'
import TheRequest from '@/components/theRequest/TheRequest'
import TheComments from '@/components/TheComments/TheComments'
import styles from './styles/Home/Home.module.scss'
import TheBestseller from '@/components/theBestseller/TheBestseller'

const Home = () => {
	return (
		<>
			<section className={styles.wrapperOpenWorld}>
				<TheOpenWorld />
			</section>
			<section className={styles.wrapperCriteria}>
				<TheCriteria />
			</section>
			<section className={styles.wrapperBestseller}>
				<TheBestseller />
			</section>
			<section className={styles.wrapperFeatured}>
				<TheFeatured />
			</section>
			<section className={styles.wrapperComments}>
				<TheComments />
			</section>
			<section className={styles.wrapperRequest}>
				<div className={styles.componentRequest}>
					<TheRequest />
				</div>
			</section>
		</>
	)
}

export default Home