import {useSession} from "../hooks/useSession";

export default function Home() {
    const {data} = useSession()
    return (
        <div>
            hey {data?.discord_user.id} {data?.discord_user.username}#{data?.discord_user.discriminator}
        </div>
    )
}
