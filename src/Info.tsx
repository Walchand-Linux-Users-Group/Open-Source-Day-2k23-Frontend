import React from 'react';
import styles from './Info.module.css';

const Info: React.FC = () => {
    return (
        <div className={styles.info}>
            
            <div className={styles.heading}>
            <h1>What is OSD?</h1>
            </div>
            <div className={styles.pc}>
            <div className={styles.imageBig}>
                <img src="./ospc.png" alt="ospc" />
            </div>
            </div>
            <div className={styles.mob}>
            <div className={styles.imageBig}>
                <img src="./osmob.png" alt="osmob" />
            </div>
            </div>
            <div className={styles.text}>
                <p>
                <span>Open Source Day(OSD)</span> is an annual celebration hosted by the Walchand Linux Users' Group, dedicated to promoting and raising awareness about the power of open source technology. During this event, we offer sessions and hands-on workshops on various open source technologies, completely free of charge. This time we are conducting OSD event on 29th of October and we're really looking forward to see you present there on the same day!  </p>
            </div>

            <div className={styles.heading}>
            <h1>What will you learn?</h1>
            </div>
            <div className={styles.pc}>
                
            <div className={styles.imageSmall}>
                <div>
                    <img src="./gitpc.png" alt="gitpc" />
                </div><div>
                    <img src="./labpc.png" alt="labpc" />
                </div>
                <div>
                    <img src="./hubpc.png" alt="hubpc" />
                </div>
                
            </div>
            </div>
            <div className={styles.mob}>
            <div className={styles.imageSmall}>
                <div>
                    <img src="./gitmob.png" alt="gitmob" />
                </div><div>
                    <img src="./labpc.png" alt="labpc" />
                </div>
                <div>
                    <img src="./hubmob.png" alt="hubmob" />
                </div>
                
            </div>
            </div>
            <div className={styles.text}>
                <p>
                    This year in Open Source Day we will be focused on a technology that has gained global prominence in the world of software development: Git. Throughout the sessions, we'll make you familiar with Git and help you master its essential commands, branching, merging, rebasing, etc and discover the prospect of hosting your code on renowned platforms such as GitHub and GitLab.
                    Join us as we explore the limitless possibilities of open source software and its transformative potential. In this spirit, we cordially invite you to be a part of the Open Source Day!
                </p>
            </div>
        </div>
    );
};

export default Info;
