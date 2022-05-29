import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
    baris: {
        // flexDirection: 'row',
        display: 'flex',
        // justifyContent: 'space-between',
        margin: {
            left: 50,
            right: 50
        },
        flexWrap: 'wrap'
    },
    wrapbig: {
        padding: {
            left: 80,
            right: 80,
            top: 5
        },
        backgroundColor: '#e6e6e6'
    },
    gambar: {
        height: '50%',
        width: '100%',
        alignItems: 'center',
        borderRadius: 5,

    },
    kolom: {

        padding: {
            left: 20,
            right: 20
        },
        // flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        "&:hover": {
            background: "#efefef",
            padding: {
                left: 24,
                right: 20
            },
        },
        margin: {
            left: 10,
            right: 10,
            top: 10,
            bottom: 10
        },
        maxWidth: 300,

    }
});
const Portofolio = () => {
    const [daftar] = useState(['Gunung Semeru atau Gunung Mahameru adalah sebuah gunung berapi kerucut di Jawa Timur, Indonesia. Gunung Semeru merupakan gunung tertinggi di Pulau Jawa, dengan puncaknya Mahameru, 3.676 meter dari permukaan laut (mdpl)', 'Pahawang merupakan salah satu objek wisata bahari yang paling terkenal di Provinsi Bandar Lampung. Pulau yang terkenal dengan keindahan alam baharinya ini masuk dalam kawasan Kecamatan Panduh Padada, Kabupaten Pasawaran, Lampung Selatan.', 'Gunung Prau merupakan salah satu gunung di Jawa Tengah yang memiliki ketinggian 2.590 meter dari permukaan laut (mdpl).']);
    const [images] = useState([require('../assets/p1.jpeg'), require('../assets/p2.jpeg'), require('../assets/p3.jpeg')])
    // console.log(images)
    console.log(images[3])
    const classes = styles();
    return (
        <div id="portofolio" className={classes.wrapbig}>
            <h2>TRAVELING</h2>
            <div className={classes.baris}>
                {daftar.map((item, index) => (
                    <div key={index} className={classes.kolom}>
                        <h4>WISATA {index + 1}</h4>
                        <div>
                            <img className={classes.gambar} src={images[index]} />
                        </div>
                        <hr></hr>
                        <p>{item}</p>
                    </div>
                ))}
            </div>

        </div >
    )
}

export default Portofolio