import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

import { useForm } from "react-hook-form";

import { useLoaderData, useNavigate } from "react-router-dom";
import BannerShare from "../../Shared/BannerShare/BannerShare";
import { AuthContext } from "../../Providors/AuthProvider";

const AdmissionForm = () => {
    const clgdata = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const from = "/mycollege";

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = (data) => {
        // Assuming collegesData is a property of clgdata
        const myClg = {
            ...data,
            email: user?.email,
            events: clgdata.collegesData?.events,
            sports: clgdata.collegesData?.sports,
            research: clgdata.collegesData?.research,
            research_Works: clgdata.collegesData?.researchWorks,
        };
        console.log(myClg);


        axios
            .post("http://localhost:5000/mycollege", myClg)
            .then((response) => {
                console.log(response.data);
                const notify = () => toast("Wow so easy!");
                navigate(from, { replace: true });
                reset();
            })
            .catch((error) => {
                console.error("Error:", error);
                // Handle error cases if required
            });
    };

    return (
        <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full pt-14">
            <BannerShare title="Admission Form" />
            <div className="w-9/12 mx-auto py-28">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="md:flex items-center gap-3">
                        <input
                            {...register("collegeName")}
                            className="border my-2 font-sans font-bold w-full text-black py-2 px-3 rounded-lg"
                            placeholder="College Name"
                            defaultValue={clgdata.college_Name}
                        />

                        <input
                            {...register("displayName")}
                            className="border my-2 w-full text-black py-2 px-3 rounded-lg"
                            readOnly
                            defaultValue={user?.displayName}
                        />

                        <input
                            {...register("email")}
                            className="border w-full text-black py-2 px-3 rounded-lg"
                            readOnly
                            defaultValue={user?.email}
                        />
                    </div>

                    <div className="md:flex gap-4">
                        <input
                            {...register("collegeImg")}
                            className="border w-full text-black py-2 px-3 rounded-lg mt-3"
                            defaultValue={clgdata?.collegeImg}
                        />

                        <input
                            {...register("address")}
                            className="border w-full text-black py-2 px-3 rounded-lg mt-3"
                            placeholder="Write Your Address"
                        />
                    </div>

                    <div className="md:flex items-center gap-3 mt-3">
                        <input
                            {...register("subjectName")}
                            className="border w-full my-2 text-black py-2 px-3 rounded-lg"
                            placeholder="Enter Subject Name"
                        />
                        <input
                            {...register("mobileNumber")}
                            className="border w-full my-2 text-black py-2 px-3 rounded-lg"
                            placeholder="Mobile Number"
                            type="number"
                        />
                        <input
                            {...register("admissionDate")}
                            className="border font-serif w-full text-black py-2 px-3 rounded-lg"
                            placeholder="Admission Date"
                            type="date"
                        />

                        <input
                            className="py-2 my-4 md:my-0 px-8 text-white rounded-lg bg-[#0f0f5a]"
                            type="submit"
                        />
                    </div>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default AdmissionForm;
