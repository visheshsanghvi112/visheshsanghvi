<div class="content-wrapper">
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css">
          <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.2.0/css/datepicker.min.css" rel="stylesheet">

         <!-- <link href="https://netdna.bootstrapcdn.com/bootstrap/2.3.2/css/bootstrap.min.css" rel="stylesheet"> 
          <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.2.0/css/datepicker.min.css" rel="stylesheet">-->


          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
          <script src="https://netdna.bootstrapcdn.com/bootstrap/2.3.2/js/bootstrap.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.2.0/js/bootstrap-datepicker.min.js"></script>

    <section class="content-header">
    
     <div class="row">
      <div class="col-md-12"> 
        <!-- start: PAGE TITLE & BREADCRUMB -->
        <h3 class="col-md-4" >Purchase Challan</h3>  
       
      </div>
    </section>
 
 <style type="text/css">
      body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    color: #333;
}

.content-wrapper {
    padding: 20px;
}

.card {
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: box-shadow 0.3s ease-in-out;
}

.card-primary {
    border-top: 3px solid #6495ED;
}

.card:hover {
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
}

.card-body {
    padding: 20px;
}

.form-group label {
    font-weight: bold;
}

.form-control {
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 10px;
    transition: border-color 0.3s ease-in-out;
}

.form-control:focus {
    border-color: #6495ED;
    box-shadow: 0 0 5px rgba(100, 149, 237, 0.5);
}

.select2-container .select2-selection--single {
    height: 38px;
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    transition: border-color 0.3s ease-in-out;
}

.select2-container .select2-selection--single:focus {
    border-color: #6495ED;
    box-shadow: 0 0 5px rgba(100, 149, 237, 0.5);
}

.table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
}

.table th, .table td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
}

.table th {
    background-color: #6495ED;
    color: #fff;
}

.table tbody tr:hover {
    background-color: #f1f1f1;
}

.add-row {
    color: #28a745;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
}

.add-row:hover {
    color: #218838;
}

.scroll {
    overflow-x: auto;
}

input[type="date"], input[type="text"], select {
    width: 100%;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    transition: border-color 0.3s ease-in-out;
}

input[type="date"]:focus, input[type="text"]:focus, select:focus {
    border-color: #6495ED;
    box-shadow: 0 0 5px rgba(100, 149, 237, 0.5);
}

/* Animation for card appearance */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.card {
    animation: fadeIn 0.5s ease-in-out;
}

/* Animation for form elements */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.form-group {
    animation: slideIn 0.5s ease-in-out;
}

/* Animation for table rows */
@keyframes rowFadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.table tbody tr {
    animation: rowFadeIn 0.5s ease-in-out;
}

#main_message, #vendor_msg, #pur_date_msg, #puchase_entry_no_msg, #party_no_msg, #bill_date_msg, #tax_type_msg, #product_message {
    margin-top: 10px;
    color: #dc3545; /* Bootstrap danger color */
    font-weight: bold;
}

HR {
    border-top: 1px solid #ccc;
    margin-top: 20px;
    margin-bottom: 20px;
}
 
    </style>
        <!-- end: PAGE TITLE & BREADCRUMB --> 
 <section class="content">
      <div class="row">
        <div class="col-md-12">
            
              <?php echo $this->session->flashdata('message'); ?>
                     <div class="row">
                        <div class="col-md-12" >                          
                          <div class="card card-primary">

                            <form method="post" id="formcsv">
                              <div class="row">

                                <div id="purchase_message" class="alert alert-success" style="display: none;"></div>
                                 <div id="purchase_message_exist" class="alert alert-danger" style="display: none;"></div>
                                <!-- <div class="col-md-3">
                                    <div class="form-group">
                                       <input type="text" name="software_name"  class="form-control" id="software_name" placeholder="Software Name" required="">
                                        <select class="form-control select2" name="software_name" id="software_name" required="" hidden="">
                                           <option value ="Medica">Medica</option>
                                                                     
                                         </select>

                                    </div>
                              </div> -->
                               <div class="col-md-6">
                                  <div class="col-md-6">
                                   <div class="form-group">
                                      <input type="file" class="form-control" name="excelfile" id="excelfile" style="cursor: pointer;" required="" hidden="">
                                    </div>
                                  </div>
                                    <div class="col-md-4" style="padding-left: 0px;">
                                      <div class="form-group">
                                        <!-- <h1><a id="upload_csv" type="submit" style="cursor: pointer;"><i class="fa fa-upload" aria-hidden="true" style="font-size:27px;"></i></a></h1> -->
                                      </div>
                                    </div>
                               </div>              
                              
                            </div>
                            </form>    
                             
                             <form role="form" method="post" autocomplete="off" id="form" >
                              <?php if(isset($get_playergroupedit)) { ?>
                              <input type="hidden" value="<?php echo $get_playergroupedit['pur_id']; ?>" class="form-control ac_user" id="pur_id" name="pur_id">
                                      
                              <?php } ?> 
                              
                              <div class="card-body">
                                <div class="row"> 
                                   <div class="col-md-12"> 
                                        <div class="row">
                                          <div class="col-md-3"></div>
                                          <div id='main_message' align="center;" class="col-md-6"></div>
                                           <div class="col-md-3"></div>
                                        </div>
                                      </div>
                                    <div class="col-md-6"> 
                                        <div class="row">
                                              <div class="col-md-3">
                                                <div class="form-group">                                     
                                                  <label for="exampleInputEmail1">Vendor Name *</label>
                                                </div> 
                                              </div>
                                               <div class="col-md-9">
                                                  <div class="form-group">
                                                      
                                                     <select class="form-control select2" name="pur_challan_name" id="pur_challan_name" required="">
                                                      <?php if(isset($get_playergroupedit)) { ?>
                                                        <option value = "<?php echo $get_playergroupedit['led_id']?>"><?php echo $get_playergroupedit['ledger_name']?></option>
                                                        <?php }else{?>
                                                        <option value="">Select Vendor</option>                                              
                                                        <?php }?>
                                                        <?php 
                                                        foreach($get_ledgername as $row){ ?>
                                                        <option  value="<?php echo $row['led_id'] ?>">
                                                      <?php echo $row['ledger_name'] ?></option>
                                                      <?php } ?>
                                                </select>

                                                  </div>
                                                  <div id='vendor_msg' align="center;"></div>
                                               </div>
                                          </div>
                                      </div>

                                   
                                      <div class="col-md-6"> 
                                        <div class="row">
                                            <div class="col-md-3"></div>
                                              <div class="col-md-3">
                                                <div class="form-group">                                     
                                                  <label for="exampleInputEmail1">Invoice Date *</label>
                                                </div> 
                                              </div>
                                               <div class="col-md-6">
                                                  <div class="form-group">
                                                      <input type="date" name="pur_date"  class="form-control" id="pur_date"  required="">
                                                  </div>
                                                   <div id='pur_date_msg' align="center;"></div>
                                               </div>
                                               <div class="col-md-1"></div>
                                          </div>                                      
                                    </div>                                
                              </div>



                                  <div class="row">
                                    <div class="col-md-3">
                                        <div class="row">
                                            <div class="col-md-5">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Invoice No *</label>
                                                </div>
                                            </div>
                                            <div class="col-md-7">
                                                <div class="form-group">
                                                    <input type="text" name="puchase_entry_no" value="<?php if (isset($get_playergroupedit)) {echo $get_playergroupedit['puchase_entry_no'];}?>" class="form-control" id="puchase_entry_no" placeholder="Invoice No" required="" onchange="checkInvoiceExistOrNot()">
                                                </div>
                                            </div>
                                            <div id='puchase_entry_no_msg' align="center;"></div>
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <div class="row">
                                            <div class="col-md-5">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Party No *</label>
                                                </div>
                                            </div>
                                            <div class="col-md-7">
                                                <div class="form-group">
                                                    <input type="text" name="party_no" value="<?php echo $partyno ?>" class="form-control" id="party_no" placeholder="Party No" required="" readonly>
                                                </div>
                                            </div>
                                            <div id='party_no_msg' align="center;"></div>
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Due Date *</label>
                                                </div>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="form-group">
                                                    <input type="date" name="bill_date" value="<?php if (isset($get_playergroupedit)) {echo $get_playergroupedit['bill_date'];}?>" class="form-control" id="bill_date" placeholder="Bill Date" required="">
                                                </div>
                                            </div>
                                            <div id='bill_date_msg' align="center;"></div>
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Type *</label>
                                                </div>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="form-group">
                                                    <select class="form-control" name="tax_type" id="tax_type" required="">
                                                        <?php if (isset($get_playergroupedit)) {?>
                                                            <option value="<?php echo $get_playergroupedit['id'] ?>"><?php echo $get_playergroupedit['tax_name'] ?></option>
                                                        <?php } else {?>
                                                            <option value="">Select Type</option>
                                                        <?php }?>
                                                        <?php foreach ($get_tax_type as $row) {?>
                                                            <option value="<?php echo $row['id'] ?>"><?php echo $row['tax_name'] ?></option>
                                                        <?php }?>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-1"></div>
                                            <div id='tax_type_msg' align="center;"></div>
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Transporter *</label>
                                                </div>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="form-group">
                                                    <input type="text" name="bill_date" value="<?php if (isset($get_playergroupedit)) {echo $get_playergroupedit['bill_date'];}?>" class="form-control" id="transpoter" placeholder="" required="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Case no *</label>
                                                </div>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="form-group">
                                                    <input type="text" name="case_no" value="<?php if (isset($get_playergroupedit)) {echo $get_playergroupedit['bill_date'];}?>" class="form-control" id="case_no" placeholder="" required="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-sm-4">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Due Days *</label>
                                                </div>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="form-group">
                                                    <input type="text" name="due_days" value="<?php if (isset($get_playergroupedit)) {echo $get_playergroupedit['bill_date'];}?>" class="form-control" id="due_days" placeholder="" required="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                  </div>

                                <HR>
                                     
                                 <div class="row">

                                   <div class="col-md-12 scroll">

                                  <div class="col-md-3" id="product_message"></div>
                                  <div class="col-md-6"></div>
                                  <div class="col-md-3"></div>
                                   <table class="table table-bordered table-responsive">
                                     <tr>

                                        <th class="col-md-1">                                     
                                          <label for="exampleInputEmail1">PRODUCT *</label>
                                        </th>

                                        <th class="col-md-1">                                    
                                          <label for="exampleInputEmail1" style="width: 49px;">PACK *</label>
                                        </th>
                                        
                                          <th class="col-md-2">                                    
                                          <label for="exampleInputEmail1" style="width: 49px;">HSN *</label>
                                        </th>

                                        <th class="col-md-1">
                                          <label for="exampleInputEmail1" style="width: 58px;">BATCH *</label>
                                        </th>
                                        
                                         
                                         <th class="col-md-1">                                    
                                          <label for="exampleInputEmail1">MKT COMPANY *</label>
                                        </th>

                                        <th class="col-md-1">                                    
                                          <label for="exampleInputEmail1">MFG COMPANY *</label>
                                        </th>
                                        <th class="col-md-1">                                    
                                          <label for="exampleInputEmail1">BAN *</label>
                                        </th>

                                        <th class="col-md-1">                                    
                                          <label for="exampleInputEmail1">MFG DATE *</label>
                                        </th>

                                        <th class="col-md-1">                                    
                                          <label for="exampleInputEmail1">EXP *</label>
                                        </th>
                                        
                                        <th class="col-md-1">                                    
                                          <label for="exampleInputEmail1">MRP *</label>
                                        </th>

                                        <th class="col-md-1">                                    
                                           <label for="exampleInputEmail1">CSR *</label>
                                        </th>

                                        <th class="col-md-1">                                    
                                           <label for="exampleInputEmail1" style="width: 40px;">QTY *</label>
                                        </th>

                                        <th>                                  
                                           <label for="exampleInputEmail1">FREE </label>
                                        </th>

                                        <th class="col-md-1">                                    
                                           <label for="exampleInputEmail1" style="width: 59px;">P.RATE *</label>
                                        </th>

                                        <th class="col-md-1">                                   
                                          <label for="exampleInputEmail1"> GST </label>
                                        </th>

                                        <th class="col-md-1">                                   
                                          <label for="exampleInputEmail1">DIS RS </label>
                                        </th>

                                         <th class="col-md-1">                                   
                                          <label for="exampleInputEmail1">DIS % </label>
                                        </th>

                                        <th class="col-md-1">                                   
                                          <label for="exampleInputEmail1" style="width: 74px;">AMOUNT *</label>
                                        </th>
                                        <th></th>
                                      
                                     </tr>
                                     <tbody class="field_wrapper">
                                      
                                     <tr>

                                      <td class="col-md-1">
                                        <select class="form-control select2 testclass1 updateproduct" name="pro_id" id="pro_id" required="" style="width:300px;" onchange="get_product_detail()">
                                           <?php if(isset($get_playergroupedit)) { ?>
                                             <option value = "<?php echo $get_playergroupedit['pro_id']?>"><?php echo $get_playergroupedit['product_name']?></option>
                                              <?php }else{?>
                                               <option selected="selected">Select Product Name</option>                                              
                                                <?php }?>
                                                <?php foreach ($get_new_products as $row) { ?>
                                                    <option value="<?php echo $row['pro_id']; ?>">
                                                        <?php echo $row['product_name'] . ' || ' . $row['packing']; ?>
                                                    </option>
                                                <?php } ?>
                                        </select>
                                            <div id='pro_id_msg' align="center;"></div>
                                            <i style="color: red; cursor: pointer;" id="updateProductList" class="nav-icon fa fa-pills" title="Click This to update Product List"> </i>
                                        </td>

                                       <td class="col-md-1"><input type="text" name="pack"  value="<?php if(isset($get_playergroupedit)) { echo $get_playergroupedit['pack']; } ?>" class="form-control testclass" id="pack" required="" style="font-size: 15px;padding: 4px; width: 70px;padding: 4px;" >
                                        </td>
                                        
                                           <td class="col-md-3">
                                        <input type="text" name="hsn"  value="<?php if(isset($get_playergroupedit)) { echo $get_playergroupedit['hsn_sac']; } ?>" class="form-control testclass" id="hsn" required="" style="font-size: 15px;padding: 4px; width: 85px;" >
                                        </td> 

                                        <td class="col-md-1">                                    
                                            <input type="text" name="batch" value="<?php if(isset($get_playergroupedit)) { echo $get_playergroupedit['batch']; } ?>" class="form-control testclass" id="batch" required="" style="font-size: 15px;width:110px;padding: 4px;" >
                                            <select name="select_batch" class="form-control" id="select_batch" style="margin-top:10px;">
                                              <option value="">Select Batch</option>
                                            </select>
                                        </td>
                                        
                                       
                                        
                                         <td class="col-md-2">
                                             <input type="text" name="mkd_company" value="<?php if (isset($get_playergroupedit)) {
                                                                            echo $get_playergroupedit['mkd_company'];
                                                                          } ?>" class="form-control testclass" id="mkd_company" style="font-size: 15px;width:70px;">
                                        </td>
                                        
                                         <td class="col-md-4">
                                            <input type="text" name="mfg_company" value="<?php if (isset($get_playergroupedit)) {
                                                                            echo $get_playergroupedit['mfg_company'];
                                                                          } ?>" class="form-control testclass" id="mfg_company" style="font-size: 15px;width:150px;">
                                         </td>

                                         <td class="col-md-1">                                    
                                            
                                            <select name="select_ban" class="form-control" id="select_ban" style="font-size: 15px;width:110px;padding: 4px;">
                                            <option value="">-please select-</option>
                                            <option value="1">Ban</option>
                                            <option value="0">No</option>
                                            </select>
                                        </td>
                                        <td class="col-md-4">                                    
                                            <input type="text" name="mfg_date" value="<?php if(isset($get_playergroupedit)) { echo $get_playergroupedit['mfg_date']; } ?>" class="form-control testclass select_mfg_date" id="mfg_date"  style="font-size: 15px;width: 82px;">
                                            <input type="hidden" id="selflife" value="">
                                        </td>

                                        <td class="col-md-2">                               
                                            <input type="text" name="expiry_date" value="<?php if(isset($get_playergroupedit)) { echo $get_playergroupedit['expiry_date']; } ?>" class="form-control testclass" id="expiry_date" required="" style="font-size: 15px;width: 82px;">
                                        </td>

                                        <td class="col-md-1">                                   
                                            <input type="text" name="mrp" value="<?php if(isset($get_playergroupedit)) { echo $get_playergroupedit['mrp']; } ?>" class="form-control testclass" id="mrp" required="" style="font-size: 15px;width: 50px;padding: 4px;" >
                                        </td>

                                        <td class="col-md-1">                                   
                                            <input type="text" name="csr" value="<?php if(isset($get_playergroupedit)) { echo $get_playergroupedit['csr']; } ?>" class="form-control testclass" id="csr" required="" style="font-size: 15px;width: 50px;padding: 4px;" >
                                        </td>

                                        <td class="col-md-1">                                     
                                          <input type="text" name="product_quantity" value="<?php if(isset($get_playergroupedit)) { echo $get_playergroupedit['product_quantity']; } ?>" class="form-control testclass" id="product_quantity" required="" style="font-size: 15px;width: 70px;padding: 4px;" oninput="change_data()">                                         
                                        </td>

                                         <td class="col-md-1">                              
                                            <input type="text" name="free" value="<?php if(isset($get_playergroupedit)) { echo $get_playergroupedit['free']; } ?>" class="form-control testclass" id="free" required="" style="font-size: 15px;width: 70px;padding: 4px;">
                                             
                                        </td>

                                         <td class="col-md-1">                               
                                            <input type="text" name="purchase_rate" value="<?php if(isset($get_playergroupedit)) { echo $get_playergroupedit['purchase_rate']; } ?>" class="form-control testclass" id="purchase_rate" required="" style="font-size: 15px;width: 70px;padding: 4px;" oninput="change_data()" >
                                           
                                        </td>

                                         <td class="col-md-1">                               
                                            <input type="text" name="gst" value="<?php if(isset($get_playergroupedit)) { echo $get_playergroupedit['GST']; } ?>" class="form-control testclass" id="gstno" required="" style="font-size: 15px;width: 70px;padding: 4px;" oninput="change_data()" >
                                           
                                        </td>

                                         <td class="col-md-1">                                    
                                            <input type="text" name="discountrs" value="<?php if(isset($get_playergroupedit)) { echo $get_playergroupedit['discountrs']; } ?>" class="form-control testclass" id="discountrs" required="" style="font-size: 15px;width: 50px;padding: 4px;" oninput="change_data()">
                                            
                                        </td>

                                        <td class="col-md-1">                                    
                                            <input type="text" name="discount" value="<?php if(isset($get_playergroupedit)) { echo $get_playergroupedit['discount']; } ?>" class="form-control testclass" id="discount" required="" style="font-size: 15px;width: 50px;padding: 4px;" oninput="change_data()">
                                        </td>

                                       

                                        <td class="col-md-1">
                                            <input type="text" name="amount" value="<?php if(isset($get_playergroupedit)) { echo $get_playergroupedit['amount']; } ?>" class="form-control testclass" id="amount" required="" style="font-size: 15px;padding: 4px;" readonly>
                                        </td>
                                        <td>
                                           <a href="javascript:void(0);" class="add-row" title="Add field" style="font-size: 31px;color: green;font-weight: bold;" onclick="AppendTableRow()">+</a>
                                        </td>
                                     </tr>
                                      </tbody>
                                   </table>
                                 </div>
                               </div>


                            
                              <!-- <div class="card-footer">
                                <input type="submit" class="btn btn-primary" id="submit" value="Submit">
                              </div> -->
                            </form>

                            <div class="table-responsive table table-bordered" id="myDiv">
                             <table class="appendrow table table-bordered">
                                <thead>
                                    <tr>
            <th class="col-md-1">S.NO</th> <!-- Serial Number Column -->
            <th class="col-md-1">PRODUCT</th>
            <th class="col-md-1">PACK</th>
            <th class="col-md-1">HSN</th>
            <th class="col-md-1">BATCH</th>
            <th class="col-md-1">EXPIRY</th>
            <th class="col-md-2">MKT COMPANY</th>
            <th class="col-md-2">MFG COMPANY</th>
            <th class="col-md-2">BAN</th>
            <th class="col-md-1">MFG</th>
            <th class="col-md-1">MRP</th>
            <th class="col-md-1">CSR</th>
            <th class="col-md-1">QTY</th>
            <th class="col-md-1">FREE</th>
            <th class="col-md-1">P.RATE</th>
            <th class="col-md-1">DIS. RS.</th> 
            <th class="col-md-1">DIS. %</th>                                        
            <th class="col-md-1">AMOUNT WITHOUT GST</th>
            <th class="col-md-1">GST</th>  
            <th class="col-md-1">GST VAL.</th>                                     
            <th class="col-md-1">AMOUNT WITH GST</th>                                                                                
            <th class="col-md-1">BARCODE</th>
            <th style="font-size: 21px;">X</th>
            <th>GENERATE BARCODE</th>
        </tr>
                                     <img id="loading-image" src="../GPImage/loader11.gif" style="height: 108px;display: none;" />
                                </thead>
                                <tbody class="wrapper wrapper-tbody" id="tbl_posts_body-1">
                                    
                                </tbody>
                                <tfoot class="append_footer">
                                  <tr class='hidden_row'>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td style="width:80px;"></td>
                                    <td style='width:273px;'></td>
                                    <td style='width:40px;'></td>
                                    <td style='width:70px;'></td>
                                    <td style='width:70px;'></td>
                                    <td style='width:70px;'></td>
                                    <td style='width:70px;'></td>
                                    <td style='width:70px;'></td>
                                    <td style='width:70px;'><input type='text' name='product_quantity'  class='form-control testclass total_product_quantity' value="0"  readonly style='font-size: 15px;padding: 4px; width: 70px;padding: 4px;'/></td>
                                    <td style='width:0px;'></td>
                                    <td style='width: 50px;'><input type='text' name='purchase_rate'  class='form-control testclass total_purchase_rate' value="0"  readonly style='font-size: 15px;padding: 4px; width: 70px;padding: 4px;'/></td>
                                    <td ></td>
                                    <td></td>
                                    <td><input type='text' name='amount' value="0" class='form-control testclass total_withougstamount' readonly style='font-size: 15px;padding: 4px; width: 70px;padding: 4px;'/>Product Value</td>
                                    <td></td>
                                    <td><input type='text' name='gst' value="0" class='form-control testclass total_gst' readonly style='font-size: 15px;padding: 4px; width: 70px;padding: 4px;'/>Total GST</td>                                    
                                     <td><input type='text' name='amount' value="0" class='form-control testclass total_amount' readonly style='font-size: 15px;padding: 4px; width: 70px;padding: 4px;'/>Invoice Value</td>
                                      
                                      <td></td><td></td><td></td>
                                   </tr>
                                </tfoot>
                            </table>

                           <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
    $(document).ready(function() {
        let serialNumber = 1; // Initialize serial number

        // Function to add a new row
        function addRow() {
            let rowHtml = `
                <tr>
                    <td>${serialNumber}</td> <!-- Serial Number Column -->
                    <td><input type='text' name='product[]' class='form-control' /></td>
                    <td><input type='text' name='pack[]' class='form-control' /></td>
                    <td><input type='text' name='hsn[]' class='form-control' /></td>
                    <td><input type='text' name='batch[]' class='form-control' /></td>
                    <td><input type='text' name='expiry[]' class='form-control' /></td>
                    <td><input type='text' name='mkt_company[]' class='form-control' /></td>
                    <td><input type='text' name='mfg_company[]' class='form-control' /></td>
                    <td><input type='text' name='ban[]' class='form-control' /></td>
                    <td><input type='text' name='mfg[]' class='form-control' /></td>
                    <td><input type='text' name='mrp[]' class='form-control' /></td>
                    <td><input type='text' name='csr[]' class='form-control' /></td>
                    <td><input type='text' name='qty[]' class='form-control' /></td>
                    <td><input type='text' name='free[]' class='form-control' /></td>
                    <td><input type='text' name='p_rate[]' class='form-control' /></td>
                    <td><input type='text' name='dis_rs[]' class='form-control' /></td>
                    <td><input type='text' name='dis_perc[]' class='form-control' /></td>
                    <td><input type='text' name='amount_without_gst[]' class='form-control' /></td>
                    <td><input type='text' name='gst[]' class='form-control' /></td>
                    <td><input type='text' name='gst_val[]' class='form-control' /></td>
                    <td><input type='text' name='amount_with_gst[]' class='form-control' /></td>
                    <td><input type='text' name='barcode[]' class='form-control' /></td>
                    <td><button type='button' class='btn btn-danger remove-row'>X</button></td>
                    <td><button type='button' class='btn btn-primary generate-barcode'>GENERATE BARCODE</button></td>
                </tr>
            `;
            $('#tbl_posts_body-1').append(rowHtml);
            serialNumber++; // Increment serial number
        }

        // Add row when a button is clicked (example button with ID 'add-row')
        $('#add-row').click(function() {
            addRow();
        });

        // Remove row functionality
        $(document).on('click', '.remove-row', function() {
            $(this).closest('tr').remove();
            updateSerialNumbers(); // Optional: Re-number after deletion
        });

        // Update serial numbers
        function updateSerialNumbers() {
            $('#tbl_posts_body-1 tr').each(function(index) {
                $(this).find('td').eq(0).text(index + 1); // Update serial number
            });
        }
    });
</script>

                        
                          </div>
                            <!-- <div class="row">
                              <div class="col-md-12">
                                <div class="col-md-2">
                                  <button type="button" class="delete-row btn btn-danger">Delete Row</button>
                                </div>
                              </div>
                              
                            </div> -->

                            <div class="row">
                              <div class="col-md-12">
                                <div class="col-md-2">
                                  <input type="button" class="btn btn-primary" id="submit" value="Submit">
                                </div>
                              </div>
                              
                            </div>
                          </div>
                            



                          </div>
                        </div>
                      </div>
                     
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
  </div>
</div>


 <!--- modal ledger ---->

<div class="modal" id="mdlledger" data-backdrop="static" data-keyboard="false">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="title light blue">Vendor Detail</h3>
         <button type="button" class="close modal_close" data-dismiss="modal" aria-label="Close" style="margin-top: -42px;">
          <span aria-hidden="true" style="color: black;">×</span>
        </button>                                   
    </div>
    <div class="modal-body">

    <div class="row">
      <div class="col-sm-12" >                          
        <div class="card card-primary">
                                                  
        <div class="card-body">
          <div id="itemmodel_message"></div>
            <div class="form-group">
              <div class="row">
                <div class="col-sm-12"><div id="msgmodel" class="alert alert-success" style="display: none;"></div>
                <div class="col-sm-12">
                  <h4 class="light blue">Vendor is not exist, First You need to add Vendor Detail</h4><br>
                 
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-6">
                        <label for="exampleInputEmail1">Vendor Name *:</label>
                          <input type="text" name="ledger_name" class="form-control" id="ledger_name" placeholder="Vendor Name" value="">
                          <div class="text-danger" id="vendor_name_message"></div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label>Address : </label>
                              <textarea type="text" rows="3" name="address" id="address" class="form-control" placeholder="Address" ></textarea>
                            </div>                                  
                        </div>                                  
                      </div>
                  </div>

                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-6">
                          <label for="exampleInputEmail1">Phone no :</label>
                            <input type="number" name="phone_no" class="form-control" id="phone_no" placeholder="Phone No" value="">         
                        </div>

                         <div class="col-md-6">
                            <label for="exampleInputEmail1">E – mail :</label>
                              <input type="text" name="email" class="form-control" id="email" placeholder="Address" value="">
                          </div>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-6">
                          <label for="exampleInputEmail1">Contact Person Name :</label>
                          <input type="text" name="contact_person" class="form-control" id="contact_person" placeholder="Contact Person Name" value="">                          
                      </div>

                      <div class="col-md-6">
                        <label for="exampleInputEmail1">GST Heading *:</label>
                          <input type="text" name="gst_in" class="form-control" id="gst_in" placeholder="GST Heading" value="">
                          <div class="text-danger" id="gst_message" ></div>
                      </div>                             
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-6">
                          <label for="exampleInputEmail1">I. T. PAN no :</label>
                          <input type="text" name="pan_no" class="form-control" id="pan_no" placeholder="I. T. PAN no" value="">
                        </div>
                      </div>
                  </div>

                
              </div>
            </div>
                                                           
        </div>

      </div>
    </div>
  </div>
</div>

</div>
<div class="modal-footer">
<button class="btn btn-danger modal_close" data-dismiss="modal">Close</button>
<input type="button" class="btn btn-success"  id="save_modal" value="Submit" onclick="insert_vendor()">
</div>
</div>
</div>
</div> 
</div>
   <!----- modal ledger ---->  

 <!--- modal ledger ---->

<div class="modal" id="mdlproduct" data-backdrop="static" data-keyboard="false">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="title light blue">Add Product Detail</h3>
         <button type="button" class="close modal_close" data-dismiss="modal" aria-label="Close" style="margin-top: -42px;">
          <span aria-hidden="true" style="color: black;">×</span>
        </button>                                   
    </div>
    <div class="modal-body">

    <div class="row">
      <div class="col-sm-12" >                          
        <div class="card card-primary">
                                                  
        <div class="card-body">
          <div id="itemmodel_message"></div>
            <div class="form-group">
              <div class="row">
                <div class="col-sm-12"><div id="productmsg" class="alert alert-success" style="display: none;"></div>
                <div class="col-sm-12"><div id="errormsg" class="alert alert-danger" style="display: none;"></div></div>
                <div class="col-sm-12" id="append_product">                  
                 <h4 class="light blue">First You need to add Product Detail</h4><br>
                
              </div>
            </div>
                                                           
        </div>

      </div>
    </div>
  </div>
</div>

</div>
<div class="modal-footer">
<button class="btn btn-danger modal_close" data-dismiss="modal">Close</button>
<input type="button" class="btn btn-success"  id="product_modal" value="Submit" onclick="insert_product()">
</div>
</div>
</div>
</div> 
</div>
   <!----- modal product ---->  

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.1/js/select2.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.2.0/js/bootstrap-datepicker.min.js"></script>


   <script>

   $("#pur_challan_name").select2();
   $('.select2').select2();


  $("#mfg_date").datepicker( {
      format: "mm-yyyy",
      startView: "months", 
      minViewMode: "months",
      autoclose:true
  });
    $("#expiry_date").datepicker( {
      format: "mm-yyyy",
      startView: "months", 
      minViewMode: "months",
      autoclose:true
  });

    $(".dateickerClass").datepicker( {

      format: "mm-yyyy",
      startView: "months", 
      minViewMode: "months",
      autoclose:true
     
    });
   
   </script>    
   
   <script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>

<script>
  function get_product_detail(){
    //alert('hi');
    var pro_id = $("#pro_id").val();
    //console.log(pro_id);
     $.ajax({
          type: "POST",
          url: "<?php echo base_url()?>purchase_challan/get_productdetail",
          dataType:'json',
          data:{pro_id:pro_id},
          success: function(data){
            var res = data.res;       // 'product' is the key for 'res'
            var result = data.hsn_master; 
            var company = data.company;
            var batch = data.batch;

            $("#csr").val(res['csr']);
            $("#pack").val(res['packing']);
            $("#csr").val(res['csr']);
            $("#mrp").val(res['mrp_rate']);
            $("#selflife").val(res['shelflife']);
            $("#purchase_rate").val(res['p_rate']);
            $("#gstno").val(res['igst']);
            $("#hsn").val(result['hsn_code']);
            $("#mkd_company").val(company['company_name']);

            // Select dropdown for batch
              var selectBatch = $("#select_batch");
              selectBatch.empty(); // Clear existing options

              // Add default option
              selectBatch.append('<option value="">-Select Batch-</option>');

              // Add batch options
              for (var i = 0; i < batch.length; i++) {
                  selectBatch.append('<option value="' + batch[i].batch_no + '">' + batch[i].batch_no + '</option>');
              }

        }
    });
  }

    $("#select_batch").on('change', function(){
       var batch = $(this).val();
       var pro_id = $("#pro_id").val();
       console.log(pro_id);
       console.log(batch);
       $("#batch").val(batch)
       $.ajax({
          type: "POST",
          url: "<?php echo base_url()?>purchase_challan/get_dates",
          dataType:'json',
          data:{
            batch :batch,
            pro_id:pro_id,

          },
          success: function(data){
            var res = data;       
            console.log(res);

            var expiryDate = new Date(res.expiry_date);
            var expiryMonthYear = (expiryDate.getMonth() + 1) + '-' + expiryDate.getFullYear();

            // Extract month and year from mfg_date
            var mfgDate = new Date(res.mfg_date);
            var mfgMonthYear = (mfgDate.getMonth() + 1) + '-' + mfgDate.getFullYear();

           var ban = res.is_ban;

            console.log(expiryMonthYear);
            console.log(mfgMonthYear);
            $("#select_ban").val(ban);
            $("#mfg_date").val(mfgMonthYear);
            $("#expiry_date").val(expiryMonthYear);
        }
    });

    })
    $(document).ready(function(){
      var i=1;
      var lastRowId = jQuery('.appendrow >tbody >tr').length;
        // alert(lastRowId);
         if(lastRowId==0){
            $("#submit").prop('disabled', true);
         }else if(lastRowId>0){
            $("#submit").prop('disabled', false);
         }
       });
      
        $('#amount').keydown(function (e){
           e.preventDefault();
          if(e.keyCode == 13){
             AppendTableRow();
          }

      });
  
  
    function AppendTableRow(){
      var lastRowId = jQuery('.appendrow >tbody >tr').length;
      
      var i = parseInt(lastRowId) + 1;
     // alert(i);
            var vendor_name       = $("#pur_challan_name").val();

            var pur_date          = $("#pur_date").val();
            var puchase_entry_no  = $("#puchase_entry_no").val();
            var party_no          = $("#party_no").val();
            var bill_date         = $("#bill_date").val();
            var tax_type          = $("#tax_type").val();

            var pro_id            = $("#pro_id").val();

            var hsn            = $("#hsn").val();
            var pack              = $("#pack").val();
            var batch             = $("#batch").val();
            var expiry_date       = $("#expiry_date").val();
            console.log(expiry_date);
             var mkd_company = $("#mkd_company").val();
             var mfg_company = $("#mfg_company").val();
             var select_ban = $("#select_ban option:selected").text();
             console.log(select_ban);
            var mfg_date          = $("#mfg_date").val();
            console.log(mfg_date);
            var mrp               = $("#mrp").val();
            var csr               = $("#csr").val();
            var product_quantity  = $("#product_quantity").val();
            var free              = $("#free").val();
            var purchase_rate     = $("#purchase_rate").val();
            var discount          = $("#discount").val();
            var discountrs          = $("#discountrs").val();
            var amount            = $("#amount").val();
            var gst            = $("#gstno").val();
            console.log()

            var mfgDate = new Date(mfg_date);
            var expiryDate = new Date(expiry_date);

            if(vendor_name == ''){
              $("#main_message").fadeIn();
              $("#main_message").html("<div class='text text-danger'>Please Select Vendor Name !!</div>");
              $("#main_message").fadeOut(5000);
              return false;
            }
            if(pur_date == ''){
              $("#main_message").fadeIn();
              $("#main_message").html("<div class='text text-danger'>Please Select Invoice Date!!</div>");
              $("#main_message").fadeOut(5000);
              return false;
            }
            if(puchase_entry_no == ''){
              $("#main_message").fadeIn();
              $("#main_message").html("<div class='text text-danger'>Please Enter Invoice No!!</div>");
              $("#main_message").fadeOut(5000);
              return false;
            }
            if(party_no == ''){
              $("#main_message").fadeIn();
              $("#main_message").html("<div class='text text-danger'>Please Enter Party No!!</div>");
              $("#main_message").fadeOut(5000);
              return false;
            }
            if(bill_date == ''){
              $("#main_message").fadeIn();
              $("#main_message").html("<div class='text text-danger'>Please Select Due Date !!</div>");
              $("#main_message").fadeOut(5000);
              return false;
            }
            if(tax_type == ''){
              $("#main_message").fadeIn();
              $("#main_message").html("<div class='text text-danger'>Please Select Tax Type!!</div>");
              $("#main_message").fadeOut(5000);
              return false;
            }
    
            
            if(pro_id == ''){
              $("#product_message").fadeIn();
              $("#product_message").html("<div class='text text-danger'>Please Select Product Name !!</div>");
              $("#product_message").fadeOut(5000);
              return false;
            }
            if(pack == ''){
              $("#product_message").fadeIn();
              $("#product_message").html("<div class='text text-danger'>Please Enter Pack !!</div>");
              $("#product_message").fadeOut(5000);
              return false;
            }
            
             if(hsn == ''){
              $("#product_message").fadeIn();
              $("#product_message").html("<div class='text text-danger'>Please Enter hsn !!</div>");
              $("#product_message").fadeOut(5000);
              return false;
            }
            if (expiryDate < mfgDate) {
              $("#product_message").fadeIn();
              $("#product_message").html("<div class='text text-danger'>Expiry date cannot be earlier than the manufacturing date.</div>");
              $("#product_message").fadeOut(5000);
              return false;// Clear the input
        }
            if(batch == ''){
              $("#product_message").fadeIn();
              $("#product_message").html("<div class='text text-danger'>Please Enter Batch !!</div>");
              $("#product_message").fadeOut(5000);
              return false;
            }
            if(expiry_date == ''){
              $("#product_message").fadeIn();
              $("#product_message").html("<div class='text text-danger'>Please Select Expiry Date !!</div>");
              $("#product_message").fadeOut(5000);
              return false;
            }
            if(mfg_date == ''){
              $("#product_message").fadeIn();
              $("#product_message").html("<div class='text text-danger'>Please Select MFG Date !!</div>");
              $("#product_message").fadeOut(5000);
              return false;
            }
            if(mrp == ''){
              $("#product_message").fadeIn();
              $("#product_message").html("<div class='text text-danger'>Please Enter MRP !!</div>");
              $("#product_message").fadeOut(5000);
              return false;
            }
            if(csr == ''){
              $("#product_message").fadeIn();
              $("#product_message").html("<div class='text text-danger'>Please Enter CSR !!</div>");
              $("#product_message").fadeOut(5000);
              return false;
            }
            if(gstno == ''){
              $("#product_message").fadeIn();
              $("#product_message").html("<div class='text text-danger'>Please Enter GST !!</div>");
              $("#product_message").fadeOut(5000);
              return false;
            }
            if(product_quantity == ''){
              $("#product_message").fadeIn();
              $("#product_message").html("<div class='text text-danger'>Please Enter Product Quantity !!</div>");
              $("#product_message").fadeOut(5000);
              return false;
            }
            if(purchase_rate == ''){
              $("#product_message").fadeIn();
              $("#product_message").html("<div class='text text-danger'>Please Enter Purchase Rate !!</div>");
              $("#product_message").fadeOut(5000);
              return false;
            }
            // if(discount == ''){
            //   $("#product_message").fadeIn();
            //   $("#product_message").html("<div class='alert alert-danger'>Please Enter Discount !!</div>");
            //    $("#product_message").fadeOut(5000);
            //   return false;
            // }
            if(amount == ''){
              $("#product_message").fadeIn();
              $("#product_message").html("<div class='text text-danger'>Please Enter Amount !!</div>");
              $("#product_message").fadeOut(5000);
              return false;
            }


           
           

            var product_name = ''
            
             $.ajax({
                    type: "POST",
                    url: "<?php echo base_url()?>purchase_challan/get_productname",
                    dataType:'json',
                    data:{pro_id:pro_id},
                    success: function(data){
                        
                       var product_name = data[0]['product_name'];
                      // var gst = data[0]['igst'];

                      // alert(amount);
                       var gstval1  = parseFloat(amount * gst/100);
                       var gstval = gstval1.toFixed(3);
                       //alert(amount);
                       var tamount1 = (parseFloat(amount) + parseFloat(gstval));
                      // alert(tamount1);
                       var tamount = tamount1.toFixed(2);

                       var totamount = parseFloat(amount);
                     //  alert(totamount.toFixed(2));
                   // console.log(gst);
                   var srNo = 1;

                       var markup = "<tr><td><input type='hidden' name='pro_id[]' value='"+pro_id+"' class='form-control testclass prod_id"+i+"' style='width: 285px;'/><input type='text' name='pro_name[]' value='"+product_name+"' class='form-control testclass product_name"+i+"' style='width: 285px;'/></td><td><input type='text' name='pack[]' value='"+pack+"' class='form-control testclass' style='font-size: 15px;padding: 4px; width: 70px;padding: 4px;' readonly/></td><td><input type='text' name='hsn[]' value='"+hsn+"' class='form-control testclass' style='font-size: 15px;padding: 4px; width: 70px;padding: 4px;' readonly/></td><td><input type='text' name='batch[]' value='"+batch+"' class='form-control testclass' style='font-size: 15px;padding: 4px; width: 75px;padding: 4px;'/></td><td><input type='text' name='expiry_date[]' value='"+expiry_date+"' class='form-control testclass dateickerClass' style='font-size: 15px;padding: 4px; width: 80px;padding: 4px;'/></td><td><input type='text' name='mkd_company[]' value='" + mkd_company + "' class='form-control testclass' style='width:70px;'/></td><td><input type='text' name='mfg_company[]' value='" + mfg_company + "' class='form-control testclass' style='width:70px;'/></td><td><input type='text' name='select_ban[]' value='" + select_ban + "' class='form-control testclass' style='width:70px;'/></td><td><input type='text' name='mfg_date[]' value='"+mfg_date+"' class='form-control testclass dateickerClass' style='font-size: 15px;padding: 4px; width: 80px;padding: 4px;'/></td><td ><input type='text' name='mrp[]' value='"+mrp+"' class='form-control testclass' style='font-size: 15px;padding: 4px; width: 70px;padding: 4px;' /></td><td ><input type='text' name='csr[]' value='"+csr+"' class='form-control testclass' style='font-size: 15px;padding: 4px; width: 70px;padding: 4px;' /></td><td ><input type='text' name='product_quantity[]' value='"+product_quantity+"' class='form-control testclass product_quantity"+i+"' style='font-size: 15px;padding: 4px; width: 70px;padding: 4px;' oninput='getRowCalculation("+i+")' onfocusout='data_change_row("+i+")'/></td><td ><input type='text' name='free[]' value='"+free+"' class='form-control testclass' style='font-size: 15px;padding: 4px; width: 70px;padding: 4px;'/></td><td><input type='text' name='purchase_rate[]' value='"+purchase_rate+"' class='form-control testclass purchase_rate"+i+"' style='font-size: 15px;padding: 4px; width: 70px;padding: 4px;' oninput='getRowCalculation("+i+")' onfocusout='data_change_row("+i+")' /></td> <td ><input type='text' name='discountrs[]' value='"+discountrs+"' class='form-control testclass discountrs"+i+"' style='font-size: 15px;padding: 4px; width: 70px;padding: 4px;' onfocusout='data_change_row("+i+")' oninput='getRowCalculation("+i+")'/></td><td ><input type='text' name='discount[]' value='"+discount+"' class='form-control testclass discount"+i+"' style='font-size: 15px;padding: 4px; width: 70px;padding: 4px;' onfocusout='data_change_row("+i+")' oninput='getRowCalculation("+i+")'></td><td ><input type='text' name='totamount[]' value='"+totamount.toFixed(2)+"' class='form-control testclass totamount"+i+"' style='font-size: 15px;padding: 4px; width: 70px;padding: 4px;' readonly/></td><td ><input type='text' name='gst[]' value='"+gst+"' class='form-control testclass gst"+i+"' style='font-size: 15px;padding: 4px; width: 70px;padding: 4px;' oninput='getRowCalculation("+i+")' onfocusout='data_change_row("+i+")'/></td><td ><input type='text' name='gstval[]' value='"+gstval+"' class='form-control testclass gstval"+i+"' style='font-size: 15px;padding: 4px; width: 70px;padding: 4px;' /></td><td ><input type='text' name='amount[]' value='"+tamount+"' class='form-control testclass amount"+i+"' style='font-size: 15px;padding: 4px; width: 70px;padding: 4px;' readonly/></td><td ><input type='text' name='barcode[]' value='' class='form-control testclass barcode"+i+"' style='font-size: 15px;padding: 4px; width: 70px;padding: 4px;' /></td><td><a href='javascript:void(0);' class='remove_button' id='"+i+"' style='font-size: 21px;color: red;''>X</a></td><td><a href='javascript:void(0);' class='generate_barcode btn btn-success' style='padding: initial;' onclick='generate_barcode("+i+")'>Barcode</a></td></tr>";

                       srNo++;
                
                      $(".appendrow tbody").append(markup);
                       var lastRowId = jQuery('.appendrow >tbody >tr').length;
                     // alert(lastRowId);
                      if(lastRowId==0){
                        $("#submit").prop('disabled', true);
                     }else if(lastRowId>0){
                        $("#submit").prop('disabled', false);
                     }

                     
                       getAmountColTotal1(i);
                      
                      $("#pack").val('');
                      $("#batch").val('');
                      $("#expiry_date").val('');
                      $("#mkt_company").val('');
                      $("#mfg_company").val('');
                      $("#select_ban").val('');
                      $("#mfg_date").val('');
                      $("#mrp").val('');
                      $("#csr").val('');
                      $("#product_quantity").val('');
                      $("#free").val('');
                      $("#purchase_rate").val('');
                      $("#discount").val('');
                      $("#discountrs").val('');
                      $("#amount").val('');
                      
                  }

              });
    }
       
      $('.wrapper').on('click', '.remove_button', function(e){
          e.preventDefault();
         
           var length = jQuery('.appendrow >tbody >tr').length;
         
           var remove_button_id = (this.id);
          
           TotalSumafterRemove(remove_button_id);
         
          $(this).parent().parent().remove();
    });

function TotalSumafterRemove(elem){
        //alert(elem);
        var product_quantity = $(".product_quantity"+elem).val();
        var purchase_rate = $(".purchase_rate"+elem).val();
        var gstval = $(".gstval"+elem).val();
        var amount = $(".amount"+elem).val();
        var amountwithoutgst = $(".totamount"+elem).val();
        

        total_product_quantity  = $(".total_product_quantity").val() ;
        var total_product_quantitynew = total_product_quantity - product_quantity;

        total_purchase_rate  = $(".total_purchase_rate").val()- parseFloat(purchase_rate);
        total_gst  = $(".total_gst").val()- parseFloat(gstval);
        total_amount  = $(".total_amount").val()- parseFloat(amount);
        total_withougstamount  = $(".total_withougstamount").val()- parseFloat(amountwithoutgst);
        
       // alert(total_product_quantity);
       // alert(product_quantity);
       // alert(total_gst);
       // alert(total_amount);
      //  alert(total_withougstamount);

         $(".total_product_quantity").val(total_product_quantitynew.toFixed(2));
        $(".total_purchase_rate").val(total_purchase_rate.toFixed(2));
        $(".total_gst").val(total_gst.toFixed(2));
        $(".total_amount").val(total_amount.toFixed(2));
        $(".total_withougstamount").val(total_withougstamount.toFixed(2));

    }
 

      $("#submit").click(function(e){

         e.preventDefault();
            var vendor_name       = $("#pur_challan_name").val();
            //alert(vendor_name);
            var pur_date          = $("#pur_date").val();
            var puchase_entry_no  = $("#puchase_entry_no").val();
            var party_no          = $("#party_no").val();
            var bill_date         = $("#bill_date").val();
            var tax_type          = $("#tax_type").val();
            var transpoter          = $("#transpoter").val();
            var case_no          = $("#case_no").val();
            var due_days          = $("#due_days").val();
    
            console.log(transpoter);
            console.log(case_no);
            console.log(due_days);


            var pro_id            = $("#pro_id").val();
            console.log(pro_id);
            var pack              = $("#pack").val();
            var hsn               = $("#hsn").val();
            
            var batch             = $("#batch").val();
            var expiry_date       = $("#expiry_date").val();
            var mkd_company      = $("#mkd_company").val();
            var mfg_company      = $("#mfg_company").val();
            var select_ban      = $("#select_ban").val();
            console.log(select_ban);
            var mfg_date          = $("#mfg_date").val();
            var mrp               = $("#mrp").val();
            var csr               = $("#csr").val();
            var product_quantity  = $("#product_quantity").val();
            var free              = $("#free").val();
            var purchase_rate     = $("#purchase_rate").val();
            var discount          = $("#discount").val();
            var discountrs        = $("#discountrs").val();
            var amount            = $("#amount").val();


            if(vendor_name == ''){
              $("#main_message").fadeIn();
              $("#main_message").html("<div class='text text-danger'>Please Select Vendor Name !!</div>");
              $("#main_message").fadeOut(5000);
              return false;
            }
            if(pur_date == ''){
              $("#main_message").fadeIn();
              $("#main_message").html("<div class='text text-danger'>Please Select Invoice Date!!</div>");
              $("#main_message").fadeOut(5000);
              return false;
            }
            if(puchase_entry_no == ''){
              $("#main_message").fadeIn();
              $("#main_message").html("<div class='text text-danger'>Please Enter Invoice No!!</div>");
              $("#main_message").fadeOut(5000);
              return false;
            }
            // if(party_no == ''){
            //   $("#main_message").fadeIn();
            //   $("#main_message").html("<div class='text text-danger'>Please Enter Party No!!</div>");
            //   $("#main_message").fadeOut(5000);
            //   return false;
            // }
            if(bill_date == ''){
              $("#main_message").fadeIn();
              $("#main_message").html("<div class='text text-danger'>Please Select Due Date !!</div>");
              $("#main_message").fadeOut(5000);
              return false;
            }
            if(tax_type == ''){
              $("#main_message").fadeIn();
              $("#main_message").html("<div class='text text-danger'>Please Select Tax Type!!</div>");
              $("#main_message").fadeOut(5000);
              return false;
            }

            
            // if(pro_id == ''){
            //   $("#product_message").fadeIn();
            //   $("#product_message").html("<div class='text text-danger'>Please Select Product Name !!</div>");
            //   $("#product_message").fadeOut(5000);
            //   return false;
            // }
            // if(pack == ''){
            //   $("#product_message").fadeIn();
            //   $("#product_message").html("<div class='text text-danger'>Please Enter Pack !!</div>");
            //   $("#product_message").fadeOut(5000);
            //   return false;
            // }
            // if(batch == ''){
            //   $("#product_message").fadeIn();
            //   $("#product_message").html("<div class='text text-danger'>Please Enter Batch !!</div>");
            //   $("#product_message").fadeOut(5000);
            //   return false;
            // }
            // if(product_quantity == ''){
            //   $("#product_message").fadeIn();
            //   $("#product_message").html("<div class='text text-danger'>Please Enter Product Quantity !!</div>");
            //   $("#product_message").fadeOut(5000);
            //   return false;
            // }
            // if(purchase_rate == ''){
            //   $("#product_message").fadeIn();
            //   $("#product_message").html("<div class='text text-danger'>Please Enter Purchase Rate !!</div>");
            //   $("#product_message").fadeOut(5000);
            //   return false;
            // }
          
            // if(amount == ''){
            //   $("#product_message").fadeIn();
            //   $("#product_message").html("<div class='text text-danger'>Please Enter Amount !!</div>");
            //   $("#product_message").fadeOut(5000);
            //   return false;
            // }

        //alert(vendor_name);
        var vendor_arr = [];
        vendor_arr = {'vendor_id':vendor_name,'pur_date':pur_date,'puchase_entry_no':puchase_entry_no,'party_no':party_no,'bill_date':bill_date,'tax_type':tax_type,'transpoter':transpoter,'case_no':case_no,'due_days':due_days};

        var pro_id            = document.getElementsByName("pro_id[]");
        var pro_name          = document.getElementsByName("pro_name[]");
        var pack              = document.getElementsByName("pack[]");
        var hsn              = document.getElementsByName("hsn[]");
        var batch             = document.getElementsByName("batch[]");
        var expiry_date       = document.getElementsByName("expiry_date[]");
        var mkd_company      = document.getElementsByName("mkd_company[]");
        var mfg_company      = document.getElementsByName("mfg_company[]");
        var select_ban      = document.getElementsByName("select_ban[]")[0];
        console.log(select_ban);
        var ban = (select_ban.value == "Ban") ? 1 : 0;
        console.log(ban);
        var mfg_date          = document.getElementsByName("mfg_date[]");
        var mrp               = document.getElementsByName("mrp[]");
        var csr               = document.getElementsByName("csr[]");
        var product_quantity  = document.getElementsByName("product_quantity[]");
        var free              = document.getElementsByName("free[]");
        var purchase_rate     = document.getElementsByName("purchase_rate[]");
        var discount          = document.getElementsByName("discount[]");
        var discountrs        = document.getElementsByName("discountrs[]");
        var amount            = document.getElementsByName("amount[]");
        var gstval            = document.getElementsByName("gstval[]");
        var barcode           = document.getElementsByName("barcode[]");
        var gst           = document.getElementsByName("gst[]");

         var len = pro_id.length;
       //alert(len);
        var proid_arr = [];
        var proname_arr = [];
        var pack_arr = [];
        var hsn_arr = [];
        var batch_arr = [];
        var expiry_date_arr = [];
        var mkd_company_arr = [];
        var mfg_company_arr = [];
        var select_ban_arr = [];
        var mfg_date_arr = [];
        var mrp_arr = [];
        var csr_arr = [];
        var product_quantity_arr = [];
        var free_arr = [];
        var purchase_rate_arr = [];
        var discount_arr = [];
        var discountrs_arr = [];
        var amount_arr = [];
        var gstval_arr = [];
        var barcode_arr = [];
         var gst_arr = [];
        
         

        for(var i=0;i<len;i++){

            proid_arr.push(pro_id[i].value);  
            proname_arr.push(pro_name[i].value);  
            pack_arr.push(pack[i].value);
            hsn_arr.push(hsn[i].value);
            batch_arr.push(batch[i].value);
            expiry_date_arr.push(expiry_date[i].value);
            mkd_company_arr.push(mkd_company[i].value);
            mfg_company_arr.push(mfg_company[i].value);
            select_ban_arr.push(ban);
            mfg_date_arr.push(mfg_date[i].value);
            mrp_arr.push(mrp[i].value);
            csr_arr.push(csr[i].value);
            product_quantity_arr.push(product_quantity[i].value);
            free_arr.push(free[i].value);
            purchase_rate_arr.push(purchase_rate[i].value);
            discount_arr.push(discount[i].value);
            discountrs_arr.push(discountrs[i].value);
            amount_arr.push(amount[i].value);
            gstval_arr.push(gstval[i].value);  
            barcode_arr.push(barcode[i].value);  
            gst_arr.push(gst[i].value); 

        }
        //console.log(vendor_arr);
        $.ajax({
            type: "POST",
            url: "<?php echo base_url()?>purchase_challan/insert_puchase_challan",
            //dataType:'json',
            data:{vendor_arr:vendor_arr,proid_arr:proid_arr,proname_arr:proname_arr,pack_arr:pack_arr,hsn_arr:hsn_arr,batch_arr:batch_arr,expiry_date_arr:expiry_date_arr, mfg_company_arr: mfg_company_arr, mkd_company_arr: mkd_company_arr,select_ban_arr:select_ban_arr,mfg_date_arr:mfg_date_arr,mrp_arr:mrp_arr,csr_arr:csr_arr,product_quantity_arr:product_quantity_arr,free_arr:free_arr,purchase_rate_arr:purchase_rate_arr,discount_arr:discount_arr,discountrs_arr:discountrs_arr,amount_arr:amount_arr,gstval_arr:gstval_arr,barcode_arr:barcode_arr,gst_arr:gst_arr},
            beforeSend: function() {
              $("#loading-image").show();
               $("#myDiv").css('opacity', '0.4');
           },
            success: function(data){
              console.log(data);

              if(data==0){
                  $("#main_message").fadeIn();
                  $("#main_message").html('<div class="alert alert-danger">Invoice No is already exist !!</div>');
                  $("#main_message").fadeOut(5000);
                  
              } 
              if(data==1){
                 $("#loading-image").hide();
                 $("#myDiv").css('opacity', '1');
                 $("#submit").prop('disabled', true);
                  $("#main_message").fadeIn();
                  $("#main_message").html('<div class="alert alert-success">Record Inserted Succesfully !! !!</div>');
                  $(".wrapper-tbody").remove();
                  $("#pur_challan_name").val('');
                  $("#pur_date").val('');
                  $("#puchase_entry_no").val('');
                  $("#party_no").val('');
                  $("#bill_date").val('');
                  $("#tax_type").val('');
                  $(".total_product_quantity").val('0');
                  $(".total_purchase_rate").val('0');
                  $(".total_gst").val('0');
                  $(".total_amount").val('0');
                  $(".total_withougstamount").val('0');
                  $("#main_message").fadeOut(5000);
                  window.location = '<?php echo base_url()?>purchase_challan';

                  
              }    


            }
        });
     

      });



function generate_barcode(val){

  var product_name_id = ".product_name"+val;
  var product_name = $(product_name_id).val(); 
 // alert('generate_barcode');
   $.ajax({
            type: "POST",
            url: "<?php echo base_url()?>purchase_challan/generate_barcode",
            dataType:'json',
            success: function(data){
             
              var barcode_id = ".barcode"+val;             
              $(barcode_id).val(data);
              
            }
          });
}

function change_data(){
  //alert('hi');
  var product_quantity = $("#product_quantity").val();
  var purchase_rate = $("#purchase_rate").val();
  var discount = $("#discount").val();
  var discountrs = $("#discountrs").val();

  if(product_quantity!= ''){
    if(purchase_rate=='' && discount=='' && discountrs==''){
      var total_amt = parseFloat(product_quantity);
      $("#amount").val(total_amt.toFixed(3));
    }
    else if(purchase_rate!='' && discount=='' && discountrs==''){
      var total_amt = parseFloat(product_quantity * purchase_rate);
      $("#amount").val(total_amt.toFixed(3));
    }
    else if(purchase_rate!='' && discount!='' && discountrs==''){
      if(discount>0){
        var total_amt = parseFloat(product_quantity * purchase_rate);
        var discount = parseFloat((product_quantity * purchase_rate)*(discount/100));
        var discounted_amt = parseFloat(total_amt - discount);
        $("#amount").val(discounted_amt.toFixed(3));
      }
      else{
        var discounted_amt = total_amt;
        $("#amount").val(discounted_amt.toFixed(2));
      }
      
    }
    else if(purchase_rate!='' && discount=='' && discountrs!=''){
      if(discountrs>0){
        var total_amt = parseFloat(product_quantity * purchase_rate);
        var discounted_amt = parseFloat(total_amt - discountrs);
         $("#amount").val(discounted_amt.toFixed(3));
      }else{
        var discounted_amt = total_amt;
        $("#amount").val(discounted_amt.toFixed(3));
      }
    }
     else if(purchase_rate!='' && discount!='' && discountrs!=''){
    
        var discountamtwithrs = parseFloat(product_quantity * purchase_rate)-discountrs;
        //alert(discountamtwithrs);

        var discounted_amt = parseFloat((discountamtwithrs)*(discount/100)).toFixed(3);
        //alert(discounted_amt);
        var amountwithoutgst = parseFloat(discountamtwithrs)- parseFloat(discounted_amt);
       // alert(amountwithoutgst);
         $("#amount").val(amountwithoutgst.toFixed(3));
      
      
    }//new condition
  }
}

  


function data_change_row(val){
//  alert(val);

  var product_quantity1 = ".product_quantity"+val;
  var product_quantity=$(product_quantity1).val(); 

  var purchase_rate1 = ".purchase_rate"+val;
  var purchase_rate=$(purchase_rate1).val(); 

  var discount1 = ".discount"+val;
  var discount = $(discount1).val();

  var discountrs1 = ".discountrs"+val;
  var discountrs = $(discountrs1).val(); 

  var gst1 = ".gst"+val;
  var gst = $(gst1).val();
  
  var gstval_id = ".gstval"+val;

  var amount1 = ".amount"+val; 
   

  var withoutgstamt = ".totamount"+val; 
 // alert(withoutgstamt);
  
  var total_amt = parseFloat(product_quantity * purchase_rate);

  if(discount!='' && gst==''){
    var discount = parseFloat((product_quantity * purchase_rate)*(discount/100));
    var discounted_amt = parseFloat(total_amt - discount);
    $(amount1).val(discounted_amt.toFixed(2));
  }else if(discountrs!='' && discount=='' && gst==''){
    var discounted_amt = parseFloat(total_amt - discountrs);
    $(amount1).val(discounted_amt.toFixed(2));
  }
  else if(discountrs=='' && discount=='' && gst==''){
    var discounted_amt = total_amt;
    $(amount1).val(discounted_amt.toFixed(2));
  }else if(discount=='' && discountrs == '' && gst!=''){
      var gst_val = total_amt * (gst/100);  
      var amtwithgst = parseFloat(total_amt) + gst_val;    
      $(gstval_id).val(gst_val.toFixed(3));
      $(amount1).val(amtwithgst.toFixed(2));
      $(withoutgstamt).val(total_amt.toFixed(2));
  }else if(discount!='' && discountrs == '' && gst!=''){
      var discount = parseFloat((product_quantity * purchase_rate)*(discount/100));
      var discounted_amt = parseFloat(total_amt - discount);

       var gst_val = discounted_amt * (gst/100);  
       var amtwithgst = parseFloat(discounted_amt) + gst_val;    
       $(gstval_id).val(gst_val.toFixed(3));
       $(amount1).val(amtwithgst.toFixed(2));
       $(withoutgstamt).val(discounted_amt.toFixed(2));
  }else if(discount=='' && discountrs != '' && gst!=''){
    
      var discounted_amt = parseFloat(total_amt - discountrs);

       var gst_val = discounted_amt * (gst/100);  
       var amtwithgst = parseFloat(discounted_amt) + gst_val;    
       $(gstval_id).val(gst_val.toFixed(3));
       $(amount1).val(amtwithgst.toFixed(2));
       $(withoutgstamt).val(discounted_amt.toFixed(2));
  }else if(discount!='' && discountrs!='' && gst!=''){
     
        var discountamtwithrs = parseFloat(product_quantity * purchase_rate)-discountrs;
        var discounted_amt = parseFloat(discountamtwithrs)*(discount/100);
        var amountwithoutgst = parseFloat(discountamtwithrs)- parseFloat(discounted_amt);
        var gstval = parseFloat(amountwithoutgst)*(gst/100);
        var amountwithgst = parseFloat(amountwithoutgst) + parseFloat(gstval);
        // alert(amountwithoutgst.toFixed(2));
        // alert(gstval.toFixed(2));
        // alert(amountwithgst.toFixed(2));
         $(gstval_id).val(gstval.toFixed(3));
         $(amount1).val(amountwithgst.toFixed(2));
         $(withoutgstamt).val(amountwithoutgst.toFixed(2));
      
    }
    else if(discount!='' && discountrs!= '' && gst==''){
    var discountamtwithrs = parseFloat((product_quantity * purchase_rate)-$discountrs);
    var discounted_amt = parseFloat(discountamtwithrs)*(discount/100); 
    // var discount = parseFloat((product_quantity * purchase_rate)*(discount/100));
    // var discounted_amt = parseFloat(total_amt - discount);
    $(amount1).val(discounted_amt.toFixed(2));
    $(withoutgstamt).val(discounted_amt.toFixed(2));
  }//new condition




  var lastRowId = jQuery('.appendrow >tbody >tr').length;
  //alert(lastRowId);
 // var amountTotal = $(".amount").val();
     var amountColTotal = 0; total_amount_new =0; 
     var gstColTotal = 0; total_gst_new =0; 
     var productquantityColTotal = 0; total_productquantity_new =0; 
     var total_purchaseColTotal = 0; total_purchase_rate_new =0; 
    for (var i = 1; i <= lastRowId; i++){

      var product_quantity_id = ".product_quantity"+i;
      var product_quantity = parseFloat($(product_quantity_id).val());
      if(product_quantity){
             product_quantity = parseFloat(productquantityColTotal) + product_quantity;
      }else{
             product_quantity = 0;
      }
      total_productquantity_new = total_productquantity_new + product_quantity;

      // var total_purchase_rate_id = ".total_purchase_rate"+i;
      // var total_purchase_rate = parseFloat($(total_purchase_rate_id).val());
      // if(total_purchase_rate){
      //        total_purchase_rate = parseFloat(total_purchaseColTotal) + total_purchase_rate;
      // }else{
      //        total_purchase_rate = 0;
      // }
      // total_purchase_rate_new = total_purchase_rate_new + total_purchase_rate;
      //alert(total_purchase_rate_new);

      var total_amount1 = ".amount"+i;
      var total_amount = parseFloat($(total_amount1).val());
      if(total_amount){
             total_amount = parseFloat(amountColTotal) + total_amount;
      }else{
             total_amount = 0;
      }
      total_amount_new = total_amount_new + total_amount;

      var total_gst1 = ".gstval"+i;
      var total_gst = parseFloat($(total_gst1).val());
      if(total_gst){
             total_gst = parseFloat(gstColTotal) + total_gst;
      }else{
             total_gst = 0;
      }
      total_gst_new = total_gst_new + total_gst;

      //alert('1 '+total_gst_new);
    }
   // alert(total_amount);
    //alert(total_amount_new);
     //$(".total_purchase_rate").val(total_purchase_rate_new.toFixed(2));
     $(".total_product_quantity").val(total_productquantity_new.toFixed(2));
     $(".total_amount").val(total_amount_new.toFixed(2));
     $(".total_gst").val(total_gst_new.toFixed(3));
     var aa = parseFloat(total_amount_new) - parseFloat(total_gst_new);
       $(".total_withougstamount").val(aa.toFixed(2));

}


function getAmountColTotal1(lastRowId){
   // var lastRowId = jQuery('.appendrow >tbody >tr').length;
 //alert(lastRowId);
      var quantityColTotal = $(".total_product_quantity").val();      

      var purchaserateColTotal = $(".total_purchase_rate").val(); 
     
      var discountColTotal = $(".total_discount").val();

      var discountrsColTotal = $(".total_discountrs").val();
     
      var amountColTotal = $(".total_amount").val();
      var amountwithoutgstColTotal = $(".total_withougstamount").val();

      var gstColTotal = $(".total_gst").val();
      var total_gst1 = 0;

      var total_product_quantity = 0;
      var total_purchase_rate = 0;
      var total_discount = 0;
      var total_discountrs = 0;
      var total_amount = 0;
      var total_withougst =0;
      var total_gst = 0;

      
      for (var i = 1; i <= lastRowId; i++){

    var product_quantity1 = ".product_quantity" + i;
    var product_quantity = parseFloat($(product_quantity1).val());
    total_product_quantity += product_quantity;

    var purchase_rate1 = ".purchase_rate" + i;
    var purchase_rate = parseFloat($(purchase_rate1).val());
    total_purchase_rate += purchase_rate;

    var discount1 = ".discount" + i;
    var discount = parseFloat($(discount1).val());
    total_discount += discount || 0;

    var discountrs1 = ".discountrs" + i;
    var discountrs = parseFloat($(discountrs1).val());
    total_discountrs += discountrs || 0;

    var total_amount1 = ".amount" + i;
  var total_amountValue = parseFloat($(total_amount1).val());
  total_amount += isNaN(total_amountValue) ? 0 : total_amountValue;

  var total_gst1 = ".gstval" + i;
  var total_gstValue = parseFloat($(total_gst1).val());
  total_gst += isNaN(total_gstValue) ? 0 : total_gstValue;

    var total_withougst1 = ".totamount" + i;
    var total_withougstValue = parseFloat($(total_withougst1).val());
    total_withougst += isNaN(total_withougstValue) ? 0 : total_withougstValue;
 
}

$(".total_product_quantity").val(total_product_quantity.toFixed(2));
$(".total_purchase_rate").val(total_purchase_rate.toFixed(2));
$(".total_discount").val(total_discount.toFixed(2));
$(".total_discountrs").val(total_discountrs.toFixed(2));
$(".total_amount").val(total_amount.toFixed(2));
$(".total_withougstamount").val(total_withougst.toFixed(2));
$(".total_gst").val(total_gst.toFixed(3));
  }

  function getRowCalculation(val){
     

    var lastRowId = jQuery('.appendrow >tbody >tr').length;
    //alert(lastRowId);
    var quantityColTotal = 0, total_product_quantity_new = 0; total_product_quantity = 0;
    var purchase_rateColTotal = 0, total_purchaserate = 0; total_purchase_rate = 0;
    var discountColTotal = 0, total_discount_new = 0; total_discount = 0;
    var discountrsColTotal = 0, total_discountrs_new = 0; total_discountrs = 0;
    var amountColTotal = 0, total_amount_new = 0; total_amount = 0;   
    var withoutgstTotal = 0, total_withoutgst = 0; total_withoutgstamt = 0;
    var gstColTotal = 0,total_gst_new = 0,total_gst = 0;

    for (var i = 1; i <= lastRowId; i++){

          var product_quantity1 = ".product_quantity"+i;
          var product_quantity = parseFloat($(product_quantity1).val());
          total_product_quantity= parseFloat(quantityColTotal) + product_quantity;
           
          var total_product_quantity_new = total_product_quantity + total_product_quantity_new;
          
          var purchase_rate_id = ".purchase_rate"+i;
          var purchase_rate = parseFloat($(purchase_rate_id).val());
          total_purchase_rate= parseFloat(purchase_rateColTotal) + purchase_rate;

          total_purchaserate = total_purchase_rate + total_purchaserate;
         // alert(total_purchaserate);

          var amount_id = ".amount"+i;
          var amount = parseFloat($(amount_id).val());
          total_amount = parseFloat(amountColTotal) + amount;
          var total_amount_new = total_amount + total_amount_new;

          var gst_id = ".gstval"+i;
          var gst = parseFloat($(gst_id).val());
          total_gst = parseFloat(gstColTotal) + gst;
          total_gst_new = total_gst + total_gst_new;

          var totamount_id = ".totamount"+i;
          var totamount = $(totamount_id).val();
          //console.log(totamount_id);
         // alert(totamount);
          total_withoutgstamt = parseFloat(withoutgstTotal) + totamount;

          total_withoutgst = parseFloat(total_withoutgstamt) + total_withoutgst;
          //alert(total_withoutgstamt);






          //alert(totamount);
         
      }
      //alert(total_amount_new);
      //alert(total_gst_new);
   
       $(".total_product_quantity").val(total_product_quantity_new.toFixed(2));
       $(".total_purchase_rate").val(total_purchaserate.toFixed(2));
       $(".total_amount").val(total_amount_new.toFixed(2));
       $(".total_gst").val(total_gst_new.toFixed(3));
      var aa = parseFloat(total_amount_new) - parseFloat(total_gst_new);
       $(".total_withougstamount").val(aa.toFixed(2));
  }


</script>

<script type="text/javascript">
  $("#formcsv").submit(function(evt){
      evt.preventDefault();
   
   $.ajax({
       url: '<?php echo base_url()?>company_software/read_csvchallan',
       type: 'POST',
       data: new FormData(this),
       dataType:'json',
       async: false,
       cache: false,
       contentType: false,
       enctype: 'multipart/form-data',
       processData: false,
       success: function (response) {
        console.log(response);
        //alert()
        //console.log(response['ledger_name']);
          if(response['ledger_name']){
            $("#ledger_name").val(response['ledger_name']);
            $("#gst_in").val(response['gst']);
            $("#save_modal").prop('disabled', false);
            $("#mdlledger").modal('show');
          }else if(response[0]){
            var len = response.length;
            //alert(len);
            var append_data='';
            var k = 1;
            for(var i=0;i<len;i++){

              var product_name = response[i]['product_name'];
              var pro_id = response[i]['pro_id'];
              var unit = response[i]['unit'];
              var secondary = response[i]['secondary'];
              var conversion = response[i]['conversion'];
            

               append_data += '<div class="form-group"> <div class="row">  <div class="col-md-6"><label for="exampleInputEmail1">Product Name :</label><input type="hidden" name="pro_id" class="form-control" id="pro_id'+k+'" placeholder="Product Id" value="'+pro_id+'"><input type="text" name="product_name" class="form-control" id="product_name'+k+'" placeholder="Product Name" value="'+product_name+'">  </div><div class="col-md-6"> <label for="exampleInputEmail1">Unit *:</label><input type="text" name="unit" class="form-control" id="unit'+k+'" placeholder="Unit" value="'+unit+'"> </div> </div></div><div class="form-group"><div class="row"> <div class="col-md-6"><label for="exampleInputEmail1">Secondary *:</label><input type="text" name="secondary" class="form-control" id="secondary'+k+'" placeholder="Secondary" value="'+secondary+'"> </div><div class="col-md-6"> <label for="exampleInputEmail1">Conversion *:</label> <input type="text" name="conversion" class="form-control" id="conversion'+k+'" placeholder="Conversion" value="'+conversion+'"> </div></div> </div><hr style="border-top: 1px solid lightblue;">';

               k++;

            }
            append_data += '<input type="hidden" name="hiddenk" class="form-control" id="hiddenk" value="'+k+'">';
            $("#append_product").html(append_data);
            $("#product_modal").prop('disabled', false);
            $("#mdlproduct").modal('show');
            
          }
          else if(response == 0){
           // alert('hi');
            $("#purchase_message_exist").fadeIn();            
            $("#purchase_message_exist").text('Invoice number is already exist, Please check !!');
            $("#purchase_message_exist").fadeOut(3000);
            setTimeout(function(){
              window.location = '<?php echo base_url()?>purchase_challan/purchase_challan_form';
            }, 4000);
          }
          else if(response == 1){
            $("#purchase_message").fadeIn();
            $("#purchase_message").text('Record Inserted Successfully');
            $("#purchase_message").fadeOut(2000);

            setTimeout(function(){
              window.location = '<?php echo base_url()?>purchase_challan';
            }, 2000);           
          }
          

      }
    });
    
              
 });
</script>



<script>
  function insert_vendor(){

      var ledger_name     = $('#ledger_name').val();      
      var address         = $('#address').val();      
      var phone_no        = $('#phone_no').val();
      var email           = $('#email').val();      
      var contact_person  = $('#contact_person').val();
      var gst_in          = $('#gst_in').val();


      if(ledger_name ==null || ledger_name ==''){
        $("#vendor_name_message").text('Ledger Name field is required.');
        $("#vendor_name_message").css('display','block');
        return false;
     }

     $.ajax({
                type: "POST",
                url: "<?php echo base_url();?>company_software/insert_ledger_model",
                dataType:'json',
                data:{ledger_name:ledger_name,address:address,phone_no:phone_no,email:email,contact_person:contact_person,gst_in:gst_in},
                success: function(data){
                  console.log(data);
                  

                  if(data){
                    
                      $("#save_modal").prop('disabled', true);
                      $("#msgmodel").fadeIn();
                      $("#msgmodel").html('<div class="alert alert-success">Record Inserted Successfully</div>');
                      $("#msgmodel").fadeOut(4000);
                     // $("#mdlledger").modal('hide');
                      setTimeout(function(){
                        $('#mdlledger').modal('hide')
                      }, 4000);
                     
                  }else{
                    $("#msgmodel").fadeIn();
                    $("#msgmodel").html('<div class="alert alert-success">Record Not Inserted Successfully</div>');
                    $("#msgmodel").fadeOut(5000);
                  }
                  
                }

        });

  }


  function insert_product(){

    var hiddenlength = $("#hiddenk").val();
    var len = hiddenlength - 1;
    var product_arr = [];
    for(var i=1;i<=len;i++){

        var pro_id = $("#pro_id"+i).val();
        var product_name = $("#product_name"+i).val();
        var unit = $("#unit"+i).val();
        var secondary = $("#secondary"+i).val();
        var conversion = $("#conversion"+i).val();

        if(unit=='' || unit==null){
          $("#errormsg").text('Unit field is required.');
          $("#errormsg").css('display','block');
          $("#errormsg").fadeOut(5000);
          return false;
        }
        if(secondary=='' || secondary==null){
          $("#errormsg").text('Secondary field is required.');
          $("#errormsg").css('display','block');
          $("#errormsg").fadeOut(5000);          
          return false;
        }
        if(conversion=='' || conversion==null){
          $("#errormsg").text('Conversion field is required.');
          $("#errormsg").css('display','block');
          $("#errormsg").fadeOut(5000);
          return false;
        }

       product_row =  {'pro_id' : pro_id, 'product_name' : product_name, 'unit': unit, 'secondary': secondary, 'conversion': conversion};
        product_arr.push(product_row);


    }
    //console.log(product_arr);

    $.ajax({
          type: "POST",
          url: "<?php echo base_url();?>company_software/insert_product_model",
          dataType:'json',
          data:{product_arr:product_arr},
          success: function(data){
            console.log(data);
                  

            if(data){
              $("#product_modal").prop('disabled', true);
              $("#productmsg").fadeIn();
              $("#productmsg").text('Record Updated Successfully');
              $("#productmsg").fadeOut(4000);
              $("#productmsg").modal('hide');
              //$("#mdlproduct").modal('hide');

              setTimeout(function(){
                $('#mdlproduct').modal('hide');
              }, 3000);

               setTimeout(function(){
               $("#purchase_message").fadeIn();
              $("#purchase_message").text('All master data is added Successfully, Now you can upload CSV');
              $("#purchase_message").fadeOut(6000);
              }, 6000);
              
                     
            }else{
              $("#errormsg").fadeIn();
              $("#errormsg").text('Error to Update Record');
              $("#errormsg").fadeOut(5000);
            }   
          }

        });

  }

  function checkInvoiceExistOrNot(){
   var puchase_entry_no =  $("#puchase_entry_no").val();
   var pur_date =  $("#pur_date").val();
   if(puchase_entry_no == '' || pur_date == ''){
        $("#puchase_entry_no_msg").fadeIn();
        $("#puchase_entry_no_msg").html('<div class="alert alert-danger">Invoice Number and Date is required</div>');
        $("#puchase_entry_no_msg").fadeOut(2000);
        
   }else{
   
     $.ajax({
          type: "POST",
          url: "<?php echo base_url();?>purchase_challan/checkInvoiceExistOrNot",
          dataType:'json',
          data:{puchase_entry_no:puchase_entry_no,pur_date:pur_date},
          success: function(data){
            //console.log(data);
                  
              if(data==1){

                  $("#puchase_entry_no_msg").fadeIn();
                  $("#puchase_entry_no_msg").html('<div class="alert alert-danger">Invoice number is already exist</div>');
                  $("#puchase_entry_no_msg").fadeOut(2000);
                  $("#puchase_entry_no").val(''); 
                  $("#puchase_entry_no").focus();  
              }
              else{
                  $("#puchase_entry_no_msg").fadeIn();
                  $("#puchase_entry_no_msg").html('<div class="alert alert-success">Invoice Number is OK</div>');
                  $("#puchase_entry_no_msg").fadeOut(2000);
                 
              }
          }

        });
    }
  }

 
  $(document).ready(function() {
  // Bind a click event to the element with the id "updateProductList"
  $("#updateProductList").click(function() {
    get_product_list();
  });

  function get_product_list() {
    // Clear the select element
    $("#pro_id").empty();

    $.ajax({
      type: "POST",
      url: "<?php echo base_url();?>purchase_challan/get_product_list",
      dataType: 'json',
      success: function(data) {
        console.log(data);
        $('.updateproduct').append('<option value="">Select Product Name</option>');
        for (var i = 0; i < data.length; i++) {
          console.log("Adding option:", data[i].product_name);
          $('.updateproduct').append('<option value="' + data[i].pro_id + '">' + data[i].product_name + '</option>');

        }
      },
      error: function(xhr, status, error) {
        console.error("AJAX request failed:", status, error);
      }
    });
  }


  $(".select_mfg_date").on('change', function() {
    var mfg_date = $(this).val();
    var selflife = 0;
    selflife = $("#selflife").val();
    
    console.log("Mfg Date:", mfg_date);
    console.log("Self Life:", selflife);

    var exp_date; // Initialize exp_date
    var matchResult = selflife.match(/\d+/);
    if (matchResult !== null && matchResult.length > 0) {
        var numericValue = parseInt(matchResult[0]) -1 ;

        // Parse the mfg_date into a JavaScript Date object
        var mfgDateParts = mfg_date.split('-'); // Use '-' as separator
        var mfgMonth = parseInt(mfgDateParts[0]) - 1; // Month is 0-based, subtract 1
        var mfgYear = parseInt(mfgDateParts[1]);

        var mfgDate = new Date(mfgYear, mfgMonth, 1); // Set day to 1

        // Add the numericValue (in months) to the mfg_date
        mfgDate.setMonth(mfgDate.getMonth() + numericValue);

        // Format the exp_date in "mm-yyyy" format
        var expMonth = mfgDate.getMonth()+1; // Adding 1 to get the correct month
        var expYear = mfgDate.getFullYear();

        exp_date = expMonth.toString().padStart(2, '0') + '-' + expYear.toString();

    } else {
        console.log("No numeric value found.");
    }
    console.log("Exp Date:", exp_date);
    $("#expiry_date").val(exp_date);
});



});

</script>
