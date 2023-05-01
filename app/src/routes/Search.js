import React from "react";
import Book from "../components/BookThumbnail";
import BooksContainer from "../components/BooksContainer";
import {useParams} from "react-router-dom";

const Search = () => {
    const {category, text} = useParams();

    return (
        <>
            <h1>Result from "{text}" using the filter <b>{category}</b></h1>
            <BooksContainer>
                <Book id="1" name="Book name" categoryName="Category"/>
                <Book name="Book name" categoryName="Category"/>
                <Book name="Book name" categoryName="Category"/>
                <Book name="Book name" categoryName="Category"/>
                <Book name="Book name" categoryName="Category"/>
                <Book name="Book name" categoryName="Category"/>
                <Book name="Book name" categoryName="Category"/>
                <Book name="Book name" categoryName="Category"/>
                <Book name="Book name" categoryName="Category"/>
                <Book name="Book name" categoryName="Category"/>
            </BooksContainer>
        </>
    );
};

export default Search;