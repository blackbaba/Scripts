var tabledata = [
{id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
{id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
{id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
{id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
{id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
];

var table = new Tabulator("#example-table", {
	data:tabledata,           //load row data from array
	layout:"fitColumns",      //fit columns to width of table
	responsiveLayout:"hide",  //hide columns that dont fit on the table
	tooltips:true,            //show tool tips on cells
	addRowPos:"top",          //when adding a new row, add it to the top of the table
	history:true,             //allow undo and redo actions on the table
	pagination:"local",       //paginate the data
	paginationSize:7,         //allow 7 rows per page of data
	movableColumns:true,      //allow column order to be changed
	resizableRows:true,       //allow row order to be changed
	initialSort:[             //set the initial sort order of the data
	{column:"name", dir:"asc"},
	],
	columns:[                 //define the table columns
	{title:"Name", field:"name", editor:"input"},
	{title:"Gender", field:"gender", width:95, editor:"select", editorParams:{values:["male", "female"]}},
	{title:"Rating", field:"rating", formatter:"star", hozAlign:"center", width:100, editor:true},
	{title:"Color", field:"col", width:130, editor:"input"},
	{title:"Date Of Birth", field:"dob", width:130, sorter:"date", hozAlign:"center"},
	{title:"Driver", field:"car", width:90,  hozAlign:"center", formatter:"tickCross", sorter:"boolean", editor:true},
	],
});

function downloadPDF() {
	table.download("pdf", "data.pdf", {
    orientation:"portrait", //set page orientation to portrait
    title:"Dynamics Quotation Report", //add title to report
    autoTable:{ //advanced table styling
    	styles: {
    		fillColor: [100, 255, 255]
    	},
    	columnStyles: {
    		id: {fillColor: 255}
    	},
    	margin: {top: 60},
    },
  });
}
