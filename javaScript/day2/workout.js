let items = [
  { id: 1, name: '벤치프레스', count: 10 },
  { id: 2, name: '랫풀다운', count: 12 },
  { id: 3, name: '스쿼트', count: 30 },
];

//CREATE

let temp_items = [...items, { id: 4, name: '덤벨숄더프레스', count: 0 }];

document.write('<div>');
document.write("<table border='1' bordercolor='cyan'>");
document.write('<thead>CREATE</thead>');
temp_items.forEach((item) => {
  document.write('<tr>');
  document.write(`<td>${item.id}</td>`);
  document.write(`<td>${item.name}</td>`);
  document.write(`<td>${item.count}</td>`);
  document.write('</tr>');
});

//READ
document.write('<div>');
document.write("<table border='1' bordercolor='cyan'>");
document.write('<thead>READ</thead>');
items.forEach((item) => {
  document.write('<tr>');
  document.write(`<td>${item.id}</td>`);
  document.write(`<td>${item.name}</td>`);
  document.write(`<td>${item.count}</td>`);
  document.write('</tr>');
});

//UPDATE

let result = -1;

let updateItems = [...items];
// result = window.prompt('수정하고자 하는 id를 입력하세요.');
updateItems.forEach((item) => {
  if (item.id === parseInt(result)) {
    updateItems = items.filter((item) => item.id !== parseInt(result));
    updateItems = [
      { id: `${parseInt(result)}`, name: 'V스쿼트', count: 0 },
      ...updateItems,
    ];
  }
});
document.write('<div>');
document.write("<table border='1' borderColor='green'>");
document.write('<thead>UPDATE</thead');
updateItems.forEach((item) => {
  document.write('<tr>');
  document.write(`<td>${item.id}</td>`);
  document.write(`<td>${item.name}</td>`);
  document.write(`<td>${item.count}</td>`);
  document.write('</tr>');
});
document.write('</table>');
document.write('</div>');

//DELETE

let deleteResult = -1;

deleteResult = window.prompt('삭제하고자 하는 id를 입력하세요.');

let newItems = items.filter((row) => row.id !== parseInt(deleteResult));
console.log(newItems);

document.write('<div>');
document.write("<table border='1' borderColor='green'>");
document.write('<thead>DELETE</thead>');
newItems.forEach((item) => {
  document.write('<tr>');
  document.write(`<td>${item.id}</td>`);
  document.write(`<td>${item.name}</td>`);
  document.write(`<td>${item.count}</td>`);
  document.write('</tr>');
});
document.write('</table>');
document.write('</div>');
