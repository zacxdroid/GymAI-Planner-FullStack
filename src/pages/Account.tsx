import { AccountView } from "@neondatabase/neon-js/auth/react";
import { useParams } from "react-router-dom";

export default function Account() {
    const {pathname} = useParams()
    return (
        <section className="relative">
            <div className="absolute inset-0 bg-linear-to-t from-accent/14 via-transparent to-transparent" />
            <div className=" relative min-h-screen pt-24 pb-12 px-6">
                <div className="max-w-4xl mx-auto">
                    <AccountView pathname={pathname}/>
                </div>
            </div>
        </section>
        )
}