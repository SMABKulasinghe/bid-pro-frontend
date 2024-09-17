
<div class="box-body">
	<ul class="nav nav-tabs customtab" role="tablist">
		<li class="nav-item" id="supplierDashTab"><a class="nav-link active" data-toggle="tab"
			href="#supDash" role="tab"><span class="hidden-sm-up"><i
					class="ion-home"></i></span> <span class="hidden-xs-down">Supplier
					Dashboard</span></a></li>
		<li class="nav-item" id="companyDashTab"><a class="nav-link" data-toggle="tab"
			href="#comDash" role="tab"><span class="hidden-sm-up"><i
					class="ion-person"></i></span> <span class="hidden-xs-down">Company
					Dashboard</span></a></li>

	</ul>

	<div class="tab-content" id="dashboardContent">
		<div class="tab-pane" id="supDash" role="tabpanel">
			<div class="box box-info">
				<!-- ******************************** Supplier dashboard ----- start ******************************************************** -->
				<!-- ***============================ supplier's summary box ==== statrt ==============*** -->
				<div class="row animated fadeInLeft" id ="topSummaryDiv">
					<div class="col-12 col-md-6 col-lg-3">
						<div class="info-box">
							<span class="info-box-icon bg-red"><i
								class="ion ion-person-stalker"></i></span>

							<div class="info-box-content">
								<span class="info-box-number"></span>Companies<span
									class="info-box-text" id="sumbox_comCount">0</span>
							</div>
							<!-- /.info-box-content -->
						</div>
						<!-- /.info-box -->
					</div>
					<!-- /.col -->
					<div class="col-12 col-md-6 col-lg-3">
						<div class="info-box">
							<span class="info-box-icon bg-blue"><i
								class="ion ion-stats-bars"></i></span>

							<div class="info-box-content">
								<span class="info-box-number"><small>Contracts</small></span> <span
									class="info-box-text" id="sumbox_conCount">0</span>
							</div>
							<!-- /.info-box-content -->
						</div>
						<!-- /.info-box -->
					</div>
					<!-- /.col -->
				
					<!-- /.col -->

					<!-- fix for small devices only -->
					<div class="clearfix visible-sm-block"></div>

					<div class="col-12 col-md-6 col-lg-3">
						<div class="info-box">
							<span class="info-box-icon bg-purple"><i
								class="ion ion-bag"></i></span>

							<div class="info-box-content">
								<span class="info-box-number"></span> Invoices<span
									class="info-box-text" id="sumbox_invCount">0</span>
							</div>
							<!-- /.info-box-content -->
						</div>
						<!-- /.info-box -->
					</div>
						<div class="col-12 col-md-6 col-lg-3">
						<div class="info-box">
							<span class="info-box-icon bg-green"><i
								class="ion ion-stats-bars"></i></span>

							<div class="info-box-content">
								<span class="info-box-number"></span>Payments <span
									class="info-box-text" id="sumbox_payCount">0</span>
							</div>
							<!-- /.info-box-content -->
						</div>
						<!-- /.info-box -->
					</div>
					<!-- /.col -->

				</div>
				<!-- ***============================ supplier's summary box ==== End ==============*** -->
				
				<!-- ***============================ suppliers next invoices===============================================*** -->
				
				<div class="row animated fadeInLeft" id = "nextInvoiceDetailsDiv">
					<div class="col col-md-8">
						<div class="box">
							<div class="box-header with-border">
								<h3 class="box-title text-aqua">Next Invoice Details</h3>
							</div>
							<div class="box-body">
								<div class="row">
									<table id="suppNextInvo_details"
										class="table table-bordered table-hover display nowrap margin-top-10 table-responsive">
										<thead>
											<tr class="text-yellow">
												<th>Company</th>
												<th>Contract Number</th>
												<th>Amount</th>
												<th>Created Date</th>
												<th>Invoice Date</th>
												<th>Last invoice</th>
											
											</tr>
										</thead>
										<tbody>

										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					
					<!-- ***====================================================================================================*** -->
					<div class="col col-md-4" id = "suppliersDetailsDiv">
						<div class="box">
							<div class="box-header with-border">
								<h3 class="box-title text-aqua">Suppliers Details</h3>
							</div>
							<div class="box-body">
								<div class="row">
									<table id="suppliersCompany_tbl"
										class="table table-bordered table-hover display nowrap margin-top-10 table-responsive">
										<thead>
											<tr class="text-yellow">
												<th>Company Code</th>
												<th>Company Name</th>
											</tr>
										</thead>
										<tbody>

										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<!-- ***============================ supplier's company contract details data table ==== statrt ==============*** -->
				<div class="row animated fadeInLeft" id = "contractDetailsDiv">
			<div class="col col-md-12">
						<div class="box">
							<div class="box-header with-border">
								<h3 class="box-title text-aqua">Contract Details</h3>
							</div>
							<div class="box-body">
								<div class="row">
									<table id="contract_details"
										class="table table-bordered table-hover display nowrap margin-top-10 table-responsive">
										<thead>
												<tr class="text-yellow">
												<th>Company</th>
												<th>Contract Number</th>
												<th>Amount</th>
												<th>Created Date</th>
												<th>Expired Date</th>
												<th>Last Modified</th>
												<th>Payment Type</th>
												<th>Renewal Date</th>
											</tr>
										</thead>
										<tbody>

										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- ***============================ supplier's company contract details data table ==== End ==============*** -->
				
				
				
				<div class="box" id ="lastSixMonthDetailsDiv">
							<div class="box-header with-border">
								<h3 class="box-title text-aqua">Last Six Month Details</h3>
							</div>
							<div class="box-body">
				<div name="monthly_totalcount" class="chart">
					<canvas id="monSupDta" height="100vw"></canvas>
				</div>
				</div>
				</div>
				
				
				
				
				
				
				<!-- ************************************************************ Supplier dashboard End ************************************************* -->
			</div>
		</div>
		<!--  ******************************************* -->
		<div class="tab-pane" id="comDash" role="tabpanel">
			<div class="box box-info">
			
			<!-- *** =================================== company box ===================================== ***  -->
		
		<!-- ************************************************** company summary box *** start ******************************************** -->	
			<div class="row animated fadeInLeft">
					<div class="col-12 col-md-6 col-lg-3">
						<div class="info-box">
							<span class="info-box-icon bg-red"><i
								class="ion ion-person-stalker"></i></span>

							<div class="info-box-content">
								<span class="info-box-number"></span>Suppliers<span
									class="info-box-text" id="sumbox_supCount">0</span>
							</div>
							<!-- /.info-box-content -->
						</div>
						<!-- /.info-box -->
					</div>
					<!-- /.col -->
					<div class="col-12 col-md-6 col-lg-3">
						<div class="info-box">
							<span class="info-box-icon bg-blue"><i
								class="ion ion-stats-bars"></i></span>

							<div class="info-box-content">
								<span class="info-box-number"><small>Contracts</small></span> <span
									class="info-box-text" id="sumbox_supconCount">0</span>
							</div>
							<!-- /.info-box-content -->
						</div>
						<!-- /.info-box -->
					</div>
					<!-- /.col -->
				
					<!-- /.col -->

					<!-- fix for small devices only -->
					<div class="clearfix visible-sm-block"></div>

					<div class="col-12 col-md-6 col-lg-3">
						<div class="info-box">
							<span class="info-box-icon bg-purple"><i
								class="ion ion-bag"></i></span>

							<div class="info-box-content">
								<span class="info-box-number"></span> Invoices<span
									class="info-box-text" id="sumbox_supInvCount">200</span>
							</div>
							<!-- /.info-box-content -->
						</div>
						<!-- /.info-box -->
					</div>
						<div class="col-12 col-md-6 col-lg-3">
						<div class="info-box">
							<span class="info-box-icon bg-green"><i
								class="ion ion-stats-bars"></i></span>

							<div class="info-box-content">
								<span class="info-box-number"></span>Payments <span
									class="info-box-text" id="sumbox_supPayCount">362</span>
							</div>
							<!-- /.info-box-content -->
						</div>
						<!-- /.info-box -->
					</div>
					<!-- /.col -->

				</div>
			<!-- ************************************************** company summary box **** end ******************************************** -->
			
			<!-- ***============================ company's supplier contract details data table ==== statrt ==============*** -->
				<div class="row animated fadeInLeft" id ="companyContractDetailsDiv">
					<div class="col col-md-12">
						<div class="box">
							<div class="box-header with-border">
								<h3 class="box-title text-aqua">Contract Details</h3>
							</div>
							<div class="box-body">
								<div class="row">
									<table id="com_contract_details"
										class="table table-bordered table-hover display nowrap margin-top-10 table-responsive">
										<thead>
											<tr class="text-yellow">
												<th>Supplier</th>
												<th>Contract Number</th>
												<th>Amount LKR</th>
												<th>Created Date</th>
												<th>Expired Date</th>
												<th>Amount Usd</th>
												<th>Payment Type</th>
												<th>Renewal Date</th>
											</tr>
										</thead>
										<tbody>

										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- ***============================ company's supplier contract details data table ==== End ==============*** -->
			
			<!--  ******************************* company's supplier setails *************************************************  -->
			<div class="row animated fadeInLeft" id="supplierPartnerDetails">
				<div class="col col-md-5">
						<div class="box">
							<div class="box-header with-border">
								<h3 class="box-title text-aqua">Suppliers / Partner Details</h3>
							</div>
							<div class="box-body">
								<div class="row">
									<table id="CompanysSupplier_tbl"
										class="table table-bordered table-hover display nowrap margin-top-10 table-responsive">
										<thead>
											<tr class="text-yellow">
												<th>Suppliers Code</th>
												<th>Suppliers Name</th>
											</tr>
										</thead>
										<tbody>

										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
					<div class="nav-tabs-custom col col-md-6">
           				 <!-- Tabs within a box -->
           					<!--  <ul class="nav nav-tabs float-right clearfix">
             					 <li><a class="active" href="#revenue-chart" data-toggle="tab">Growth</a></li>
             					 <li><a href="#sales-chart" data-toggle="tab">Count</a></li>
             					 <li class="float-left header text-aqua"><h3 class="box-title text-aqua">Sales Overview</h3></li>
            				</ul> -->
           				 <!-- <div class="tab-content no-padding"> -->
             			 <!-- Morris chart - Sales -->
              				<!-- <div class="chart tab-pane active" id="revenue-chart" style="position: relative; height: 350px;"></div>
              				<div class="chart tab-pane" id="sales-chart" style="position: relative; height: 350px;"></div> -->
              				
              				
              			<div class="box" id="company_pendingInvo" id ="companyPendingInvoiceDiv">
							<div class="box-header with-border">
								<h3 class="box-title text-aqua">Company Pending Invoice</h3>
							</div>
							<div class="box-body">
								<div class="row">
									<table id="Companyspendinginvo_tbl"
										class="table table-bordered table-hover display nowrap margin-top-10 table-responsive">
										<thead>
											<tr class="text-yellow">
												
												<th>Suppliers Name</th>
												<th>Contract number</th>
												<th>Amount</th>
												<th>Create Date</th>
												<th>Invoice Date</th>
											
											</tr>
										</thead>
										<tbody>  

										</tbody>
									</table>
								</div>
							</div>
						</div>
              				
            			</div>
          			</div>
					</div>
			<!-- ************************************************************************************************************  -->
			
			
			
			
			<!-- *** ==================================== company supplier dashboard  end ================================================= *** -->
			</div>
		</div>
	</div>

<!-- </div> -->


<!-- Inside -->
<div class="initContent row animated fadeInLeft " id="div_all_companies">
	<div class="col">
		 <div class="box">
			<div class="box-header with-border">
				<h3 class="box-title">All Companies</h3>

				<div class="box-tools pull-right">
					<button type="button" class="btn btn-box-tool"
						data-widget="collapse">
						<i class="fa fa-minus"></i>
					</button>
					<button type="button" class="btn btn-box-tool" data-widget="remove">
						<i class="fa fa-times"></i>
					</button>
				</div>
			</div>
			<!-- /.box-header -->
			<div class="box-body">
				<div class="row">
					<div class="col-md-12 col-lg-12">
					
						<div class="chart">
							<!-- Sales Chart Canvas -->
							<table id="tbl_total_companies"
										class="table table-bordered table-hover display nowrap margin-top-10 table-responsive">
										<thead>
											<tr class="text-yellow">
												<th>Company Name</th>
												<th>Contact Number</th>
												<th>Email</th>
												<th>Create Date</th>
												<th>User Count</th>
											</tr>
										</thead>
										<tbody>  

										</tbody>
									</table>
						</div>
						<!-- /.chart-responsive -->
					</div>
				
				</div>
				<!-- /.row -->
			</div>
			<!-- ./box-body -->
			<div class="box-footer">
              <div class="row">
                <div class="col-6 col-sm-6">
                  <div class="description-block border-right border-left">
                    <!-- <span class="description-percentage text-green"><i class="fa fa-caret-up"></i> 17%</span> -->
                    <h5 class="description-header" id="all_company_count">3,249</h5>
                    <span class="description-text">TOTAL COMPANIES</span>
                  </div>
                 <!--  /.description-block -->
                </div>
                <!-- /.col -->
                <div class="col-6 col-sm-6">
                  <div class="description-block border-right">
                   <!--  <span class="description-percentage text-yellow"><i class="fa fa-caret-left"></i> 70%</span> -->
                    <h5 class="description-header" id="all_company_user_count">2,376</h5>
                    <span class="description-text">TOTAL COMPANY USERS</span>
                  </div>
                 <!--  /.description-block -->
                </div>
              </div>
             <!--  /.row -->
            </div>
			<!-- /.box-footer -->
		</div> 
		<!-- /.box -->
	</div>
	<!-- /.col -->
</div>


<div class="initContent row animated fadeInLeft " id="div_all_suppliers">
	<div class="col">
		 <div class="box">
			<div class="box-header with-border">
				<h3 class="box-title">All Suppliers</h3>

				<div class="box-tools pull-right">
					<button type="button" class="btn btn-box-tool"
						data-widget="collapse">
						<i class="fa fa-minus"></i>
					</button>
					<button type="button" class="btn btn-box-tool" data-widget="remove">
						<i class="fa fa-times"></i>
					</button>
				</div>
			</div>
			<!-- /.box-header -->
			<div class="box-body">
				<div class="row">
					<div class="col-md-12 col-lg-12">
					
						<div class="chart">
							<!-- Sales Chart Canvas -->
							<table id="tbl_total_suppliers"
										class="table table-bordered table-hover display nowrap margin-top-10 table-responsive">
										<thead>
											<tr class="text-yellow">
												<th>Company Name</th>
												<th>Contact Number</th>
												<th>Email</th>
												<th>Create Date</th>
												<th>User Count</th>
											</tr>
										</thead>
										<tbody>  

										</tbody>
									</table>
						</div>
						<!-- /.chart-responsive -->
					</div>
				
				</div>
				<!-- /.row -->
			</div>
			<!-- ./box-body -->
			<div class="box-footer">
              <div class="row">
                <div class="col-6 col-sm-6">
                  <div class="description-block border-right border-left">
                    <!-- <span class="description-percentage text-green"><i class="fa fa-caret-up"></i> 17%</span> -->
                    <h5 class="description-header" id="all_supplier_count">3,249</h5>
                    <span class="description-text">TOTAL SUPPLIERS</span>
                  </div>
                 <!--  /.description-block -->
                </div>
                <!-- /.col -->
                <div class="col-6 col-sm-6">
                  <div class="description-block border-right">
                   <!--  <span class="description-percentage text-yellow"><i class="fa fa-caret-left"></i> 70%</span> -->
                    <h5 class="description-header" id="all_supplier_user_count">2,376</h5>
                    <span class="description-text">TOTAL SUPPLIER USERS</span>
                  </div>
                 <!--  /.description-block -->
                </div>
              </div>
             <!--  /.row -->
            </div>
			<!-- /.box-footer -->
		</div> 
		<!-- /.box -->
	</div>
	<!-- /.col -->
</div>


<!-- /.row -->
<div class="row animated fadeInRightBig">
	<!-- Left col -->
<!-- 	<section class="col-xl-6 connectedSortable">
		Custom tabs (Charts with tabs)
		<div class="nav-tabs-custom">
			Tabs within a box
			<ul class="nav nav-tabs float-right clearfix">
				<li><a class="active" href="#revenue-chart" data-toggle="tab">Growth</a></li>
				<li><a href="#sales-chart" data-toggle="tab">Count</a></li>
				<li class="float-left header"><i class="fa fa-bar-chart-o"></i>
					Sales Overview</li>
			</ul>


			<div class="tab-content no-padding">
				Morris chart - Sales
				<div class="chart tab-pane active" id="revenue-chart"
					style="position: relative; height: 366px;"></div>
				<div class="chart tab-pane" id="sales-chart"
					style="position: relative; height: 366px;"></div>
			</div>
		</div>
		/.nav-tabs-custom

		/.box (chat box)


		/.box
	</section> -->
	
	
	
	<!-- /.Left col -->

	<!-- right col (We are only adding the ID to make the widgets sortable)-->
	<!-- <section class="col-xl-6 connectedSortable">

	
		<div class="box">
			<div class="box-header">
				<i class="fa fa-th"></i>

				<h3 class="box-title">Sales Graph</h3>

				<div class="box-tools pull-right">
					<button type="button" class="btn btn-white btn-sm"
						data-widget="collapse">
						<i class="fa fa-minus"></i>
					</button>
					<button type="button" class="btn btn-white btn-sm"
						data-widget="remove">
						<i class="fa fa-times"></i>
					</button>
				</div>
			</div>
			<div class="box-body border-radius-none">
				<div class="chart" id="line-chart" style="height: 250px;"></div>
			</div>
			/.box-body
			<div class="box-footer">
				<div class="row">
					<div class="col text-center" style="border-right: 1px solid #666">
						<input type="text" class="knob" data-readonly="true" value="30"
							data-width="60" data-height="60" data-fgColor="#26C6DA">

						<div class="knob-label">Mail Orders</div>
					</div>
					./col
					<div class="col text-center" style="border-right: 1px solid #666">
						<input type="text" class="knob" data-readonly="true" value="60"
							data-width="60" data-height="60" data-fgColor="#26C6DA">

						<div class="knob-label">Online Orders</div>
					</div>
					./col
					<div class="col text-center">
						<input type="text" class="knob" data-readonly="true" value="40"
							data-width="60" data-height="60" data-fgColor="#26C6DA">

						<div class="knob-label">In-Store Orders</div>
					</div>
					
				</div>
				
			</div>
			
		</div>
		

	</section>
	 -->

</div>



<script type="text/javascript">
	$('#titleID').text("Dashboard");
	$('#bcumb').text("Dashboard");
</script>
<script src="resources/js/customjs/index/indexContentJS.js"></script>
<!-- <script src="resources/js/pages/dashboard.js"></script>
<script src="resources/js/pages/dashboard2.js"></script> -->


