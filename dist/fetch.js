const fetchData = async () => {
  const page = Math.floor(Math.random() * 650) + 1;
  console.log(page);
  const res =
    await fetch(`https://www.rijksmuseum.nl/api/en/collection?key=v8ebCfNp&imgonly=true&involvedMaker=&p=${page}&ps=15
       `);

  const data = await res.json();

  console.log(data);
  console.log(data.artObjects[0].webImage.url);
  // select the container where you want to append the images
  const container = document.getElementById("artwork-container");

  // building hero section
  const firstArtwork = data.artObjects[0];
  const heroImageUrl = firstArtwork.webImage.url;
  const heroSection = document.querySelector(".hero");
  heroSection.style.backgroundImage = `url('${heroImageUrl}')`;
  heroSection.style.backgroundSize = "cover";
  heroSection.style.backgroundPosition = "center";

  for (let i = 1; i < 14; i++) {
    const imageUrl = data.artObjects[i].webImage.url;
    // create a new img element
    const div = document.createElement("div");
    div.classList.add("artworkDiv", "w-60", "h-80");
    const img = document.createElement("img");
    img.classList.add("object-cover", "w-full", "h-full");
    img.src = imageUrl;

    // append the img element to the container
    container.appendChild(div);
    div.appendChild(img);
  }
};

fetchData();
