import React from 'react'
import styles from './Mid.module.css'
const Mid = () => {
  return (
    <div className={styles.bg}>
      {/* <img src="https://i.ibb.co/sFCSgHc/OSD-1-1.png" alt="bg" /> */}
      {/* <img src="./assets/OSD.svg" alt="bg" /> */}

      <img src="./midmob.png" alt="Copy-of-UI-OSD-2-min" className={styles.mob}></img>
      <img src="./midpc.png" alt="Copy-of-UI-OSD-6" className={styles.pc}></img>
      <div className={styles.watch}>
        <h1>Watch Trailer</h1>
      </div>
      <div className={styles.reaper}>
        {/* <img src="https://i.ibb.co/VC3cpty/reaper.png" alt="reaper"></img> */}
        <div className={styles.text}>
          Walchand Linux Users’ Group is a club of Linux and open source enthusiasts established in 2003 from Walchand College of Engineering, Sangli. We in WLUG make students explore all the aspects of FOSS with the huge community of knowledgeable and dedicated people. We conduct various activities throughout the year to promote open source technologies including talks, discussions, bootcamps and competitions.
        </div>
      </div>

    </div>
  )
}

export default Mid