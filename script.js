const dynamicText = document.getElementById("dynamicText");

const options = [
  "Web Devlopment",
  "Software Devlopment",
  "MERN Stack",
  "Python",
  "C++",
  "JAVA",
];

function changeText() {
  const randomIndex = Math.floor(Math.random() * options.length);
  const newText = options[randomIndex];
  dynamicText.textContent = `Passionate in ${newText}.`;
}

setInterval(changeText, 2000);

// .......................................... cirtification container

// document.addEventListener("DOMContentLoaded", function () {
//   const carouselInner = document.querySelector(
//     "#carouselExampleCaptions .carousel-inner"
//   );
//   const carouselIndicators = document.querySelector(
//     "#carouselExampleCaptions .carousel-indicators"
//   );

//   const certificationData = [
//     {
//       imageUrl: "ImgCss/AWS_01.jpg",
//       caption: "AWS Academy Graduate",
//     },
//     {
//       imageUrl: "ImgCss/TCS.jpg",
//       caption: "Communication Skills",
//     },
//     {
//       imageUrl: "ImgCss/HTML.jpg",
//       caption: "Front Ent DEvelopment- HTML",
//     },
//     {
//       imageUrl: "ImgCss/CPP.jpg",
//       caption: "C++ Programming in Hindi",
//     },
//     {
//       imageUrl: "ImgCss/CN_R1.jpg",
//       caption: "Innovate India Coding Campionship (R-1)",
//     },
//     {
//       imageUrl: "ImgCss/CN_R2.jpg",
//       caption: "Innovate India Coding Campionship (R-2)",
//     },
//     {
//       imageUrl: "ImgCss/React.jpg",
//       caption: "React Js Tutorial",
//     },
//     {
//       imageUrl: "ImgCss/Skillup-01.PNG",
//       caption: "Python for Beginners",
//     },
//     {
//       imageUrl: "ImgCss/Skillup-02.PNG",
//       caption: "ReactJs for Beginners",
//     },
//     {
//       imageUrl: "ImgCss/IP.jpg",
//       caption: "IP Awareness/Training Program",
//     },
//     {
//       imageUrl: "ImgCss/Excel-01.jpg",
//       caption: "Introduction to MS Excel",
//     },
//   ];

//   function createCarouselSlides() {
//     for (let i = 0; i < certificationData.length; i++) {
//       const slide = document.createElement("div");
//       slide.classList.add("carousel-item");
//       if (i === 0) {
//         slide.classList.add("active");
//       }

//       const image = document.createElement("img");
//       image.src = certificationData[i].imageUrl;
//       image.classList.add("d-block", "w-100");
//       slide.appendChild(image);

//       const caption = document.createElement("div");
//       caption.classList.add(
//         "carousel-caption",
//         "d-none",
//         "d-md-block",
//         "text-dark"
//       );
//       const captionText = document.createElement("h4");
//       captionText.textContent = certificationData[i].caption;
//       caption.appendChild(captionText);
//       slide.appendChild(caption);

//       carouselInner.appendChild(slide);

//       const indicator = document.createElement("button");
//       indicator.setAttribute("type", "button");
//       indicator.setAttribute("data-bs-target", "#carouselExampleCaptions");
//       indicator.setAttribute("data-bs-slide-to", i.toString());
//       indicator.className = i === 0 ? "active bg-danger" : "bg-danger";
//       indicator.setAttribute("aria-label", `Slide ${i + 1}`);
//       carouselIndicators.appendChild(indicator);
//     }
//   }

//   // Create initial carousel slides
//   createCarouselSlides();

//   // Initialize Bootstrap carousel
//   const carousel = new bootstrap.Carousel(
//     document.getElementById("carouselExampleCaptions"),
//     {
//       interval: 3000, // Transition every 5 seconds
//     }
//   );
// });
// .......................................... new certification container
const boxData = [
  { imageUrl: './ImgCss/doc-1.png', text: 'AWS Academy Graduate', driveLink: 'https://drive.google.com/file/d/1IqtOQhEGXPrYnxNVuEAMvqwrPqPGnYlS/view?usp=sharing' },
  { imageUrl: './ImgCss/doc-2.png', text: 'Communication Skills', driveLink: 'https://drive.google.com/file/d/1JNVMWKNpoHqgrL6He0ZQj11_CM_F0ry1/view?usp=sharing' },
  { imageUrl: './ImgCss/doc-3.png', text: 'Frontend Dev - HTML', driveLink: 'https://drive.google.com/file/d/1J52JsJTFUmviNcjHw5UtrK545VsylhUN/view?usp=sharing' },
  { imageUrl: './ImgCss/doc-4.png', text: 'C++ Programming', driveLink: 'https://drive.google.com/file/d/1J48qpzqJx1Vg15Hatz26RfUHxjcDmHdC/view?usp=sharing' },
  { imageUrl: './ImgCss/doc-5.png', text: 'ReactJS for Beginners', driveLink: 'https://drive.google.com/file/d/1XIuXDk554SSsQrlL-h7x0qDrO7G7A72o/view?usp=sharing' },
  { imageUrl: './ImgCss/doc-6.png', text: 'ReactJs Tutorial', driveLink: 'https://drive.google.com/file/d/1JXA9iP0XUHIfoZxSjsWYfN4hWfFDdPbW/view?usp=sharing' },
  { imageUrl: './ImgCss/doc-7.png', text: 'Python for Beginners', driveLink: 'https://drive.google.com/file/d/1ULPL_C3zralX8aNzfdJAe3WIPssIDMae/view?usp=sharing' },
  { imageUrl: './ImgCss/doc-11.png', text: 'GSW Full Stack java Dev', driveLink: 'https://drive.google.com/file/d/1kxrvsuPaFnWRZTkrBj_Kd-Rn-MZ3hvNC/view?usp=sharing' },
  { imageUrl: './ImgCss/doc-12.png', text: 'Data Structure in C++', driveLink: 'https://drive.https://drive.google.com/file/d/1l-2QKkCnnFoLVhpMICmgEZw-7v1EtYl7/view?usp=sharing.com/link2' },
  { imageUrl: './ImgCss/doc-9.png', text: 'IICC round-01', driveLink: 'https://drive.google.com/file/d/1Iwi4wetjk7LDBYHvHcxOXIkmS4gp7H5K/view?usp=sharing://drive.google.com/link1' },
  { imageUrl: './ImgCss/doc-9.png', text: 'IICC round-02', driveLink: 'https://drive.google.com/file/d/1J1yXp5J2HvG4GaTP9_RpHt_b0Q92-6FI/view?usp=sharing' },
  { imageUrl: './ImgCss/doc-8.png', text: 'IP Awareness Program', driveLink: 'https://drive.google.com/file/d/1fP-P5_NX5aYizo1FFiKcaar3g0t3Uo0P/view?usp=sharing://drive.google.com/link2' },
  { imageUrl: './ImgCss/doc-10.png', text: 'Introduction to MS Excel', driveLink: 'https://https://drive.google.com/file/d/1gubmlMf6MnD6JpXdBrpwF1hA0yyO7zQO/view?usp=sharing.google.com/link2' },
 
];

      // Function to create a box element
      function createBox(imageUrl, text, driveLink) {
          const boxContainer = document.createElement('div');
          boxContainer.classList.add('col-md-6', 'mb-3'); // Add Bootstrap classes

          // Create an anchor tag around the image with the Google Drive link
          boxContainer.innerHTML = `
              <div class="box-container">
                  <a href="${driveLink}" target="_blank">
                      <img src="${imageUrl}" alt="Icon" class="box-img">
                  </a>
                  <div>
                      <p class="m-auto">${text}</p>
                  </div>
              </div>
          `;
          return boxContainer;
      }

      // Function to display boxes based on the specified limit
      function displayBoxes(limit) {
          const boxContainer = document.getElementById('boxContainer');
          boxContainer.innerHTML = ''; // Clear existing content

          // Populate boxes dynamically based on the limit
          boxData.slice(0, limit).forEach(({ imageUrl, text, driveLink }) => {
              const boxElement = createBox(imageUrl, text, driveLink);
              boxContainer.appendChild(boxElement);
          });
      }

      // Initial display based on screen size
      let isSeeMore = true;
      const seeMoreBtn = document.getElementById('seeMoreBtn');
      seeMoreBtn.addEventListener('click', function () {
          isSeeMore = !isSeeMore;

          if (isSeeMore) {
              displayBoxes(window.innerWidth >= 768 ? 10 : 5);
              this.innerText = 'See More';
          } else {
              displayBoxes(boxData.length);
              this.innerText = 'See Less';
          }
      });

      // Display initial boxes
      displayBoxes(window.innerWidth >= 768 ? 10 : 5);



     
// .......................................... Project container

const projects = [
  {
    title: "Quickyy Foods",
    description:
      "It is a comprehensive web-based application developed using PHP and SQL.",
    imageUrl: "ImgCss/Pro_01.PNG",
    githubLink: "https://github.com/Pritam-Akatsuki/Quickky_Foods/tree/master",
    demo:"https://drive.google.com/file/d/1STc5s50FrRo6ktR8xdi9az03pK-RXs1K/view?usp=sharing",
  },
  {
    title: "Simple Banking System",
    description:
      "Platform for managing personal finances and conducting basic banking transactions.",
    imageUrl: "ImgCss/Pro_02.PNG",
    githubLink:
      "https://github.com/Pritam-Akatsuki/Basic-Banking-System/tree/master",
    demo:"https://www.linkedin.com/feed/update/urn:li:activity:6977994889498144768/",

  },
  {
    title: "ML-based Sales Forecasting and Purchase Reminder",
    description: "To predict future sales.",
    imageUrl: "ImgCss/Pro-03.jpg",
    githubLink: "https://github.com/Pritam-Akatsuki/ML-Project/tree/master",
    demo:"https://www.awesomescreenshot.com/video/16815968?key=658099f945d03ece584444a5299edeb5",

  },
  {
    title: " WeatheRing App",
    description: "Web application that provides real-time weather information.",

    imageUrl: "ImgCss/Weather-pro.png",

    githubLink: "https://github.com/Pritam-Akatsuki/internsavy_Level-2_Task-1",
    demo:"https://www.awesomescreenshot.com/video/20390087?key=b97c4dbf4741ab7deb1b8e63cc2b54b9",

  },
  {
    title: "YouTube Clone Project",
    description: "Interactive features mirroring the original platform. ",
    imageUrl:
      "https://user-images.githubusercontent.com/136802288/264679678-b007f038-a3c9-41fd-a0c1-b5e3b08da193.PNG",
    githubLink: "https://github.com/Pritam-Akatsuki/OCTANET_AUGUST",
    demo:"https://www.linkedin.com/feed/update/urn:li:activity:7098278502432407552/",

  },
  {
    title: "TODO App",
    description:
      "Project that combines the power of HTML, CSS, JavaScript, and SQL.",
    imageUrl: "ImgCss/Todo-pro.png",
    githubLink: "https://github.com/Pritam-Akatsuki/OCTANET_AUGUST/tree/master",
    demo:"https://www.linkedin.com/feed/update/urn:li:activity:7096118596111654912/",

  },
  // Add more projects as needed
];

// ............document.addEventListener("DOMContentLoaded", function () {
const projectCardsContainer = document.querySelector(
  ".project-cards-container"
);
let isDragging = false;
let startPositionX = 0;
let scrollLeft = 0;

function createProjectCard(project) {
  const card = document.createElement("div");
  card.classList.add("col-lg-4", "col-sm-6", "mb-2", "project-card"); // Add the project-card class

  card.innerHTML = `
        <div class="card custom-card border-5" style="border-color:#142850;  background-color: #0C7B93;">
            <img src="${project.imageUrl}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <div class="text-center">
                <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" ><img src = "./ImgCss/gitBut.png" class="box-img mx-4"></a>
                <a href="${project.demo}" target="_blank" rel="noopener noreferrer" ><img src = "./ImgCss/videoBut.png" class="box-img mx-4"></a>
            </div>
            </div>
        </div>
    `;

  return card;
}

projectCardsContainer.addEventListener("touchstart", (e) => {
  isDragging = true;
  startPositionX = e.touches[0].pageX - projectCardsContainer.offsetLeft;
  scrollLeft = projectCardsContainer.scrollLeft;
});

projectCardsContainer.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const mouseX = e.touches[0].pageX - projectCardsContainer.offsetLeft;
  const dragDistance = mouseX - startPositionX;
  projectCardsContainer.scrollLeft = scrollLeft - dragDistance;
});

projectCardsContainer.addEventListener("touchend", () => {
  isDragging = false;
});

projectCardsContainer.addEventListener("touchcancel", () => {
  isDragging = false;
});

projectCardsContainer.addEventListener("mousedown", (e) => {
  isDragging = true;
  startPositionX = e.pageX - projectCardsContainer.offsetLeft;
  scrollLeft = projectCardsContainer.scrollLeft;
});

projectCardsContainer.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const mouseX = e.pageX - projectCardsContainer.offsetLeft;
  const dragDistance = mouseX - startPositionX;
  projectCardsContainer.scrollLeft = scrollLeft - dragDistance;
});

projectCardsContainer.addEventListener("mouseup", () => {
  isDragging = false;
});

projectCardsContainer.addEventListener("mouseleave", () => {
  isDragging = false;
});

// projectCardsContainer.addEventListener("wheel", (e) => {
//   // Enable mouse wheel scrolling
//   projectCardsContainer.scrollLeft += e.deltaY;
// });

// Add project cards to the container
projects.forEach((project) => {
  const card = createProjectCard(project);
  projectCardsContainer.appendChild(card);
});

// ..................................... Intership cards

// const cardData = [
//   {
//     imageLink:
//       "https://drive.google.com/file/d/1JIukmgT4TgWsednHVoDX2AdrxIfDDSom/view?usp=sharing",
//     buttonLink:
//       "https://github.com/Pritam-Akatsuki/Basic-Banking-System/tree/master",
//     imageSrc: "ImgCss/The-Sparks.jpg",
//     title: "Internship Program",
//     date: "Sep 2022 - Oct 2022",
//   },
//   {
//     imageLink:
//       "https://drive.google.com/file/d/1S5xD_4R18TRgOPvA9mH-U_j_zbLmy8vC/view?usp=sharing",
//     buttonLink: "https://github.com/Pritam-Akatsuki/OCTANET_AUGUST",
//     imageSrc: "ImgCss/OctaNet.PNG",
//     title: "Web Development Internship",
//     date: "Aug 2023 - Sep 2023",
//   },
//   {
//     imageLink:
//       "https://drive.google.com/file/d/1XS1Hd4bNcixxa64voV5Cb7Ym9slRaNgB/view?usp=sharing",
//     buttonLink: "https://github.com/Pritam-Akatsuki/internsavy_Level-2_Task-1",
//     imageSrc: "ImgCss/Internsavy.PNG",
//     title: "Web Dev. and Designing",
//     date: "Aug 2023 - Sep 2023",
//   },
// ];

// // Function to generate card HTML dynamically
// function generateCard(card) {
//   return `
//     <div class="col-md-4">
//       <div class="card mx-auto mb-4" style="width: 20rem; background-color: #90e0ef;">
//         <a href="${card.imageLink}" target="_blank" rel="noopener noreferrer">
//           <img src="${card.imageSrc}" class="card-img-top" alt="${card.title}" style="height: 200px; max-width: 100%;">
//         </a>
//         <div class="card-body text-center">
//           <h5 class="card-title">${card.title}</h5>
//           <p class="card-text">From ${card.date}</p>
//           <a href="${card.buttonLink}" class="btn btn-danger" target="_blank">My internship tasks included:</a>
//         </div>
//       </div>
//     </div>
//   `;
// }

// // Function to add cards to the container
// function addCardsToContainer(cardData) {
//   const cardContainer = document.getElementById("cardContainer");
//   cardData.forEach((card) => {
//     const cardHtml = generateCard(card);
//     cardContainer.innerHTML += cardHtml;
//   });
// }

// // Call the function to add cards to the container
// addCardsToContainer(cardData);
