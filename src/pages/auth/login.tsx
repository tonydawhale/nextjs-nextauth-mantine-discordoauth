import { getProviders, signIn } from "next-auth/react"
import { Stack, Modal, Text } from "@mantine/core";
import {GetServerSideProps} from "next";
import FullPageModal from "../../components/FullPageModal";
import {DiscordButton} from "../../components/Buttons/Discord";

export default function Login({ providers }: any) {
    return (
        <FullPageModal>
            <Stack>
                <Text size="lg" weight={500} align={"center"}>
                    Hey, Welcome Back!
                </Text>
                <DiscordButton
                    //@ts-ignore
                    onClick={() => signIn(Object.values(providers).at(0).id)}
                >Continue with Discord
                </DiscordButton>
            </Stack>
        </FullPageModal>
    )
}

export async function getServerSideProps(context: GetServerSideProps) {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}
