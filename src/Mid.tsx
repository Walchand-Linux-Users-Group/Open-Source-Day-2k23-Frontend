import styles from './Mid.module.css'
const Mid = () => {
  return (
    <div className={styles.bg} id="mid">
      <div className={styles.info}>
        <div>
        <h1>Who are we?</h1>
        </div>
      </div>
      <img src="./midmob.png" alt="midmob" className={styles.mob}></img>
      <img src="./midpc.png" alt="midpc" className={styles.pc}></img>
      {/* <div className={styles.watch}>
        <h1>Watch Trailer</h1>
      </div> */}
      <div className={styles.reaper}>
        <div className={styles.text}>
          Walchand Linux Users' Group is a club of Linux and open source enthusiasts established in 2003 from Walchand College of Engineering, Sangli. We in WLUG make students explore all the aspects of FOSS with the huge community of knowledgeable and dedicated people. We conduct various activities throughout the year to promote open source technologies including talks, discussions, bootcamps and competitions.
        </div>
      </div>
      
    </div>
  )
}

export default Mid