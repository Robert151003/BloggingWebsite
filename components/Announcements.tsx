import Image from 'next/image'
import React from 'react'

const Announcements = ({Announcement, active} : {Announcement : string, active:boolean}) => {

    if(!active){
        return null;
    }

    return (
        <section
        style={{
            backgroundColor: 'orange',
            padding: '1rem',
            textAlign: 'center',
            width: '100%',
            fontSize: '1rem',
            fontWeight: 'bold',
            color: 'white',
        }}
        >
        <p style={{ display: 'flex', alignItems: 'center' }}>
            <Image src='/icons/warning.svg' alt='Warning' height={32} width={32} />
            <span style={{ marginLeft: '0.5rem' }}>{Announcement}</span>
        </p>
        </section>
    )
}

export default Announcements