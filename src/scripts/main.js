'use strict';

const browserWindow = document;
const gridContainer = document.querySelector('.grid');
let gridOrder = 0;

const grid1 = `"block-1 block-1 block-2"
"block-3 block-4 block-7"
"block-5 block-6 block-7"`;

const grid2 = `"block-1 block-2 block-2"
  "block-3 block-4 block-4"
  "block-5 block-6 block-6"`;

const grid3 = `"block-1 block-2 block-3"
"block-4 block-6 block-6"
"block-5 block-6 block-6"`;

const grid4 = `"block-1 block-2 block-3"
"block-4 block-5 block-6"
"block-4 block-5 block-6"`;

browserWindow.onclick = function() {
  const gridTemplates = [grid1, grid2, grid3, grid4];

  if (gridOrder > 3) {
    gridOrder = 0;
  }

  gridContainer.style.gridTemplateAreas = gridTemplates[gridOrder];
  gridOrder += 1;
};
