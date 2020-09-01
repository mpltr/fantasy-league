import React from 'react'
import Link from 'next/link'

const CustomLink = ({url, label}) => {
    return  (
        <>
            <Link href={url}>
                <a>{label}</a>
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