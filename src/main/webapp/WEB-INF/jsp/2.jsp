<div>

          <p>2JSP</p>
          <button id="testIndex">test</button>
          
          <script type="text/javascript">
          jQuery(document).ready(function() {
        		console.log("Index Document is ready");
        		
        		
        	});
          
          $('#testIndex').on('click', function(){
        	  console.log("ClickMe");
        	  
        	  $('#titleID').text("SupplierPortal One");
        	  $('#positionName').text("One");
        	  $('#loadDiv').load('../supplierportalwebv2/1');
          })
          
          </script>
</div>