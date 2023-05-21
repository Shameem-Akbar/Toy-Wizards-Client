import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';
import PageTitle from '../../components/PageTitle/PageTitle';
import { HelmetProvider } from 'react-helmet-async';

const Blogs = () => {

    const blogs = useLoaderData();

    return (
        <HelmetProvider>
            <div>
                <PageTitle title="Blogs"></PageTitle>
                <div className='px-2 lg:px-16 bg-gray-200 py-2 md:py-5' >
                    <h2 className='text-center text-5xl font-semibold py-5 uppercase'>Blog</h2>
                </div>
                {
                    blogs.map(blog => <BlogCard
                        key={blog.id}
                        blog={blog}
                    ></BlogCard>)
                }
            </div>
        </HelmetProvider>
    );
};

export default Blogs;