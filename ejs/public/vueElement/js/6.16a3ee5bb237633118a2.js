webpackJsonp([6,12],{"3Bvu":function(e,t){e.exports={draw:1,recordsTotal:6,recordsFiltered:6,data:[{delFlag:1,descript:"系统管理员",name:"系统管理员",id:1},{delFlag:1,descript:"",name:"录入员",id:4},{delFlag:1,descript:"",name:"123",id:5},{delFlag:1,descript:"",name:"12313",id:6},{delFlag:1,descript:"数据审核",name:"审核员",id:8},{delFlag:1,descript:"",name:"测试员",id:9}]}},CgO8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("viA7"),l=a("cAgV"),i=(a("0xDb"),a("fO4+")),n=([{key:"CN",display_name:"China"},{key:"US",display_name:"USA"},{key:"JP",display_name:"Japan"},{key:"EU",display_name:"Eurozone"}].reduce(function(e,t){return e[t.key]=t.display_name,e},{}),a("3Bvu")),s={name:"complexTable",directives:{waves:l.a},data:function(){return{tableKey:0,list:n.data,total:null,listLoading:!1,listQuery:{page:1,limit:10,importance:void 0,title:void 0,type:void 0,sort:"+id"},addDialog:!0}},methods:{add:function(){this.addDialog=!1},getback:function(e){this.addDialog=e},getList:function(){var e=this;this.listLoading=!0,Object(r.b)(this.listQuery).then(function(t){e.list=t.data.items,e.total=t.data.total,e.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(e){this.listQuery.limit=e,this.getList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getList()},handleModifyStatus:function(e,t){this.$message({message:"操作成功",type:"success"}),e.status=t},reload:function(){this.addDialog=!0}},components:{"add-role":i.default},watch:{$route:"reload"}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{directives:[{name:"show",rawName:"v-show",value:e.addDialog,expression:"addDialog"}],staticClass:"app-container calendar-list-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:e.$t("premiss.filter.title_2")},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.title,callback:function(t){e.$set(e.listQuery,"title",t)},expression:"listQuery.title"}}),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("\n        "+e._s(e.$t("premiss.filter.search"))+"\n      ")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.add}},[e._v("\n        "+e._s(e.$t("premiss.filter.add"))+"\n      ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"给我一点时间",border:"",stripe:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{type:"selection","min-width":"55",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:e.$t("premiss.table.name"),"min-width":"180px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),a("el-table-column",{attrs:{"min-width":"180px",align:"center",label:e.$t("premiss.table.descript")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.descript))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:e.$t("premiss.table.actions"),"min-width":"230","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-edit"},on:{click:e.add}},[e._v("\n            "+e._s(e.$t("premiss.table.edit"))+"\n          ")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleModifyStatus(t.row,"deleted")}}},[e._v("\n            "+e._s(e.$t("premiss.table.delete"))+"\n          ")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.listQuery,"page",t)}}})],1)],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!e.addDialog,expression:"!addDialog"}]},[a("add-role",{attrs:{addDialog:e.addDialog},on:{c:function(t){e.getback(t)}}})],1)])},staticRenderFns:[]},c=a("VU/8")(s,o,!1,null,null,null);t.default=c.exports},Koeh:function(e,t,a){var r=a("nl+2");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("6bd5b8fa",r,!0)},"fO4+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"addForm",props:["addDialog"],data:function(){return{ruleForm:{type:"",name:"",contacts:"",tel:"",email:"",fax:"",province:"",city:"",district:"",address:"",desc:""},rules:{type:[{required:!0,message:"请选择客户类型",trigger:"change"}],name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:6,max:30,message:"长度在 6 到 30 个字符",trigger:"blur"}],contacts:[{required:!0,message:"请输入联系人",trigger:"blur"},{min:3,max:10,message:"长度在 3 到 10 个字符",trigger:"blur"}],tel:[{required:!0,message:"请输入联系电话",trigger:"blur"},{validator:function(e,t,a){""!==t&&((/^((\+86)|(86))?(13)\d{9}$/.test(t)||/^0\d{2,3}-?\d{7,8}$/.test(t))&&a(),a(new Error("请输入正确的联系电话")))},trigger:"change"}],email:[{type:"email",message:"请输入正确的邮箱",trigger:"blur,change"}],province:[{required:!0,message:"请选择省份",trigger:"change"}],address:[{required:!0,message:"请输入详细地址",trigger:"blur"},{min:1,max:30,message:"长度在 1 到 30 个字符",trigger:"blur,change"}],desc:[{min:0,max:200,message:"长度在 0 到 200 个字符",trigger:"change"}]}}},activated:function(){},deactivated:function(){this.$refs.ruleForm.resetFields()},methods:{goback:function(){this.$emit("c","true")},submitForm:function(e){this.$refs[e].validate(function(e){if(!e)return!1;alert("submit!")})},resetForm:function(e){this.$refs[e].resetFields()}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form-container"},[a("div",{staticClass:"page-bread"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[e._v("权限管理")]),e._v(" "),a("el-breadcrumb-item",[e._v(e._s(this.$route.params.customerid?"编辑权限":"新增权限"))])],1)],1),e._v(" "),a("div",{staticClass:"form-content"},[a("el-form",{ref:"ruleForm",staticClass:"form-wraper",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"120px"}},[this.$route.params.customerid?a("el-form-item",{attrs:{label:"客户编号"}},[a("span",[e._v(e._s(this.$route.params.customerid))])]):e._e(),e._v(" "),a("el-form-item",{attrs:{label:"客户类型",prop:"type"}},[a("el-select",{staticStyle:{display:"block"},attrs:{placeholder:"请选择客户类型"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系人",prop:"contacts"}},[a("el-input",{model:{value:e.ruleForm.contacts,callback:function(t){e.$set(e.ruleForm,"contacts",t)},expression:"ruleForm.contacts"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系电话",prop:"tel"}},[a("el-input",{model:{value:e.ruleForm.tel,callback:function(t){e.$set(e.ruleForm,"tel",t)},expression:"ruleForm.tel"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"传真",prop:"fax"}},[a("el-input",{model:{value:e.ruleForm.fax,callback:function(t){e.$set(e.ruleForm,"fax",t)},expression:"ruleForm.fax"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"联系地址",prop:"province"}},[a("el-col",{attrs:{span:7}},[a("el-select",{attrs:{placeholder:"选择省份"},model:{value:e.ruleForm.province,callback:function(t){e.$set(e.ruleForm,"province",t)},expression:"ruleForm.province"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),a("el-col",{staticClass:"line",attrs:{span:1}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:7}},[a("el-select",{attrs:{placeholder:"选择城市"},model:{value:e.ruleForm.city,callback:function(t){e.$set(e.ruleForm,"city",t)},expression:"ruleForm.city"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),a("el-col",{staticClass:"line",attrs:{span:1}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-select",{attrs:{placeholder:"选择区/县"},model:{value:e.ruleForm.district,callback:function(t){e.$set(e.ruleForm,"district",t)},expression:"ruleForm.district"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{prop:"address"}},[a("el-input",{model:{value:e.ruleForm.address,callback:function(t){e.$set(e.ruleForm,"address",t)},expression:"ruleForm.address"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"desc"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.desc,callback:function(t){e.$set(e.ruleForm,"desc",t)},expression:"ruleForm.desc"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm")}}},[e._v("立即创建")]),e._v(" "),a("el-button",{on:{click:e.goback}},[e._v("取消")])],1)],1)],1)])},staticRenderFns:[]};var i=a("VU/8")(r,l,!1,function(e){a("Koeh")},null,null);t.default=i.exports},"nl+2":function(e,t,a){(e.exports=a("FZ+f")(!1)).push([e.i,"\n.form-container {\n  height: auto;\n  overflow: hidden;\n  padding: 20px;\n}\n.form-container .form-content {\n  height: auto;\n  overflow: hidden;\n  padding: 15px;\n  background: #fff;\n}\n.form-container .form-content .form-wraper {\n  width: 500px;\n  margin-left: -58px;\n}\n.form-container .form-content .form-wraper .line {\n  text-align: center;\n}\n",""])}});