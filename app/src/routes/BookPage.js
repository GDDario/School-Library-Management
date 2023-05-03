import React from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import Book from "../components/BookThumbnail";
import BooksContainer from "../components/BooksContainer";

// Http request
let book = {
    id: 1,
    title: "Book title",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum a ante at condimentum. Sed malesuada iaculis cursus. Etiam ut magna porttitor, tempor risus ut, lobortis arcu. Duis in mollis sem. Curabitur id facilisis nulla, ut faucibus purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis molestie urna arcu, quis pellentesque massa malesuada vel. Maecenas ac blandit erat.
    Curabitur dictum enim sed consectetur aliquam. Sed mattis mauris odio, a interdum quam dapibus sed. Curabitur nec ex finibus, feugiat enim vitae, malesuada lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam et mattis ligula, at consequat nisi. Donec sapien dui, facilisis sit amet magna fringilla, vulputate feugiat neque. Praesent pulvinar in ligula consequat tincidunt. Phasellus ut tempor orci, et finibus lectus. Curabitur commodo vulputate dui, et tristique ex aliquet in. Sed convallis felis quis velit bibendum bibendum. Vivamus facilisis congue est, at ornare augue porta vel. Integer eu vehicula lorem, id bibendum urna.
    Praesent sodales dolor aliquam euismod ullamcorper. Ut euismod, libero at gravida dapibus, sem mi ornare augue, et auctor tellus sem id nulla. Maecenas aliquam ante nec tortor aliquam, elementum tincidunt nulla faucibus. Maecenas nisl libero, blandit ac cursus sit amet, bibendum ac erat. Nulla diam orci, ullamcorper vel lorem non, pulvinar accumsan quam. Curabitur dolor nisi, lacinia id condimentum nec, tristique tempus nisl. Fusce laoreet vestibulum tortor, viverra hendrerit tortor tempus at. Vestibulum porta nulla ut urna dictum, eu gravida ex posuere. Duis vulputate feugiat eros id blandit. In ac odio interdum, malesuada leo a, sollicitudin diam.
    Nunc ut leo ac tortor sagittis tempor. Aenean a dapibus lorem, eu interdum ante. Ut at vestibulum nulla, eget vestibulum quam. Sed condimentum egestas augue id ullamcorper. Etiam feugiat diam dapibus imperdiet facilisis. Nullam sagittis sem sed odio efficitur egestas. Nulla ultricies sollicitudin finibus. Aliquam vitae condimentum ligula, eget tincidunt neque. Duis dictum sed nunc in ultrices. Quisque cursus auctor quam ac tincidunt. Aenean et eleifend dui. Mauris metus lectus, porttitor eu viverra sollicitudin, facilisis dapibus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis est ut ipsum porttitor rhoncus. In ornare luctus blandit. Vivamus et ex metus.
    Nunc eget porta erat. Suspendisse sed dictum nulla. Mauris risus lorem, cursus quis dignissim vel, dapibus sit amet diam. Integer mollis commodo tellus, in ultricies dolor semper et. Sed blandit, justo in venenatis mollis, massa ligula tincidunt tortor, sed imperdiet libero metus a purus. Praesent a odio eget risus placerat vehicula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Phasellus interdum ipsum sit amet blandit venenatis. Nam mattis erat in quam feugiat tincidunt. Cras suscipit diam purus, faucibus faucibus nisi scelerisque at. Sed accumsan pretium orci. Mauris non blandit neque. Donec congue molestie congue. In cursus est in est blandit blandit.`,
    category: "Category",
    author: "Author",
    editor: "Editor",
    year: new Date().getFullYear()
};

const BookPage = () => (
    <>
        <Container divided>
            <div className="left-side">
                <img src="../assets/books-background.jpeg" className="book-cover" alt="Book cover"/>
                <div>
                    <h2>{book.title}</h2>
                </div>
                <div className="book-information">
                    <ul>
                        <li>Category: {book.category}</li>
                        <li>Author: {book.author}</li>
                        <li>Editor: {book.editor}</li>
                        <li>Year: {book.year}</li>
                    </ul>
                </div>
                <div className="buttons">
                    <Button>Rent physical book</Button>
                    <Button>Download PDF</Button>
                </div>
            </div>
            <div className="right-side">
                <h2>Synopsis</h2>
                <div>
                <p><span className="space" />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum a ante at condimentum. Sed
                    malesuada iaculis cursus. Etiam ut magna porttitor, tempor risus ut, lobortis arcu. Duis in mollis
                    sem. Curabitur id facilisis nulla, ut faucibus purus. Pellentesque habitant morbi tristique senectus
                    et netus et malesuada fames ac turpis egestas. Duis molestie urna arcu, quis pellentesque massa
                    malesuada vel. Maecenas ac blandit erat.</p>
                <p><span className="space" />Curabitur dictum enim sed consectetur aliquam. Sed mattis mauris odio, a interdum quam dapibus sed.
                    Curabitur nec ex finibus, feugiat enim vitae, malesuada lorem. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Nullam et mattis ligula, at consequat nisi.
                    Donec sapien dui, facilisis sit amet magna fringilla, vulputate feugiat neque. Praesent pulvinar in
                    ligula consequat tincidunt. Phasellus ut tempor orci, et finibus lectus. Curabitur commodo vulputate
                    dui, et tristique ex aliquet in. Sed convallis felis quis velit bibendum bibendum. Vivamus facilisis
                    congue est, at ornare augue porta vel. Integer eu vehicula lorem, id bibendum urna.</p>
                <p><span className="space" />Praesent sodales dolor aliquam euismod ullamcorper. Ut euismod, libero at gravida dapibus, sem mi
                    ornare augue, et auctor tellus sem id nulla. Maecenas aliquam ante nec tortor aliquam, elementum
                    tincidunt nulla faucibus. Maecenas nisl libero, blandit ac cursus sit amet, bibendum ac erat. Nulla
                    diam orci, ullamcorper vel lorem non, pulvinar accumsan quam. Curabitur dolor nisi, lacinia id
                    condimentum nec, tristique tempus nisl. Fusce laoreet vestibulum tortor, viverra hendrerit tortor
                    tempus at. Vestibulum porta nulla ut urna dictum, eu gravida ex posuere. Duis vulputate feugiat eros
                    id blandit. In ac odio interdum, malesuada leo a, sollicitudin diam.</p>
                <p><span className="space" />Nunc ut leo ac tortor sagittis tempor. Aenean a dapibus lorem, eu interdum ante. Ut at vestibulum
                    nulla, eget vestibulum quam. Sed condimentum egestas augue id ullamcorper. Etiam feugiat diam
                    dapibus imperdiet facilisis. Nullam sagittis sem sed odio efficitur egestas. Nulla ultricies
                    sollicitudin finibus. Aliquam vitae condimentum ligula, eget tincidunt neque. Duis dictum sed nunc
                    in ultrices. Quisque cursus auctor quam ac tincidunt. Aenean et eleifend dui. Mauris metus lectus,
                    porttitor eu viverra sollicitudin, facilisis dapibus turpis. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Fusce quis est ut ipsum porttitor rhoncus. In ornare luctus blandit. Vivamus et ex
                    metus.</p>
                <p><span className="space" />Nunc eget porta erat. Suspendisse sed dictum nulla. Mauris risus lorem, cursus quis dignissim vel,
                    dapibus sit amet diam. Integer mollis commodo tellus, in ultricies dolor semper et. Sed blandit,
                    justo in venenatis mollis, massa ligula tincidunt tortor, sed imperdiet libero metus a purus.
                    Praesent a odio eget risus placerat vehicula. Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Phasellus interdum ipsum sit amet
                    blandit venenatis. Nam mattis erat in quam feugiat tincidunt. Cras suscipit diam purus, faucibus
                    faucibus nisi scelerisque at. Sed accumsan pretium orci. Mauris non blandit neque. Donec congue
                    molestie congue. In cursus est in est blandit blandit.</p>
                </div>
                <div className="left-align">
                    <h2>Related books</h2>
                    <BooksContainer className="horizontal">
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
                </div>
            </div>
        </Container>
    </>
);

export default BookPage;