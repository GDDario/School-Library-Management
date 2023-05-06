import React from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import BooksContainer from "../components/BooksContainer";
import Book from "../components/BookThumbnail";

const Profile = () => (
  <>
    <Container divided>
      <div className="left-side">
        <img
          src="../assets/books-background.jpeg"
          className="profile-picture"
          alt="Profile picture"
        />
        <div className="book-information">
          <ul>
            <li>Instituition: </li>
            <li>Course: </li>
            <li>Períod: </li>
            <li>Term: </li>
          </ul>
        </div>
        <div className="buttons">
          <Button>Change email</Button>
          <Button>Change password</Button>
        </div>
      </div>
      <div className="right-side">
        <h2>Dashboard</h2>
        <div className="grid-dashboard">
          <div className="rented-books">
            <h3>Rented books</h3>
            <p>3</p>
          </div>
          <div className="downloaded-pdfs">
            <h3>Downloaded PDF's</h3>
            <p>4</p>
          </div>
          <div className="favorited-categories">
            <h3>Favorite categories</h3>
            <p>Pizza chart</p>
          </div>
        </div>
        <div className="left-align">
          <h2>Readed books</h2>
          <BooksContainer className="horizontal">
            <Book id="1" name="Book name" categoryName="Category" />
            <Book name="Book name" categoryName="Category" />
            <Book name="Book name" categoryName="Category" />
            <Book name="Book name" categoryName="Category" />
            <Book name="Book name" categoryName="Category" />
            <Book name="Book name" categoryName="Category" />
            <Book name="Book name" categoryName="Category" />
            <Book name="Book name" categoryName="Category" />
          </BooksContainer>
        </div>
      </div>
    </Container>
  </>
);

export default Profile;
