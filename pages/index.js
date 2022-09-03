import Head from "next/head"
import { ConnectButton } from "web3uikit"
import { useMoralis } from "react-moralis"
import { useState } from "react"
import axios from "axios"

export default function Home() {
    const { account, isWeb3Enabled } = useMoralis()
    const [userData, setUserData] = useState({ account: null, username: null, favNumber: null })
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [newUsername, setNewUsername] = useState("")
    const [newFavNumber, setNewFavNumber] = useState("")

    const handleSignUp = () => {}
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
            {account ? (
                <div>
                    {isLoggedIn ? (
                        <div>
                            You are logged in as {userData.username}({userData.account}) and your
                            favourite number is {userData.favNumber}
                        </div>
                    ) : (
                        <div>
                            Sign Up Here
                            <form>
                                <label for="username">username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={newUsername}
                                    onChange={(e) => {
                                        setNewUsername(e.target.value)
                                    }}
                                ></input>
                                <label for="fav-number">fav-number:</label>
                                <input
                                    type="number"
                                    id="fav-number"
                                    value={newFavNumber}
                                    onChange={(e) => {
                                        setNewFavNumber(e.target.value)
                                    }}
                                ></input>
                                <button onClick={handleSignUp}>SIGN UP</button>
                            </form>
                        </div>
                    )}
                </div>
            ) : (
                <div>Please Connect your wallet</div>
            )}
        </div>
    )
}
