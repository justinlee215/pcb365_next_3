import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import styles from "./forms.module.css";

export default function Form({ ...props }) {
  return (
    <Layout home>
      <Head>
        <title>Documentation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <h1 className={styles.title}>Form List</h1>
        <div className={styles.formBox}>
          <div className={styles.grid}>
            <Link href="/forms/canadacustomsinvoice">
              <a className={styles.card}>
                <h2>Canada Customs Invoice &rarr;</h2>
                <p>CANADA CUSTOMS INVOICE BY MANIFESTED QUANTITY</p>
              </a>
            </Link>
          </div>
          <div className={styles.grid}>
            <Link href="/forms/uscustomsinvoice">
              <a className={styles.card}>
                <h2>US Customs Invoice &rarr;</h2>
                <p>U.S. CUSTOMS INVOICE BY MANIFESTED QUANTITY</p>
              </a>
            </Link>
          </div>

          <div className={styles.grid}>
            <Link href="/forms/uscustomsinvoice">
              <a className={styles.card}>
                <h2>Mexico Customs Invoice &rarr;</h2>
                <p>Mexoci Customs Invoice</p>
              </a>
            </Link>
          </div>

          <div className={styles.grid}>
            <Link href="/forms/uscustomsinvoice">
              <a className={styles.card}>
                <h2>China Customs Invoice &rarr;</h2>
                <p>China Customs Invoice</p>
              </a>
            </Link>
          </div>
          <div className={styles.grid}>
            <Link href="/forms/canadacustomsinvoice">
              <a className={styles.card}>
                <h2>Germany Customs Invoice &rarr;</h2>
                <p>Germany Customs Invoice</p>
              </a>
            </Link>
          </div>
          <div className={styles.grid}>
            <Link href="/forms/uscustomsinvoice">
              <a className={styles.card}>
                <h2>Spain Customs Invoice &rarr;</h2>
                <p>Spain Customs Invoice</p>
              </a>
            </Link>
          </div>

          <div className={styles.grid}>
            <Link href="/forms/uscustomsinvoice">
              <a className={styles.card}>
                <h2>South Africa Customs Invoice &rarr;</h2>
                <p>South Africa Customs Invoice</p>
              </a>
            </Link>
          </div>

          <div className={styles.grid}>
            <Link href="/forms/uscustomsinvoice">
              <a className={styles.card}>
                <h2>Japan Customs Invoice &rarr;</h2>
                <p> Japan Customs Invoice</p>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}