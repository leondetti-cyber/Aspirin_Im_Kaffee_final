function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6K8rwXBKzu9":
        Script1();
        break;
      case "5Z47zCKWs26":
        Script2();
        break;
      case "6dMxZ9z7RUL":
        Script3();
        break;
      case "6Ipi3QkPPeX":
        Script4();
        break;
      case "60BXiDwMJ9d":
        Script5();
        break;
      case "5l7ddqOdgui":
        Script6();
        break;
      case "6DMQQws6anK":
        Script7();
        break;
      case "6atjbel7BCA":
        Script8();
        break;
      case "5nfamqrMly8":
        Script9();
        break;
      case "6N6nv0m05w7":
        Script10();
        break;
      case "6D0hlmjYf2O":
        Script11();
        break;
      case "6fSvQsSqZWP":
        Script12();
        break;
      case "6kqRdGmDhQG":
        Script13();
        break;
      case "6MdV0XL9UG5":
        Script14();
        break;
      case "5unoIFfV1Mk":
        Script15();
        break;
      case "6Ef598d4xtk":
        Script16();
        break;
      case "6gg87CmQ8e5":
        Script17();
        break;
      case "6lHicheIv7O":
        Script18();
        break;
      case "6nZSq9NoXav":
        Script19();
        break;
      case "66ME5mNBPOO":
        Script20();
        break;
      case "5pBE117TO5n":
        Script21();
        break;
      case "5tGsKLpUQ18":
        Script22();
        break;
      case "6c0WELnyV5V":
        Script23();
        break;
      case "5yi7We0UgBm":
        Script24();
        break;
      case "6DaHZkeTKlb":
        Script25();
        break;
      case "5VcOiT4h4RI":
        Script26();
        break;
      case "6JnmGUdClcP":
        Script27();
        break;
      case "6noneA70E3T":
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
