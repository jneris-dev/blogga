import { ArrowUp } from "phosphor-react";
import { useEffect } from "react";

export function ScrollToTopButton() {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <button
            onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            }}
            className="fixed right-3 bottom-3 w-10 h-10 flex items-center justify-center bg-blue-300 text-blue-500 rounded"
        >
            <ArrowUp size={24} weight="bold" />
        </button>
    );
}