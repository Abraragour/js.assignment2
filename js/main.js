




function quotes(){


  var aquote= [
 { q:" “So many books, so little time.”",author:"― Frank Zappa"},
 { q:"“A room without books is like a body without a soul.”",author:"― Marcus Tullius Cicero"},
 { q:" “You only live once, but if you do it right, once is enough.”",author:"― Mae West"}
  ]
   var rdmQuote = Math.floor(Math.random()*aquote.length);
  document.getElementById("quoteOutput").innerHTML= aquote[rdmQuote].q + "<br>" + aquote[rdmQuote].author;
}
  

  quotes();