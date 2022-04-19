import React from 'react'
import './stylesSkeleton.css'

function Skeleton({skeletonSize, skeletonContainer}) {
	const styles = {
		sizeSkeleton: {
			width: skeletonSize.width,
			height: skeletonSize.height,
			borderRadius: skeletonSize.radius,
		},
		containerSkeleton: {
			width: skeletonContainer.width,
			height: skeletonContainer.height,
			justifyContent: skeletonContainer.justify,
			alignItems: skeletonContainer.align,
			display: 'flex',
			position: 'relative',
		},
	}

	return (
		<section style={styles.containerSkeleton}>
			<div className="skeleton" style={styles.sizeSkeleton}></div>
		</section>
	)
}

export default Skeleton
