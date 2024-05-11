'use client'

import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import Photo from './icons/1.png'
import ArrowRight from '@/components/theCriteria/icons/ArrowRight'

import './TheCriteria.scss'
import styles from './TheCriteria.module.scss'

const TheCriteria = () => {
	const [slideIndex, setSlideIndex] = useState<number>(0)
	const [updateCount, setUpdateCount] = useState<number>(0)

	let sliderRef = useRef<Slider | null>(null)

	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		afterChange: () => setUpdateCount(updateCount + 1),
		beforeChange: (current: number, next: number) => setSlideIndex(next)
	}

	const next = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext()
		}
	}

	const previous = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev()
		}
	}
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value)
		if (sliderRef.current) {
			sliderRef.current.slickGoTo(value)
		}
	}

	return (
		<div>
			<h2 className={styles.nameHeader}>Магазин по категориям</h2>
			<div className='slider-container'>
				<Slider
					ref={slider => {
						sliderRef.current = slider
					}}
					{...settings}
				>
					<div className={styles.blocBook}>
						<div className={styles.blockImage}>
							<Image src={Photo} alt='image' />
						</div>
						<div className={styles.blockText}>Suspense & Thriller</div>
					</div>
					<div className={styles.blocBook}>
						<div className={styles.blockImage}>
							<Image src={Photo} alt='image' />
						</div>
						<div className={styles.blockText}>Social Media</div>
					</div>
					<div className={styles.blocBook}>
						<div className={styles.blockImage}>
							<Image src={Photo} alt='image' />
						</div>
						<div className={styles.blockText}>Modern Fiction</div>
					</div>
					<div className={styles.blocBook}>
						<div className={styles.blockImage}>
							<Image src={Photo} alt='image' />
						</div>
						<div className={styles.blockText}>Fiction & Fantasy</div>
					</div>
					<div className={styles.blocBook}>
						<div className={styles.blockImage}>
							<Image src={Photo} alt='image' />
						</div>
						<div className={styles.blockText}>History</div>
					</div>
					<div className={styles.blocBook}>
						<div className={styles.blockImage}>
							<Image src={Photo} alt='image' />
						</div>
						<div className={styles.blockText}>Religion</div>
					</div>
				</Slider>
				<div className={styles.blockButtons}>
					<button className={styles.buttonPrev} onClick={previous}>
						<ArrowRight />
					</button>
					<input
						className={styles.inputRange}
						onChange={handleChange}
						value={slideIndex}
						type='range'
						min={0}
						max={4}
					/>
					<button className={styles.buttonNext} onClick={next}>
						<ArrowRight />
					</button>
				</div>
			</div>
		</div>
	)
}

export default TheCriteria
