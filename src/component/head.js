import React from 'react';
import bg from '../assets/bg.jpg';
import picprof from '../assets/picprof.png'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-scroll'
const styles = createUseStyles({
    nama: {
        color: 'white',
    },
    bungkus: {
        alignItems: 'center',
        textAlign: 'center',
        margin: {
            left: 350,
            right: 350,
        },
        padding: {
            top: 50
        }
    },
    latar: {
        margin: {
            // top: -30
        },
        padding: {
            bottom: 100
        },

        backgroundSize: "cover",
    },
    prof: {
        width: 200,
        height: 200,
        borderRadius: 200 / 2
    },
    deskripsi: {
        color: 'white',
        fontSize: 20
    },
    navbar: {
        backgroundColor: 'white',
        height: 40,
        fontWeight: '500',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    subnav: {
        display: 'inline',
        "&:hover": {
            background: "#efefef",
            padding: 3,
            borderRadius: 10
        },
    },
    nav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

});
function Head() {
    const classes = styles()
    return (
        <div className={classes.latar} style={{ backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', }} >
            <div className={classes.navbar}>
                <ul className={classes.nav}>
                    <li className={classes.subnav}>Home</li>
                    <li className={classes.subnav}></li>
                    <li className={classes.subnav}></li>
                    <li className={classes.subnav}></li>
                    <li className={classes.subnav}></li>
                    <li className={classes.subnav}></li>
                    <li className={classes.subnav}></li>
                    <li className={classes.subnav}> <Link to="about" spy={true} smooth={true}>About</Link></li>
                    <li className={classes.subnav}> <Link to="skill" spy={true} smooth={true}>Skill</Link></li>
                    <li className={classes.subnav}> <Link to="portofolio" spy={true} smooth={true}>Traveling</Link></li>
                    <li className={classes.subnav}> <Link to="contact" spy={true} smooth={true}>Contact</Link></li>
                    <li className={classes.subnav}></li>
                </ul>
            </div>
            <div id="about" className={classes.bungkus}>

                <img src={picprof} alt="prof" className={classes.prof} />;
                <h1 className={classes.nama}>PROFIL</h1>
                <p className={classes.deskripsi}>Hi, Saya Aulia Thomi Fikriansyah, lahir di Kalianda, Lampung Selatan, Lampung. Bertempat tinggal di Kalianda yang saat ini sedang menempuh pendidikan Sarjana Jurusan Teknik Elektro, Informatika dan Sistem Fisis, Program Studi Teknik Informatika di Institut Teknologi Sumatera angkatan 19</p>
            </div>
        </div >
    )
}


export default Head

