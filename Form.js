

		function validateUser() {
		
			var n = document.getElementById("uname").value;
			if(n == "" || n == null) {
				alert("Name cannot be empty");
				return false;
				}
			else if(n.length < 6) {
				alert("Name cannot be less than 6 characters");
				return false;
				}
			else return true;
		
		}
		function validateGender() {
			var gender = document.getElementById("gender").value;
			if(gender == "" || gender == null){
				alert("Gender is a mandatory field");
				return false;
				}
			
			else return true;
		
		}
		function validateAge() {
			var age = document.getElementById("age").value;
			var age1 = parseInt(age);
			if(age1 == "" || age1 == null){
				alert("Age is mandatory field");
				return false;
				}
			else if(age1 < 18 || age1 > 60) {
				alert("Age out of vaccination criteria");
				return false;
				}
			else return true;
		
		}
		
		function validate() {
			if(validateUser() && validateAge() && validateGender())
			return true;
			else return false;
	
		}





