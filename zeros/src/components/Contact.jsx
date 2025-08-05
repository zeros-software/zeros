export default function Contact() {
    return (
        <div className="flex flex-col bg-black h-screen text-white relative">
            <div className="px-6 py-4 pt-16 flex flex-col">
                <span className="sf-pro-bold text-7xl">Tell us about you</span>
                <span className="text-4xl mt-4 w-130">Let us know how can we help you achieve your goal.</span>
                <div className="w-full bg-white h-2 mt-6"></div>
                <span className="mt-6 text-2xl">Type here (feel free to drop images)</span>
                <div className="absolute bottom-10 flex flex-row gap-10 items-center sf-pro font-medium text-2xl underline underline-offset-5">
                    <a>
                        → Instagram
                    </a>
                    <a>
                        → Github
                    </a>
                    <a>
                        → LinkedIn
                    </a>
                    <a>
                        → Mail
                    </a>
                </div>
            </div>
        </div>
    );
}