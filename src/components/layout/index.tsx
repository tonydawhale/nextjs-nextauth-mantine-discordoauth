import React from "react";
import {AppShell, MantineProvider} from "@mantine/core";

interface AppShellProps {
    route: string
    children: React.ReactNode;
}

export default function Layout({route, children}: AppShellProps) {
    return (
        <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={{
                /** Put your mantine theme override here */
                colorScheme: 'light',
            }}
        >
            <AppShell
                padding={"md"}
            >
                {children}
            </AppShell>
        </MantineProvider>
    )
}
