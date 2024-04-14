# highlights settings menu for non-direct streams

oneliner:

```js
document.querySelector(".vjs-source-selector").style.color = document.querySelector(".vjs-source-selector li.vjs-selected .vjs-menu-item-text").textContent == "Direct stream" ? "green" : "orange"
```