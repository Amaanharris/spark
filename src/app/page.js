"use client"

import React from 'react'
import Link from 'next/link'
import styles from '../app/page.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <>
    <div className="img_div">
      <Image 
      src="/assets/land_gray.jpg"
      layout='fill'
      objectFit='cover'
      />
    </div>
    <div className={`${styles.container} main_container`}>
      <div className={styles.spark}> Powered by &nbsp;
        <Link className={styles.link} href="https://apps.apple.com/ca/app/spark-your-ai-wingman/id6444730312?platform=iphone">SPARK 
        <img src='/assets/arrow_up_yellow.svg' alt="arrow_up"/>
        </Link>
      </div>
      <p className={`${styles.header} page_p`}>RIZZ TEST</p>
      <div className={`${styles.subscript} page_text`}>Find out where you stand on the RIZZ scale</div>
      <Link className={styles.button74} href="/question/1">CALCULATE RIZZ</Link>
    </div>
  </>
  )
}
