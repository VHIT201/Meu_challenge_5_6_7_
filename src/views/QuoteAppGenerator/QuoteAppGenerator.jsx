import React, { useState, useEffect } from 'react';
import Quote from '../../components/Quote/Quote';

export const QuoteAppGenerator = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [category, setCategory] = useState('');
    const [listQuote, setListQuote] = useState([]);

    // Fetch a single random quote when the component is mounted
    useEffect(() => {
        fetchRandomQuote();
    }, []);

    const fetchRandomQuote = async () => {
        try {
            const response = await fetch('https://dummyjson.com/quotes/random');
            const data = await response.json();
            setQuote(data.quote);
            setAuthor(data.author);
            setCategory(data.category);
            setListQuote([]);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    const fetchMoreQuote = async () => {
        try {
            const response = await fetch('https://dummyjson.com/quotes/random/3');
            const data = await response.json();
            setListQuote(data);
            setQuote('');
            setAuthor('');
            setCategory('');
        } catch (error) {
            console.error('Error fetching more quotes:', error);
        }
    };

    return (
        <div className="w-full h-screen bg-white flex flex-col items-center justify-center relative">
            {/* Buttons to fetch quotes */}
            <div className="absolute flex h-20 top-20 right-20 space-x-4">
                <div
                    onClick={fetchRandomQuote}
                    className="flex h-20 w-20 cursor-pointer transition-colors duration-300 hover:text-blue-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                        />
                    </svg>
                </div>

                {/* Button to fetch more quotes */}
                <div
                    onClick={fetchMoreQuote}
                    className="flex h-20 w-20 cursor-pointer transition-colors duration-300 hover:text-green-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </div>
            </div>

            {/* Container for displaying quotes */}
            <div className="w-1/4 h-full flex flex-col items-center justify-center">
                {quote && (
                    <Quote quote={quote} author={author} category={category} />
                )}

                {listQuote.length > 0 &&
                    listQuote.map((item, index) => (
                        <Quote key={index} quote={item.quote} author={item.author} category={item.category} />
                    ))}
            </div>

            <div className="absolute bottom-10 w-full p-4 text-center flex justify-center items-center">
                <p className="text-sm">
                    created by <span className="font-semibold">VanHoang</span> - devChallenges.io
                </p>
            </div>
        </div>
    );
};
