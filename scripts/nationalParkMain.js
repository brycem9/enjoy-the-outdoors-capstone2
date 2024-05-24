function option(target, displayName, value) {
  const option = document.createElement("option");
  option.innerText = displayName;
  if (value != undefined) {
    option.value = value;
  }
  target.appendChild(option);
}

function getDetails(p) {
  return `
    
   
  
    <div class="park--card">
        <h1 class="park--loco">${p.LocationName}</h1>
        <h3> ${p.Address} ${p.City}, ${p.State} ${p.ZipCode} </h3>
        <h4>Phone: ${p.Phone}</h4>
        <h4>Fax: ${p.Fax}</h4>
    </div>
    
    `;
}

function showCatList() {
  for (let cat of parkTypesArray) {
    option(cats, cat);
  }
}

// function showLocationList() {
//   for (let l of locationsArray) {
//     option(parksElement, l);
//   }
// }

function showLocationList() {
  locationsArray.map((l) => {
    option(parksElement, l)
  })
}

// function catChange() {
//   details.innerText = "";
//   for (p of nationalParksArray.filter((p) =>
//     p.LocationName.includes(cats.value)
//   )) {
//     details.innerHTML += getDetails(p);
//   }
// }

function catChange() {
  details.innerHTML = nationalParksArray.filter((p) =>
    p.LocationName.includes(cats.value)
  ).map(getDetails).join("")
}

function locationChange() {
  details.innerText = "";
  for (p of nationalParksArray.filter((p) =>
    p.State == parksElement.value
  )) {
    details.innerHTML += getDetails(p);
  }
}

function parkChange() {
  for (p of parkTypes) {
    if (p) {
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showCatList();
  showLocationList();
  cats.addEventListener("change", catChange);
  parksElement.addEventListener("change", locationChange)
});


{/* <b> ${p.LocationName} </b>

${p.Address} ${p.City}, ${p.State} ${p.ZipCode}
${p.Phone}
${p.Fax} */}