const test = async function() {
  return '123';
}

const doThing = async function () {
  return await test();
}

doThing().then(res => console.log(res));
