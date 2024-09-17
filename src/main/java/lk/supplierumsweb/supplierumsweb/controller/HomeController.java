package lk.supplierumsweb.supplierumsweb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

	@GetMapping("/index")
	public String home() {
		return "index";
	}

	@GetMapping("/indexContent")
	public String homeContent() {
		return "indexContent";
	}

	@GetMapping("/login")
	public String login() {
		return "login";
	}

	@GetMapping("/usercreate")
	public String userCreate() {
		return "user/usercreate";
	}

	@GetMapping("/poupload")
	public String poUpload() {
		return "purchaseorder/poupload";
	}

	@GetMapping("/podetails")
	public String podetails() {
		return "purchaseorder/podetails";
	}

	@GetMapping("/invoiceupload")
	public String invoiceupload() {
		return "invoice/invoiceupload";
	}

	@GetMapping("/invoiceapprove")
	public String invoiceApprove() {
		return "invoice/invoiceapprove";
	}

	@GetMapping("/invoicedetails")
	public String invoicedetails() {
		return "invoice/invoicedetails";
	}

	@GetMapping("/paymentapprove")
	public String paymentapprove() {
		return "payment/paymentapprove";
	}

	@GetMapping("/suppliercreate")
	public String suppliercreate() {
		return "supplier/suppliercreate";
	}

	@GetMapping("/supplierauthorization")
	public String supplierauthorization() {
		return "supplier/supplierauthorization";
	}

	@GetMapping("/connectsuppliers")
	public String connectSuppliers() {
		return "supplier/supplierMapping";
	}

	@GetMapping("/contractcreate")
	public String contractcreate() {
		return "supplier/contractcreate";
	}

	@GetMapping("/contractauthorization")
	public String contractauthorization() {
		return "supplier/contractauthorization";
	}

	@GetMapping("/issueinvoice")
	public String issueinvoice() {
		return "invoice/issueinvoice";
	}

	@GetMapping("/issuepo")
	public String issuepo() {
		return "purchaseorder/issuepo";
	}

	@GetMapping("/poauthorization")
	public String poauthorization() {
		return "purchaseorder/poauthorization";
	}

	@GetMapping("/companycreation")
	public String companycreation() {
		return "company/companycreation";
	}

	@GetMapping("/authorizecompany")
	public String authorizecompany() {
		return "company/companyauthorization";
	}

	@GetMapping("/proceedpayment")
	public String proceedpayment() {
		return "payment/proceedpayment";
	}

	@GetMapping("/paymentauthorization")
	public String paymentauthorization() {
		return "payment/paymentauthorization";
	}

	@GetMapping("/paymentschedule")
	public String paymentschedule() {
		return "payment/paymentschedule";
	}

	@GetMapping("/outstandingpayments")
	public String outstandingpayments() {
		return "payment/outstandingpayments";
	}

	@GetMapping("/viewcontractdetails")
	public String viewcontractdetails() {
		return "reports/viewcontractdetails";
	}

	@GetMapping("/viewtransactiondetails")
	public String viewtransactiondetails() {
		return "reports/viewtransactiondetails";
	}

	@GetMapping("/viewpaymentdetails")
	public String viewpaymentdetails() {
		return "reports/viewpaymentdetails";
	}

	@GetMapping("/1")
	public String poUpload1() {
		return "1";
	}

	@GetMapping("/2")
	public String poUpload2() {
		return "2";
	}

//-------------Kusal
	@GetMapping("/userpasswordauth")
	public String userpasswordAuthorization() {
		return "user/userpasswordauth";
	}

	@GetMapping("/useredit")
	public String userEdit() {
		return "user/useredit";
	}

	@GetMapping("/userpasswordrest")
	public String userPasswordRest() {
		return "user/userpasswordrest";
	}

	@GetMapping("/userroleredesign")
	public String userRolereDesign() {
		return "user/userroleredesign";
	}

	@GetMapping("/userrollauthorization")
	public String userRollAuthorization() {
		return "user/userrollauthorization";
	}

	@GetMapping("/userauditlog")
	public String userAuditlog() {
		return "user/userauditlog";
	}

	@GetMapping("/userroleedit")
	public String userRoleEdit() {
		return "user/userroleedit";
	}

	@GetMapping("/usercreateredesign")
	public String userIDcreatereDesign() {
		return "user/usercreateredesign";
	}

	/*
	 * Piumal
	 */
	@GetMapping("/userprofile")
	public String userProfile() {
		return "user/userprofile";
	}

	/*
	 * Quotations
	 */

	@GetMapping("/requestquotations")
	public String getRequestQuotations() {
		return "errors/404";
	}

	@GetMapping("/uploadquotations")
	public String getUploadQuotations() {
		return "errors/404";
	}

	@GetMapping("/viewquotations")
	public String viewQuotations() {
		return "errors/404";
	}

	@GetMapping("/quotationsactions")
	public String getQuotationsActions() {
		return "errors/404";
	}

	@GetMapping("/assertregistration")
	public String getAssertRegistration() {
		/* return "assert/assertregistration"; */
		return "assert/viewasset";
	}

	@GetMapping("/viewasset")
	public String getViewAssets() {
		return "assert/viewasset";
	}

	@GetMapping("/viewsoftwareasset")
	public String getViewSoftwareAssets() {
		return "assert/softwareasset";
	}

	@GetMapping("/softwareassertregistration")
	public String getSoftwareAssetRegistration() {
		return "assert/assertregistration";
	}

	@GetMapping("/electronicasset")
	public String getViewElectronicsAssets() {
		return "assert/softwareasset";
	}

	@GetMapping("/furnitureasset")
	public String getViewfurnitureAssets() {
		return "assert/softwareasset";
	}

	@GetMapping("/motorvehicleasset")
	public String getViewMorterVehicalsAssets() {
		return "assert/softwareasset";
	}

	@GetMapping("/transferasset")
	public String getTransferAssets() {
		return "assert/transferasset";
	}

	@GetMapping("/tendercreate")
	public String tendercreate() {
		return "tender/tendercreate";
	}

	@GetMapping("/submitrfp")
	public String submitrfp() {
		return "tender/submitrfp";
	}
	@GetMapping("/registration")
	public String getRegistration() {
		return "guest/registration";
	}
	
	@GetMapping("/viewanddownloadtenders")
	public String viewanddownloadtenders() {
		return "tender/viewanddownloadtenders";
	}//
	
	@GetMapping("/viewandsubmittenders")
	public String viewandsubmittenders() {
		return "tender/viewandsubmittenders";
	}
	
	@GetMapping("/vieweligiblevendors")
	public String vieweligiblevendors() {
		return "tender/vieweligiblevendors";
	}
//	-- kanishka --  rfp pages --- 2021-01-06 --
	
	@GetMapping("/createrfp")
	public String createrfp() {
		return "rfp/createrfp";
	}
	
	@GetMapping("/updaterfp")
	public String updaterfp() {
		return "rfp/updaterfp";
	}
	@GetMapping("/responserfp")
	public String responserfp() {
		return "rfp/responserfp";
	}
	@GetMapping("/viewrfp")
	public String viewrfp() {
		return "rfp/viewrfp";
	}
	
	@GetMapping("/submitrfpbysupplier")
	public String submitrfpbysupplier() {
		return "rfp/submitrfpbysupplier";
	}
	
	@GetMapping("/financialdetails")
	public String financialdetails() {
		return "rfp/financialdetails";
	}
	
	@GetMapping("/uploadfile")
	public String uploadfile() {
		return "rfp/uploadfile";
	}
	
	@GetMapping("/latter")
	public String latter() {
		return "rfp/latter";
	}
	
	@GetMapping("/registerationprocess1")
	public String registerationprocess() {
		return "rfp/registerationprocess1";
	}
	
//	--- Kanishka -- 2021-01-06 ---
	
	@GetMapping("/evaluationmarksheet")
	public String evaluationmarksheet() {
		return "evaluation/evaluationmarksheet";
	}
	
	@GetMapping("/evaluationsheetcreate")
	public String evaluationsheetcreate() {
		return "evaluation/evaluationsheetcreate";
	}
	
	@GetMapping("/evaluationsheet")
	public String evaluationsheet() {
		return "evaluation/evaluationsheet";
	}
	
	@GetMapping("/evaluationsummary")
	public String evaluationsummary() {
		return "evaluation/evaluationsummary";
	}
	

	@GetMapping("/tenderauth")
	public String tenderAuth() {
		return "tender/tenderauthorize";
	}
	
	

	
	@GetMapping("/rfpresponses")
	public String rfpResponses() {
		return "rfp/rfpresponses";
	}
	
	@GetMapping("/techeveparams")
	public String techEveParams() {
		return "rfp/techeveparams";
	}

	
	@GetMapping("/informeligiblevendors")
	public String informEligibleVendors() {
		return "company/informeligiblevendors";
	}
	
	@GetMapping("/submittender")
	public String submitTender() {
		return "tender/submittender";
	}

	
	@GetMapping("/tenderview")
	public String tenderView() {
		return "tender/tenderview";
	}
	
	@GetMapping("/tenderopen")
	public String tenderOpen() {
		return "tender/tenderopen";
	}
	
	@GetMapping("/financialresponse")
	public String financialResponse() {
		return "tender/financialresponse";
	}
	
	@GetMapping("/financialcodecreation")
	public String financialCodeCreation() {
		return "tender/financialcodecreation";
	}
	

	@GetMapping("/evaluationcommitteecreation")
	public String evaluationCommitteeCreation() {
		return "evaluation/evaluationcommitteecreation";
	}
	

	@GetMapping("/tenderoffer")
	public String tenderoffer() {
		return "evaluation/tenderoffer";
	}

	@GetMapping("/tenderviewforsupplier")
	public String tenderviewforsupplier() {
		return "tender/tenderviewforsupplier";
	}
	

	@GetMapping("/purchaseorderdetails")
	public String purchaseorderdetails() {
		return "purchaseorder/purchaseorderdetails";
	}
	

	@GetMapping("/tenderparticipators")
	public String tenderparticipators() {
		return "tender/tenderparticipators";
	}
	

	@GetMapping("/viewrfpcompany")
	public String viewrfpcompany() {
		return "rfp/viewrfpcompany";
	}
	

	@GetMapping("/financialpertender")
	public String financialpertender() {
		return "tender/financialpertender";
	}	
	

	@GetMapping("/evaluationsheetedit")
	public String evaluationSheetEdit() {
		return "evaluation/evaluationsheetedit";
	}
	

	@GetMapping("/createcategory")
	public String createCategory() {
		return "suppliercategory/createcategory";
	}
	

	@GetMapping("/viewsuppliers")
	public String viewSuppliers() {
		return "supplier/viewsuppliers";
	}
		

	  @GetMapping("/procurementcreationcommittee") 
	  public String procurementCreationCommittee() { 
		  return "procurement/procurementcreationcommittee"; 
	  }
	  
	  @GetMapping("/procurementvote") 
	  public String procurementvote() { 
		  return "procurement/procurementvote"; 
	  }
	 

	  @GetMapping("/boardpaperupload") 
	  public String boardPaperUpload() { 
		 return "procurement/boardpaperupload"; 
	  }
		  

	@GetMapping("/companyprofile")
	public String companyProfile() {
		return "company/companyprofile";
	}
	

	@GetMapping("/blocksuppliers")
	public String blockSuppliers() {
		return "supplier/blocksuppliers";
	}
		

	@GetMapping("/viewblocksuppliers")
	public String viewblockSuppliers() {
		return "supplier/viewblocksuppliers";
	}
	

	@GetMapping("/entermitdetails")
	public String enterMitDetails() {
		return "mit/entermitdetails";
	}
	

	@GetMapping("/viewmitdetails")
	public String viewMitDetails() {
		return "procurement/viewmitdetails";
	}
	

	@GetMapping("/potermsandconditionscreation")
	public String potermsandconditionscreation() {
		return "purchaseorder/potermsandconditionscreation";
	}
	

	@GetMapping("/tenderextend")
	public String tenderExtend() {
		return "tender/tenderextend";
	}
	

	@GetMapping("/viewfinancialdetails") 
	public String viewFinancialDetails() { 
		return "procurement/viewfinancialdetails"; 
	}
		
	
	

	@GetMapping("/potermsandconditionspertender")
	public String potermsandconditionspertender() {
		return "purchaseorder/potermsandconditionspertender";
	}
	

	@GetMapping("/qrcodescanner")
	public String qrcodescanner() {
		return "qrcode/qrcodescanner";
	}
	

	@GetMapping("/revisedrfpsubmission")
	public String revisedrfpsubmission() {
		return "rfp/revisedrfpsubmission";
	}
	

	@GetMapping("/aditionaldetailsfortender")
	public String aditionaldetailsfortender() {
		return "tender/aditionaldetailsfortender";
	}
	

	@GetMapping("/additionalfileuploadfortender")
	public String additionalfileuploadfortender() {
		return "tender/additionalfileuploadfortender";
	}

	@GetMapping("/reissuepo")
	public String reissuepo() {
		return "purchaseorder/reissuepo";
	}
	
	@GetMapping("/viewclosetenders")
	public String viewclosetenders() {
		return "evaluation/viewclosetenders";
	}

	@GetMapping("/resubmitfinancialdetails")
	public String resubmitfinancialdetails() {
		return "tender/resubmitfinancialdetails";
	}

	@GetMapping("/terms_condtions")
	public String getTermsCondtions() {
		return "supplier/terms_condtions";
	}
	

	@GetMapping("/authorizeevaluation")
	public String authorizeevaluation() {
		return "evaluation/authorizeevaluation";
	}
	

	@GetMapping("/rfpevaluationcommitteecreation")
	public String rfpevaluationcommitteecreation() {
		return "rfpevaluation/rfpevaluationcommitteecreation";
	}
	

	@GetMapping("/rfpevaluationmarking")
	public String rfpevaluationmarking() {
		return "rfpevaluation/rfpevaluationmarking";
	}
	

	@GetMapping("/rfpevaluationresults")
	public String rfpevaluationresults() {
		return "rfpevaluation/rfpevaluationresults";
	}
	

	@GetMapping("/additionalfileuploadforinvitationsupplier")
	public String additionalfileuploadforinvitationsupplier() {
		return "tender/additionalfileuploadforinvitationsupplier";
	}
	

	@GetMapping("/uploadadditionalfilefortender")
	public String uploadadditionalfilefortender() {
		return "tender/uploadadditionalfilefortender";
	}
}
