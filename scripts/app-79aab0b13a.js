!function(){"use strict";angular.module("formioAppTemplate",["ngSanitize","ui.router","ui.bootstrap","formio"])}(),function(){"use strict";function o(){}angular.module("formioAppTemplate").controller("MainController",o)}(),function(){"use strict";function o(o){o.debug("runBlock end")}angular.module("formioAppTemplate").run(o),o.$inject=["$log"]}(),function(){"use strict";function o(o,t,e,i){e.setBaseUrl(i.apiUrl),o.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),t.otherwise("/")}angular.module("formioAppTemplate").config(o),o.$inject=["$stateProvider","$urlRouterProvider","FormioProvider","AppConfig"]}(),function(){"use strict";angular.module("formioAppTemplate").constant("moment",moment)}(),function(){"use strict";function o(o){o.debugEnabled(!0)}angular.module("formioAppTemplate").config(o),o.$inject=["$logProvider"]}(),angular.module("formioAppTemplate").run(["$templateCache",function(o){o.put("app/main/main.html",'<div class="row"><div class="jumbotron"><div class="row"><div class="col-sm-6 text-center"><p class="lead">You can easily embed your Forms and Resources into this application using.</p><div><pre>&lt;formio src="\'https://yourapp.form.io/user/login\'"&gt;&lt;/formio&gt;</pre></div><p class="lead">Need Help?</p><ul class="list-inline"><li><a class="btn btn-lg btn-success" target="_blank" href="http://help.form.io/embedding/">Embedding</a></li><li><a class="btn btn-lg btn-success" target="_blank" href="http://help.form.io">Documentation</a></li></ul></div><div class="col-sm-6"><p class="lead">Example Form</p><div class="well"><formio src="\'https://formio.form.io/contact\'"></formio></div></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-79aab0b13a.js.map