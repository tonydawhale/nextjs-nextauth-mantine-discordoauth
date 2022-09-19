import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";

interface FullPageModalProps {
    children: React.ReactNode;
}

export default function FullPageModal({ children }: FullPageModalProps) {
    const [opened, setOpened] = useState(true);
    const theme = useMantineTheme();

    return (
        <Modal
            opened={opened}
            onClose={() => setOpened(true)}
            centered
            overlayColor={"white"}
            withCloseButton={false}
        >
            {children}
        </Modal>
    )
}
