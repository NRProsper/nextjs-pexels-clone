import {ReactNode} from "react";

export default function ChildrenWrapper(
    {children}: {
        children: ReactNode
    }
) {
    return(
        <>
            <header className="min-h-[500px] relative flex items-center justify-center after:absolute after:inset-0 after:bg-black/50 after:z-[1">
                <div className="w-full max-w-[630px] text-center z-[2]">
                    <h1 className="text-3xl text-white font-semibold">The best free stock photos, royalty free images & videos shared by creators.</h1>
                </div>
                <img
                    src={"https://images.pexels.com/photos/27935412/pexels-photo-27935412.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=2000"}
                    alt={"header image"}
                    className="w-full h-full absolute top-0 left-0 -z-[1] object-cover"
                />
            </header>
            <main>
                {children}
            </main>
        </>
    )
}