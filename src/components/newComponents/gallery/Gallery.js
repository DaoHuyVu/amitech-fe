import styles from './Gallery.module.css'
export default function Gallery({image,children,...delegated}){
    return(
        <div {...delegated} className={`${styles.galleryContainer}`}>
            <img src={image} className={`${styles.galleryImageItem}`} alt='GalleryItem' />
            <div className={`${styles.galleryImageCounter}`}>
                {children}
            </div>
        </div>
    )
}