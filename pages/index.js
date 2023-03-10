import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name='keywords' content='ninjas' />
			</Head>
			<div>
				<h1 className={styles.title}>Homepage</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis
					maiores et vel provident dolore esse ipsum iusto reiciendis. Aspernatur,
					nihil nemo quo temporibus explicabo facere fugit necessitatibus esse
					sapiente.
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nobis
					maiores et vel provident dolore esse ipsum iusto reiciendis. Aspernatur,
					nihil nemo quo temporibus explicabo facere fugit necessitatibus esse
					sapiente.
				</p>
				<Link href='/ninjas' className={styles.btn}>
					See Ninja Listing
				</Link>
			</div>
		</>
	);
}
