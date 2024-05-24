function showNonImageDetails(mt) {
    details.innerHTML = `
    



    <div class="mountain--card">
        <h1 class="mt--title">${mt.name}</h1>
        <div class="img--wrapper">
          
          <h5 class="mt--latlng">LAT ${mt.coords.lat}, LNG${mt.coords.lng}</h5>
          <p class="mt--para">
          ${mt.desc}
          </p>
          <div class="elevation--effort">
            <h5>${mt.elevation} ft.</h5>
            <h5>${mt.effort}</h5>
          </div>
        </div>
      </div>



    `;
   
}
function showImage(imageName, title) {
    const imgWrapper = document.querySelector('.img--wrapper');
    if (imgWrapper) {
        imgWrapper.innerHTML = `<img class="mountain--img" src="./images/${imageName}" alt="${title}">` + imgWrapper.innerHTML;
    }
}


function showMountainDetails(mt){
    showNonImageDetails(mt);
    showImage(mt.img);
}

function onMountainChange() {
for(m of mountainsArray) {
    if(m.name == mountainsElement.value){
        showMountainDetails(m);  
      }
}

}

function showMountains() {
    for (m of mountainsArray) {
        mountainsElement.innerHTML += `<option value="${m.name}">${m.name}</option>`
    }
}

function init() {
    showMountains()
    mountainsElement.addEventListener("change", onMountainChange)
}


document.addEventListener("DOMContentLoaded", init)


{/* <h1>${mt.name}</h1>
    <p>${mt.desc}</p>
    <table><tr><th>Elevation</th><th>Difficulty</th></tr>
        <tr><td>${mt.elevation}ft</td><td>${mt.effort}</td></tr></table>
    <p>Coordinates: ${mt.coords.lat}, ${mt.coords.lng},  </p> */}