function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5q2sbF27y83":
        Script1();
        break;
      case "5yBc15lRdcD":
        Script2();
        break;
      case "5XC5THth8zc":
        Script3();
        break;
      case "5tdWzYV4HK3":
        Script4();
        break;
      case "6SCXBT4I4Dk":
        Script5();
        break;
      case "6aR44CJ9mi4":
        Script6();
        break;
      case "5oS6UpZeLAK":
        Script7();
        break;
      case "5Vo9GJFXxVl":
        Script8();
        break;
      case "69Mlw9SsET0":
        Script9();
        break;
      case "6KvwNFVmNhd":
        Script10();
        break;
      case "5w8mhsmuEOn":
        Script11();
        break;
      case "5lpgzUf5u5f":
        Script12();
        break;
      case "6WBXet3hrn4":
        Script13();
        break;
      case "6j9yymGCOhI":
        Script14();
        break;
      case "6ANzmjgPwlo":
        Script15();
        break;
      case "6XLQ1TeZY9J":
        Script16();
        break;
      case "5mjW9QInQgX":
        Script17();
        break;
      case "6oxLwUrtVJH":
        Script18();
        break;
      case "5gdJLD0sm5P":
        Script19();
        break;
      case "6pPyESvua9q":
        Script20();
        break;
      case "6TogxEHHp2d":
        Script21();
        break;
      case "6ebwJtNTUz5":
        Script22();
        break;
      case "67rD1LVxagc":
        Script23();
        break;
      case "5hfMtilC2ID":
        Script24();
        break;
      case "6VzxPfoE2FV":
        Script25();
        break;
      case "5jFOrPtIm4F":
        Script26();
        break;
      case "5alk9LT9YYw":
        Script27();
        break;
      case "6RW07S6xk2C":
        Script28();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  const target = object('6lbyhAjCNGQ');
const duration = 500;
const easing = 'ease-out';
const id = '6KD88QSSInc';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('6WqEgyMDBOW');
const duration = 750;
const easing = 'ease-out';
const id = '5xclj0YEXEA';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6WqEgyMDBOW');
const duration = 1500;
const easing = 'ease-out';
const id = '6iRQWccmMxl';
const growAmount = 0.2;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('6I2zVX9CzJ9');
const duration = 1000;
const easing = 'ease-out';
const id = '69OnSNGctAS';
const shakeAmount = 2;
const delay = 3250;
addToTimeline(
target.animate(
[ {translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `${shakeAmount}px 0` }, 
{translate: '0 0' }, 
{translate: `-${shakeAmount}px 0` }, 
{translate: '0 0' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6k9VQtifEmC');
const duration = 1500;
const easing = 'ease-out';
const id = '5vocxufWM0W';
const pulseAmount = 0.07;
const delay = 3250;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  player.once(() => {
const target = object('6k5pVl6fcAo');
const duration = 750;
const easing = 'ease-out';
const id = '6prWEsoMlFe';
const growAmount = 0.2;
const delay = 3250;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script7 = function()
{
  const target = object('6XW71qzw0Eu');
const duration = 1000;
const easing = 'ease-out';
const id = '5uCAdWPqPfI';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6iBy13rkDOv');
const duration = 1000;
const easing = 'ease-out';
const id = '66DnRdfOFaR';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('6938OorqOJi');
const duration = 1000;
const easing = 'ease-out';
const id = '5iPCMsxVgYM';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('5hYBfZJ3Lau');
const duration = 1000;
const easing = 'ease-out';
const id = '6cEMsTeqOV8';
const growAmount = 0.1;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  player.once(() => {
const target = object('6grivotnpXQ');
const duration = 1000;
const easing = 'ease-out';
const id = '6R6pwPjLVxn';
const delay = 0;
addToTimeline(
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script12 = function()
{
  const target = object('6Za2nkodfNY');
const duration = 1000;
const easing = 'ease-out';
const id = '6XXH196aSH7';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  player.once(() => {
const target = object('6GPc9vgK30U');
const duration = 1000;
const easing = 'ease-out';
const id = '5oDSQUZdBuU';
const delay = 0;
addToTimeline(
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script14 = function()
{
  const target = object('6XLwcgMgKUW');
const duration = 1000;
const easing = 'ease-out';
const id = '6BxqZYkxIyr';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  player.once(() => {
const target = object('6bvTXy9eVgP');
const duration = 750;
const easing = 'ease-out';
const id = '5vHOOjFGIoN';
const delay = 0;
addToTimeline(
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script16 = function()
{
  const target = object('5enROD67oua');
const duration = 1000;
const easing = 'ease-out';
const id = '6XA4iOJPbpI';
const growAmount = 0.2;
player.addForTriggers(
id,
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('6jF4hQn7sLH');
const duration = 2000;
const easing = 'ease-out';
const id = '6eXGI2tFPYV';
player.addForTriggers(
id,
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  player.once(() => {
const target = object('6M7rnlFjw6l');
const duration = 2000;
const easing = 'ease-out';
const id = '6ZRP28WVG0q';
const delay = 0;
addToTimeline(
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script19 = function()
{
  player.once(() => {
const target = object('6YuX6otoiLL');
const duration = 2000;
const easing = 'ease-out';
const id = '6VaIR6avAPl';
const delay = 0;
addToTimeline(
target.animate(
[ {opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 }, 
{opacity: 0 }, 
{opacity: 1 } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script20 = function()
{
  player.once(() => {
const target = object('6gUtGjMLWU8');
const duration = 1000;
const easing = 'ease-out';
const id = '5g6vyCG9IBm';
const pulseAmount = 0.07;
const delay = 500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script21 = function()
{
  player.once(() => {
const target = object('6LcP43ljujh');
const duration = 1000;
const easing = 'ease-out';
const id = '6PgvShI6RAb';
const pulseAmount = 0.07;
const delay = 1250;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script22 = function()
{
  player.once(() => {
const target = object('5eogyhejrju');
const duration = 1000;
const easing = 'ease-out';
const id = '5oJhNB7PoVk';
const pulseAmount = 0.07;
const delay = 750;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script23 = function()
{
  player.once(() => {
const target = object('6beCPgzuxBr');
const duration = 1000;
const easing = 'ease-out';
const id = '5g6vyCG9IBm';
const pulseAmount = 0.07;
const delay = 500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script24 = function()
{
  player.once(() => {
const target = object('62oeI9GzQk9');
const duration = 1000;
const easing = 'ease-out';
const id = '6PgvShI6RAb';
const pulseAmount = 0.07;
const delay = 1250;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script25 = function()
{
  player.once(() => {
const target = object('6ls4FbYodzF');
const duration = 1000;
const easing = 'ease-out';
const id = '5oJhNB7PoVk';
const pulseAmount = 0.07;
const delay = 750;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script26 = function()
{
  player.once(() => {
const target = object('6S39JE7gkB4');
const duration = 1000;
const easing = 'ease-out';
const id = '5g6vyCG9IBm';
const pulseAmount = 0.07;
const delay = 500;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script27 = function()
{
  player.once(() => {
const target = object('6mFZUnvbQA9');
const duration = 1000;
const easing = 'ease-out';
const id = '6PgvShI6RAb';
const pulseAmount = 0.07;
const delay = 1250;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script28 = function()
{
  player.once(() => {
const target = object('6fRu7fFer1e');
const duration = 1000;
const easing = 'ease-out';
const id = '5oJhNB7PoVk';
const pulseAmount = 0.07;
const delay = 750;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
