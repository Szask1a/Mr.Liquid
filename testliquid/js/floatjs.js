function checklogin(check){
	if(check!=1){
		alert("you must log in first before make any purchases..");
	}
	if(check==1){
		window.location.href = "http://localhost/testliquid/checkout.php";
	}
        
}

document.getElementById('signin').addEventListener('click',function(){
	document.querySelector('.float-bg').style.display='flex';

});

function exit(){
	document.querySelector('.float-bg').style.display='none';}

