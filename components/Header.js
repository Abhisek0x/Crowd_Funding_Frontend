import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <nav className="p-5 border-b-2 flex flex-row w-screen bg-black">
            <h1 className="py-4 px-4 font-bold text-3xl text-red-600 hover:animate-bounce">
                {" "}
                Decentralised Raffle DAPP
            </h1>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false} />
            </div>
        </nav>
    )
}
