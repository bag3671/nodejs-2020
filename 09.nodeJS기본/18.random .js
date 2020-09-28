const myModule = require(`./18.export`);

for (let i = 0; i < 5; i++) {
  console.log(myModule.randInt(1, 5), myModule.area(myModule.randInt(1, 5)));
}