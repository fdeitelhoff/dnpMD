parser grammar dnpMDParser;

options { tokenVocab=dnpMDLexer; }

dnpMD
    : head body tail?
    ;

head
    : subheadline headline lead
    ;

subheadline
    : SUBHEADLINE
    ;

headline
    : HEADLINE
    ;

lead
    : LEAD
    ;

subheading
    : SUBHEADING
    ;

caption
    : CAPTION
    ;

listing
    : LISTING (listingPath)? (label)? caption
    ;

image
    : caption (label)? (imagePath)?
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
    : TEXT? italic TEXT?
    | TEXT? STAR TEXT?
    | TEXT? labelRef TEXT?
    | TEXT? BRACE_OPEN TEXT?
    | TEXT? LABEL TEXT?
    | ELEMENTPATH
    | TEXT
    ;

//newlines
//    : NL+
//    ;

body
    : bodyElements+
    // | EOF evtl. später aktivieren, um direkte Fehlermeldungen/Warnungen zu liefern?
    ;

bodyElements
    : paragraph
    | subheading
    | listing
    | image
    //| newlines
    ;

tail
    : TAIL (authorBio)? (literatureEntries*)?
    ;

literatureEntries
    : literatureEntry
    ;

authorBio
    : AUTHOR_BIO
    ;

literatureEntry
    : LABEL LITERATURE_CONTENT
    ;