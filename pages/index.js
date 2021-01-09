import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { Button } from 'antd';
import { SmileFilled } from '@ant-design/icons'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello</h1>
      <Button type="primary">Press Me Now</Button>
      <a className="logo mr-0">
        <SmileFilled size={128} strokeWidth={1} />
      </a>
    </div>
  )
}
