function htmlTag(tag) {
  function wrapText(msg) {
    console.log(`<${tag}>${msg}<${tag}>`);
  }
  return wrapText;
}

printH1 = htmlTag('h1');
printH1('Test Headline');
printH1('Another headline');

printP = htmlTag('p');
printP('test paragraph');
