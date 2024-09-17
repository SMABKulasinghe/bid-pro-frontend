<div>

          <p>1jsp</p>
          <button id="testb">test</button>
          
          <script type="text/javascript">
          jQuery(document).ready(function() {
        		console.log("1 Document is ready");
        		
        		
        	});
          
          $('#testb').on('click', function(){
        	  console.log("2 Document is ready");
        	  
        	  $('#titleID').text("SupplierPortal Two");
        	  $('#positionName').text("Two");
        	  $('#loadDiv').load('../supplierportalwebv2/2');
          })
          
          </script>
</div>