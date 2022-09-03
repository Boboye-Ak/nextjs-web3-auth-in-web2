import Head from "next/head"
import { ConnectButton } from "web3uikit"
import { useMoralis } from "react-moralis"
import { useState } from "react"

export default function Home() {
    const {account, isWeb3Enabled} = useMoralis()
    const [userData, setUserData]=useState({account:null, username:null, favNumber:null})
    const [isLoggedIn, setIsLoggedIn]=useState(false)
    return (
        <div>
            <Head>
                <title>Web3 auth in Web2</title>
                <meta
                    name="web3 auth in web2"
                    content="using connect wallet to login to a web2 app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ConnectButton moralisAuth={false} />
        </div>
    )
}
