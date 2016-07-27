parser grammar dnpMDParser;

options { tokenVocab=dnpMDLexer; }

dnpMD
    : head body tail?
    ;

head
    : subheadline headline lead
    ;

subheadline
    : SUBHEADLINE newlines
    ;

headline
    : HEADLINE newlines
    ;

lead
    : LEAD newlines
    ;

subheading
    : SUBHEADING
    ;

caption
    : CAPTION
    ;

listing
    : LISTING (newline listingPath)? (newline label)? newline caption
    ;

image
    : caption (newline label)? (newline imagePath)?
    ;

listingPath
    : ELEMENTPATH
    ;

imagePath
    : ELEMENTPATH
    ;

labelRef
    : LABELREF
    ;

label
    : LABEL
    ;

italic
    : ITALIC
    ;

paragraph
    : (TEXT? italic TEXT?
    | TEXT? STAR TEXT?
    | TEXT? labelRef TEXT?
    | TEXT? BRACE_OPEN TEXT?
    | TEXT? LABEL TEXT?
    | ELEMENTPATH
    | TEXT
    )+
    ;

newline
    : NL
    ;

newlines
    : NL+
    ;

body
    : bodyElements+
    ;

bodyElements
    : paragraph
    | subheading
    | listing
    | image
    | newlines
    ;

tail
    : TAIL newlines (authorBio)? (newlines literatureEntries*)?
    ;

literatureEntries
    : literatureEntry (newlines | EOF)
    ;

authorBio
    : AUTHOR_BIO
    ;

literatureEntry
    : LABEL LITERATURE_CONTENT
    ;