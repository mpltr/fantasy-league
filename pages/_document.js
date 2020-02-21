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
                            --light-grey: light-grey;
                            --grey: grey;
                            --dark-grey: dark-grey;
                        }

                        body {
                            bacground-color: white;
                            font-family: 'Karla';
                            font-size: 12px;
                            line-height: 1.33;
                            letter-spacing: 0.5px;
                            color: rgba(0,0,0,.8);
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
