import { VinylNav } from "./Components/vinylnav"
import { Outlet } from "react-router-dom"
import './index.css'


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