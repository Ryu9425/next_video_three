import Script from 'next/script';
import ProductList from "../components/product/ProductList";
import Contact from "../components/layout/Contact";
import Head from "next/head";
import { IProduct } from "../components/product/Product";
import halfmoonBettaPicture from "../public/images/halfmoon.jpg";
import dragonScaleBettaPicture from "../public/images/dragonscale.jpg";
import crowntailBettaPicture from "../public/images/crowntail.jpeg";
import veiltailBettaPicture from "../public/images/veiltail.jpg";
import { GetStaticProps,GetServerSideProps } from "next";
import Jumbotron from "../components/layout/Jumbotron";
import { IPlayer } from '../components/player/Player';
import PlayerList from '../components/player/PlayerList';

type PropType = {
    products: IProduct[]
    players: IPlayer[]
}

export default function Home({ products, players }: PropType) {
    return (
        <>
            <Head>
                <title>My awesome store</title>
                <link rel="preconnect" href="https://app.snipcart.com" />
                <link rel="preconnect" href="https://cdn.snipcart.com" />
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css" />
                <link rel="shortcut icon" href="../public/favicon.ico" />
            </Head>
            <main className="main">
                <Jumbotron />
                <ProductList products={products} />
                <PlayerList players={players}/>
                <Contact />
            </main>
            {/* <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" /> */}
            <div hidden id="snipcart" data-api-key="OWNlZTNlYmItZTU5OS00MmI4LThjOTAtMjY0NzAyYmI2ODAxNjM3NjIyMjY3MDMxMTIzMzUx"></div>
        </>
    )
}

export const products: IProduct[] = [
    {
        id: "halfmoon",
        name: "Halfmoon Betta",
        price: 25.00,
        image: halfmoonBettaPicture,
        description: "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.",
        url: '/api/products/halfmoon'
    },
    {
        id: "dragonscale",
        name: "Dragon Scale Betta",
        price: 35,
        image: dragonScaleBettaPicture,
        description: "The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.",
        url: '/api/products/dragonscale'
    },
    {
        id: "crowntail",
        name: "Crowntail Betta",
        price: 7.50,
        image: crowntailBettaPicture,
        description: "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb.",
        url: '/api/products/crowntail'
    },
    {
        id: "veiltail",
        name: "Veiltail Betta",
        price: 5.00,
        image: veiltailBettaPicture,
        description: "By far the most common betta fish. You can recognize it by its long tail aiming downwards.",
        url: '/api/products/veiltail'
    }
]

export const players: IPlayer[] = [
    {
        id: "halfmoon",
        name: "Halfmoon Betta",
        description: "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.",
        url: '/videos/a1.mp4'
    },
    {
        id: "dragonscale",
        name: "Dragon Scale Betta",
        description: "The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.",
        url: './videos/a2.mp4'
    },
    {
        id: "crowntail",
        name: "Crowntail Betta",
        description: "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb.",
        url: '/videos/a3.mp4'
    },
    {
        id: "veiltail",
        name: "Veiltail Betta",
        description: "By far the most common betta fish. You can recognize it by its long tail aiming downwards.",
        url: '/videos/a1.mp4'
    }
]

export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log("syayiaifgfd");
    return {
        props: {
            players,
            products
        }
    }
}
