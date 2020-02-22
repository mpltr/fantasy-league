import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
            
                    <link href="https://fonts.googleapis.com/css?family=Karla:400,700&display=swap" rel="stylesheet" />

                    <style jsx global>{`
                        * {
                            --lightGrey: #f0f0f0;
                            --lightGreyAlt: #f2f2f2;
                            --grey: grey;
                            --darkGrey: #6c6c6c;
                            
                            --teal: #34bcb9;
                        }

                        body {
                            bacground-color: white;
                            font-family: 'Karla';
                            font-size: 12px;
                            line-height: 1.33;
                            letter-spacing: 0.5px;
                            color: rgba(0,0,0,.8);
                        }

                        input {
                            display: block;
                            padding: 8px;
                            background-color: var(--lightGrey);
                            color: var(--darkGrey);
                            text-align: center;
                            border: hidden;
                            outline: none;
                        }

                        a {
                            text-decoration: none; 
                        }
                    `}
                    </style>

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
export default MyDocument;
