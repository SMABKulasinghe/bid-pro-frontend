<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">User Role Creation</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="row">
			<div class="col-md-8">
				<!-- <form class="form-horizontal form-element">
					<div class="box-body"> -->
				<fieldset>
					<h5 class="text-green">User Role Creation</h5>
					<div class="form-group row">


						<label for="rolename" class="col-sm-3">Role Name <span
							style="color: red">*</span></label>
						<div class="col-sm-9">
							<input id="user_role_name" name="user_role_name" type="text"
								class="form-control" required="required" autocomplete="off">
						</div>


					</div>


					<div class="form-group row">
						<div class="col-sm-3">
							<label for="inputPassword3" class="control-label">Description
							 <span style="color: red">*</span>
							</label>
						</div>
						<div class="col-sm-9">
							<input id="user_role_description" name="user_role_description"
								type="text" class="form-control" required="required"
								autocomplete="off">
						</div>
					</div>


					<!-- <div class="form-group row">
						<div class="col-sm-3">
							<label for="inputPassword3" class="control-label">Role
								Type<span style="color: red">*</span>
							</label>
						</div>
						<div class="col-sm-9">
							<select class="form-control m-b" name="user_role_owner"
								id="user_role_owner" required="required">
								<option value='empty'>-- Select Role Type--</option>
								<option value='c'>Company</option>
								<option value='s'>Supplier</option>
								<option value='su'>Super User</option>
							</select><span class="help-block m-b-none">Corporate Role Type</span>
						</div>
					</div>
 -->




					<!-- Test load Start Upgraded-->
					<!-- <div class="row" id="userSupplierPurchaseRow">
						<div class="col-md-12 col-lg-4" id ="userListItemUpgradedDiv">
							<div class="box box-solid">
								<div class="box-header with-border">
									<div class="checkbox">
										<input type="checkbox" id="userCheckAll" value="">
										<label for="InvoiceCheckAll" class="text-green">User Management&nbsp; <i class="fa fa-vcard (alias)"
															style="font-size: 20px; color: #e5e5e5"></i>
										</label> 
									</div>
								</div>
								/.box-header
								<div class="box-body">
									<ul id = "userListItemUpgraded">
										<li><div class="checkbox">
												<input type="checkbox" id="InvoiceCheckAllcv" value="">
												<label for="InvoiceCheckAllcv"> Invoice &nbsp; </label>
											</div>
										</li>
										<li><div class="checkbox">
												<input type="checkbox" id="InvoiceCheckAllcv1" value="">
												<label for="InvoiceCheckAllcv1"> Invoice &nbsp; </label>
											</div>
										</li>
										<li><div class="checkbox">
												<input type="checkbox" id="InvoiceCheckAllcv2" value="">
												<label for="InvoiceCheckAllcv2"> Invoice &nbsp; </label>
											</div>
										</li>
										<li><div class="checkbox">
												<input type="checkbox" id="InvoiceCheckAllcv3" value="">
												<label for="InvoiceCheckAllcv3"> Invoice &nbsp; </label>
											</div>
										</li>
										<li><div class="checkbox">
												<input type="checkbox" id="InvoiceCheckAllcv4" value="">
												<label for="InvoiceCheckAllcv4"> Invoice &nbsp; </label>
											</div>
										</li>
										<li><div class="checkbox">
												<input type="checkbox" id="InvoiceCheckAllcv5" value="">
												<label for="InvoiceCheckAllcv5"> Invoice &nbsp; </label>
											</div>
										</li>
									</ul>
								</div>
								/.box-body
							</div>
							/.box
						</div>
						./col
						<div class="col-md-12 col-lg-4">
							<div class="box box-solid">
								<div class="box-header with-border">
									<div class="checkbox">
										<input type="checkbox" id="supplierCheckAll" value="" class="chk-col-yellow">
										<label for="InvoiceCheckAll">Supplier &nbsp; <i class="fa fa-vcard (alias)"
															style="font-size: 20px; color: #e5e5e5"></i>
										</label> 
									</div>
								</div>
								/.box-header
								<div class="box-body">
									<ul id = "supplierListUpgraded">
									
									</ul>
								</div>
								/.box-body
							</div>
							/.box
						</div>
						./col
						<div class="col-md-12 col-lg-4">
							<div class="box box-solid">
								<div class="box-header with-border">
									<div class="checkbox">
										<input type="checkbox" id="POCheckAll" value="" class="chk-col-purple">
										<label for="InvoiceCheckAll">Purchase Order &nbsp; <i class="fa fa-vcard (alias)"
															style="font-size: 20px; color: #e5e5e5"></i>
										</label> 
									</div>
								</div>
								/.box-header
								<div class="box-body">
									<ul id = "POListUpgraded">
									
									</ul>
								</div>
								/.box-body
							</div>
							/.box
						</div>
						./col
					</div>
					/.row
					<div class="row" id="GRNInvoiceQuote">
						<div class="col-md-12 col-lg-4">
							<div class="box box-solid">
								<div class="box-header with-border">
									<div class="checkbox">
										<input type="checkbox" id="InvoiceCheckAll" value="">
										<label for="InvoiceCheckAll">Good Receiving (GRN) &nbsp; <i class="fa fa-vcard (alias)"
															style="font-size: 20px; color: #e5e5e5"></i>
										</label> 
									</div>
								</div>
								/.box-header
								<div class="box-body">
									<ul id = "GRNListUpgraded">

									</ul>
								</div>
								/.box-body
							</div>
							/.box
						</div>
						./col
						<div class="col-md-12 col-lg-4">
							<div class="box box-solid">
								<div class="box-header with-border">
									<div class="checkbox">
										<input type="checkbox" id="InvoiceCheckAll" value="">
										<label for="InvoiceCheckAll">Invoice &nbsp; <i class="fa fa-vcard (alias)"
															style="font-size: 20px; color: #e5e5e5"></i>
										</label> 
									</div>
								</div>
								/.box-header
								<div class="box-body">
									<ul id = "supplierListUpgraded">
									
									</ul>
								</div>
								/.box-body
							</div>
							/.box
						</div>
						./col
						<div class="col-md-12 col-lg-4">
							<div class="box box-solid">
								<div class="box-header with-border">
									<div class="checkbox">
										<input type="checkbox" id="InvoiceCheckAll" value="">
										<label for="InvoiceCheckAll">Quotation &nbsp; <i class="fa fa-vcard (alias)"
															style="font-size: 20px; color: #e5e5e5"></i>
										</label> 
									</div>
								</div>
								/.box-header
								<div class="box-body">
									<ul id = "POListUpgraded">
									
									</ul>
								</div>
								/.box-body
							</div>
							/.box
						</div>
						./col
					</div> -->
					<!-- /.row -->

					<!-- Test load End -->



					<!-- Option load -->

					<div class="row" id="selectionDiv">
						<div class="col-lg-12">
							<div class="form-group">


								<div id="userDiv">


									<div class="col-md-6">
										<div class="box-body">

											<div style="" class="form-group row">
												<div class="col-sm-14">
													<div class="checkbox">
														<input type="checkbox" id="user_checkAll" 
															value=""> <label for="user_checkAll">
															Users &nbsp; <i class="fa fa-vcard (alias)"
															style="font-size: 20px; color: #e5e5e5"></i>
														</label>
													</div>
													<ul>
														<li id="userListItem"></li>
													</ul>
													<div class="hr-line-dashed"></div>
												</div>
											</div>

										</div>

									</div>
									
									</div>
									
									
									
									<div id="contractAndCompanyListDiv">
									
									<div class="col-md-6">
										<div class="box-body">

											<div style="" class="form-group row">
												<div class="col-sm-14">
													<div class="checkbox">
														<input type="checkbox" id="contractAndCompanyList_checkAll" 
															value=""> <label for="contractAndCompanyList_checkAll">
															Company & Contract &nbsp; <i class="fa fa-building-o"
															style="font-size: 20px; color: #e5e5e5"></i> &nbsp;
															 <i class="fa fa-briefcase"
															style="font-size: 20px; color: #e5e5e5"></i>
														</label>
													</div>
													<ul>
														<li id="contractAndCompanyList"></li>
													</ul>
													<div class="hr-line-dashed"></div>
												</div>
											</div>

										</div>

									</div>



								</div>


								<div id="SupplierDiv">

									<div class="col-md-6">
										<div class="box-body">

											<div style="" class="form-group row">
												<div class="col-sm-14">
													<div class="checkbox">
														<input type="checkbox" id="suppierCheckAll"
															value=""> <label
															for="suppierCheckAll" > Supplier
															&nbsp; <i class="fa fa-user-circle-o"
															style="font-size: 20px; color: #e5e5e5"></i>
														</label>
													</div>
													<ul>
														<li id="supplierList"></li>
													</ul>
													<div class="hr-line-dashed"></div>
												</div>
											</div>

										</div>

									</div>




								</div>
								
								<div id="RfpDiv">

									<div class="col-md-6">
										<div class="box-body">

											<div style="" class="form-group row">
												<div class="col-sm-14">
													<div class="checkbox">
														<input type="checkbox" id="rfpAll"
															value=""> <label
															for="rfpAll" > RFP
															&nbsp; <i class="fa fa-user-circle-o"
															style="font-size: 20px; color: #e5e5e5"></i>
														</label>
													</div>
													<ul>
														<li id="rfpList"></li>
													</ul>
													<div class="hr-line-dashed"></div>
												</div>
											</div>

										</div>

									</div>




								</div>
								
								<div id="RfpEveDiv">

									<div class="col-md-6">
										<div class="box-body">

											<div style="" class="form-group row">
												<div class="col-sm-14">
													<div class="checkbox">
														<input type="checkbox" id="rfpEveAll"
															value=""> <label
															for="rfpEveAll" > RFP Evaluation
															&nbsp; <i class="fa fa-user-circle-o"
															style="font-size: 20px; color: #e5e5e5"></i>
														</label>
													</div>
													<ul>
														<li id="rfpEveList"></li>
													</ul>
													<div class="hr-line-dashed"></div>
												</div>
											</div>

										</div>

									</div>




								</div>
								
								<div id="TenderDiv">

									<div class="col-md-6">
										<div class="box-body">

											<div style="" class="form-group row">
												<div class="col-sm-14">
													<div class="checkbox">
														<input type="checkbox" id="tenderAll"
															value=""> <label
															for="tenderAll" > Tender
															&nbsp; <i class="fa fa-user-circle-o"
															style="font-size: 20px; color: #e5e5e5"></i>
														</label>
													</div>
													<ul>
														<li id="tenderList"></li>
													</ul>
													<div class="hr-line-dashed"></div>
												</div>
											</div>

										</div>

									</div>




								</div>
								
								<div id="EvaluationDiv">


									<div class="col-md-6">
										<div class="box-body">

											<div style="" class="form-group row">
												<div class="col-sm-14">
													<div class="checkbox">
														<input type="checkbox" id="EvaluationAll" 
															value=""> <label for="EvaluationAll">
															Evaluation &nbsp; <i class="fa fa-list-alt"
															style="font-size: 20px; color: #e5e5e5"></i>
														</label>
													</div>
													<ul>
														<li id="EvaluationList"></li>
													</ul>
													<div class="hr-line-dashed"></div>
												</div>
											</div>

										</div>

									</div>


								</div>
								
								<div id="MitDiv">


									<div class="col-md-6">
										<div class="box-body">

											<div style="" class="form-group row">
												<div class="col-sm-14">
													<div class="checkbox">
														<input type="checkbox" id="MitAll" 
															value=""> <label for="MitAll">
															MIT &nbsp; <i class="fa fa-list-alt"
															style="font-size: 20px; color: #e5e5e5"></i>
														</label>
													</div>
													<ul>
														<li id="MitList"></li>
													</ul>
													<div class="hr-line-dashed"></div>
												</div>
											</div>

										</div>

									</div>


								</div>
								
								<div id="ProcurementComDiv">


									<div class="col-md-6">
										<div class="box-body">

											<div style="" class="form-group row">
												<div class="col-sm-14">
													<div class="checkbox">
														<input type="checkbox" id="ProcurementComAll" 
															value=""> <label for="ProcurementComAll">
															Procurement &nbsp; <i class="fa fa-list-alt"
															style="font-size: 20px; color: #e5e5e5"></i>
														</label>
													</div>
													<ul>
														<li id="ProcurementComList"></li>
													</ul>
													<div class="hr-line-dashed"></div>
												</div>
											</div>

										</div>

									</div>


								</div>

								<div id="PODiv">


									<div class="col-md-6">
										<div class="box-body">

											<div style="" class="form-group row">
												<div class="col-sm-14">
													<div class="checkbox">
														<input type="checkbox" id="POCheckAll" 
															value=""> <label for="POCheckAll">
															Purchase Order (PO) &nbsp; <i class="fa fa-list-alt"
															style="font-size: 20px; color: #e5e5e5"></i>
														</label>
													</div>
													<ul>
														<li id="POList"></li>
													</ul>
													<div class="hr-line-dashed"></div>
												</div>
											</div>

										</div>

									</div>


								</div>

								<div id="InvoiceDiv">
									<!--  -->
									<div class="col-md-6">
										<div class="box-body">

											<div style="" class="form-group row">
												<div class="col-sm-14">
													<div class="checkbox">
														<input type="checkbox" id="InvoiceCheckAll"
															value=""> <label for="InvoiceCheckAll"
															> Invoice &nbsp; <i
															class="fa fa-check-square-o"
															style="font-size: 20px; color: #e5e5e5"></i>
														</label>
													</div>
													<ul>
														<li id="InvoiceList"></li>
													</ul>
													<div class="hr-line-dashed"></div>
												</div>
											</div>

										</div>

									</div>
								</div>
								
								<div id="GRNDiv">

									<div class="col-md-6">
										<div class="box-body">

											<div style="" class="form-group row">
												<div class="col-sm-14">
													<div class="checkbox">
														<input type="checkbox" id="GRNCheckAll" 
															value=""> <label for="GRNCheckAll">
															Payment &nbsp; <i class="fa fa-credit-card"
															style="font-size: 20px; color: #e5e5e5"></i>
														</label>
													</div>
													<ul>
														<li id="GRNList"></li>
													</ul>
													<div class="hr-line-dashed"></div>
												</div>
											</div>

										</div>

									</div>

								</div>


								<div id="ReturnDiv">


									<div class="col-md-6">
										<div class="box-body">

											<div style="" class="form-group row">
												<div class="col-sm-14">
													<div class="checkbox">
														<input type="checkbox" id="ReturnCheckAll" 
															value=""> <label for="ReturnCheckAll"
														> Quotation &nbsp; <i
															class="fa fa-indent"
															style="font-size: 20px; color: #e5e5e5"></i>
														</label>
													</div>
													<ul>
														<li id="ReturnList"></li>
													</ul>
													<div class="hr-line-dashed"></div>
												</div>
											</div>

										</div>

									</div>


								</div>


								<div id="ReportDiv">


									<div class="col-md-6">
										<div class="box-body">

											<div style="" class="form-group row">
												<div class="col-sm-14">
													<div class="checkbox">
														<input type="checkbox" id="ReportCheckAll" 
															value=""> <label for="ReportCheckAll"
															> Reports / Views &nbsp; <i
															class="fa fa-desktop"
															style="font-size: 20px; color: #e5e5e5"></i>
														</label>
													</div>
													<ul>
														<li id="ReportList"></li>
													</ul>
													<div class="hr-line-dashed"></div>
												</div>
											</div>

										</div>

									</div>

								</div>


								<div id="PaymentDiv">


									<div class="col-md-6">
										<div class="box-body">

											<div style="" class="form-group row">
												<div class="col-sm-14">
													<div class="checkbox">
														<input type="checkbox" id="PaymentCheckAll" 
															value="Yes"> <label for="PaymentCheckAll"
															> Assets &nbsp; <i
															class="fa fa-money"
															style="font-size: 20px; color: #e5e5e5"></i>
														</label>
													</div>
													<ul>
														<li id="PaymentList"></li>
													</ul>
													<div class="hr-line-dashed"></div>
												</div>
											</div>

										</div>

									</div>

								</div>
								
										<div id="DashBoardDiv">

									<div class="col-md-6">
										<div class="box-body">

											<div style="" class="form-group row">
												<div class="col-sm-14">
													<div class="checkbox">
														<input type="checkbox" id="DashBoardCheckAll" 
															value=""> <label for="DashBoardCheckAll"
															> DashBoard &nbsp; <i
															class="fa fa-dashboard (alias)"
															style="font-size: 20px; color: #e5e5e5"></i>
														</label>
													</div>
													<ul>
														<li id="DashBoardListItem"></li>
													</ul>
													<div class="hr-line-dashed"></div>
												</div>
											</div>

										</div>

									</div>

								</div>

							</div>

						</div>
					
						<div class="col-lg-3"></div>
					</div>


					<!-- Option load END-->
				</fieldset>



				<!-- </div> -->
				<!-- /.box-body -->
				<!-- 				</form> -->
				<div class="box-footer">
					<button type="submit" class="btn btn-default">Cancel</button>
					<button type="button" id="createRollButton"
						class="btn btn-info pull-right">SUBMIT</button>
				</div>
				<!-- /.box-footer -->
			</div>
			<div class="col-md-4">
				<div style="margin: 100px">
					<i class="fa fa-user-circle"
						style="font-size: 180px; color: #e5e5e5"></i>
				</div>

			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
	$('#titleID').text("User Role Creation");
	$('#bcumb').text("User");
</script>

<script src="resources/js/customjs/user/userroleredesign.js"></script>