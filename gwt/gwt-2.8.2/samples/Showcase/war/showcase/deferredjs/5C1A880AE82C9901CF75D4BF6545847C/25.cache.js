$wnd.showcase.runAsyncCallback25("function T9(a){this.a=a}\nfunction V9(a){this.a=a}\nfunction X9(a){this.a=a}\nfunction O9(a,b){if(b==null){jh(a.c,Acc)}else{RBb(a.c,b);ah(a.c,Acc)}}\nfunction n$(a){var b,c;b=AB(uZb(a.a,vcc),5);if(b==null){c=NA(HA(SU,1),M7b,2,6,['Decimal','Currency','Scientific','Percent','Custom']);xZb(a.a,vcc,c);return c}else{return b}}\nfunction P9(b){var c,d,e;d=GIb(b.f);if(QWb(d,'')){RBb(b.c,'<None>')}else{try{e=oWb(d);c=Zy(b.a,e);RBb(b.c,c);O9(b,null)}catch(a){a=kW(a);if(HB(a,90)){O9(b,Bcc)}else throw lW(a)}}}\nfunction N9(a){var b,c,d,e,f;b=new GEb(4,2);b.o[N9b]=5;a.e=new HGb;sh(a.e,wcc);f=n$(a.b);for(d=0,e=f.length;d<e;++d){c=f[d];xGb(a.e,c)}Kh(a.e,new T9(a),(Gt(),Gt(),Ft));$Db(b,0,0,xcc);bEb(b,0,1,a.e);a.d=new TIb;sh(a.d,wcc);Kh(a.d,new V9(a),(iu(),iu(),hu));bEb(b,1,1,a.d);a.f=new TIb;sh(a.f,wcc);KIb(a.f,'31415926535.897932');Kh(a.f,new X9(a),(null,hu));$Db(b,2,0,ycc);bEb(b,2,1,a.f);a.c=new TBb;sh(a.c,wcc);$Db(b,3,0,zcc);bEb(b,3,1,a.c);Q9(a);return b}\nfunction Q9(b){var c;switch(eh(b.e).selectedIndex){case 0:b.a=(Uy(),!Ry&&(Ry=new jz(Ccc,dx(),false)),Uy(),Ry);KIb(b.d,b.a.s);Pxb(b.d,false);break;case 1:b.a=(Uy(),!Qy&&(Qy=new jz('\\xA4#,##0.00',dx(),false)),Uy(),Qy);KIb(b.d,b.a.s);Pxb(b.d,false);break;case 2:b.a=(Uy(),!Ty&&(Ty=new jz('#E0',dx(),false)),Uy(),Ty);KIb(b.d,b.a.s);Pxb(b.d,false);break;case 3:b.a=(Uy(),!Sy&&(Sy=new jz('#,##0%',dx(),false)),Uy(),Sy);KIb(b.d,b.a.s);Pxb(b.d,false);break;case 4:Pxb(b.d,true);c=GIb(b.d);try{b.a=(Uy(),new jz(c,dx(),true))}catch(a){a=kW(a);if(HB(a,27)){O9(b,Dcc);return}else throw lW(a)}}P9(b)}\nvar vcc='cwNumberFormatPatterns';var Qy,Sy,Ty;QW(463,1,d8b,T9);_.Rc=function U9(a){Q9(this.a)};var vL=ZVb(o8b,'CwNumberFormat/1',463);QW(464,1,sbc,V9);_.Uc=function W9(a){Q9(this.a)};var wL=ZVb(o8b,'CwNumberFormat/2',464);QW(465,1,sbc,X9);_.Uc=function Y9(a){P9(this.a)};var xL=ZVb(o8b,'CwNumberFormat/3',465);QW(466,1,l8b);_.Bc=function _9(){eZ(this.b,N9(this.a))};p5b(Al)(25);\n//# sourceURL=showcase-25.js\n")