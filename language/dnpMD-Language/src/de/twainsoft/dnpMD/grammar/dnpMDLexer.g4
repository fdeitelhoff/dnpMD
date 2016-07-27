lexer grammar dnpMDLexer;

channels {
    COMMENTS
}

NL
    : '\r'? '\n' //[\r\n]
    ;

SUBHEADLINE
    : '##' (~[\r\n])+? '##'
    ;

HEADLINE
    : '#' ('\\#'|~[\r\n])+? '#'
    ;

LEAD
    : '###' (~[\r\n])+? '###'
    ;

SUBHEADING
    : '####' (~[\r\n])+? '####'
    ;

CAPTION
    : '#####' (~[\r\n])+? '#####'
    ;

TAIL
    : '{=== ===}'
    ;

LISTING
    : '~~~~~' .+? '~~~~~'
    ;

ELEMENTPATH
    : '[[[[[' (~[\r\n])+? ']]]]]'
    ;

LABELREF
    : '{##' (~[\r\n])+? '##}'
    ;

LABEL
    : '{#' (~[\r\n])+? '#}'
    ;

LITERATURE_CONTENT
    : '[' (~[\r\n])+? '|' (~[\r\n])+? ']'
    ;

AUTHOR_BIO
    : '# Kurzbio #' .*? '# Kurzbio #'
    ;

ITALIC
    : '*' (~[\r\n])+? '*'
    ;

SINGLE_COMMENT
    : '//' (~[\r\n])+ -> channel(COMMENTS)
    ;

MULTI_COMMENT
    : '/*' .*? '*/' -> channel(COMMENTS)
    ;

STAR
    : '*'
    ;

BRACE_OPEN
    : '{'
    ;

TEXT
    : (~[\r\n*{])+
    ;