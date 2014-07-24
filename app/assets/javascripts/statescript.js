// Countries
var country_arr = new Array("Andhra Pradesh",
 "Arunachal Pradesh",
 "Assam",
 "Bihar",
 "Chhattisgarh",
 "Goa",
 "Gujarat",
 "Haryana",
 "Himachal Pradesh",
 "Jammu & Kashmir",
 "Jharkhand",
 "Karnataka",
 "Kerala",
 "Madhya Pradesh",
 "Tripura",
 "Uttarakhand",
 "Uttar Pradesh",
 "West Bengal",
 "Maharashtra",
 "Manipur",
 "Meghalaya",
 "Mizoram",
 "Nagaland",
 "Odisha",
 "Punjab",
 "Rajasthan",
 "Sikkim",
 "Tamil Nadu");

// States
var s_a = new Array();
s_a[0] = "";
s_a[1] = "srikakulam|westgodavari";
s_a[2] = "aruna1|aruna2";
s_a[3] = "";
s_a[4] = "";
s_a[5] = "";
s_a[6] = "";
s_a[7] = "";
s_a[8] =  "";
s_a[9] =  "";
s_a[10] = "";
s_a[11] = "";
s_a[12] = "";
s_a[13] = "";
s_a[14] = "";
s_a[15] = "";
s_a[16] = "";
s_a[17] = "";
s_a[18] = "";
s_a[19] = "";
s_a[20] = "";
s_a[21] = "";
s_a[22] = "";
s_a[23] = "";
s_a[24] = "";
s_a[25] = "";
s_a[26] = "";
s_a[27] = "";
s_a[28] = "";
s_a[29] = "";


function populateStates(countryElementId, stateElementId) {

    var selectedCountryIndex = document.getElementById(countryElementId).selectedIndex;

    var stateElement = document.getElementById(stateElementId);

    stateElement.length = 0; // Fixed by Julian Woods
    stateElement.options[0] = new Option('Select district', '');
    stateElement.selectedIndex = 0;

    var state_arr = s_a[selectedCountryIndex].split("|");

    for (var i = 0; i < state_arr.length; i++) {
        stateElement.options[stateElement.length] = new Option(state_arr[i], state_arr[i]);
    }
}

function populateCountries(countryElementId, stateElementId) {
    // given the id of the <select> tag as function argument, it inserts <option> tags
    var countryElement = document.getElementById(countryElementId);
    countryElement.length = 0;
    countryElement.options[0] = new Option('Select State', '-1');
    countryElement.selectedIndex = 0;
    for (var i = 0; i < country_arr.length; i++) {
        countryElement.options[countryElement.length] = new Option(country_arr[i], country_arr[i]);
    }

    // Assigned all countries. Now assign event listener for the states.

    if (stateElementId) {
        countryElement.onchange = function () {
            populateStates(countryElementId, stateElementId);
        };
    }
}