export function Newsletter() {
    return (
        <div className="bg-blue-500 w-full max-w-[970px] flex flex-col items-center justify-center h-auto min-h-[325px] py-4 px-5 mx-auto rounded-md text-center">
            <h4 className="text-3xl text-white font-bold leading-relaxed">
                Subscribe to Blogga.
            </h4>
            <p className="text-lg text-zinc-400 mb-10">
                I post fresh content every week.
            </p>
            <form action="" className="flex sm:flex-row flex-col max-w-[400px] w-full sm:gap-0 gap-3">
                <input
                    type="text"
                    placeholder="Email address"
                    className="sm:flex-1 h-12 sm:rounded-r-none rounded-md w-full pl-5 text-blue-500"
                />
                <button
                    type="submit"
                    className="bg-green-500 text-blue-500 uppercase font-bold flex items-center justify-center w-[136px] sm:rounded-l-none rounded-md text-xs h-12 mx-auto"
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
}