import {ProviderApplication} from "../context";
import {Box} from "../molecules/box";

export const Application = () => {
    return (
        <div className={"container-app-application"}>
            <ProviderApplication>
                <Box.Overlay/>
                <Box.Content/>
                <Box.ButtonSwitchVisibility/>
            </ProviderApplication>
        </div>
    )
}