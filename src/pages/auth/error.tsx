import { useRouter } from "next/router";
import { Text, Button, Stack } from "@mantine/core";
import Link from "next/link";
import FullPageModal from "../../components/FullPageModal";

type AuthError = "Configuration" | "AccessDenied" | "Verification" | "Default"

const getErrorRes = (error: AuthError) => {
    switch (error) {
        case "AccessDenied": {
            return {
                title: "Unauthorized!",
                message: "In order to log into this platform, you must be a staff member of the Frag Bots discord server"
            }
        }
        default: {
            return {
                title: "There was an error with your request!",
                message: "Please try again later."
            }
        }
    }
}

export default function Error() {
    const router = useRouter()
    const { error } = router.query

    const errorData = getErrorRes(error as AuthError)

    return (
        <FullPageModal>
            <Stack>
                <Text size="lg" weight={500} align={"center"}>
                    {errorData.title}
                </Text>
                <Text size="md" weight={250} align={"left"}>
                    {errorData.message}
                </Text>
                <Link href={"/auth/login"} passHref>
                    <Button>
                        Click here to try again!
                    </Button>
                </Link>
            </Stack>
        </FullPageModal>
    )
}
