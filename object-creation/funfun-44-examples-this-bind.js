function talk() {
  console.log(this.sound);
}

let boromir = {
  sound: 'one does not simply walk into mordor'
}

let boundTalk = talk.bind(boromir);
boundTalk();