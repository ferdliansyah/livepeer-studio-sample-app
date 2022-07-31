import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Livepeer Studio App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>

           Welcome to On Demand Videos 🎞
        </h1>

        <div className={styles.grid}>
      

          <Link href="onDemand/listAssets">
            <a  className={ styles.card }>
              <h2>List All Assets &rarr;</h2>
              <p>Gets all assets from your account</p>
            </a>
          </Link>

          <Link href="onDemand/listAssetsReady">
            <a  className={ styles.card }>
              <h2>List Ready Assets &rarr;</h2>
              <p>Gets all assets that has a ready status</p>
            </a>
          </Link>


          <Link href="onDemand/listAssetId">
            <a  className={ styles.card }>
              <h2>List Assets by Id &rarr;</h2>
              <p>Gets specific asset by Id</p>
            </a>
          </Link>

          <Link href="onDemand/uploadURL">
            <a  className={ styles.card }>
              <h2>Upload with URL &rarr;</h2>
              <p>Upload an asset with a downloadable URL</p>
            </a>
          </Link>

          <Link href="onDemand/uploadLocal">
            <a  className={ styles.card }>
              <h2>Upload with Local Storage &rarr;</h2>
              <p>Upload an asset by uploading a file from you local storage</p>
            </a>
          </Link>


          <Link href="onDemand/updateAsset">
            <a  className={ styles.card }>
              <h2>Update stored Assets &rarr;</h2>
              <p>Update assets already stored</p>
            </a>
          </Link>

          
        </div>
        <h3>
        <Link href="/">
          <a>&larr; Back to Home Page </a>
        </Link>
      </h3>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}