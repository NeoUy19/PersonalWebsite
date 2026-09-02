import { VinylNav } from "./Components/vinylnav"
import { Outlet } from "react-router-dom"

export function Layout(){
    return (
        <>
            <VinylNav/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}