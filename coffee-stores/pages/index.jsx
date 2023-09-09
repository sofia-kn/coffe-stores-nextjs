import Head from 'next/head'
import Banner from '../components/Banner'
import styles from '../styles/Home.module.css'

export default function Home() {

  const handleOnBannerBtnClick = () => {
    console.log('btn click');
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      
          <Banner buttonText='View stores nearby' handleOnClick={handleOnBannerBtnClick}/>
      
      </main>

     
    </div>
  )
}
