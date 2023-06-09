import React from "react";
import styled from "styled-components";
import bookCover from "../assets/book-cover.png";
import {Link} from "react-router-dom";

const BookWrapper = styled.div`
  margin-right: 20px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 2px;

  .thumb {
    width: 90px;
    height: 105px;
  }

  .book-category {
    font-size: 14px;
    color: #3E2723;
  }

  &:hover {
    background: rgba(62, 39, 35, 0.6);
  }
`;

const Book = ({id, name, categoryName}) => {
        const link = "/books/" + id;
        return (<Link to={link}> <BookWrapper>
            <img src={bookCover} alt="Book cover" className="thumb"/>
            <p className="book-name">
                {name}
            </p>
            <p className="book-category">
                {categoryName}
            </p>
        </BookWrapper>
        </Link>)
    }
;

export default Book;