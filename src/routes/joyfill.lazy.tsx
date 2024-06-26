import { createLazyFileRoute } from '@tanstack/react-router'
import Joyfill from "../components/Joyfill.tsx";

export const Route = createLazyFileRoute("/joyfill")({
    component: joyfillComponent
})


function joyfillComponent() {
    return <Joyfill />;
}

