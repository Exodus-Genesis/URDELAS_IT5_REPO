function checkVotingEligibility (age, country){
    if (country === "USA" && age >= 18) {
        return "Eligible to Vote in USA";
    } else if (country === "Canada" && age >= 19) {
        return "Eligible to vote in canada";
    } else {
        return "not Eligible to vote";
    }
    }

console.log(checkVotingEligibility(18, "USA"));
console.log(checkVotingEligibility(19, "Canada"));

/* 
1. START 
2. create a function called checkVotingEligibility that takes two parameters: age and country.
3. Inside the function, use if/else statements to check the voting eligibility based on the country
4.   If the country is USA and the age is 18 or above, return "Eligible to vote in USA"
5.    If the country is Canada and the age is 19 or above, return "Eligible to vote in Canada"
6.    endif return "Not Eligible to vote"
7. END


*/
    
