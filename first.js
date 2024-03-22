function resetDisplay() {
  document.querySelector('.h01').style.display = 'none';
  document.querySelector('.h02').style.display = 'none';
  document.querySelector('.online').style.display = 'none';
  document.querySelector('.public-data').style.display = 'none';
  document.querySelector('.interview').style.display = 'none';
  document.querySelector('.health').style.display = 'none';
  document.querySelector('.line-horizontal46').style.display = 'none';
}
document.querySelector('.Research19').addEventListener('mouseleave', function () {
  document.querySelector('.h01').style.display = 'block';
});

document.querySelector('.external').addEventListener('mouseleave', function () {
  document.querySelector('.h02').style.display = 'block';

});
document.querySelector('.B2c').addEventListener('mouseleave', function () {
  document.querySelector('.online').style.display = 'block';
  document.querySelector('.public-data').style.display = 'block';
  document.querySelector('.interview').style.display = 'block';
  document.querySelector('.health').style.display = 'block';
  document.querySelector('.line-horizontal46').style.display = 'block';

});
// ...............
const researchElement1 = document.querySelector('.rrr');
const researchElement = document.querySelector('.h01');
const planningElement1 = document.querySelector('.plan');
const planningElement = document.querySelector('.h07');
const DesigningElement1 = document.querySelector('.design');
const DesigningElement = document.querySelector('.h1');
const ManufacturingElement1 = document.querySelector('.manu');
const ManufacturingElement = document.querySelector('.h7');
const salesElement1 = document.querySelector('.sale');
const salesElement = document.querySelector('.h13');


planningElement1.addEventListener('mouseenter', () => {
  resetDisplay();
  researchElement.style.display = 'none';
});
DesigningElement1.addEventListener('mouseenter', () => {
  resetDisplay();
  researchElement.style.display = 'none';
});
ManufacturingElement1.addEventListener('mouseenter', () => {
  resetDisplay();
  researchElement.style.display = 'none';
});
salesElement1.addEventListener('mouseenter', () => {
  resetDisplay();
  researchElement.style.display = 'none';
});


// ...........PRD...........................
function resetDisplay1() {
  document.querySelector('.h07').style.display = 'none';
  document.querySelector('.h05').style.display = 'none';
  document.querySelector('.prd-line1').style.display = 'none';
  document.querySelector('.prd-online').style.display = 'none';
  document.querySelector('.prd-public-data').style.display = 'none';
  document.querySelector('.prd-interview').style.display = 'none';
  document.querySelector('.prd-health').style.display = 'none';
}
document.querySelector('.Research17').addEventListener('mouseleave', function () {
  document.querySelector('.h07').style.display = 'block';
});
document.querySelector('.plann').addEventListener('mouseleave', function () {
  document.querySelector('.h05').style.display = 'block';
});
document.querySelector('.B2C').addEventListener('mouseleave', function () {
  document.querySelector('.prd-line1').style.display = 'block';
  document.querySelector('.h04').style.display = 'block';
  document.querySelector('.prd-online').style.display = 'block';
  document.querySelector('.prd-interview').style.display = 'block';
  document.querySelector('.prd-public-data').style.display = 'block';
  document.querySelector('.prd-health').style.display = 'block';

});
researchElement1.addEventListener('mouseenter', () => {
  resetDisplay1();
  planningElement.style.display = 'none';
});
DesigningElement1.addEventListener('mouseenter', () => {
  resetDisplay1();
  planningElement.style.display = 'none';
});
ManufacturingElement1.addEventListener('mouseenter', () => {
  resetDisplay1();
  planningElement.style.display = 'none';
});
salesElement1.addEventListener('mouseenter', () => {
  resetDisplay1();
  planningElement.style.display = 'none';
});

// ................manufacture......................
function resetDisplay2() {
  document.querySelector('.h08').style.display = 'none';
  document.querySelector('.h7').style.display = 'none';
  document.querySelector('.h3').style.display = 'none';
  document.querySelector('.manufacture-online').style.display = 'none';
  document.querySelector('.manufacture-public-data').style.display = 'none';
  document.querySelector('.manufacture-interview').style.display = 'none';
  document.querySelector('.manufacture-health').style.display = 'none';
}
document.querySelector('.Research11').addEventListener('mouseleave', function () {
  document.querySelector('.h7').style.display = 'block';
});
document.querySelector('.mat').addEventListener('mouseleave', function () {
  document.querySelector('.h08').style.display = 'block';
});
document.querySelector('.C2C').addEventListener('mouseleave', function () {
  document.querySelector('.line-horizontal446').style.display = 'block';
  document.querySelector('.h3').style.display = 'block';
  document.querySelector('.manufacture-interview').style.display = 'block';
  document.querySelector('.manufacture-online').style.display = 'block';
  document.querySelector('.manufacture-public-data').style.display = 'block';
  document.querySelector('.manufacture-health').style.display = 'block';
});

planningElement1.addEventListener('mouseenter', () => {
  resetDisplay2();
  ManufacturingElement.style.display = 'none';
});
researchElement1.addEventListener('mouseenter', () => {
  resetDisplay2();
  ManufacturingElement.style.display = 'none';
});
DesigningElement1.addEventListener('mouseenter', () => {
  resetDisplay2();
  ManufacturingElement.style.display = 'none';
});
salesElement1.addEventListener('mouseenter', () => {
  resetDisplay2();
  ManufacturingElement.style.display = 'none';
});
// .........................Design..................................................
function resetDisplay3() {
  document.querySelector('.h1').style.display = 'none';
  document.querySelector('.h8').style.display = 'none';
  document.querySelector('.design-line1').style.display = 'none';
  document.querySelector('.design-online').style.display = 'none';
  document.querySelector('.design-public-data').style.display = 'none';
  document.querySelector('.design-interview').style.display = 'none';
  document.querySelector('.design-health').style.display = 'none';
}
document.querySelector('.design').addEventListener('mouseleave', function () {
  document.querySelector('.h1').style.display = 'block';
});
document.querySelector('.hard').addEventListener('mouseleave', function () {
  document.querySelector('.h8').style.display = 'block';
});

document.querySelector('.C2B').addEventListener('mouseleave', function () {
  document.querySelector('.design-line1').style.display = 'block';
  document.querySelector('.design-online').style.display = 'block';
  document.querySelector('.design-interview').style.display = 'block';
  document.querySelector('.design-public-data').style.display = 'block';
  document.querySelector('.design-health').style.display = 'block';
});
planningElement1.addEventListener('mouseenter', () => {
  resetDisplay3();
  DesigningElement.style.display = 'none';
});
researchElement1.addEventListener('mouseenter', () => {
  resetDisplay3();
  DesigningElement.style.display = 'none';
});
ManufacturingElement1.addEventListener('mouseenter', () => {
  resetDisplay3();
  DesigningElement.style.display = 'none';
});
salesElement1.addEventListener('mouseenter', () => {
  resetDisplay3();
  DesigningElement.style.display = 'none';
});
// ......................sale..................................................
function resetDisplay4() {
  document.querySelector('.h13').style.display = 'none';
  document.querySelector('.sale-line1').style.display = 'none';
  document.querySelector('.h12').style.display = 'none';
  document.querySelector('.sale-online').style.display = 'none';
  document.querySelector('.sale-public-data').style.display = 'none';
  document.querySelector('.sale-interview').style.display = 'none';
  document.querySelector('.sale-health').style.display = 'none';
}
document.querySelector('.sale').addEventListener('mouseleave', function () {
  document.querySelector('.h13').style.display = 'block';
});
document.querySelector('.online1').addEventListener('mouseleave', function () {
  document.querySelector('.h12').style.display = 'block';
});
document.querySelector('.B2G').addEventListener('mouseleave', function () {
  document.querySelector('.sale-line1').style.display = 'block';
  document.querySelector('.sale-online').style.display = 'block';
  document.querySelector('.sale-interview').style.display = 'block';
  document.querySelector('.sale-public-data').style.display = 'block';
  document.querySelector('.sale-health').style.display = 'block';
});
planningElement1.addEventListener('mouseenter', () => {
  resetDisplay4();
  salesElement.style.display = 'none';
});
researchElement1.addEventListener('mouseenter', () => {
  resetDisplay4();
  salesElement.style.display = 'none';
});
DesigningElement1.addEventListener('mouseenter', () => {
  resetDisplay4();
  salesElement.style.display = 'none';
});
ManufacturingElement1.addEventListener('mouseenter', () => {
  resetDisplay4();
  salesElement.style.display = 'none';
});

//  .....................for planning.................................................



//...............................for design......................................... 


//...............................for manufacture......................................... 

//...............................for Sale......................................... 

