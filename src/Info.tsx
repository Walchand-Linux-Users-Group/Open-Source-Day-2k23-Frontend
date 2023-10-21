import React from 'react';
import styles from './Info.module.css';

const Info: React.FC = () => {
    return (
        <div className={styles.info}>
            <h1>WHAT IS OSD?</h1>
            <h1>AND WHAT WILL YOU LEARN?</h1>
            <div className={styles.imageBig}>
                <img src="https://i.ibb.co/MNjkLBr/OSD-1.png" alt="OSD-1" />
            </div>
            <div className={styles.text}>
                <p>
                    Open Source Day(OSD) is an annual celebration hosted by the Walchand Linux Users' Group, dedicated to promoting and raising awareness about the power of open source technology. During this event, we offer sessions and hands-on workshops on various open source technologies, completely free of charge. This time we are conducting OSD event on 29th of October and we're really looking forward to see you present there on the same day!  </p>
            </div>
            <div className={styles.imageSmall}>
                <div>
                    <img src="https://i.ibb.co/CWRsb6Q/4.png" alt="4" />
                </div>
                <div>
                    <img src="https://i.ibb.co/3s0QJ9G/3.png" alt="3" />
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
