<header class="main-header">
    <!-- Logo -->
    <a href="#" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini">BidPro</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b style="font-size: 15px;">BidPro eprocurement</b></span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
        
              <span class="d-none d-sm-inline-block" id="todayis"></span>
      </a>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="resources/images/user2-160x160.png" class="user-image rounded-circle" alt="User Image">             
              <span class="d-none d-sm-inline-block" id="top_username"> </span>
            </a>
            <ul class="dropdown-menu scale-up">
              <!-- User image -->
              <li class="user-header">
               <!--  <img src="resources/images/user2-280x90.jpg" class="img-fluid" alt="User Image"> -->
                <p id="popup_username">
                 
                  <small>Super User</small>
                </p>
              </li>
              <!-- Menu Body -->
          <!--     <li class="user-body">
                <div class="row">
                  <div class="col text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div class="col text-center">
                    <a href="#">Friends</a>
                  </div>
                  <div class="col text-center">
                    <a href="#">Sales</a>
                  </div>
                </div>
                /.row
              </li> -->
              <!-- Menu Footer-->
              <div class="user-footer">
                <div class="pull-left">
                  <a href="#"   data-toggle="modal" data-target="#myModal" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="#" id="LogoutButton" onclick="logout()" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </div>
            </ul>
          </li>
          <!-- Messages: style can be found in dropdown.less-->
          <!-- <li class="dropdown messages-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-envelope"></i>
              <span class="label label-success">5</span>
            </a>
            <ul class="dropdown-menu scale-up">
              <li class="header">You have 5 messages</li>
              <li>
                inner menu: contains the actual data
                <ul class="menu inner-content-div">
                  <li>start message
                    <a href="#">
                      <div class="pull-left">
                        <img src="resources/images/user2-160x160.jpg" class="rounded-circle" alt="User Image">
                      </div>
                      <div class="mail-contnet">
                         <h4>
                          Lorem Ipsum
                          <small><i class="fa fa-clock-o"></i> 15 mins</small>
                         </h4>
                         <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                      </div>
                    </a>
                  </li>
                  end message
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img src="resources/images/user3-128x128.jpg" class="rounded-circle" alt="User Image">
                      </div>
                      <div class="mail-contnet">
                         <h4>
                          Nullam tempor
                          <small><i class="fa fa-clock-o"></i> 4 hours</small>
                         </h4>
                         <span>Curabitur facilisis erat quis metus congue viverra.</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img src="resources/images/user4-128x128.jpg" class="rounded-circle" alt="User Image">
                      </div>
                      <div class="mail-contnet">
                         <h4>
                          Proin venenatis
                          <small><i class="fa fa-clock-o"></i> Today</small>
                         </h4>
                         <span>Vestibulum nec ligula nec quam sodales rutrum sed luctus.</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img src="resources/images/user3-128x128.jpg" class="rounded-circle" alt="User Image">
                      </div>
                      <div class="mail-contnet">
                         <h4>
                          Praesent suscipit
                        <small><i class="fa fa-clock-o"></i> Yesterday</small>
                         </h4>
                         <span>Curabitur quis risus aliquet, luctus arcu nec, venenatis neque.</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img src="resources/images/user4-128x128.jpg" class="rounded-circle" alt="User Image">
                      </div>
                      <div class="mail-contnet">
                         <h4>
                          Donec tempor
                          <small><i class="fa fa-clock-o"></i> 2 days</small>
                         </h4>
                         <span>Praesent vitae tellus eget nibh lacinia pretium.</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="footer"><a href="#">See all e-Mails</a></li>
            </ul>
          </li> -->
          <!-- Notifications: style can be found in dropdown.less -->
          <li class="dropdown notifications-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-bell"></i>
              <span class="label label-warning" id="notification_Count" ></span>
            </a>
            <ul class="dropdown-menu scale-up">
              <li class="header" id="notification_desc">You don't have notifications</li>
              <li id="notification_view" >
               <!--  inner menu: contains the actual data -->
                <ul class="menu inner-content-div" id="notifications">
                 
                </ul>
              </li> 
            <!--   <li class="footer"><a href="#">View all</a></li> -->
            </ul>
          </li>
          <!-- Tasks: style can be found in dropdown.less -->
          <!-- <li class="dropdown tasks-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-flag"></i>
              <span class="label label-danger">6</span>
            </a>
            <ul class="dropdown-menu scale-up">
              <li class="header">You have 6 tasks</li>
              <li>
                inner menu: contains the actual data
                <ul class="menu inner-content-div">
                  <li>Task item
                    <a href="#">
                      <h3>
                        Lorem ipsum dolor sit amet
                        <small class="pull-right">30%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-aqua" style="width: 30%" role="progressbar"
                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">30% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  end task item
                  <li>Task item
                    <a href="#">
                      <h3>
                        Vestibulum nec ligula
                        <small class="pull-right">20%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-danger" style="width: 20%" role="progressbar"
                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">20% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  end task item
                  <li>Task item
                    <a href="#">
                      <h3>
                        Donec id leo ut ipsum
                        <small class="pull-right">70%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-light-blue" style="width: 70%" role="progressbar"
                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">70% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  end task item
                  <li>Task item
                    <a href="#">
                      <h3>
                        Praesent vitae tellus
                        <small class="pull-right">40%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-yellow" style="width: 40%" role="progressbar"
                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">40% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  end task item
                  <li>Task item
                    <a href="#">
                      <h3>
                        Nam varius sapien
                        <small class="pull-right">80%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-red" style="width: 80%" role="progressbar"
                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">80% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  end task item
                  <li>Task item
                    <a href="#">
                      <h3>
                        Nunc fringilla
                        <small class="pull-right">90%</small>
                      </h3>
                      <div class="progress xs">
                        <div class="progress-bar progress-bar-primary" style="width: 90%" role="progressbar"
                             aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                          <span class="sr-only">90% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  end task item
                </ul>
              </li>
              <li class="footer">
                <a href="#">View all tasks</a>
              </li>
            </ul>
          </li>  -->         
          <!-- Control Sidebar Toggle Button -->
           <li class="dropdown tasks-menu">
            <a href="#"  onclick="logout()" class="dropdown-toggle" data-toggle="tooltip" title="" data-original-title="Logout"><i class="fa fa-power-off"></i></a>
          </li>  
          <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-cog fa-spin"></i></a>
          </li>
           
          
        </ul>
      </div>
    </nav>
  </header>
  <!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">User Profile Details</h4>
      </div>
      <div class="modal-body">
				<div class="form-group row">
					<label for="Board Approval" class="col-sm-4 control-label">Company
						Name</label>
					<div class="col-sm-8 input-group date">
						<div class="input-group-addon">
							<i class="fa fa-user"></i>
						</div>
						<input type="text" class="form-control pull-right"
							id="company_name" value="" disabled="disabled">
					</div>
				</div>
				<div class="form-group row">
					<label for="Board Approval" class="col-sm-4 control-label">User
						ID</label>
					<div class="col-sm-8 input-group date">
						<div class="input-group-addon">
							<i class="fa fa-user"></i>
						</div>
						<input type="text" class="form-control pull-right"
							id="user_id" value="" disabled="disabled">
					</div>
				</div>
				<div class="form-group row">
					<label for="Board Approval" class="col-sm-4 control-label">User
						Name</label>
					<div class="col-sm-8 input-group date">
						<div class="input-group-addon">
							<i class="fa fa-user"></i>
						</div>
						<input type="text" class="form-control pull-right"
							id="user_name" value="" disabled="disabled">
					</div>
				</div>
					<div class="form-group row">
					<label for="Board Approval" class="col-sm-4 control-label">User
						Type</label>
					<div class="col-sm-8 input-group date">
						<div class="input-group-addon">
							<i class="fa fa-user"></i>
						</div>
						<input type="text" class="form-control pull-right"
							id="user_type" value="" disabled="disabled">
					</div>
				</div>
				<div class="form-group row">
					<label for="Board Approval" class="col-sm-4 control-label">User
						Creation Date</label>
					<div class="col-sm-8 input-group date">
						<div class="input-group-addon">
							<i class="fa fa-calendar"></i>
						</div>
						<input type="text" class="form-control pull-right"
							id="user_creation_date" value="" disabled="disabled">
					</div>
				</div>
				<div class="form-group row">
					<label for="Board Approval" class="col-sm-4 control-label">User
						Expire Date</label>
					<div class="col-sm-8 input-group date">
						<div class="input-group-addon">
							<i class="fa fa-calendar"></i>
						</div>
						<input type="text" class="form-control pull-right"
							id="user_expire_date" value="" disabled="disabled">
					</div>
				</div>
				<div class="form-group row">
					<label for="Board Approval" class="col-sm-4 control-label">Password
						Expire Date</label>
					<div class="col-sm-8 input-group date">
						<div class="input-group-addon">
							<i class="fa fa-calendar"></i>
						</div>
						<input type="text" class="form-control pull-right"
							id="user_password_expire_date" value="" disabled="disabled">
					</div>
				</div>
				<div class="form-group row">
					<label for="Board Approval" class="col-sm-4 control-label"
						id="more_details">
						<button type="button" class="btn btn-default" data-dismiss="modal"
						 id="loadProfileBtn">More Details</button>
					</label>
					<div class="col-sm-8 input-group date"></div>
				</div>
			</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>







  <script>
			 function logout(){
let user = JSON.parse(sessionStorage.getItem('User'))
				 Swal.fire({
					  title: 'Are you sure?',
					  text: "Do You want to Logout?",
					  type: 'info',
					  showCancelButton: true,
					  confirmButtonColor: '#3085d6',
					  cancelButtonColor: '#d33',
					  confirmButtonText: 'Yes, Logout!'
					}).then((result) => {
					  if (result.value) {
						  
						  var location = 'Logout';
							var action = 'Logout success';		
							var url  = '/useractivity/addlogentry/'+user.userid+'/roleid/'+user.userRoll.userRoleID+'/location/'+location+'/action/'+action
							var globalToken = sessionStorage.getItem("GlobalToken");
							
							$.ajax({

								url : globalUrl + url,
								contentType : "application/json",		
								async : false,
								headers : {"Authorization" : 'Basic '+globalToken},
								type : 'GET',
								dataType : "json",
								complete: function(xhr, textStatus) {
									if (xhr.readyState == 4) {
										 console.log("Completed with Token "+xhr.status+" "+textStatus);
//									        console.log(xhr);
//									        console.log(xhr.responseText);
//									        console.log(xhr.responseJSON);
										 /* if(callBackName!=null){
											 callBackName(xhr);
										 } */
										 
									}         
							    },
							});
							
						  
						  	sessionStorage.removeItem('GlobalToken');
							sessionStorage.removeItem('loggedUserID');
							sessionStorage.removeItem('myMainKey');
							sessionStorage.removeItem('userMenu');
							sessionStorage.removeItem('User');
							sessionStorage.removeItem('mmiddlennames');
							window.location.replace("login");
						  
						
					    
					  }
					});
			}
			
                            
     </script> 
     
   