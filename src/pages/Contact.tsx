import Footer from '../components/Footer'

export default function Contact() {
    return (
        <section id="contact" className="mt-[35vh] mb-[30vh]">
            <h2 className="text-[55px] font-bold text-gray-800 text-center pb-3">
                Contact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 max-w-2xl mx-auto shadow-xl/30 rounded-xl p-10 border border-[var(--base-color)]">
                <h3 className="text-center">Let's Connect!</h3>
                <div className="flex flex-row my-10 ml-15">
                    <div className="basis-1/4">
                        <svg className="w-[65px] h-[65px] text-gray-800 dark:text-white mx-auto" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
                            <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
                        </svg>
                    </div>
                    <div className="basis-3/4">
                        <h4 className="text-[45px]">Insert Email Here</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};