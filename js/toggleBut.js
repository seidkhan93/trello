
var but1=document.getElementById('but1');
var but2=document.getElementById('but2');
but1.onclick=function(){
	but1.style.background='#f5f7fa';
	but1.style.border='1px solid #dee1e6';
	but1.style.fontWeight=500;
	but1.style.fontFamily="Helvetica, Roboto, sans-serif";
	but2.style.background='#fff';
	but2.style.border='1px solid #fff';
	but2.style.fontWeight=600;
	but2.style.fontFamily="Roboto, Helvetica, sans-serif";
}
but2.onclick=function(){
	but2.style.background='#f5f7fa';
	but2.style.border='1px solid #dee1e6';
	but2.style.fontWeight=500;
	but2.style.fontFamily="Helvetica, Roboto, sans-serif";
	but1.style.background='#fff';
	but1.style.border='1px solid #fff';
	but1.style.fontWeight=600;
	but1.style.fontFamily="Roboto, Helvetica, sans-serif";
}
