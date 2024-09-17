<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="image">
          <!-- <img src="resources/images/custom/suppliervmslogo.png" class="rounded-circle" alt="User Image"> -->
          <img id="company_logo_img" onerror="if (this.src != 'resources/images/custom/default_login.png') this.src = 'resources/images/custom/default_login.png';" class="rounded-circle" alt="company_logo">
         <!--  <img id="company_logo_img" class="rounded-circle" alt="User Image"> -->
        </div>
        <div class="info">
          <p id="menu_company_name"></p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
     
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <li id="Procurementtext" class="header">Procurement</li>
        <li class="menu-open treeview" id="testIndex" onclick="navigate('indexContent')">
          <a href="#">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>            
          </a>       
        </li>
        
        <li class="menu-open treeview" id="companyprofile" onclick="navigate('companyprofile')">
          <a href="#">
            <i class="fa fa-pie-chart"></i> <span>Company Profile</span>            
          </a>       
        </li>
        
        
        
       <!--  <li class="treeview" id="regIndex" onclick="navigate('registerationprocess')">
          <a href="#">
            <i class="fa fa-arrow-circle-right"></i> <span>Registration</span>            
          </a>       
        </li> -->
        <li class="treeview" id="userMainItem">
          <a href="#">
            <i class="fa fa-files-o"></i>
            <span>User</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="userSubItems">                    
          </ul>
        </li>
        <li class="treeview" id="companyMainItem">
          <a href="#">
            <i class="fa fa-th"></i>
            <span>Company</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="companySubItems">
            
          </ul>
        </li>
        <li class="treeview" id="supplierCategoryMainItem">
          <a href="#">
            <i class="fa fa-pie-chart"></i>
            <span>Supplier Category</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="supplierCategorySubItems">
            
          </ul>
        </li>        
        <li class="treeview" id="supplierMainItem">
          <a href="#">
            <i class="fa fa-pie-chart"></i>
            <span>Supplier</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="supplierSubItems">
            
          </ul>
        </li>
        <li class="treeview" id="contractMainItem">
          <a href="#">
            <i class="fa fa-pie-chart"></i>
            <span>Contract</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="contractSubItems">
            
          </ul>
        </li>
        <!-- Kanishka --- RFP -- 2021-01-06 -->
        <li class="treeview" id="rfpMainItem">
          <a href="#">
            <i class="fa fa-folder"></i> <span>RFP Details</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="rfpSubItems">
            
          </ul>
        </li>
         <!-- /.Kusal Add 2021/01/04 -->
         <li class="treeview" id="tenderMainItem">
          <a href="#">
            <i class="fa fa-folder"></i> <span>Tender Details</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="tenderSubItems">
            
          </ul>
        </li>
        
        <li class="treeview" id="QrMainItem">
          <a href="#">
            <i class="fa fa-folder"></i> <span>QR Code</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="QrSubItems">
            
          </ul>
        </li>
        
        
        <!-- Kanishka --- Evaluation -- 2021-01-06 -->
         <li id="TechnicalEvaluation" class="header" style="color: #1e88e5;">Technical Evaluation</li>
         <li class="treeview" id="evalutionMainItem">
          <a href="#">
            <i class="fa fa-folder"></i> <span>Evaluation Details</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="evalutionSubItems">
            
          </ul>
        </li>
        
        <li class="treeview" id="mitMainItem">
          <a href="#">
            <i class="fa fa-folder"></i> <span>MIT Details</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="mitSubItems">
            
          </ul>
        </li>
        
        <!-- <li class="header" style="color: #1e88e5;">Procurement Committee</li> -->
        <li class="treeview" id="procurementComMainItem">
          <a href="#">
            <i class="fa fa-folder"></i> <span>Procurement <br>Committee</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="procurementComSubItems">
            
          </ul>
        </li>
        
        <li class="treeview" id="rfpEveMainItem">
          <a href="#">
            <i class="fa fa-folder"></i> <span>RFP Evaluation</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="rfpEveSubItems">
            
          </ul>
        </li>
        
        
        
         <li id="PurchaseOrder" class="header" style="color: #1e88e5;">Purchase Order (PO)</li>
         
          <li class="treeview" id="boardPaperUploadMainItem">
          <a href="#">
            <i class="fa fa-laptop"></i>
            <span>Board Paper Upload</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="boardPaperUploadSubItems">
            
          </ul>
        </li> 
        
         <li class="treeview" id="purchaseOrderMainItem">
          <a href="#">
            <i class="fa fa-laptop"></i>
            <span>Purchase Order</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="poSubItems">
            
          </ul>
        </li>
        
          
      <!--   <li class="treeview" id="grnMainItem">
          <a href="#">
            <i class="fa fa-edit"></i> <span>GRN</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="grnSubItems">
            
          </ul>
        </li> -->
        <li id="AccountingIl" class="header">Accounting</li>
        <li class="treeview" id="invoiceMainItem">
          <a href="#">
            <i class="fa fa-table"></i> <span>Invoice</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="invoiceItems">
            
          </ul>
        </li>        
        <!-- <li class="treeview" id="goodReturnMainItem">
          <a href="#">
            <i class="fa fa-map"></i> <span>GRN</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="returnSubItems">
            
          </ul>
        </li> -->
       <li class="treeview" id="paymentsMainItem">
          <a href="#">
            <i class="fa fa-folder"></i> <span>Payments</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="payementsSubItems">
            
          </ul>
        </li>      
        <li class="treeview" id="reportsMainItem">
          <a href="#">
            <i class="fa fa-folder"></i> <span>Reports</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="reportsSubItems">
            
          </ul>
        </li>
        <!--  <li class="treeview" id="quotationsMainItem">
          <a href="#">
            <i class="fa fa-folder"></i> <span>Quotations</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="quotationsSubItems">
            
          </ul>
        </li>  -->
         <li class="treeview" id="assetMainItem">
          <a href="#">
            <i class="fa fa-folder"></i> <span>Asset Registration</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" id="assetSubItems">
            
          </ul>
        </li> 
        
         
        
        
        
       
         
        
    </section>
    <!-- /.sidebar -->
   <!--  <div class="sidebar-footer">
		item
		<a href="#" class="link" data-toggle="control-sidebar" title="" data-original-title="Settings"><i data-toggle="tooltip" data-original-title="Settings" class="fa fa-cog fa-spin"></i></a>
		item
		<a href="#" class="link" data-toggle="tooltip" title="" data-original-title="Notification"><i class="fa fa-bell"></i></a>
		item
		<a href="#"  onclick="logout()" class="link" data-toggle="tooltip" title="" data-original-title="Logout"><i class="fa fa-power-off"></i></a>
	</div> -->
  </aside>