(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{109:function(e,t,n){"use strict";n.r(t);var i=n(110);var a=n.n(i);for(var s in i)if(s!=="default")(function(e){n.d(t,e,function(){return i[e]})})(s);t["default"]=a.a},110:function(e,t,n){"use strict";var i=n(0);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=i(n(15));var s=i(n(16));var r=i(n(147));var o=i(n(148));var u=i(n(149));var c=i(n(150));var l=i(n(151));var h=i(n(169));var p=i(n(171));var d={name:"set_question_detail",components:{QuestionRadio:r.default,QuestionMulti:o.default,QuestionJudge:u.default,QuestionShort:c.default,QuestionFill:l.default,ChapterManage:h.default,QuestionImport:p.default},data:function e(){return{editQuestion:{visable:false,Question:null},pagination:{current:1,count:500,limit:10},config:{message:null,theme:"error",offset:80},Dict:{SINGLE:"QuestionRadio",MULTIPLE:"QuestionMulti",COMPLETION:"QuestionFill",JUDGE:"QuestionJudge",SHORT_ANSWER:"QuestionShort"},componentKey:0,componentKey1:0,componentKey2:0,curChapter:[],curChapterId:null,chapterFilters:[],chapterList:[],selection:[],questionList:[],showQuestionList:[],panels:[{name:"QuestionImport",label:"批量导入",count:10},{name:"QuestionRadio",label:"单选题",count:20},{name:"QuestionMulti",label:"多选题",count:30},{name:"QuestionJudge",label:"判断题",count:40},{name:"QuestionFill",label:"填空题",count:50},{name:"QuestionShort",label:"简答题",count:60}],active:"QuestionImport"}},computed:{curType:function e(){if(this.active==="QuestionRadio"){return["SINGLE"]}else if(this.active==="QuestionMulti"){return["MULTIPLE"]}else if(this.active==="QuestionJudge"){return["JUDGE"]}else if(this.active==="QuestionFill"){return["COMPLETION"]}else if(this.active==="QuestionShort"){return["SHORT_ANSWER"]}else{return[]}},courseId:function e(){return this.$store.state.currentCourseId},showQuestionList1:function e(){var t=Math.ceil(this.pagination.count/this.pagination.limit);var n=(this.pagination.current-1)*this.pagination.limit;return this.pagination.current===t?this.showQuestionList.slice(n,n+this.pagination.limit):this.showQuestionList.slice(n,n+this.pagination.limit)}},watch:{courseId:function e(t,n){this.getChapterList()},questionList:function e(t,n){var i=this;this.showQuestionList=t;if(this.curType.length>0){var a=[];this.questionList.forEach(function(e){if(e.types===i.curType[0]){a.push(e)}});this.showQuestionList=a;this.pagination.count=a.length}else{this.pagination.count=this.questionList.length}this.pagination.current=1}},created:function e(){this.getChapterList();this.componentKey1=this.componentKey1+1},methods:{getChapterList:function e(){var t=this;return(0,s.default)(a.default.mark(function e(){return a.default.wrap(function e(n){while(1){switch(n.prev=n.next){case 0:t.$http.get("/course/get_chapter_list/",{params:{course_id:t.courseId}}).then(function(e){t.chapterList=e.data;t.chapterFilters=[];t.chapterList.forEach(function(e){t.chapterFilters.push({text:e.chapter_name,value:e.id})});t.curChapterId=null;t.getQuestionList()});case 1:case"end":return n.stop()}}},e)}))()},operateChapter:function e(t){var n=this;return(0,s.default)(a.default.mark(function e(){return a.default.wrap(function e(i){while(1){switch(i.prev=i.next){case 0:n.$http.post("/course/operate_chapter/",{course_id:n.courseId,chapter_list:t}).then(function(e){if(e.result){n.config.theme="success";n.config.message="修改成功！";n.$bkMessage(n.config)}else{n.config.theme="success";n.config.message=e.message;n.$bkMessage(n.config)}n.getChapterList()});case 1:case"end":return i.stop()}}},e)}))()},getQuestionList:function e(){var t=this;return(0,s.default)(a.default.mark(function e(){return a.default.wrap(function e(n){while(1){switch(n.prev=n.next){case 0:t.$http.get("/course/get_question_list/",{params:{course_id:t.courseId,chapter_id:t.curChapterId}}).then(function(e){t.questionList=e.data;t.componentKey=t.componentKey+1});case 1:case"end":return n.stop()}}},e)}))()},setQuestion:function e(t,n){var i=this;return(0,s.default)(a.default.mark(function e(){return a.default.wrap(function e(a){while(1){switch(a.prev=a.next){case 0:if(t==="append"){if(i.curChapterId){i.$http.post("/course/teacher_set_question/",{course_id:i.courseId,question:n.question,chapter_id:i.curChapterId,types:n.types,option_A:n.option_A,option_B:n.option_B,option_C:n.option_C,option_D:n.option_D,option_E:n.option_E,answer:n.answer,explain:n.explain}).then(function(e){if(e.result){i.config.theme="success";i.config.message="上传成功！"}else{i.config.theme="error";i.config.message=e.message}i.$bkMessage(i.config);i.componentKey2=i.componentKey2+1;i.getQuestionList()})}else{i.config.theme="error";i.config.message="章节为空！先选择章节再进行出题";i.$bkMessage(i.config)}}else if(t==="delete"){i.$http.delete("/course/teacher_set_question/",{params:{course_id:i.courseId,question_id_list:JSON.stringify(n)}}).then(function(e){if(e.result){i.config.theme="success";i.config.message="删除成功！"}else{i.config.theme="error";i.config.message=e.message}i.$bkMessage(i.config);i.getQuestionList()})}else if(t==="update"){i.$http.put("/course/teacher_set_question/",{course_id:i.courseId,question_id:n.question_id,question:n.question,types:n.types,option_A:n.option_A,option_B:n.option_B,option_C:n.option_C,option_D:n.option_D,option_E:n.option_E,answer:n.answer,explain:n.explain}).then(function(e){if(e.result){i.config.theme="success";i.config.message="修改成功！"}else{i.config.theme="error";i.config.message=e.message}i.$bkMessage(i.config);i.getQuestionList();i.editQuestion.visable=false})}case 1:case"end":return a.stop()}}},e)}))()},createQuestion:function e(t){this.setQuestion("append",t)},filterType:function e(t,n){return n.types===t},filterChapter:function e(t,n){return n.chapter_id===t},filterHandler:function e(t,n,i){var a=i["property"];return n[a]===t},handleSelectChange:function e(t,n){this.selection=t},handleFilterChange:function e(t){var n=this;var i=[];for(var a in t){i=t[a]}if(i.length>0){var s=[];i.forEach(function(e){n.questionList.forEach(function(t){if(t.types===e){s.push(t)}})});this.showQuestionList=s;this.pagination.count=s.length}else{this.pagination.count=this.questionList.length}},handleRowClick:function e(t,n,i,a,s){if(s!==4){this.editQuestion.Question=t;this.editQuestion.visable=true}},handleTabChange:function e(t){var n=this;this.componentKey+=1;var i=[];if(this.curType.length>0){this.questionList.forEach(function(e){if(e.types===n.curType[0]){i.push(e)}});this.showQuestionList=i;this.pagination.count=this.showQuestionList.length}else{this.showQuestionList=this.questionList;this.pagination.count=this.questionList.length}this.pagination.current=1},handleSelected:function e(t,n){this.getQuestionList();this.curChapter=[];this.curChapter.push(t);this.curChapterid=t;this.componentKey+=1},handleChapterClear:function e(t){this.curChapterid=null;this.getQuestionList()},deleteQuestion:function e(t){var n=[];n.push(t.question_id);this.setQuestion("delete",n)},deleteQuestions:function e(t){var n=[];this.selection.forEach(function(e){n.push(e.question_id)});this.setQuestion("delete",n)},ToManageChapter:function e(){this.$router.push({name:"manage_chapter_index"})},updateChapter:function e(t,n){if(n){this.operateChapter(t)}else{this.componentKey1=this.componentKey1+1}},updateQuestion:function e(t){this.setQuestion("update",t)},questionType:function e(t){if(t==="SINGLE"){return"单选题"}else if(t==="MULTIPLE"){return"多选题"}else if(t==="JUDGE"){return"判断题"}else if(t==="COMPLETION"){return"填空题"}else if(t==="SHORT_ANSWER"){return"简答题"}else{return[]}},chapterName:function e(t){var e=null;this.chapterList.forEach(function(n){if(n.id===t){e=n.chapter_name}});return e},handlePageChange:function e(t){this.pagination.current=t},handlePageLimitChange:function e(t){this.pagination.current=1;this.pagination.limit=t}}};t.default=d},126:function(e,t,n){"use strict";n.r(t);var i=n(127);var a=n.n(i);for(var s in i)if(s!=="default")(function(e){n.d(t,e,function(){return i[e]})})(s);t["default"]=a.a},127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var i={name:"ChapterManage",props:{chapters:{type:Object,default:function e(){return{}}}},data:function e(){return{config:{message:null,theme:"error",offset:80},rules:{chapter:[{required:true,message:"章节不能为空！",trigger:"change"}]},show:false,editable:false,curRow:null,curChapter:null,changed:false,saved:false,append:{appendText:null,appendNumber:0},selection:[]}},computed:{chapterList:function e(){return JSON.parse(JSON.stringify(this.chapters))}},watch:{},created:function e(){},methods:{handleRowDbclick:function e(t,n,i,a,s){var r=this;if(!t.id){t.id="focus"}this.curRow=t.id;this.curChapter=t.chapter_name;this.editable=!this.editable;this.$nextTick(function(){r.$refs.myinput.focus()})},handleEnter:function e(t){if(t.id==="focus"){t.id=null}if(t.chapter_name){this.editable=false}else{t.chapter_name=this.curChapter;this.editable=false}},handleBlur:function e(t){if(t.id==="focus"){t.id=null}if(t.chapter_name){this.editable=false}else{t.chapter_name=this.curChapter;this.editable=false}},handleHidden:function e(){this.editable=false;this.$emit("updateChapter",this.chapterList,this.saved)},handleShown:function e(){},rowEditable:function e(t){return t===this.curRow&&this.editable},chapterManage:function e(){this.show=true},saveChange:function e(){this.saved=true;if(this.changed){this.$emit("updateChapter",this.chapterList,this.saved)}else{this.compare();if(this.changed){this.$emit("updateChapter",this.chapterList,this.saved)}else{this.config.theme="warning";this.config.message="未做修改";this.$bkMessage(this.config)}}this.saved=false;this.changed=false},appendChapter:function e(){var t=this;this.$refs.appendChapter.validate().then(function(e){t.chapterList.push({id:null,chapter_name:t.append.appendText});t.append.appendText=null;t.append.appendNumber=t.append.appendNumber+1},function(e){t.config.theme="error";t.config.message=e.content;t.$bkMessage(t.config)});this.$refs.appendInput.focus();this.changed=true},handleSelectChange:function e(t,n){this.selection=t},deleteChapter:function e(t){if(t.id===null||t.id==="focus"){this.append.appendNumber=this.append.appendNumber-1;if(this.append.appendNumber!==0){this.changed=true}else if(this.changed){this.changed=false}}else{this.changed=true}this.chapterList.splice(this.chapterList.indexOf(t),1)},handleAppendBlur:function e(){},compare:function e(){for(var t=0;t<this.chapterList.length;t++){if(this.chapterList[t].id!==this.chapters[t].id||this.chapterList[t].chapter_name!==this.chapters[t].chapter_name){this.changed=true}}}}};t.default=i},128:function(e,t,n){},129:function(e,t,n){"use strict";n.r(t);var i=n(130);var a=n.n(i);for(var s in i)if(s!=="default")(function(e){n.d(t,e,function(){return i[e]})})(s);t["default"]=a.a},130:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var i={name:"QuestionImport",props:{chapterid:{type:Number,default:null}},data:function e(){return{config:{message:null,theme:"error",offset:80}}},methods:{downloadSetQuestionExcelTemplate:function e(){window.open("http://dev.paas-edu.bktencent.com:8000/course/download_set_question_excel_template/")},testSuccess:function e(t,n){},testProgress:function e(t,n,i){this.update(t)},testDone:function e(){},testErr:function e(t,n){},handleRes:function e(t){if(t.id){return true}return false},addExcel:function e(t){var n=this;if(this.chapterid){var i=new FormData;i.append("excel_file",t.fileList[0].origin);i.append("course_id",this.$store.state.currentCourseId);i.append("chapter_id",this.chapterid);var a={headers:{"Content-Type":"multipart/form-data"}};this.$http.post("/course/import_question_excel/",i,a).then(function(e){n.config.theme="success";n.config.message=e.message;n.$bkMessage(n.config);n.$emit("importQuestionExcel")})}else{this.config.theme="error";this.config.message="章节不能为空！";this.$bkMessage(this.config)}}}};t.default=i},131:function(e,t,n){},132:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var i=n(196);var a=n(126);for(var s in a)if(s!=="default")(function(e){n.d(t,e,function(){return a[e]})})(s);var r=n(170);var o=n(2);var u=Object(o["a"])(a["default"],i["a"],i["b"],false,null,"9bfed436",null);t["default"]=u.exports},170:function(e,t,n){"use strict";var i=n(128);var a=n.n(i);var s=a.a},171:function(e,t,n){"use strict";n.r(t);var i=n(197);var a=n(129);for(var s in a)if(s!=="default")(function(e){n.d(t,e,function(){return a[e]})})(s);var r=n(172);var o=n(2);var u=Object(o["a"])(a["default"],i["a"],i["b"],false,null,"56ca7846",null);t["default"]=u.exports},172:function(e,t,n){"use strict";var i=n(131);var a=n.n(i);var s=a.a},173:function(e,t,n){"use strict";var i=n(132);var a=n.n(i);var s=a.a},186:function(e,t,n){"use strict";var i=function(){var e=this;var t=e.$createElement;var n=e._self._c||t;return n("div",{staticClass:"create_question"},[n("div",[n("bk-select",{staticStyle:{width:"250px",display:"inline-block"},attrs:{disabled:false,"ext-cls":"select-custom","ext-popover-cls":"select-popover-custom",searchable:"",placeholder:"请选择章节"},on:{selected:e.handleSelected,change:e.handleChapterChange,clear:e.handleChapterClear},model:{value:e.curChapterId,callback:function(t){e.curChapterId=t},expression:"curChapterId"}},e._l(e.chapterList,function(e){return n("bk-option",{key:e.id,attrs:{id:e.id,name:e.chapter_name}})}),1),e._v(" "),n("chapter-manage",{key:e.componentKey1,attrs:{chapters:e.chapterList},on:{updateChapter:e.updateChapter}})],1),e._v(" "),n("div",{staticClass:"set_question",staticStyle:{height:"480px","margin-bottom":"30px"}},[n("bk-tab",{attrs:{active:e.active,type:"border-card","label-height":"50","active-bar":e.activeBar2},on:{"update:active":function(t){e.active=t},"tab-change":e.handleTabChange}},e._l(e.panels,function(t,i){return n("bk-tab-panel",e._b({key:i,staticStyle:{height:"400px"}},"bk-tab-panel",t,false),[n("keep-alive",{key:e.componentKey2},[n(e.active,{tag:"component",attrs:{chapterid:e.curChapterId},on:{createQuestion:e.createQuestion,importQuestionExcel:function(t){e.getQuestionList()}}})],1)],1)}),1)],1),e._v(" "),n("bk-dialog",{attrs:{width:"1200",draggable:false,"show-footer":false},model:{value:e.editQuestion.visable,callback:function(t){e.$set(e.editQuestion,"visable",t)},expression:"editQuestion.visable"}},[e.editQuestion.visable?n(e.Dict[e.editQuestion.Question.types],{tag:"component",attrs:{info:e.editQuestion.Question,readonly:true}}):e._e()],1),e._v(" "),n("div",{staticClass:"questions"},[n("bk-button",{staticStyle:{"margin-bottom":"10px"},attrs:{theme:"primary"},on:{click:e.deleteQuestions}},[e._v("批量删除")]),e._v(" "),n("bk-table",{key:e.componentKey,attrs:{data:e.showQuestionList1,size:e.size,"outer-border":true,"virtual-render":true,pagination:e.pagination,"highlight-current-row":true,height:"500"},on:{"filter-change":e.handleFilterChange,"selection-change":e.handleSelectChange,"page-change":e.handlePageChange,"page-limit-change":e.handlePageLimitChange,"row-click":e.handleRowClick}},[n("bk-table-column",{attrs:{type:"selection",width:60},model:{value:e.selection,callback:function(t){e.selection=t},expression:"selection"}}),e._v(" "),n("bk-table-column",{attrs:{label:"题目id",prop:"question_id"}}),e._v(" "),n("bk-table-column",{attrs:{label:"题目内容",prop:"question"}}),e._v(" "),n("bk-table-column",{attrs:{label:"题目类型",prop:"types","filtered-value":e.curType,filters:[{text:"单选题",value:"SINGLE"},{text:"多选题",value:"MULTIPLE"},{text:"判断题",value:"JUDGE"},{text:"填空题",value:"COMPLETION"},{text:"简答题",value:"SHORT_ANSWER"}],"filter-method":e.filterType,"filter-placement":"bottom-end","filter-multiple":true},scopedSlots:e._u([{key:"default",fn:function(t){return[n("bk-tag",[e._v("\n                        "+e._s(e.questionType(t.row.types))+"\n                    ")])]}}])}),e._v(" "),n("bk-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("bk-button",{staticClass:"mr10",attrs:{theme:"primary",text:""},on:{click:function(n){e.deleteQuestion(t.row)}}},[e._v("删除")])]}}])})],1)],1)],1)};var a=[];n.d(t,"a",function(){return i});n.d(t,"b",function(){return a})},196:function(e,t,n){"use strict";var i=function(){var e=this;var t=e.$createElement;var n=e._self._c||t;return n("div",{staticStyle:{display:"inline-block"}},[n("bk-button",{staticStyle:{"margin-left":"5px","margin-bottom":"21px","border-style":"double"},attrs:{theme:"primary",title:"主要按钮"},on:{click:e.chapterManage}},[e._v("\n        章节管理\n    ")]),e._v(" "),n("bk-sideslider",{attrs:{"is-show":e.show,"quick-close":true},on:{"update:isShow":function(t){e.show=t},hidden:e.handleHidden,shown:e.handleShown}},[n("div",{attrs:{slot:"header"},slot:"header"},[e._v("章节管理")]),e._v(" "),n("div",{staticClass:"p20",attrs:{slot:"content"},slot:"content"},[n("bk-form",{ref:"appendChapter",attrs:{model:e.append,"label-width":0}},[n("div",{staticClass:"appendChapter"},[n("bk-form-item",{attrs:{required:true,rules:e.rules.chapter,property:"appendText","icon-offset":135}},[n("bk-input",{ref:"appendInput",staticStyle:{width:"231px"},attrs:{clearable:false},on:{blur:e.handleAppendBlur,enter:e.appendChapter},model:{value:e.append.appendText,callback:function(t){e.$set(e.append,"appendText",t)},expression:"append.appendText"}}),e._v(" "),n("bk-button",{staticClass:"mr10",attrs:{theme:"primary",title:"主要按钮",icon:"plus"},on:{click:e.appendChapter}},[e._v("\n                            新增章节\n                        ")])],1)],1)]),e._v(" "),n("div",{staticClass:"chapters"},[n("bk-table",{attrs:{data:e.chapterList,size:e.size,"outer-border":true,"virtual-render":false,"show-header":false,height:"480"},on:{"row-click":e.handleRowClick,"row-dblclick":e.handleRowDbclick,"selection-change":e.handleSelectChange}},[n("bk-table-column",{attrs:{label:"章节",prop:"chapter_name",sortable:"",width:"250"},on:{"row-dblclick":e.handleRowDbclickChapter},scopedSlots:e._u([{key:"default",fn:function(t){return[!e.rowEditable(t.row.id)?n("p",[e._v(e._s(t.row.chapter_name))]):e._e(),e._v(" "),e.rowEditable(t.row.id)?n("bk-input",{ref:"myinput",staticClass:"input",staticStyle:{display:"inline-block"},on:{enter:function(n){e.handleEnter(t.row)},blur:function(n){e.handleBlur(t.row)}},model:{value:t.row.chapter_name,callback:function(n){e.$set(t.row,"chapter_name",n)},expression:"props.row.chapter_name"}}):e._e()]}}])}),e._v(" "),n("bk-table-column",{attrs:{label:"操作",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("bk-button",{staticClass:"mr10",attrs:{theme:"default",icon:"delete",outline:true,size:"small"},on:{click:function(n){e.deleteChapter(t.row)}}})]}}])})],1)],1),e._v(" "),n("div",{staticClass:"saveChange"},[n("bk-button",{staticClass:"mr10",attrs:{theme:"primary",title:"主要按钮"},on:{click:e.saveChange}},[e._v("\n                    保存\n                ")])],1)],1)])],1)};var a=[];n.d(t,"a",function(){return i});n.d(t,"b",function(){return a})},197:function(e,t,n){"use strict";var i=function(){var e=this;var t=e.$createElement;var n=e._self._c||t;return n("div",{staticClass:"body"},[n("div",{staticClass:"upload"},[n("bk-upload",{staticStyle:{width:"100%"},attrs:{tip:"只允许上传.xls的文件","with-credentials":true,"custom-request":e.addExcel,"handle-res-code":true,limit:1,accept:".xls"}})],1),e._v(" "),n("a",{attrs:{href:"http://dev.paas-edu.bktencent.com:8000/course/download_set_question_excel_template/"}},[e._v("下载模板")])])};var a=[];n.d(t,"a",function(){return i});n.d(t,"b",function(){return a})},82:function(e,t,n){"use strict";n.r(t);var i=n(186);var a=n(109);for(var s in a)if(s!=="default")(function(e){n.d(t,e,function(){return a[e]})})(s);var r=n(173);var o=n(2);var u=Object(o["a"])(a["default"],i["a"],i["b"],false,null,"17ba466a",null);t["default"]=u.exports}}]);