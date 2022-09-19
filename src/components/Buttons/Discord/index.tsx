import {Button, ButtonProps} from "@mantine/core";
import {DiscordIcon} from "../../Icons/DiscordIcon";

export function DiscordButton(props: ButtonProps) {
    return (
        <Button
            leftIcon={<DiscordIcon size={16} />}
            sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? '#5865F2' : '#5865F2',
                '&:hover': {
                    backgroundColor:
                        theme.colorScheme === 'dark'
                            ? theme.fn.lighten('#5865F2', 0.05)
                            : theme.fn.darken('#5865F2', 0.05),
                },
            })}
            {...props}
        />
    );
}
