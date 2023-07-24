import { Link, useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="bg-gradient-to-tl pt-20 from-green-400 to-indigo-900 w-full">
            <div id="error-page" className="flex  px-10 justify-center ">
                <img
                    className="w-[400px] border rounded-3xl"
                    src="https://i.ibb.co/NFRTcCP/yoga-404.jpg"
                    alt=""
                />
            </div>
            <div className="flex justify-center">
                <Link to="/">
                    <button className="btn border rounded-2xl px-4 py-3 my-4 text-white font-bold font-sans hover:bg-red-500">GO TO Home</button>
                </Link>
            </div>
        </div>
    );
}
