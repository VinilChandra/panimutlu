// Countries
var country_arr = new Array("Andhra Pradesh",
 "Arunachal Pradesh",
 "Assam",
 "Bihar",
 "Chattisgarh",
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
 "Telangana",
 "Uttaranchal",
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
s_a[1] = "Anantapur|chittoor|East Godavari|Guntur|kadapa|krishna|kurnool|Nellore|prakasam|srikakulam|visakhapatnam|vizianagaram|West Godavari";
s_a[2] = "Diban Valley( Anini Valley)|East Kameng Seppa|Itanagar|East Siang(Passighat)|Lohit(Tezu)|Lower Subansiri(Ziro)|Khonsa|Roin|Tawang|Changalang|Dibang Valley|Daporijo|Bomdila|Alog( West Siang )";
s_a[3] = "Karimganj |Darrang |Dibrugarh |Morigaon |Tinsukia |Bongaigaon |Nalbari |Kokrajhar |Kamrup |Karbi-Anglong |Nagaon |N.C.Hills |Dhemaji |Lakhimpur |Sonitpur |Dhubri |Goalpara |Barpeta |Golaghat |Jorhat |Sibsagar |Cachar"; s_a[4] = "Muzaffarpur |Jehanabad |Gaya |Patna |Saran( Chapra ) |Darbhanga |Saharsa |Purnea |Bhagalpur |Munger |Aurangabad |Bhojpur(Arah) |Begusarai |East Champaran |Gopalganj |Jamui |Katihar |Khagaria |Madhepura |Madhubani |Nalanda |Nawada |Rohtas(Sasaram) |Samastipur |Sitamarhi |Siwan |Vaishali(Hajipur) |West Champaran |Kishanganj |Araria |Bhabua |Banka |Buxar |Supaul |Sekhpura |Seohar |Lakhisarai"; s_a[5] = "Bastar |Bilaspur |Dantewada |Dhamtari |Durg |Janjgir-Champa |Jashpur |Kanker |Kawardha |Korba |Koriya |Mahasamund |Raigarh |Rajnandgaon |Surguja |Raipur"; s_a[6] = "North Goa|South Goa"; s_a[7] = "Panchmahals |Vadodara |Amrela |Kheda |Ahmedabad |Valsad |Junagadh |Mehsana |Banaskantha |Gandhinagar |Bharuch |Dangs |Jamnagar |Rajkot |Surat |Sabarkantha |Kutch |Bhavnagar |Surendranagar |Anand |Narmada |Patan |Porbander |Dahod"; s_a[8] =  "Gurgaon |Rohtak |Ambala |Bhiwani |Faridabad |Hissar |Jind |Kaithal |Karnal |Kurukshetra |Mahendragarh |Panchkula |Panipat |Sonipat |Yamunanagar |Sirsa |Rewari |Jhanjhar |Fatehabad"; s_a[9] =  "Sirmour |Hamirpur |Kullu |Solan |Mandi |Chamba |Bilaspur |Kangra |Kinnaur |Lahaul-Spiti |Shimla |Una"; s_a[10] = "Kathua |Badgan |Poonch |Rajauri |Baramula |Doda |Udhampur |Jammu |Kupwara |Pulwama |Anantnag |Srinagar |Leh |Kargil"; s_a[11] = "Deoghar |Dhanbad |Giridih |Gumla |Hazaribagh |Lohardaga |Palamu |Ranchi |Dumka |Chaibasa(West Singhbhum) |Jamshedpur(East Singhbhum) |Bokaro |Chatra |Garhwa |Koderma |Pakur |Sahebganj |Simdega |Latehar |Saraikela |Jamtara"; s_a[12] = "Mysore |Gulberga |Chitradurga |Kolar |Bijapur |Dakshina Kannada |Raichur |Bellary |Belgaum |Hassan |Dharwad |Bangalore Rural |Shimoga |Mandya |Chickmagalur |Bangalore Urban |Madikeri |Tumkur |Bidar |Karwar |Udupi |Davanagare |Chamrajnagar |Koppal |Haveri |Gadak |Yadgir"; s_a[13] = "Kozhikode |Kasaragod |Idukki |Ernakulam |Cannanore |Mallapuram |Palghat |Pathanamthitta |Trichur |Wayanad |Trivandrum |Kottayam |Alapuzzha"; s_a[14] = "Sindi |Vidisha |Jabalpur |Bhopal |Hoshangabad |Indore |Rewa |Satna |Shahdol |Chhindwara |Ratlam |Balaghat |Betul |Bhind |Mandla |Chhattarpur |Damoh |Datia |Dewas |Dhar |Guna |Gwalior |Jhabua |Sehore |Mandsaur |Narsinghpur |Panna |Raisen |Rajgarh |Sagar |Seoni |Morena |Shivpuri |Shajapur |Tikamgarh |Ujjain |Khandwa |Khargone |Dindori |Umaria |Badwani |Sheopur |Katni |Neemuch |Harda |Anooppur |Burhanpur |Ashoknaga"; s_a[15] = "North District |South District |West District |Dhalai District"; s_a[16] = "Adilabad|Wanaparthi|Jagtial|suryapet|Mancherial|Hyderabad|Karimagar|Khammam|Mahabubnagar|Medak|nalgonda|Nizamabad|Rangareddy|Warangal"; s_a[17] = "Nainital |Almora |Pitoragarh |Udhamsingh Nagar |Bageshwar |Champawat |Garhwal(Pauri) |Tehri-Garhwal |Chamoli( Gopeshwar ) |Uttarkashi |Dehradun |Rudraprayag |Haridwar"; s_a[18] = "Allahabad |Aligarh |Bareilly |Gonda |Hardoi |Kanpur Dehat |Ghaziabad |Unnav |Varanasi |Faizabad |Gorakpur |Jhansi |Lucknow |Agra |Meerut |Moradabad |Barabanki |Mainpuri |Gazipur |Etah |Muzaffar Nagar |Saharanpur |Bulandshehar |Mathura |Firozabad |Budaun |Shahjahanpur |Pilibhit |Bijnor |Rampur |Kanpur(Nagar) |Farrukhabad |Fatehpur |Pratapgarh |Jalaun |Hamirpur |Lalitpur |Mirzapur |Basti |Deoria |Raebareili |Sitapur |Banda |Lakhimpur-Khedi |Bahraich |Sultanpur |Mau |Azamgarh |Jaunpur |Balia |Bhadoi |Padrauna |Maharajganj |Siddharth Nagar |Sunbhadra |Mahoba |Ambedkarnagar |Maha Maya Nagar |jyotiba Phoole Nagar |Kaushambi |Shooji Maharaj |Chandauli |Balrampur |Shravati |Bagpat |Kanooj |Oraiyya |Sant Kabir Nagar"; s_a[19] = "Howrah |Darjeeling |Medinipur |Coochbehar |Birbhum |North 24 Parganas |South 24 Parganas |Bankura |Bardhaman |Jalpaiguri |Hooghly |Nadia |Dakshin Dinajpur |Purulia |Uttar Dinajpur |Siliguri"; s_a[20] = "Aurangabad |Bandra(Mumbai Suburban district) |Nagpur |Pune |Akola |Chandrapur |Jalgaon |Parbhani |Sholapur |Thane |Latur |Mumbai-City |Buldhana |Dhule |Kolhpur |Nanded |Raigad |Amravati |Nashik |Wardha |Ahmednagar |Beed |Bhandara |Gadchiroli |Jalna |Osmanabad |Ratnagiri |Sangli |Satara |Sindudurg |Yavatmal |Nandurbar |Washim |Gondia |Hingoli"; s_a[21] = "Imphal East |Imphal West |Thoubal |Bishnupur |Chandel |Churachandpur |Senapati |Ukhrul |Tamenglong "; s_a[22] = "Ri-Bhoi District |South Garo Hills |East Khasi Hill |East Garo Hill |West Garo Hill |Jaintia Hill |West Khasi Hill"; s_a[23] = "Luglei District |Chimtipui District |Aizawal |Champhai |Mamit |Kolasib |Serchhip |Lawngtlai"; s_a[24] = "Wokha |Phek |Tuensang |Mon |Kohima |Zunheboto |Mokokchung |Dimapur"; s_a[25] = "Khurda |Navaragpur |Navapada |Gajapati |Boudh |Bhadrak |Ganjam |Dhenkanal |Angul |Puri |Cuttak |Sambalpur |Kalhandi |Koraput |Phulbani |Balangir |Bargah |Deogarh |Jagatsinghpur |Jajpur |Jharsuguda |Kendrapara |Malkangiri |Nayagarh |Rayagada |Sonepur |Balasore |Mayurbhanj |Keonjhar |Sundergarh "; s_a[26] = "Sangrur |Jalandhar |Ludhiana |Bhatinda |Kapurthala |Patiala |Amritsar |Ferozepur |Fatehgarh Saheb |Ropar |Gurdaspur |Hosiarpur |Faridkot |Mansa |Moga |Muktsar |Navansahar"; s_a[27] = "Jaipur |Barmer |Dungarpur |Jodhpur |Kota |Udaipur |Bikaner |Dausa |Bundi |Sikar |Tonk |Jaisalmer |Nagaur |Rajsamand |Banswara |Bhilwara |Ajmer |Alwar |Bharatpur |Chittorgarh |Churu |Dholpur |Ganganagar |Jalor |Jhalawar |Jhunjhunu |Pali |Sawai Madhopur |Sirohi |Baran |Hanumangarh |Karauli"; s_a[28] = "East |South |West |North"; s_a[29] = "Chennai|Coimbotore|Cuddalorei |Dharmapuri |Dindigul |Erode |Kancheepuram |Kanniyakumari (HQ : Nagercoil) |Karur |Madurai |Nagapattinam |Namakkal |Nilgiris (HQ: Udhagamandalam) |Perambalur |Pudukkottai |Ramanathapuram |Salem |Sivaganga |Thanjavur |Theni |Thoothkudi |Tiruchiorappalli |Tirunelveli |Tiruvallur |Tiruvannamalai |Tiruvarur |Vellore |Villupuram|Virudhunagar "; function populateStates(countryElementId, stateElementId) {var selectedCountryIndex = document.getElementById(countryElementId).selectedIndex;

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