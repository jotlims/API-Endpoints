// let getPictures;
// fetch("https://dog.ceo/api/breed/hound/images")
//   .then((response) => response.json())
//   .then((data) => {
//     getPictures = data.dog;
//     console.log(getPictures)
//     let picture_data = "";
//     getPictures.map((dogs) => {
//       console.log(dogs);
//       picture_data += `<div>
//      <img src= ${dogs} alt="">
//       <p class="">${dogs}</p>
//       </div>`;
//     });


//     document.getElementById("dog").innerHTML = picture_data;
//   })


  let getPhotos;
   fetch ("https://dog.ceo/api/breed/hound/images")
 
  .then ((response) => response.json())
  .then ((data) => {
    getPhotos = data.message;
    console.log(getPhotos)
    let picture_data = "";
        getPhotos.map((dogs) => {
          console.log(dogs);
          picture_data += `<div>
         <img src= ${dogs} alt="">
          <p class="">${dogs}</p>
          </div>`;
    
  })

  document.getElementById("dog").innerHTML = picture_data

  })