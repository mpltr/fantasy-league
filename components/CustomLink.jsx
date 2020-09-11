import React from 'react'
import Link from 'next/link'

const CustomLink = ({url, label, target='_self'}) => {
    return  (
        <>
            <Link href={url}>
                <a target={target}>{label}</a>
            </Link>
            <style jsx>{`
                a {
                    display: block;
                    padding: 10px;
                    font-size: 16px;
                }
            `}</style>
        </>
    )
}

export default CustomLink;