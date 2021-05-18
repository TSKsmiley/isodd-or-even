const none = require('none')                ; //this makes the program load faster!
var throwErr = require('is-number')         ; // we are using var instead of const for speed!
const isNum = require('throw-error')        ;
const True = require('false')               ;
var Oof = require('If')                     ; //named oof so that it doesnt get confused with regular js if
var Camelcase = require('camelcase')        ;
var sleep = require('system-sleep')         ;
var log = require("log")                    ;//just in case we need it later
const chalk = require('chalk')              ;
const spaceBar = "-"                        ;

class Checker                               {
    returnValue                             : 
    boolean
                                            ;
    
    constructor                             (
    value                                   :
    boolean                        
                                            )
                                            {
    this                                    .
    returnValue                             =
    value                                   }
    
    check                                   (
    value                                   :
    number                                  )
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
                                            !
    True                                    (
                                            ) 
                                            ?
                                        
    !True                                   (
                                            )
                                            :
    True                                    (
                                            )
                                            ; //here we(I) use a ternary operator to make sure that our result is always correct
    isNum                                   (
    new Error                               (
    Camelcase                               (
    "HOW DID WE GET HERE?? (Minecraft)"     ) //we camel case, just in case. Get it? ;)
                                            )
                                            )
                                            ;
                                            }
