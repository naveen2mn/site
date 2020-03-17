<%@ Page Title="Product" Language="C#" MasterPageFile="~/Master/Site.Master" AutoEventWireup="true" CodeBehind="Products.aspx.cs" Inherits="rimREADY.Products" %>

<%@ Register Assembly="Telerik.Web.UI" Namespace="Telerik.Web.UI" TagPrefix="telerik" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MetaRefreshContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="head" runat="server">
    <link href="<%= Page.ResolveUrl("~/Areas/rimREADY/Styles/general_tab.css")%>" rel="stylesheet" type="text/css" media="all">
    <link href="<%= Page.ResolveUrl("~/Areas/rimREADY/Styles/grid.css")%>" rel="stylesheet" type="text/css" media="all">
    <link href="<%= Page.ResolveUrl("~/Areas/rimREADY/Styles/zTreeStyle/zTreeStyle.css")%>" rel="stylesheet" type="text/css" media="all">
    <style>
        .well {
    padding: 4px 0;
    height: calc(100vh - 365px);
    margin: 5px;
}
        .tab-pane .panel-body {
            min-height: 200px;
        }
        .nls-input {
    width: 100%;
    border: 1px solid #5a5a5a;
    padding: 4px;
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
}
        .nls-multi-dropdown {
    width: 100%;
    border: 1px solid #5a5a5a;
    padding: 4px;
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
}
        .nls-dropdown {
    width: 100%;
    border: 1px solid #5a5a5a;
    padding: 4px;
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
}
        .nls-textarea {
    width: 100%;
    border: 1px solid #5a5a5a;
    padding: 4px;
    font-family: "Open Sans", sans-serif;
    font-size: 12px;
    
}
        .nls-noresize {
    resize: none;    
        }

        .ztree li {
                line-height: 24px;
        }
            .ztree li a.curSelectedNode {
                height: 24px;
            }
.ztree li>span.button {
    background-position: -92px -54px;
    /*display: none;*/
}
.ztree li span.button {
    margin: 3px 3px 0 0;
}


/* Tab list*/
  .tab .nav-tabs {
margin-bottom: 10px;
    border: none;
    padding-top: 10px;
        }

            .tab .nav-tabs li a {
                color: #444;
                padding: 5px 20px;
                margin-right: 10px;
                border: none;
                border-radius: 0;
                box-shadow: 5px 5px 5px 1px rgba(2, 2, 2, 0.5);
                overflow: hidden;
                z-index: 1;
                position: relative;
                transition: all 0.3s ease 0s;
                /*background: #f1f1f1;*/
                background: #ffffff;
            }

            .tab .nav-tabs li:last-child a {
                margin-right: 0;
            }

            .tab .nav-tabs li a:hover,
            .tab .nav-tabs li.active a {
                color: #fff;
                border-color: transparent;
                border: none;
            }

            .tab .nav-tabs li a:before {
                content: "";
                background: linear-gradient(to right, #2F80ED, #56CCF2);
                width: 100%;
                height: 100%;
                transform: scaleX(0);
                transform-origin: 0 50% 0;
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
                transition: all 0.5s ease-out 0s;
            }

            .tab .nav-tabs li.active a:before
            /*.tab .nav-tabs li a:hover:before*/ {
                transform: scaleX(1);
                transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
            }
            .tab .nav-tabs li a:hover {
                color:#06bbd5;
            }
            .tab .nav-tabs li.active a:hover {
                color:inherit;
            }
        .tab .tab-content {
    box-shadow: 0 0 10px -5px #292929;
    background: #ffffff;
    border-radius: 4px 4px 0 0 ;
        }

            .tab .tab-content h3 {
                font-weight: 600;
                text-transform: uppercase;
                margin-top: 0;
            }

        @media only screen and (max-width: 767px) {
            .tab .nav-tabs li a {
                padding: 10px 20px;
            }
        }

        @media only screen and (max-width: 479px) {
            .tab .nav-tabs li {
                text-align: center;
                width: 100%;
                margin-bottom: 15px;
            }
        }
    </style>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="BodyHeaderPlaceHolder" runat="server">
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="MainContent" runat="server">
    <div class="body-content" id="divcheck">
        <asp:UpdatePanel ID="UpdateBrowseDocs" runat="server" UpdateMode="Always">
            <ContentTemplate>
                <asp:HiddenField ID="hdnValue" runat="server" ClientIDMode="Static" />
                <div class="row">
                    <div class="col-sm-12">
                        <div class="panel panel-custom">
                            <div class="panel-heading">Product Information</div>
                            <div class="panel-body" id="ProductInfo" style="padding:10px 15px;"></div>
                        </div>
                    </div>
                </div>
                <div class="tab" role="tabpanel">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs" role="tablist">
                        <li role="presentation" class="active"><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">Substance(s)</a></li>
                        <li role="presentation"><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">API/Formulation(s)</a></li>
                        <li role="presentation"><a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab">Document Type(s)</a></li>
                        <li role="presentation"><a href="#Section4" aria-controls="messages" role="tab" data-toggle="tab">RLD</a></li>
                    </ul>

                    <!-- Tab panes -->
                    <div class="tab-content tabs">
                        <div role="tabpanel" class="tab-pane fade in active" id="Section1">
                            <div class="panel-body">
                                <div class="row pad-bot-8">
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                                        <label class="tabSubTitle nls-requierd">Available Substance(s)</label>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                        <select class="nls-multi-dropdown" id="AvailableSubstance" name="AvailableSubstance">
                                            <option value="AC">Choose ProductFamily</option>
                                            <option value="AD">B</option>
                                            <option value="AM">C</option>
                                            <option value="AP">D</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                        <textarea class="nls-textarea nls-noresize"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="Section2">
                            <div class="row pad-bot-8">
                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                    <div class="well">
                                        <ul id="treeDemo" class="ztree"></ul>
                                    </div>
                                </div>
                                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                                    <div class="panel-body">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="Section3">
                            <div class="panel-body">
                                <div class="row pad-bot-8">
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                        <label class="tabSubTitle nls-requierd">Document Level</label>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                        <select class="nls-dropdown" id="DocumentLevel" name="DocumentLevel"></select>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                        <label class="tabSubTitle nls-requierd">Document Type</label>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                        <select class="nls-multi-dropdown" name="DocumentType" id="DocumentType"></select>

                                    </div>
                                    <div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                                        <span class="fa fa-plus fa-1x add-row" name="DocumentTypeBtn"></span>
                                    </div>
                                </div>
                                <div class="row clearfix">
                                    <div class="col-lg-12">
                                        <table class="rgMasterTable labeltext">
                                            <thead>
                                                <tr>
                                                    <th style="width: 40%;">Document Level</th>
                                                    <th style="width: 50%;">Document Type</th>
                                                    <th style="width: 10%; text-align: center;">Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody id="DocumentLevelGrid">
                                                <tr>
                                                    <td style="width: 40%">Core Document</td>
                                                    <td style="width: 50%">Core Document</td>
                                                    <td style="width: 10%; text-align: center;"><span class="fa fa-trash fa-1x delete-row" style="color: #e41f1f;"></span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role="tabpanel" class="tab-pane fade" id="Section4">
                            <div class="panel-body">
                                <div class="row pad-bot-8">
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                        <label class="nls-requierd">RLD Name</label>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                        <input class="nls-input" name="RLDName">
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                        <label class=" nls-requierd">RLD Due Date</label>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                                        <input class="date-picker nls-datepicker" name="RLDDueDate">
                                    </div>
                                </div>
                                <div class="row pad-bot-8">
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
                                        <label class="nls-requierd">Remarks</label>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                                        <textarea class="nls-textarea nls-input" name="RLDRemarks"></textarea>
                                    </div>
                                </div>
                                <div class="row pad-bot-8 hide">
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                                        <span id="MainContent_lblRLDName" class="labeltext">RLD Name</span>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-6">
                                        <input name="ctl00$MainContent$txtRLDName" type="text" id="MainContent_txtRLDName" class="navInputClass">
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                                        <span id="MainContent_lblRLDDate" class="labeltext">Last Updated Date</span>
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                    </div>
                                    <div class="row pad-bot-8">
                                        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-6">
                                            <span id="MainContent_lblRLDRemarks" class="labeltext">Remarks</span>
                                        </div>
                                        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                            <textarea name="ctl00$MainContent$txtRLDRemarks" rows="3" cols="20" id="MainContent_txtRLDRemarks" class="navTextAreaClass" style="width: 350px;"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row pad-bot-8">
                    <div class="col-sm-12" style="text-align: right">
                        <div class="panel" style="margin: 0;padding: 8px 10px; box-shadow: 0px 5px 10px -6px #292929; border-radius: 0 0 4px 4px;">
                            <div class="btn btn-success">Submit</div>
                            <div class="btn btn-default">Cancel</div>
                        </div>
                    </div>
                </div>
            </ContentTemplate>
        </asp:UpdatePanel>
    </div>
</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FooterPlaceHolder" runat="server">
    <script type="text/javascript" src="<%= Page.ResolveUrl("~/Areas/rimREADY/Scripts/jquery.min.js")%>"></script>
    <script type="text/javascript" src="<%= Page.ResolveUrl("~/Areas/rimREADY/Scripts/bootstrap.min.js")%>"></script>
    <script type="text/javascript" src="<%= Page.ResolveUrl("~/Areas/rimREADY/Scripts/jquery.ztree.core-3.5.min.js")%>" ></script>
    <script type="text/javascript" src="<%= Page.ResolveUrl("~/Areas/rimREADY/Scripts/jquery.ztree.excheck-3.5.min.js")%>" ></script>
    <script type="text/javascript" src="<%= Page.ResolveUrl("~/Areas/rimREADY/Scripts/jquery.ztree.exedit-3.5.min.js")%>" ></script>
    <script type="text/javascript">
        "use strict;"
        var productModel = {
            "Lookup":{
                "AvailableSubstance": [{ "Code": 1, "Value": "Doxepin1111" }, { "Code": 2, "Value": "Ibandronic Acid1232" }, { "Code": 3, "Value": "Hydrocortisone" }, { "Code": 4, "Value": "Paracetomol" }, { "Code": 5, "Value": "Dolo500mg" }],
                "DocumentLevel": [{ "Code": 1, "Value": "Market" }, { "Code": 2, "Value": "PackSize" }, { "Code": 3, "Value": "Product" }, { "Code": 4, "Value": "Strength" }],
                "DocumentType": [{ "Code": 1, "Value": "ArtWork1" }, { "Code": 2, "Value": "ArtWork2" }, { "Code": 3, "Value": "ArtWork3" }, { "Code": 4, "Value": "Device Manual" }, { "Code": 5, "Value": "Drugs Facts (OTC)" }, { "Code": 6, "Value": "Medication Guide" }, { "Code": 7, "Value": "Package Insert" }, { "Code": 8, "Value": "Package Labeling - Labels & Cartons" }, { "Code": 9, "Value": "Patient Leaflet" }, { "Code": 10, "Value": "Physician Labeling" }, { "Code": 11, "Value": "PPI" }, { "Code": 12, "Value": "Prescribing Information" }, { "Code": 13, "Value": "Product Circular" }, { "Code": 14, "Value": "Product Labeling" }, { "Code": 15, "Value": "Product Monograph" }, { "Code": 16, "Value": "Rx Drug Labeling" }, { "Code": 17, "Value": "SmPC" }, { "Code": 18, "Value": "User Manual" }]
            },
            "ProductInfo": {
                "Productfamily": [{
                    "Value": "Classic",
                    "Code": "1"
                }, {
                    "Value": "Modern",
                    "Code": "2"
                }],
                "ProductName": "",
                "ProductClassification": [{
                    "Value": "Biologics",
                    "Code": "1"
                }, {
                    "Value": "Device",
                    "Code": "2"
                }, {
                    "Value": "Drug",
                    "Code": "3"
                }],
                "ProductCategory": [{
                    "Value": "Development",
                    "Code": "1",
                    "Selected":true
                }, {
                    "Value": "Authorized",
                    "Code": "2"
                }],
                "ProductSubCategory": [{
                    "Value": "API",
                    "Code": "1"
                }, {
                    "Value": "Formulation",
                    "Code": "2",
                    "Selected": true
                }],
                "ProductType": [{
                    "Value": "Generic Product",
                    "Code": "1",
                    "Selected": true
                }, {
                    "Value": "Innovator Product",
                    "Code": "2"
                }],
                "PrescriptionStatus": [{
                    "Value": "OTC",
                    "Code": "1",
                    "Selected": true
                }, {
                    "Value": "Rx",
                    "Code": "2"
                }],
                "OrphanDrug": [{
                    "Value": "Yes",
                    "Code": "1",
                    "Selected": true
                }, {
                    "Value": "No",
                    "Code": "2"
                }],
                "Pediatric": [{
                    "Value": "Yes",
                    "Code": "1"
                }, {
                    "Value": "No",
                    "Code": "2"
                }, {
                    "Value": "Both",
                    "Code": "3",
                    "Selected": true
                }],
                "ProductOwner": [{
                    "Value": "Admin admin",
                    "Code": "1",
                    "Selected": true
                }, {
                    "Value": "Naveen",
                    "Code": "2"
                }],
                "Active": true
            },   
            "Formulation":{
                "Tree": [
                    { id: 1, pId: 0, name: "Wonder Drug", isParent: true, open:true, icon: 'Images/Icons/Drug_basket_Icon_16.png' },
                        { id: 2, pId: 1, name: "Tablet", isParent: true, open:true,icon: 'Images/Icons/tablet_16.png' },
                        { id: 3, pId: 2, name: "100 mg", isParent: false, icon: 'Images/Icons/Drug_basket_Icon_16.png' },
                ]
            },
            "DosageForm": [{ "code": 1, "Value": "Tablets for Oral Suspension" }, { "code": 2, "Value": "Capsules" }, { "code": 3, "Value": "Chewable Tablets" }, { "code": 4, "Value": "Delayed Release Capsules" }, { "code": 5, "Value": "Dispersible Tablets" }, { "code": 6, "Value": "Enteric coated Tablets" }, { "code": 7, "Value": "Film coated Tablets" }, { "code": 8, "Value": "Gastro Resistant Capsules" }, { "code": 9, "Value": "Gastro Resistant Tablets" }, { "code": 10, "Value": "Injection" }, { "code": 11, "Value": "Oral Solution" }, { "code": 12, "Value": "Oral Suspension" }, { "code": 13, "Value": "Orally Disintegrating Tablets" }, { "code": 14, "Value": "Orodispersable Tablets" }, { "code": 15, "Value": "Powder for Injection" }, { "code": 16, "Value": "Powder for Oral Solution" }, { "code": 17, "Value": "Powder for Oral suspension" }, { "code": 18, "Value": "Powder for Solution for Infusion" }, { "code": 19, "Value": "Powder for Solution for Injection" }, { "code": 20, "Value": "Prolonged Release Capsules" }, { "code": 21, "Value": "Sugar coated Tablets" }, { "code": 22, "Value": "Sustained Release Capsules" }, { "code": 23, "Value": "Sustained Release Tablets" }, { "code": 24, "Value": "Tablets" }, { "code": 25, "Value": "Tablets (Co-Package)" }, { "code": 26, "Value": "Tablets (Scored)" }, { "code": 27, "Value": "Extended Release Tablet" }, { "code": 28, "Value": "Powder for Solution for Injection or Infusion" }, { "code": 29, "Value": "Hard Tablets" }, { "code": 29, "Value": "Hard Tablets" }],
            "Strength": [{ "code": 1, "Value": "0.1 mg" }, { "code": 2, "Value": "0.5 mg" }, { "code": 3, "Value": "1 mg" }, { "code": 4, "Value": "1.25 mg" }, { "code": 5, "Value": "2 mg" }, { "code": 6, "Value": "2.5 mg" }, { "code": 7, "Value": "3 mg" }, { "code": 8, "Value": "4 mg" }, { "code": 9, "Value": "5 mg" }, { "code": 10, "Value": "5/20 mg" }, { "code": 11, "Value": "5/40 mg" }, { "code": 12, "Value": "6 mg" }, { "code": 13, "Value": "6.25 mg" }, { "code": 14, "Value": "7.5 mg" }, { "code": 15, "Value": "8 mg" }, { "code": 16, "Value": "10 mg" }, { "code": 17, "Value": "10/12.5 mg" }, { "code": 18, "Value": "10/20 mg" }, { "code": 19, "Value": "10/40 mg" }, { "code": 20, "Value": "12.5 mg" }, { "code": 21, "Value": "15 mg" }, { "code": 22, "Value": "16 mg" }, { "code": 23, "Value": "18 mg" }, { "code": 24, "Value": "20 mg" }, { "code": 25, "Value": "20/12.5 mg" }, { "code": 26, "Value": "24 mg" }, { "code": 27, "Value": "25 mg" }, { "code": 28, "Value": "30 mg" }, { "code": 29, "Value": "30/60mg" }, { "code": 30, "Value": "30/150/200 mg" }, { "code": 31, "Value": "40 mg" }, { "code": 32, "Value": "45 mg" }, { "code": 33, "Value": "50 mg" }, { "code": 34, "Value": "50/8 mg" }, { "code": 35, "Value": "60 mg" }, { "code": 36, "Value": "70 mg" }, { "code": 37, "Value": "80 mg" }, { "code": 38, "Value": "100 mg" }, { "code": 39, "Value": "100/25 mg" }, { "code": 40, "Value": "125 mg" }, { "code": 41, "Value": "150 mg" }, { "code": 42, "Value": "150/300 mg" }, { "code": 43, "Value": "150/300 mg + 600 mg" }, { "code": 44, "Value": "150/300/200 mg" }, { "code": 45, "Value": "160 mg" }, { "code": 46, "Value": "200 mg" }, { "code": 47, "Value": "200/50 mg" }, { "code": 48, "Value": "200/300 mg" }, { "code": 49, "Value": "250 mg" }, { "code": 50, "Value": "250-125 mg" }, { "code": 51, "Value": "300 mg" }, { "code": 52, "Value": "300/300 mg" }, { "code": 53, "Value": "320 mg" }, { "code": 54, "Value": "375 mg" }, { "code": 55, "Value": "400 mg" }, { "code": 56, "Value": "500 mg" }, { "code": 57, "Value": "500-125 mg" }, { "code": 58, "Value": "600 mg" }, { "code": 59, "Value": "600/200/300 mg" }, { "code": 60, "Value": "600/300 mg" }, { "code": 61, "Value": "600/300/300 mg" }, { "code": 62, "Value": "625 mg" }, { "code": 63, "Value": "750 mg" }, { "code": 64, "Value": "800 mg" }, { "code": 65, "Value": "850 mg" }, { "code": 66, "Value": "875-125 mg" }, { "code": 67, "Value": "1000 mg" }, { "code": 68, "Value": "1500 mg" }, { "code": 69, "Value": "2000 mg" }, { "code": 70, "Value": "1 g" }, { "code": 71, "Value": "1.2 g" }, { "code": 72, "Value": "1.5 g" }, { "code": 73, "Value": "2 g" }, { "code": 74, "Value": "2.25 g" }, { "code": 75, "Value": "3.0 g" }, { "code": 76, "Value": "4.5 g" }, { "code": 77, "Value": "5 ml" }, { "code": 78, "Value": "10 ml" }, { "code": 79, "Value": "1 mg/ml" }, { "code": 80, "Value": "4 mg/2ml" }, { "code": 81, "Value": "8 mg/4ml" }, { "code": 82, "Value": "10 mg/ml" }, { "code": 83, "Value": "20 mg/ml" }, { "code": 84, "Value": "40 mg/5ml" }, { "code": 85, "Value": "50 mg/5ml" }, { "code": 86, "Value": "50 mg/ml" }, { "code": 87, "Value": "100 mg/2ml" }, { "code": 88, "Value": "100 mg/5ml" }, { "code": 89, "Value": "125 mg/5 ml" }, { "code": 90, "Value": "125-31.25 mg/5 ml" }, { "code": 91, "Value": "156.25 mg/5 mL" }, { "code": 92, "Value": "240 mg/5 mL" }, { "code": 93, "Value": "250 mg/5 ml" }, { "code": 94, "Value": "250-62.50 mg/5 ml" }, { "code": 95, "Value": "312.50 mg/5 ml" }, { "code": 96, "Value": "25 mg & 30 mg" }, { "code": 97, "Value": "40 mg / 12.5 mg" }, { "code": 98, "Value": "80 mg / 12.5 mg" }, { "code": 99, "Value": "5 mg / 5 ml" }]

        }
        
      

        function generateDropdown(data,name){
            var html = '';
            data.forEach(function(e,index){
                html+= '<option index="'+index+'">'+e[name]+'</option>';
            });
            return html;
        }
        
        function renderGrid(id, data){
            html += '<tr>';
            html += '<td style="width: 40%">Core Document</td>';
            html += '<td style="width: 50%">Core Document</td>';
            html += '<td style="width: 10%; text-align: center;"><span class="fa fa-trash fa-1x delete-row" style="color: #e41f1f;"></span></td>'
            html += '</tr>';
            $('#'+id).empty().append(html);
        }

        function onNodeClick(event, treeId, treeNode) {
            
            if ( treeNode.id != 1) {
                alert(treeNode.tId + ", " + treeNode.name);
                console.log(treeNode.id);
            }
        };

        var selectedDossage = [];

        function onNodeRightClick(event, treeId, treeNode) {
            
            if (treeNode.level == 0) {
                var modalBody = '';
                modalBody = '<select class="nls-dropdown" name="DosageForm">';
                productModel.DosageForm.forEach(function (e,index) {
                    modalBody += '<option index="'+index+'">'+e.Value+'</option>';
                })
                modalBody += '</select>';

                Modal("Add Dossage", modalBody, [{ Value: "Save", Css: "btn-primary", Callback: addDosage }, { Value: "Close", Css: "btn-default", Callback: function (event) { Modal.Close(); } }, ]);
                Show();
            }
            if (treeNode.level == 1) {
                modalBody = '<select class="nls-dropdown" name="Strength">';
                productModel.Strength.forEach(function (e, index) {
                    modalBody += '<option index="' + index + '">' + e.Value + '</option>';
                })
                modalBody += '</select>';


                Modal("Add Strength", modalBody, [{ Value: "Save", Css: "btn-primary", Callback: addDosage }, { Value: "Close", Css: "btn-default", Callback: function (event) { Modal.Close(); } }]);
                Show();
            }
        
        /*---------------------*/    
            if (!treeNode && event.target.tagName.toLowerCase() != "button" && $(event.target).parents("a").length == 0) {
                zTree.cancelSelectedNode();
                showRMenu("root", event.clientX, event.clientY);
            } else if (treeNode && !treeNode.noR) {
                zTree.selectNode(treeNode);
                showRMenu("node", event.clientX, event.clientY);
            }
            $('.nls-dropdown').change(onSelectedValue)
        };

        function onSelectedValue(e) {
            var index = e.target.getAttribute('index');
            var selectedIndex = e.target.options[e.target.selectedIndex].getAttribute('index');
            var name = e.target.getAttribute('name');
        }

        function addDosage() {
            alert('Added Dosage')
        }

        function showRMenu(type, x, y) {
            $("#rMenu ul").show();
            if (type == "root") {
                $("#m_del").hide();
                $("#m_check").hide();
                $("#m_unCheck").hide();
            } else {
                $("#m_del").show();
                $("#m_check").show();
                $("#m_unCheck").show();
            }

            y += document.body.scrollTop;
            x += document.body.scrollLeft;
            rMenu.css({ "top": y + "px", "left": x + "px", "visibility": "visible" });

            $("body").bind("mousedown", onBodyMouseDown);
        }

        function hideRMenu() {
            if (rMenu) rMenu.css({ "visibility": "hidden" });
            $("body").unbind("mousedown", onBodyMouseDown);
        }

        function onBodyMouseDown(event) {
            if (!(event.target.id == "rMenu" || $(event.target).parents("#rMenu").length > 0)) {
                rMenu.css({ "visibility": "hidden" });
            }
        }

        var addCount = 1;

        function addTreeNode() {
            hideRMenu();
            var newNode = { name: "newNode " + (addCount++) };
            if (zTree.getSelectedNodes()[0]) {
                newNode.checked = zTree.getSelectedNodes()[0].checked;
                zTree.addNodes(zTree.getSelectedNodes()[0], newNode);
            } else {
                zTree.addNodes(null, newNode);
            }
        }

        function renderProductTree() {
            var setting = {
                data: {
                    simpleData: {
                        enable: true
                    }
                }, callback: {
                    onClick: onNodeClick,
                    onRightClick: onNodeRightClick
                },edit:{
                    showRemoveBtn:true,
                    showRenameBtn:true
            }
            };

            var zNodes =[
                { id:1, pId:0, name:"Wonder Drug" ,open:true},
                { id:2, pId:0, name:"Tablets", icon:"../../../css/zTreeStyle/img/diy/4.png"},
                { id: 21, pId: 2, name: "100 mg", icon: "Images/Icons/product-tree-icon.png" },
                { id: 22, pId: 2, name: "200 mg", icon: "../../../css/zTreeStyle/img/diy/7.png" },
                { id:3, pId:0, name:"Capsules" },
                { id: 31, pId: 3, name: "100 mg" },
                { id: 32, pId: 3, name: "250 mg" },
                { id: 33, pId: 3, name: "300 mg" }

            ];

            $.fn.zTree.init($("#treeDemo"), setting, productModel.Formulation.Tree);
            
        }
        function renderProductView() {
            log(productModel)
            offLoader();

            var html = '';
            debugger;
            html += '<div class="row pad-bot-8">';
            html += '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">';
            html += '<label class="nls-requierd">Product Family</label>';
            html += '<select class="nls-dropdown" name="ProductFamily">';
            html += '<option index="-1">Choose a Product Family</option>';
            html += generateDropdown(productModel.ProductInfo.ProductFamily, 'ProductFamily');
            html += '</select>';
            html += '</div>';
            html += '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">';
            html += '<label class="nls-requierd">Product Classification</label>';
            html += '<select class="nls-dropdown" name="ProductClassification">';
            html += '<option index="-1">Choose a Product Classification</option>';
            html += generateDropdown(productModel.ProductInfo.ProductClassification, 'Value');
            html += '</select>';
            html += '</div>';
            html += '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">';
            html += '<label class="nls-requierd">Product Name</label>';
            html += '<input class="nls-input" name="ProductName" value="' + productModel.ProductInfo.ProductName + '">';
            html += '</div>';
            html += '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">';
            html += '<label class="nls-requierd">Product Owner</label>';
            html += '<select class="nls-dropdown" name="ProductOwner">';
            html += '<option index="-1">Choose a Product Owner</option>';
            html += generateDropdown(productModel.ProductInfo.ProductOwner, 'UserName');
            html += '</select>';
            html += '</div>';
            html += '</div>';

            html += '<div class="row pad-bot-8">';
                html += '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">';
                html += '<label class="">Product Sub Category</label><br>';
                productModel.ProductInfo.ProductCategory.forEach(function (e, index) {
                    var checkedStatus = e.Selected ? 'checked="checked"' : ''
                    html += '<input type="radio" name="ProductCategory" ' + checkedStatus + '><label>&nbsp;</label>';
                    html += '<label class="labeltext nls-checkbox" name="ProductCategory" index="' + index + '">' + e.Value + '</label>';
                })
                html += '</div>';
                html += '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">';
                html += '<label class="nls-requierd">Orphan Drug</label>';
                productModel.ProductInfo.ProductSubCategory.forEach(function (e, index) {
                    var checkedStatus = e.Selected ? 'checked="checked"' : ''
                    html += '<input type="radio" name="ProductSubCategory" ' + checkedStatus + '><label>&nbsp;</label>';
                    html += '<label class="labeltext nls-checkbox" name="ProductSubCategory" index="' + index + '">' + e.Value + '</label>';
                })
                html += '</div>';
                html += '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">';
                html += '<label class="nls-requierd">Pediatric</label>';
                productModel.ProductInfo.Pediatric.forEach(function (e, index) {
                    var checkedStatus = e.Selected ? 'checked="checked"' : ''
                    html += '<input type="radio" name="Pediatric" ' + checkedStatus + '><label>&nbsp;</label>';
                    html += '<label class="labeltext nls-checkbox" name="Pediatric" index="' + index + '">' + e.Value + '</label>';
                })
                html += '</div>';
                html += '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">';
                html += '<label class="tabSubTitle">Active</label><br>';
                var checkedStatus = productModel.ProductInfo.Active ? 'checked="checked"' : '';
                html += '<input type="checkbox" ' + checkedStatus + ' class="filled-in"><label>&nbsp;</label>';
                html += '</div>';
            html += '</div>';

            html += '<div class="row pad-bot-8" style="">';
            html += '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">';
            html += '<label class="tabSubTitle">Product Type</label>';
            productModel.ProductInfo.ProductType.forEach(function (e, index) {
                var checkedStatus = e.Selected ? 'checked="checked"' : '';
                html += '<input type="radio" name="ProductType" ' + checkedStatus + '><label>&nbsp;</label>';
                html += '<label class="labeltext nls-checkbox" name="ProductType" index="' + index + '">' + e.Value + '</label>';
            })
            html += '</div>';
            html += '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">';
            html += '<label class="tabSubTitle">Prescription Status</label>';
            productModel.ProductInfo.PrescriptionStatus.forEach(function (e, index) {
                var checkedStatus = e.Selected ? 'checked="checked"' : '';
                html += '<input type="radio" name="PrescriptionStatus" ' + checkedStatus + '><label>&nbsp;</label>';
                html += '<label class="labeltext nls-checkbox" name="PrescriptionStatus" index="' + index + '">' + e.Value + '</label>';
            })
            html += '</div>';

            html += '</div>';
            $('#ProductInfo').empty().append(html);

            list = productModel.Lookup;
            var valid = true;
            for (var i in list) {
                if (list[i].length == 0) {
                    alert(i + 'is not available..!');
                    valid = false;
                }
            }

            if (valid) {
                html = '<option index="-1">Choose Available Substance</option>';
                html += generateDropdown(productModel.Lookup.AvailableSubstance, 'Value');
                $('#AvailableSubstance').empty().append(html);

                html = '<option index="-1">Choose a Document Level</option>';
                html += generateDropdown(productModel.Lookup.DocumentLevel, 'Value');
                $('#DocumentLevel').empty().append(html);

                html = '<option index="-1">Choose Document Type</option>';
                html += generateDropdown(productModel.Lookup.DocumentType, 'Value');
                $('#DocumentType').empty().append(html);

            }

            renderProductTree();
            $('#ContentBody').empty().append(html);
        }
        function onLoadLookupData(data) {
            data = JSON.parse($('#hdnValue').val());          
            productModel.ProductInfo.ProductFamily = JSON.parse(data.ProductFamily);
            productModel.ProductInfo.ProductClassification = JSON.parse(data.ProductClassification);
            productModel.ProductInfo.ProductOwner = JSON.parse(data.ProductOwner);

            productModel.Formulation.DosageForm = [{ "code": 1, "Value": "Tablets for Oral Suspension" }, { "code": 2, "Value": "Capsules" }, { "code": 3, "Value": "Chewable Tablets" }, { "code": 4, "Value": "Delayed Release Capsules" }, { "code": 5, "Value": "Dispersible Tablets" }, { "code": 6, "Value": "Enteric coated Tablets" }, { "code": 7, "Value": "Film coated Tablets" }, { "code": 8, "Value": "Gastro Resistant Capsules" }, { "code": 9, "Value": "Gastro Resistant Tablets" }, { "code": 10, "Value": "Injection" }, { "code": 11, "Value": "Oral Solution" }, { "code": 12, "Value": "Oral Suspension" }, { "code": 13, "Value": "Orally Disintegrating Tablets" }, { "code": 14, "Value": "Orodispersable Tablets" }, { "code": 15, "Value": "Powder for Injection" }, { "code": 16, "Value": "Powder for Oral Solution" }, { "code": 17, "Value": "Powder for Oral suspension" }, { "code": 18, "Value": "Powder for Solution for Infusion" }, { "code": 19, "Value": "Powder for Solution for Injection" }, { "code": 20, "Value": "Prolonged Release Capsules" }, { "code": 21, "Value": "Sugar coated Tablets" }, { "code": 22, "Value": "Sustained Release Capsules" }, { "code": 23, "Value": "Sustained Release Tablets" }, { "code": 24, "Value": "Tablets" }, { "code": 25, "Value": "Tablets (Co-Package)" }, { "code": 26, "Value": "Tablets (Scored)" }, { "code": 27, "Value": "Extended Release Tablet" }, { "code": 28, "Value": "Powder for Solution for Injection or Infusion" }, { "code": 29, "Value": "Hard Tablets" }, { "code": 29, "Value": "Hard Tablets" }];
            productModel.Formulation.Strength = [{ "code": 1, "Value": "0.1 mg" }, { "code": 2, "Value": "0.5 mg" }, { "code": 3, "Value": "1 mg" }, { "code": 4, "Value": "1.25 mg" }, { "code": 5, "Value": "2 mg" }, { "code": 6, "Value": "2.5 mg" }, { "code": 7, "Value": "3 mg" }, { "code": 8, "Value": "4 mg" }, { "code": 9, "Value": "5 mg" }, { "code": 10, "Value": "5/20 mg" }, { "code": 11, "Value": "5/40 mg" }, { "code": 12, "Value": "6 mg" }, { "code": 13, "Value": "6.25 mg" }, { "code": 14, "Value": "7.5 mg" }, { "code": 15, "Value": "8 mg" }, { "code": 16, "Value": "10 mg" }, { "code": 17, "Value": "10/12.5 mg" }, { "code": 18, "Value": "10/20 mg" }, { "code": 19, "Value": "10/40 mg" }, { "code": 20, "Value": "12.5 mg" }, { "code": 21, "Value": "15 mg" }, { "code": 22, "Value": "16 mg" }, { "code": 23, "Value": "18 mg" }, { "code": 24, "Value": "20 mg" }, { "code": 25, "Value": "20/12.5 mg" }, { "code": 26, "Value": "24 mg" }, { "code": 27, "Value": "25 mg" }, { "code": 28, "Value": "30 mg" }, { "code": 29, "Value": "30/60mg" }, { "code": 30, "Value": "30/150/200 mg" }, { "code": 31, "Value": "40 mg" }, { "code": 32, "Value": "45 mg" }, { "code": 33, "Value": "50 mg" }, { "code": 34, "Value": "50/8 mg" }, { "code": 35, "Value": "60 mg" }, { "code": 36, "Value": "70 mg" }, { "code": 37, "Value": "80 mg" }, { "code": 38, "Value": "100 mg" }, { "code": 39, "Value": "100/25 mg" }, { "code": 40, "Value": "125 mg" }, { "code": 41, "Value": "150 mg" }, { "code": 42, "Value": "150/300 mg" }, { "code": 43, "Value": "150/300 mg + 600 mg" }, { "code": 44, "Value": "150/300/200 mg" }, { "code": 45, "Value": "160 mg" }, { "code": 46, "Value": "200 mg" }, { "code": 47, "Value": "200/50 mg" }, { "code": 48, "Value": "200/300 mg" }, { "code": 49, "Value": "250 mg" }, { "code": 50, "Value": "250-125 mg" }, { "code": 51, "Value": "300 mg" }, { "code": 52, "Value": "300/300 mg" }, { "code": 53, "Value": "320 mg" }, { "code": 54, "Value": "375 mg" }, { "code": 55, "Value": "400 mg" }, { "code": 56, "Value": "500 mg" }, { "code": 57, "Value": "500-125 mg" }, { "code": 58, "Value": "600 mg" }, { "code": 59, "Value": "600/200/300 mg" }, { "code": 60, "Value": "600/300 mg" }, { "code": 61, "Value": "600/300/300 mg" }, { "code": 62, "Value": "625 mg" }, { "code": 63, "Value": "750 mg" }, { "code": 64, "Value": "800 mg" }, { "code": 65, "Value": "850 mg" }, { "code": 66, "Value": "875-125 mg" }, { "code": 67, "Value": "1000 mg" }, { "code": 68, "Value": "1500 mg" }, { "code": 69, "Value": "2000 mg" }, { "code": 70, "Value": "1 g" }, { "code": 71, "Value": "1.2 g" }, { "code": 72, "Value": "1.5 g" }, { "code": 73, "Value": "2 g" }, { "code": 74, "Value": "2.25 g" }, { "code": 75, "Value": "3.0 g" }, { "code": 76, "Value": "4.5 g" }, { "code": 77, "Value": "5 ml" }, { "code": 78, "Value": "10 ml" }, { "code": 79, "Value": "1 mg/ml" }, { "code": 80, "Value": "4 mg/2ml" }, { "code": 81, "Value": "8 mg/4ml" }, { "code": 82, "Value": "10 mg/ml" }, { "code": 83, "Value": "20 mg/ml" }, { "code": 84, "Value": "40 mg/5ml" }, { "code": 85, "Value": "50 mg/5ml" }, { "code": 86, "Value": "50 mg/ml" }, { "code": 87, "Value": "100 mg/2ml" }, { "code": 88, "Value": "100 mg/5ml" }, { "code": 89, "Value": "125 mg/5 ml" }, { "code": 90, "Value": "125-31.25 mg/5 ml" }, { "code": 91, "Value": "156.25 mg/5 mL" }, { "code": 92, "Value": "240 mg/5 mL" }, { "code": 93, "Value": "250 mg/5 ml" }, { "code": 94, "Value": "250-62.50 mg/5 ml" }, { "code": 95, "Value": "312.50 mg/5 ml" }, { "code": 96, "Value": "25 mg & 30 mg" }, { "code": 97, "Value": "40 mg / 12.5 mg" }, { "code": 98, "Value": "80 mg / 12.5 mg" }, { "code": 99, "Value": "5 mg / 5 ml" }];
            
            renderProductView();
        }

        $(document).ready(function () {
            onLoadLookupData();

            //Ajax('Utility.asmx/GetProductLookup', 'POST', '', onLoadLookupData);
            <%--$.ajax({
                type: "POST",
                async: false,
                url: "Utility.asmx/GetProductLookup",
                url: "<%= ResolveUrl("Utility.asmx/GetProductLookup") %>",
                data: data,//JSON.stringify('{ seqnum: "' + seqnum + '", planval: "' +  planval + '" }'), //.replace(/\\/g, '\\')
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (response) {
                    console.log(response)
                },
                error: function (response) {
                    console.log(response)
                }
            })--%>
        })
        var Modal = function (title, body, buttons) {
            var title = title || "No Title",
              body = body || "No body",
              buttons = buttons || [{
                  Value: "Close",
                  Css: "btn-primary",
                  Callback: function (event) {
                      Modal.Close();
                  }
              }];
            var GetModalStructure = function () {
                var that = this;
                Modal.Id = Math.random();
                var buttonshtml = "";
                for (var i = 0; i < buttons.length; i++) {
                    buttonshtml += "<button type='button' class='btn " +
                      (buttons[i].Css || "") + "' name='btn" + Modal.Id +
                      "'>" + (buttons[i].Value || "CLOSE") +
                      "</button>";
                }
                return "<div class='modal fade' name='dynamiccustommodal' id='" + Modal.Id + "' tabindex='-1' role='dialog' data-backdrop='static' data-keyboard='false' aria-labelledby='" +
                  Modal.Id + "Label'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'><button type='button' class='close modal-white-close hide' onclick='Modal.Close()'><span aria-hidden='true'>&times;</span></button><h4 class='modal-title'>" + title +
                  "</h4></div><div class='modal-body'><div class='row'><div class='col-xs-12 col-md-12 col-sm-12 col-lg-12'>" + body + "</div></div></div><div class='modal-footer bg-default'><div class='col-xs-12 col-sm-12 col-lg-12'>" + buttonshtml + "</div></div></div></div></div>";
            }();
            Modal.Delete = function () {
                var modals = document.getElementsByName("dynamiccustommodal");
                if (modals.length > 0) document.body.removeChild(modals[0]);
            };
            Modal.Close = function () {
                $(document.getElementById(Modal.Id)).modal('hide');
                Modal.Delete();
            };
            this.Show = function () {
                Modal.Delete();
                document.body.appendChild($(GetModalStructure)[0]);
                var btns = document.querySelectorAll("button[name='btn" + Modal.Id + "']");
                for (var i = 0; i < btns.length; i++) {
                    btns[i].addEventListener("click", buttons[i].Callback || Modal.Close);
                }
                $(document.getElementById(Modal.Id)).modal('show');
            };
        };

        function Ajax(url, type, parameters, successCallback) {
            debugger;
            onLoader();
            $.ajax({
                url: url,
                type: type,
                data: parameters,
                contentType: 'application/json;',
                dataType: 'json',
                cache: false,
                success: successCallback,
                error: function (xhr, textStatus, errorThrown) {
                    offLoader();
                    console.log('Error: ' + textStatus);
                    //window.location.href = 'lr_RequestList.aspx';
                }
            });
       }
       
        function log(x) { console.log(x); }
    </script>
</asp:Content>
