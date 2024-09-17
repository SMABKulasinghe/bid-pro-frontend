
/*let dashContractDetailTable;
let dashsuppNextInvoiceTable;
let dashcompanyContractdetailTable;*/

//$('#testIndex').on('click', function() {
//			console.log("ChangeClick");
//
//			$('#titleID').text("SupplierPortal One");
//			$('#positionName').text("One");
//			$('#loadDiv').load('../supplierportalwebv2/1');
//		});

//$('#supplierDashTab').hide();
//$('#supDash').hide();
//
//$('#companyDashTab').hide();
//$('#comDash').hide();





$(document).ready(function() {
	
	dashContractDetailTable=undefined;
	dashsuppNextInvoiceTable=undefined;
	dashcompanyContractdetailTable=undefined;
	supllierscompanytable=undefined;
	companyssuplliertable=undefined;
	companypendinInvoTable=undefined;
	allCompanies=undefined;
	allSuppliers=undefined
	
var user = JSON.parse(sessionStorage.getItem('User'));
//console.log("User object");
//console.log(user);

var usermenu = JSON.parse(sessionStorage.getItem('userMenu'));

//Commpany Dashboard view
if(usermenu.includes('Company Summer Box') || usermenu.includes('Company Contracts')){
	console.log("Company DashBoard Loded");
	
	/* Piumal Modify Start */
	if(usermenu.includes('Company Summer Box')){
		companySummerBox();
	}else{
		$('#topSummaryDiv').hide();
	}
	
	if(usermenu.includes('Company Contracts')){
		companyContractDetails();
	}else{
		$('#companyContractDetailsDiv').hide();
		//$('#contractDetailsDiv').hide();
	}
	
	if(usermenu.includes('Partner Details')){
		companSupplierList();
	}else{
		$('#supplierPartnerDetails').hide();
	}
	
	if(usermenu.includes('Company Pending Invoices')){
		getCompanyPendingInvoice();
	}else{
		$('#companyPendingInvoiceDiv').hide();
	}
	/* Piumal Modify End */

//	***************** company contract details *********************************************
//	companyContractDetails();	
	
//	
	//companSupplierList();
	
	//getCompanyPendingInvoice();
	
//	 companyStaticdata();
	//console.log("com 1");
	$('#companyDashTab').show();
	//console.log("com 2");
	$('#comDash').show();
	//console.log("com 3");
	
//	$("#comDash").addClass("active");
}else{
	console.log("company dash else");
	$('#companyDashTab').hide();
	//console.log("com 4");
	$('#comDash').hide();
	//console.log("com 5");
}

//Supplier Dashboard view
if (usermenu.includes('Supplier Summery Box')||usermenu.includes('Suppliers Company')||usermenu.includes('Suppliers Contract')||
		usermenu.includes('Supplier Summary Chart')||usermenu.includes('Suppliers Invoices')){
	console.log("inside of supplier dashboard");
	
	/* Piumal Modify Start */
	if(usermenu.includes('Supplier Summery Box')){
 		 console.log('Supplier Summery Box')
 		 supplierSummerbox();
	}else{
		$('#topSummaryDiv').hide();
	} 
	
	if(usermenu.includes('Suppliers Company')){
		console.log('Suppliers Company')
		setSupplierscompanyList();
	}else{
		$('#suppliersDetailsDiv').hide();
	} 
	
	if(usermenu.includes('Suppliers Contract')){
		console.log('Suppliers Contract')
		supplierContractDetails();
	}else{
		$('#contractDetailsDiv').hide();
	} 
	
	if(usermenu.includes('Supplier Summary Chart')){
		console.log('Supplier Summary Chart')
		summaryChartSupplier();
	}else{
		$('#lastSixMonthDetailsDiv').hide();
	} 
	
	if(usermenu.includes('Suppliers Invoices')){
		console.log('Suppliers Invoices')
		supplierInvoicedetails();
	}else{
		$("#nextInvoiceDetailsDiv").hide();
	} 
	/* Piumal Modify End */
	
	//	******* supplier company details table *******************
	
	//setSupplierscompanyList();
	
	//	******* supplier contracct details table *******************
	//supplierContractDetails();
	
	//	============================ next invoices =====================================
	//supplierInvoicedetails();
	
	//=================================================== chart js ===== start ===============
	//summaryChartSupplier();
	
	//	supplier summary box value set ==++==++==++==++==++==++==++==++==========================
	//supplierSummerbox();
	
	
//	console.log("sup 1");
	$('#supplierDashTab').show();
//	console.log("sup 2");
	$('#supDash').show();
//	console.log("sup 3");
//	$("#supDash").addClass("active");
	
}else{
	//console.log("sup 4");
	$('#supplierDashTab').hide();
	//console.log("sup 5");
	$('#supDash').hide();
	//console.log("sup 6");
}

if (usermenu.includes('SuperUser Company Counts')) {
	loadAllCompanies();
	$('#div_all_companies').removeClass('initContent')
}else{
	$('#div_all_companies').addClass('initContent')
}

if (usermenu.includes('SuperUser Supplier Counts')) {
	loadAllSuppliers();
	$('#div_all_suppliers').removeClass('initContent')
}else{
	$('#div_all_suppliers').addClass('initContent')
}

function loadAllCompanies() {
if(allCompanies==undefined){
		
		allCompanies=$('#tbl_total_companies').DataTable({
			  processing: true,
				 serverSide: true,
				 responsive: true,
			     ajax: {
			    	 url:globalUrl+"/dashboard/superuser/companies/all",
			         type: 'GET',
			         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			     },
			     columns: [
			    	 {"data":"companyName"},
			    	 {"data":"contactNo"},
			    	 {"data":"email"},
			    	 {"data":"createddate"},
			    	 {"data":"userCount",
			    		 "orderable": false
			    	 },
			     ]
		});
	}else{
		allCompanies.ajax.url(globalUrl+"/dashboard/superuser/companies/all").load();
	}
	getAsyncData('/dashboard/superuser/companies/count', function(res) {
		$('#all_company_count').text(res.responseJSON.companies);
		$('#all_company_user_count').text(res.responseJSON.usrCount);
	});
}


function loadAllSuppliers() {
	if(allSuppliers==undefined){
			
			allSuppliers=$('#tbl_total_suppliers').DataTable({
				  processing: true,
					 serverSide: true,
					 responsive: true,
				     ajax: {
				    	 url:globalUrl+"/dashboard/superuser/supplier/all",
				         type: 'GET',
				         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
				     },
				     columns: [
				    	 {"data":"companyName"},
				    	 {"data":"contactNo"},
				    	 {"data":"email"},
				    	 {"data":"createddate"},
				    	 {"data":"userCount",
				    		 "orderable": false
				    	 },
				     ]
			});
		}else{
			allSuppliers.ajax.url(globalUrl+"/dashboard/superuser/supplier/all").load();
		}
	getAsyncData('/dashboard/superuser/supplier/count', function(res) {
		$('#all_supplier_count').text(res.responseJSON.companies);
		$('#all_supplier_user_count').text(res.responseJSON.usrCount);
	});
	}

});

function companyStaticdata(){
	// ********************** static data for line and donut chart **************************** should change this **** start ****
	// Donut Chart
	  var donut = new Morris.Donut({
	    element  : 'sales-chart',
	    resize   : true,
	    colors   : ['#1e88e5', '#ffb22b', '#7460ee'],
	    data     : [
	      { label: 'Online Sales', value: 39 },
	      { label: 'In-Store Sales', value: 54 },
	      { label: 'Mail-Order Sales', value: 15 }
	    ],
		  labelColor: '#ccc',
	    hideHover: 'auto'
	  });
	var area = new Morris.Area({
	    element   : 'revenue-chart',
	    resize    : true,
	    data      : [
	      { y: '2015 Q1', item1: 1500, item2: 1800 },
	      { y: '2015 Q2', item1: 4000, item2: 5000 },
	      { y: '2015 Q3', item1: 7800, item2: 8800 },
	      { y: '2015 Q4', item1: 9000, item2: 9500 },
	      { y: '2016 Q1', item1: 10000, item2: 10500 },
	      { y: '2016 Q2', item1: 9500, item2: 10000 },
	      { y: '2016 Q3', item1: 7000, item2: 8555 },
	      { y: '2016 Q4', item1: 11000, item2: 12500 },
	      { y: '2017 Q1', item1: 17000, item2: 18500 },
	      { y: '2017 Q2', item1: 19000, item2: 20000 }
	    ],
	    xkey      : 'y',
	    ykeys     : ['item1', 'item2'],
	    labels    : ['Item 1', 'Item 2'],
	    lineColors: ['#41a1f5', '#177cd5'],
	    hideHover : 'auto'
	  });
	  var line = new Morris.Line({
	    element          : 'line-chart',
	    resize           : true,
	    data             : [
	      { y: '2015 Q1', item1: 2800 },
	      { y: '2015 Q2', item1: 2500 },
	      { y: '2015 Q3', item1: 4200 },
	      { y: '2015 Q4', item1: 3900 },
	      { y: '2016 Q1', item1: 4589 },
	      { y: '2016 Q2', item1: 6489 },
	      { y: '2016 Q3', item1: 3548 },
	      { y: '2016 Q4', item1: 12589 },
	      { y: '2017 Q1', item1: 11025 },
	      { y: '2017 Q2', item1: 19540 }
	    ],
	    xkey             : 'y',
	    ykeys            : ['item1'],
	    labels           : ['Item 1'],
	    lineColors       : ['#26C6DA'],
	    lineWidth        : 2,
	    hideHover        : 'auto',
	    gridTextColor    : '#999',
	    gridStrokeWidth  : 0.2,
	    pointSize        : 4,
	    pointStrokeColors: ['#26C6DA'],
	    gridLineColor    : '#999',
	    gridTextFamily   : 'Open Sans',
	    gridTextSize     : 10
	  });
}

function companSupplierList(){
	if(companyssuplliertable==undefined){
		companyssuplliertable=$('#CompanysSupplier_tbl').DataTable({
			  processing: true,
				 serverSide: true,
				 responsive: true,
			     ajax: {
			    	 url:globalUrl+"/dashboard/compnysSupplierlist",
			         type: 'GET',
			         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			     },
			     columns: [
			    	 
			    	 {"data":"companycode"},
			    	 {"data":"companyName"},
			     ]
		});
	}else{
		supllierscompanytable.ajax.url(globalUrl+"/dashboard/compnysSupplierlist").load();
	}
}

function companySummerBox(){
		getAsyncData("/dashboard/companyBoxval",function(res){
		console.log(JSON.stringify(res));
		console.log("box vslues---"+res.responseJSON.contracts);
		$('#sumbox_supCount').text(res.responseJSON.companies);
		$('#sumbox_supconCount').text(res.responseJSON.contracts)
		$('#sumbox_supInvCount').text(res.responseJSON.invoices)
		$('#sumbox_supPayCount').text(res.responseJSON.payments)
	});
}

function companyContractDetails() {
	if(dashcompanyContractdetailTable==undefined){
		console.log("inside company contract")
		
	dashcompanyContractdetailTable=$('#com_contract_details').DataTable({
			  processing: true,
				 serverSide: true,
				 responsive: true,
			     ajax: {
			    	 url:globalUrl+"/dashboard/companyContract",
			         type: 'GET',
			         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			     },
			     columns: [
			    	 {"data":"companyName"},
			    	 {"data":"contractNo"},
			    	 { "data": "amount",				            	
			            	className: "text-right",
			            	 render: function(data,type,row,meta) {
			            		 return currencyFormat(data);
			            },	
			         },
			    	 {"data":"createddate",
			    		 "render": function ( data, type, row, meta ) {
							  var mydate=getDateFormat(data);
						      return mydate;	
						      } 
			    	 },
			    	 {"data":"expireDate",
			    		 "render": function ( data, type, row, meta ) {
							  var mydate=getDateFormat(data);
						      return mydate;	
						      } },
				     { "data": "amount_usd",				            	
				        	className: "text-right",
	   	            	    render: function(data,type,row,meta) {
	   	            	    	if(data !=null){
	   	            	    		return currencyFormat(data);
	   	            	    	}else{
	   	            	    		return '0.00'
	   	            	    	}
					       
					     },	
			         },
			    	 {"data":"paymentType"},
			    	 {"data":"renewal"}
			     ]
		});
	}else{
		dashcompanyContractdetailTable.ajax.url(globalUrl+"/dashboard/companyContract").load();
	}
}

function supplierContractDetails() {
	console.log("supplierContractDetails");
if(dashContractDetailTable==undefined){
		
		
		dashContractDetailTable=$('#contract_details').DataTable({
			  processing: true,
				 serverSide: true,
				 responsive: true,
			     ajax: {
			    	 url:globalUrl+"/dashboard/supplierContract",
			         type: 'GET',
			         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			     },
			     columns: [
			    	 {"data":"companyName"},
			    	 {"data":"contractNo"},
			    	 {"data":"amount"},
			    	 {"data":"createddate",
			    		 "render": function ( data, type, row, meta ) {
							  var mydate=getDateFormat(data);
						      return mydate;	
						      } 
			    	 },
			    	 {"data":"expireDate",
			    		 "render": function ( data, type, row, meta ) {
							  var mydate=getDateFormat(data);
						      return mydate;	
						      } },
			    	 {"data":"modifiedBy"},
			    	 {"data":"paymentType"},
			    	 {"data":"renewal"}
			     ]
		});
	}else{
		dashContractDetailTable.ajax.url(globalUrl+"/dashboard/supplierContract").load();
	}
}

function supplierInvoicedetails() {
	console.log("supplierInvoicedetails");
if(dashsuppNextInvoiceTable==undefined){
		
		
		dashsuppNextInvoiceTable=$('#suppNextInvo_details').DataTable({
			  processing: true,
				 serverSide: true,
				 responsive: true,
			     ajax: {
			    	 url:globalUrl+"/dashboard/supplierNextInvo",
			         type: 'GET',
			         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			     },
			     columns: [
			    	 {"data":"companyName"},
			    	 {"data":"contractNo"},
			    	 {"data":"amount"},
			    	 {"data":"createddate",
			    		 "render": function ( data, type, row, meta ) {
							  var mydate=getDateFormat(data);
						      return mydate;	
						      } 
			    	 },
			    	 {"data":"invoicedate",
			    		 "render": function ( data, type, row, meta ) {
							  var mydate=getDateFormat(data);
						      return mydate;	
						      } },
					{"data":"lastinvo",
						   "render": function ( data, type, row, meta ) {
							  var mydate=getDateFormat(data);
							  return mydate;	
							  } },
			    	
			     ]
		});
	}else{
		dashsuppNextInvoiceTable.ajax.url(globalUrl+"/dashboard/supplierNextInvo").load();
	}
}

function summaryChartSupplier() {
	console.log("summaryChartSupplier");
	getAsyncData("/dashboard/summerchart_sup",function(res){
		var j_obj=res.responseJSON;
		j_obj.status
		console.log("status--->"+j_obj.status);
	var areaChartCanvas = $('#monSupDta').get(0).getContext('2d')
	var areaChart       = new Chart(areaChartCanvas)
	
	var areaChartData = {
		  labels  : j_obj.months,
		  datasets: [
			{
			  label               : 'Contract',
			  fillColor           : 'rgba(82,141,235,0.3)',
			  strokeColor         : 'rgba(82,141,235,0)',
			  pointColor          : 'rgba(82,141,235,0.5)',
			  pointStrokeColor    : '#1eacbe',
			  pointHighlightFill  : '#fff',
			  pointHighlightStroke: 'rgba(30,172,190,1)',
			  data                : j_obj.subtotals
			},
			{
			  label               : 'Invoice',
			  fillColor           : 'rgba(53,196,106,0.7)',
			  strokeColor         : 'rgba(53,196,106,0)',
			  pointColor          : '#26c6da',
			  pointStrokeColor    : 'rgba(38,198,218,0.5)',
			  pointHighlightFill  : '#fff',
			  pointHighlightStroke: 'rgba(38,198,218,1)',
			  data                : j_obj.inototal
			}
		  ]
		}
	
	var areaChartOptions = {
		  //Boolean - If we should show the scale at all
		  showScale               : true,
		  //Boolean - Whether grid lines are shown across the chart
		  scaleShowGridLines      : true,
		  //String - Colour of the grid lines
		  scaleGridLineColor      : 'rgba(102,102,102,0.2)',
		  //Number - Width of the grid lines
		  scaleGridLineWidth      : 1,
		  //Boolean - Whether to show horizontal lines (except X axis)
		  scaleShowHorizontalLines: true,
		  //Boolean - Whether to show vertical lines (except Y axis)
		  scaleShowVerticalLines  : true,
		  //Boolean - Whether the line is curved between points
		  bezierCurve             : true,
		  //Number - Tension of the bezier curve between points
		  bezierCurveTension      : 0.5,
		  //Boolean - Whether to show a dot for each point
		  pointDot                : true,
		  //Number - Radius of each point dot in pixels
		  pointDotRadius          : 1,
		  //Number - Pixel width of point dot stroke
		  pointDotStrokeWidth     : 1,
		  //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
		  pointHitDetectionRadius : 20,
		  //Boolean - Whether to show a stroke for datasets
		  datasetStroke           : true,
		  //Number - Pixel width of dataset stroke
		  datasetStrokeWidth      : 0,
		  //Boolean - Whether to fill the dataset with a color
		  datasetFill             : true,
		  //String - A legend template
		  legendTemplate          : '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].lineColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
		  //Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
		  maintainAspectRatio     : true,
		  //Boolean - whether to make the chart responsive to window resizing
		  responsive              : true
		};
	areaChart.Line(areaChartData, areaChartOptions);
	
	});
}

function supplierSummerbox() {
//	supplier summary box value set ==++==++==++==++==++==++==++==++==========================
	console.log("supplierSummerbox");
	getAsyncData("/dashboard/supplierBoxval",function(res){
//		console.log(JSON.stringify(res));
//		console.log("box vslues---"+res.responseJSON.contracts);
		$('#sumbox_invCount').text(res.responseJSON.invoices);
		$('#sumbox_conCount').text(res.responseJSON.contracts)
		$('#sumbox_comCount').text(res.responseJSON.companies)
		$('#sumbox_payCount').text(res.responseJSON.payments)
	});
	
}

function setSupplierscompanyList(){
	console.log("table load")
	
	if(supllierscompanytable==undefined){
		supllierscompanytable=$('#suppliersCompany_tbl').DataTable({
			  processing: true,
				 serverSide: true,
				 responsive: true,
			     ajax: {
			    	 url:globalUrl+"/dashboard/suppliersCompnylist",
			         type: 'GET',
			         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			     },
			     columns: [
			    	 
			    	 {"data":"companycode"},
			    	 {"data":"companyName"},
			     ]
		});
	}else{
		supllierscompanytable.ajax.url(globalUrl+"/dashboard/suppliersCompnylist").load();
	}

}

$('#companies_box').on('click', function() {
	$('html, body').animate({
        scrollTop: $("#sup_details").offset().top
    }, 1500);
})

$('#contracts_box').on('click', function() {
	$('html, body').animate({
        scrollTop: $("#contracts_table_div").offset().top
    }, 1500);
})


function getDateFormat(date){
	let current_datetime = new Date(date)
	let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
//	console.log(formatted_date)
	return formatted_date;
	}
function getCompanyPendingInvoice(){
	if(companypendinInvoTable==undefined){
		companypendinInvoTable=$('#Companyspendinginvo_tbl').DataTable({
			  processing: true,
				 serverSide: true,
				 responsive: true,
			     ajax: {
			    	 url:globalUrl+"/dashboard/companyPendingInvoice",
			         type: 'GET',
			         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			     },
			     columns: [
			    	 
			    	 
			    	 {"data":"companyName"},
			    	 {"data":"contractnumber"},
			    	 {"data":"amount"},
			    	 {"data":"createDate"},
			    	 {"data":"invoDate"},
			    	 
			     ]
		});
	}else{
		companypendinInvoTable.ajax.url(globalUrl+"/dashboard/companyPendingInvoice").load();
	}
}


