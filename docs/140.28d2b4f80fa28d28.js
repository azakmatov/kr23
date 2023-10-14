"use strict";(self.webpackChunktea=self.webpackChunktea||[]).push([[140],{5140:(A,a,s)=>{s.r(a),s.d(a,{ProductsModule:()=>C});var n=s(6814),c=s(594),f=s(8645),h=s(9397),t=s(9468),p=s(2239),l=s(7942);const g=["products"];function v(e,d){1&e&&(t.TgZ(0,"div",6),t._uU(1,"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"),t.qZA())}const x=function(e){return["/products",e]};function Z(e,d){if(1&e&&(t.TgZ(0,"div",10)(1,"a",11),t._UZ(2,"img",12),t.qZA(),t.TgZ(3,"div",13)(4,"div",14)(5,"h5",15),t._uU(6),t.qZA(),t.TgZ(7,"p",16),t._uU(8),t.qZA()(),t.TgZ(9,"a",17),t._uU(10,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),t.qZA()()()),2&e){const i=t.oxw().$implicit;t.xp6(2),t.s9C("src",i.image,t.LSH),t.xp6(4),t.Oqu(i.title),t.xp6(2),t.Oqu(i.description),t.xp6(1),t.Q6J("routerLink",t.VKq(4,x,i.id))}}function b(e,d){if(1&e&&(t.TgZ(0,"div",7,8),t.YNc(2,Z,11,6,"div",9),t.qZA()),2&e){const i=t.oxw();t.xp6(2),t.Q6J("ngIf",i.notFound)}}function T(e,d){1&e&&(t.TgZ(0,"div",18),t._UZ(1,"div",19),t.qZA())}const y=[{path:"",component:(()=>{class e{constructor(i,o,r){this.productsService=i,this.router=o,this.productService=r,this.products=[],this.foundProducts=[],this.loading=!1,this.notFound=!0,this.isDone=!1,this.idParam="",this.subscription=null,this.value=this.productService.inputNavbarValue,this.productsTitleDefault=this.productsService.productsTitle,this.subject=new f.x}getProductsTitle(){return this.productsService.productsTitle}ngOnInit(){this.loading=!0,this.productsService.getProducts().pipe((0,h.b)(()=>{this.loading=!1})).subscribe({next:i=>{this.products=i},error:i=>{console.log(i),this.router.navigate(["/"])}})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(p.s),t.Y36(c.F0),t.Y36(l.M))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-products"]],viewQuery:function(o,r){if(1&o&&t.Gf(g,5),2&o){let u;t.iGM(u=t.CRH())&&(r.productsElement=u.first)}},decls:7,vars:4,consts:[[1,"main-items","my-4","px-5"],[1,"mb-5","mt-3","fw-bold","text-center","text-black"],["class","my-3 text-center fs-4","style","margin: 0 auto",4,"ngIf"],[1,"row","g-4"],["class","col-12 col-sm-6 col-md-4",4,"ngFor","ngForOf"],["class","loader-bg",4,"ngIf"],[1,"my-3","text-center","fs-4",2,"margin","0 auto"],[1,"col-12","col-sm-6","col-md-4"],["products",""],["class","card h-100",4,"ngIf"],[1,"card","h-100"],["href","#",1,"item-image"],["alt","item1",1,"card-img-top",3,"src"],[1,"card-body","d-flex","flex-column","justify-content-between"],[1,"mb-4"],[1,"card-title","fw-bold","fs-5","text-black"],[1,"card-text","text-black"],["href","#",1,"btn","btn-primary","hvr-float-shadow",3,"routerLink"],[1,"loader-bg"],[1,"loader"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"h2",1),t._uU(2),t.qZA(),t.YNc(3,v,2,0,"div",2),t.TgZ(4,"div",3),t.YNc(5,b,3,1,"div",4),t.YNc(6,T,2,0,"div",5),t.qZA()()),2&o&&(t.xp6(2),t.Oqu(r.getProductsTitle()),t.xp6(1),t.Q6J("ngIf",r.notFound&&r.isDone),t.xp6(2),t.Q6J("ngForOf",r.products),t.xp6(1),t.Q6J("ngIf",r.loading))},dependencies:[n.sg,n.O5,c.rH]})}return e})()},{path:":id",component:(()=>{class e{constructor(i,o,r,u){this.activatedRoute=i,this.productsService=o,this.router=r,this.productService=u,this.product={id:0,image:" ",title:" ",price:0,description:" "}}ngOnInit(){this.activatedRoute.params.subscribe(i=>{i.id&&this.productsService.getProducts().subscribe({next:o=>{const r=o.find(u=>u.id===+i.id);r?(this.product=r,this.productService.productTitle=r.title):this.router.navigate(["/"])},error:o=>{this.router.navigate(["/"])}})})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(c.gz),t.Y36(p.s),t.Y36(c.F0),t.Y36(l.M))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["product"]],decls:14,vars:4,consts:[[1,"card","w-50","h-50","my-4",2,"margin","0 auto"],["href","#",1,"item-image","text-center"],["alt","item1",1,"card-img-top","w-50",3,"src"],[1,"card-body","d-flex","flex-column","justify-content-between"],[1,"mb-4"],[1,"card-title","fw-bold","fs-5","text-black"],[1,"card-text","text-black"],[1,"price","mb-2","fw-semibold"],["href","#","routerLink","/order",1,"btn","btn-primary","hvr-float-shadow","price-btn"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"a",1),t._UZ(2,"img",2),t.qZA(),t.TgZ(3,"div",3)(4,"div",4)(5,"h5",5),t._uU(6),t.qZA(),t.TgZ(7,"p",6),t._uU(8),t.qZA()(),t.TgZ(9,"div")(10,"div",7),t._uU(11),t.qZA(),t.TgZ(12,"a",8),t._uU(13,"\u041a\u0443\u043f\u0438\u0442\u044c"),t.qZA()()()()),2&o&&(t.xp6(2),t.s9C("src",r.product.image,t.LSH),t.xp6(4),t.Oqu(r.product.title),t.xp6(2),t.Oqu(r.product.description),t.xp6(3),t.hij("\u0426\u0435\u043d\u0430: ",r.product.price,"\u0440."))},dependencies:[c.rH]})}return e})()}];let m=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(y),c.Bz]})}return e})();var P=s(6208);let C=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#i=this.\u0275inj=t.cJS({imports:[n.ez,P.m,c.Bz,m,m]})}return e})()}}]);