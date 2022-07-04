import { List, X } from "phosphor-react";
import { useState } from "react";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="flex flex-row w-full h-auto max-w-[1260px] mx-auto items-center justify-between px-10">
                <span className="text-2xl font-bold uppercase">
                    Blogga
                </span>
                <ul className="flex-row gap-10 hidden md:flex">
                    <li>Design Tools</li>
                    <li>Daily Updates</li>
                    <li>Documentation</li>
                </ul>
                <div className="flex flex-row gap-4">
                    <button className="bg-blue-400 border border-transparent w-[108px] h-[36px] items-center justify-center rounded text-sm hover:bg-transparent hover:border-white transition-colors hidden sm:flex">
                        Subscribe
                    </button>
                    <List
                        onClick={() => setMenuOpen(!menuOpen)}
                        size={32}
                        className="block md:hidden"
                    />
                </div>
            </nav>
            <div className={`fixed top-0 right-0 w-3/4 h-screen bg-blue-400 pt-16 z-20 transition-all duration-700 ${menuOpen ? 'm-0' : '-mr-[100%]'}`}>
                <X
                    onClick={() => setMenuOpen(!menuOpen)}
                    size={32}
                    className="absolute top-4 right-5 hover:text-zinc-400"
                />

                <ul className="flex-col flex text-white">
                    <li className="px-8 h-16 flex items-center hover:bg-blue-500">Design Tools</li>
                    <hr />
                    <li className="px-8 h-16 flex items-center hover:bg-blue-500">Daily Updates</li>
                    <hr />
                    <li className="px-8 h-16 flex items-center hover:bg-blue-500">Documentation</li>
                </ul>
            </div>
            <div
                className={`fixed w-full h-full bg-zinc-900/[.8] top-0 left-0 z-10 transition-colors ${menuOpen ? 'block' : 'hidden'}`}
                onClick={() => setMenuOpen(!menuOpen)}
            />
        </>
    );
}