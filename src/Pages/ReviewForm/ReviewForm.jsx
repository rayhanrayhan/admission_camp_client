import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Rating, Star } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import BannerShare from '../../Shared/BannerShare/BannerShare';
import { AuthContext } from '../../Providors/AuthProvider';
import axios from 'axios';

const ReviewForm = () => {
    const { reviewData } = useParams()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const from = '/';

    const [rating, setRating] = React.useState(0);
    const currentDate = moment().format('MMM DD, YYYY');

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        const myReview = {
            ...data,
            email: user?.email,
            description: reviewData?.description,
            author: reviewData?.author,
            img: reviewData?.img,
            ratings: reviewData?.ratings,
            date: reviewData?.date || currentDate,
        };

        axios.post("https://admission-camp-client.vercel.app/reviews", myReview)
            .then((response) => {
                console.log(response.data);

                setReviews(response.data);
                const notify = () => toast("Wow so easy!");
                navigate(from, { replace: true });
                reset();
            })
            .catch((error) => {
                console.error("Error:", error);

            });
    };

    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#e32845',
        inactiveFillColor: '#fa1e294b'
    };

    return (
        <div>
            <div>
                <BannerShare title='Review Page' />
                <div className='w-9/12 mx-auto'>
                    {/* review_form */}
                    <div className=" ">
                        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto p-10 shadow-2xl rounded-xl">
                            <h1 className="text-navy text-5xl font-bold mb-5 drop-shadow-lg">Review</h1>

                            <div className='flex items-center justify-center gap-1 mt-1 bg-white shadow-lg py-8'>
                                <span className="text-3xl -mb-1">{rating}</span>
                                <Rating
                                    className='max-w-[200px]'
                                    value={rating}
                                    onChange={setRating}
                                    itemStyles={myStyles} />
                            </div>

                            <div className='flex flex-col gap-4'>
                                <div className='w-full mt-8'>
                                    <textarea rows={5} id='review' placeholder='Write your review' {...register("comment", { required: true })} className='w-full border border-red py-2 px-3 rounded-md outline-none' />
                                    {errors.review && <span className='text-red'>This field is required</span>}
                                </div>

                                <div className='w-full'>
                                    <button type='submit' className='overflow-hidden btn_primary w-full' >Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewForm;
