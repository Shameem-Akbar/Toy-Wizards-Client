import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from './BlogCard';
import PageTitle from '../../components/PageTitle/PageTitle';

const Blogs = () => {

    const blogs = useLoaderData();

    return (
        <div>
            <PageTitle title="Blogs"></PageTitle>
            <div className='px-2 lg:px-16 py-2 md:py-8 text-white bg-primary' >
                <h2 className='text-center text-5xl font-semibold py-5'>Blog</h2>
            </div>
            {
                blogs.map(blog => <BlogCard
                    key={blog.id}
                    blog={blog}
                ></BlogCard>)
            }
        </div>
    );
};

export default Blogs;