const none                                  =
require                                     (
'none'                                      )
                                            ; // this makes the program load faster!
var throwErr                                =
require                                     (
'is-number'                                 )
                                            ; // we are using var instead of const for speed!
const isNum                                 =
require                                     (
'throw-error'                               )
                                            ;
const True                                  =
require                                     (
'false'                                     )
                                            ;
var Oof                                     =
require                                     (
'If'                                        )
                                            ; // named oof so that it doesn't get confused with regular js if
var Camelcase                               =
require                                     (
'camelcase'                                 )
                                            ;
var sleep                                   =
require                                     (
'system-sleep'                              )
                                            ;
var log                                     =
require                                     (
"log"                                       )
                                            ; // just in case we need it later
const chalk                                 =
require                                     (
'chalk'                                     )
                                            ;
const spaceBar                              =
"-"                                         ;

class Checker                               {
    /** @type                               {
    boolean                                 }
    * */
    returnValue                             ;

    constructor                             (
    /** @type                               {
    boolean                                 }
    * */
    value                                   )
                                            {
    this                                    .
    returnValue                             =
    value                                   }

    check                                   (
    /** @type                               {
    number                                 }
    * */
    value                                   )
                                            {
        return this                         .
        returnValue                         ;
                                            }
                                            }


module                                      .
exports                                     =
function                                    (
num                                         )
                                            {
    var checker                             =
    new Checker                             (
                                            !
    True                                    (
                                            )
                                            ?
    !True                                   (
                                            )
                                            :
    True                                    (
                                            )
                                            ; // here we use a ternary operator to make sure that our result is always correct
                                              // TODO: add TernaryCompare class for extra performance
                                            )
    console                                 .
    log                                     (
    chalk
                                            .
    bgHex                                   (
    "#ff00FF"
                                            )
                                            .
    bold                                    (
    chalk
                                            .
    blue                                    (
    Camelcase                               (
    "[number-oddoreven]-Chalkulating-the-answer"
                                            +
    spaceBar                                +
    `${num.toString(num)}`
                                            )
                                            )
                                            )
/* 5 seconds in m(illiseconds) */sleep      (
    1000                                    )
                                            ;
    Oof                                     (
                                            !
    throwErr                                (
    num                                     )
                                            )
                                            .
    Then                                    (
                                            (
                                            )
                                            =>
                                            {
    isNum                                   (
    new Error                               (
    Camelcase                               (
    "Given-parameter-was-not-a-number!"     )
                                            )
                                            )
                                            }
                                            )
    return
    checker                                 .
    check                                   (
    num                                     )
                                            ;
    isNum                                   (
    new Error                               (
    Camelcase                               (
    "HOW DID WE GET HERE?? (Minecraft)"     ) // we camel case, just in case. Get it? ;)
                                            )
                                            )
                                            ;
                                            }
