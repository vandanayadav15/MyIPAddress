let ip1 = document.getElementById("ip");
let city1 = document.getElementById("city");
let letEl = document.getElementById("let");
let longEl = document.getElementById("long");
let orgEl = document.getElementById("org");
let regionEl = document.getElementById("reg");
let hostnameEl = document.getElementById("hostname");
let timezoneEl = document.getElementById("timezone");
let dateandtimeEl = document.getElementById("date&time");
let pincodeEl = document.getElementById("zip");
let MessageEl = document.getElementById("msg");

fetch("http://ip-api.com/json/?fields=61439")
  .then((res) => res.json())
  .then((res) => {
    ip1.textContent = "MY Public IP ADDRESS : " + res.query;
    city1.textContent = "City : " + res.city;
    letEl.textContent = "Lat : " + res.lat;
    longEl.textContent = "Long : " + res.lon;
    orgEl.textContent = "Organisation : " + res.org;
    regionEl.textContent = "Region : " + res.region;
    hostnameEl.textContent = "Hostname : " + res.hostname;
    timezoneEl.textContent = "TimeZone : " + res.timezone;
    pincodeEl.textContent = "Pincode : " + res.zip;
  });

let options = {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  },
  formatter = new Intl.DateTimeFormat([], options);
document.getElementById("date&time").innerHTML =
  "Date and Time :" + formatter.format(new Date());

fetch("https://api.postalpincode.in/pincode/495001")
  .then((data) => {
    return data.json();
  })
  .then((completedata) => {
      console.log(completedata);
    document.getElementById("name").innerHTML =
      "Name :" + completedata[0].PostOffice[0].Name;
    document.getElementById("branch").innerHTML =
      "BranchType :" + completedata[0].PostOffice[0].BranchType;
    document.getElementById("delivery").innerHTML =
      "Delivery :" + completedata[0].PostOffice[0].DeliveryStatus;
    document.getElementById("district").innerHTML =
      "District :" + completedata[0].PostOffice[0].District;
    document.getElementById("division").innerHTML =
      "division :" + completedata[0].PostOffice[0].Division;

    console.log(completedata);
    document.getElementById("name1").innerHTML =
      "Name :" + completedata[0].PostOffice[0].Name;
    document.getElementById("branch1").innerHTML =
      "BranchType :" + completedata[0].PostOffice[0].BranchType;
    document.getElementById("delivery1").innerHTML =
      "Delivery :" + completedata[0].PostOffice[0].DeliveryStatus;
    document.getElementById("district1").innerHTML =
      "District :" + completedata[0].PostOffice[0].District;
    document.getElementById("division1").innerHTML =
      "division :" + completedata[0].PostOffice[0].Division;

    console.log(completedata);
    document.getElementById("name2").innerHTML =
      "Name :" + completedata[0].PostOffice[0].Name;
    document.getElementById("branch2").innerHTML =
      "BranchType :" + completedata[0].PostOffice[0].BranchType;
    document.getElementById("delivery2").innerHTML =
      "Delivery :" + completedata[0].PostOffice[0].DeliveryStatus;
    document.getElementById("district2").innerHTML =
      "District :" + completedata[0].PostOffice[0].District;
    document.getElementById("division2").innerHTML =
      "division :" + completedata[0].PostOffice[0].Division;
  });

// function searchFun(){

//       let filter = document.getElementById("filter").value;
//     }

//         function getPoatalCode() {
//             let url = `https://api.postalpincode.in/pincode/495001`;
//             console.log(url);
//             fetch(url)
//               .then((res) => res.json())
//               .then((data) => {
//                  console.log(data);
//                 showWethereData(data);
//               });
//         }
//         function showWethereData(data) {
//           document.getElementById("name").innerHTML = `${data.Name}`;
//           document.getElementById("branch").innerHTML = `${data.branchType}`;
//           document.getElementById("delivery").innerHTML = `${data.deliveryStatus}`;
//           document.getElementById("district").innerHTML = `${data.district}`;
//           document.getElementById("division").innerHTML = `${data.division}`;
// }
//         getPoatalCode();
