"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3687],{3687:(Z,p,l)=>{l.r(p),l.d(p,{LoginPageModule:()=>c});var h=l(6814),d=l(95),t=l(6728),u=l(6958),e=l(6242);const m=[{path:"",component:(()=>{var n;class g{constructor(s){this.router=s,this.showAlert=!1,this.signupFailed=!1,this.passwordsMatch=!1}ngOnInit(){}signup(){this.name&&this.surname&&this.doB&&this.email&&this.password&&this.confPassword?this.password==this.confPassword?(console.log("Signup successful"),this.showAlert=!0,this.router.navigate(["/tabs"])):(console.log("Passwords do not match"),this.passwordsMatch=!0):(console.log("Signup failed"),this.signupFailed=!0)}hideAlert(){this.showAlert=!1}}return(n=g).\u0275fac=function(s){return new(s||n)(e.Y36(u.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],decls:38,vars:9,consts:[[1,"ion-padding"],["src","assets/Logo.png",2,"width","100px","height","auto","margin","auto"],[2,"text-align","center"],["position","floating"],["type","email","required","",3,"ngModel","ngModelChange"],["type","input","required","",3,"ngModel","ngModelChange"],["type","Date","required","",3,"ngModel","ngModelChange"],["type","password","required","",3,"ngModel","ngModelChange"],["header","Signup Successful",3,"isOpen","didDismiss"],["header","Signup Failed",3,"isOpen","didDismiss"],["header","Passwords need to match",3,"isOpen","didDismiss"],["id","signup","expand","block",2,"padding-top","30px",3,"click"]],template:function(s,i){1&s&&(e.TgZ(0,"ion-content",0),e._UZ(1,"ion-img",1),e.TgZ(2,"h1",2),e._uU(3,"Saving Star"),e.qZA(),e._UZ(4,"br")(5,"br"),e.TgZ(6,"h3",2),e._uU(7,"Signup"),e.qZA(),e.TgZ(8,"ion-item")(9,"ion-label",3),e._uU(10,"Name"),e.qZA(),e.TgZ(11,"ion-input",4),e.NdJ("ngModelChange",function(o){return i.name=o}),e.qZA()(),e.TgZ(12,"ion-item")(13,"ion-label",3),e._uU(14,"Surname"),e.qZA(),e.TgZ(15,"ion-input",5),e.NdJ("ngModelChange",function(o){return i.surname=o}),e.qZA()(),e.TgZ(16,"ion-item")(17,"ion-label",3),e._uU(18,"Date of Birth"),e.qZA(),e._UZ(19,"br"),e.TgZ(20,"ion-input",6),e.NdJ("ngModelChange",function(o){return i.doB=o}),e.qZA()(),e.TgZ(21,"ion-item")(22,"ion-label",3),e._uU(23,"Email"),e.qZA(),e.TgZ(24,"ion-input",4),e.NdJ("ngModelChange",function(o){return i.email=o}),e.qZA()(),e.TgZ(25,"ion-item")(26,"ion-label",3),e._uU(27,"Password"),e.qZA(),e.TgZ(28,"ion-input",7),e.NdJ("ngModelChange",function(o){return i.password=o}),e.qZA()(),e.TgZ(29,"ion-item")(30,"ion-label",3),e._uU(31,"Confrim Password"),e.qZA(),e.TgZ(32,"ion-input",7),e.NdJ("ngModelChange",function(o){return i.confPassword=o}),e.qZA()(),e.TgZ(33,"ion-alert",8),e.NdJ("didDismiss",function(){return i.hideAlert()}),e.qZA(),e.TgZ(34,"ion-alert",9),e.NdJ("didDismiss",function(){return i.hideAlert()}),e.qZA(),e.TgZ(35,"ion-alert",10),e.NdJ("didDismiss",function(){return i.hideAlert()}),e.qZA(),e.TgZ(36,"ion-button",11),e.NdJ("click",function(){return i.signup()}),e._uU(37,"Signup"),e.qZA()()),2&s&&(e.xp6(11),e.Q6J("ngModel",i.name),e.xp6(4),e.Q6J("ngModel",i.surname),e.xp6(5),e.Q6J("ngModel",i.doB),e.xp6(4),e.Q6J("ngModel",i.email),e.xp6(4),e.Q6J("ngModel",i.password),e.xp6(4),e.Q6J("ngModel",i.confPassword),e.xp6(1),e.Q6J("isOpen",i.showAlert),e.xp6(1),e.Q6J("isOpen",i.signupFailed),e.xp6(1),e.Q6J("isOpen",i.passwordsMatch))},dependencies:[d.JJ,d.Q7,d.On,t.Ge,t.YG,t.W2,t.Xz,t.pK,t.Ie,t.Q$,t.j9]}),g})()}];let _=(()=>{var n;class g{}return(n=g).\u0275fac=function(s){return new(s||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.Bz.forChild(m),u.Bz]}),g})(),c=(()=>{var n;class g{}return(n=g).\u0275fac=function(s){return new(s||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[h.ez,d.u5,t.Pc,_]}),g})()}}]);