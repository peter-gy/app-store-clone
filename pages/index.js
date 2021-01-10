import React from 'react';
import Head from 'next/head';
import SideLayout from '../components/SideLayout';

const Home = () => {
    return (
        <SideLayout>
            <Head>
                <title>App Store Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Hello</h1>
        </SideLayout>
    );
};

export default Home;
