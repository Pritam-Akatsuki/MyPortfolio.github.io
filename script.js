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

document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelector(
    "#carouselExampleCaptions .carousel-inner"
  );
  const carouselIndicators = document.querySelector(
    "#carouselExampleCaptions .carousel-indicators"
  );

  const certificationData = [
    {
      imageUrl: "ImgCss/AWS_01.jpg",
      caption: "AWS Academy Graduate",
    },
    {
      imageUrl: "ImgCss/TCS.jpg",
      caption: "Communication Skills",
    },
    {
      imageUrl: "ImgCss/HTML.jpg",
      caption: "Front Ent DEvelopment- HTML",
    },
    {
      imageUrl: "ImgCss/CPP.jpg",
      caption: "C++ Programming in Hindi",
    },
    {
      imageUrl: "ImgCss/CN_R1.jpg",
      caption: "Innovate India Coding Campionship (R-1)",
    },
    {
      imageUrl: "ImgCss/CN_R2.jpg",
      caption: "Innovate India Coding Campionship (R-2)",
    },
    {
      imageUrl: "ImgCss/React.jpg",
      caption: "React Js Tutorial",
    },
    {
      imageUrl: "ImgCss/Skillup-01.PNG",
      caption: "Python for Beginners",
    },
    {
      imageUrl: "ImgCss/Skillup-02.PNG",
      caption: "ReactJs for Beginners",
    },
    {
      imageUrl: "ImgCss/IP.jpg",
      caption: "IP Awareness/Training Program",
    },
    {
      imageUrl: "ImgCss/Excel-01.jpg",
      caption: "Introduction to MS Excel",
    },
  ];

  function createCarouselSlides() {
    for (let i = 0; i < certificationData.length; i++) {
      const slide = document.createElement("div");
      slide.classList.add("carousel-item");
      if (i === 0) {
        slide.classList.add("active");
      }

      const image = document.createElement("img");
      image.src = certificationData[i].imageUrl;
      image.classList.add("d-block", "w-100");
      slide.appendChild(image);

      const caption = document.createElement("div");
      caption.classList.add(
        "carousel-caption",
        "d-none",
        "d-md-block",
        "text-dark"
      );
      const captionText = document.createElement("h4");
      captionText.textContent = certificationData[i].caption;
      caption.appendChild(captionText);
      slide.appendChild(caption);

      carouselInner.appendChild(slide);

      const indicator = document.createElement("button");
      indicator.setAttribute("type", "button");
      indicator.setAttribute("data-bs-target", "#carouselExampleCaptions");
      indicator.setAttribute("data-bs-slide-to", i.toString());
      indicator.className = i === 0 ? "active bg-danger" : "bg-danger";
      indicator.setAttribute("aria-label", `Slide ${i + 1}`);
      carouselIndicators.appendChild(indicator);
    }
  }

  // Create initial carousel slides
  createCarouselSlides();

  // Initialize Bootstrap carousel
  const carousel = new bootstrap.Carousel(
    document.getElementById("carouselExampleCaptions"),
    {
      interval: 3000, // Transition every 5 seconds
    }
  );
});

// .......................................... Project container

const projects = [
  {
    title: "Quickyy Foods",
    description:
      "It is a comprehensive web-based application developed using PHP and SQL.",
    imageUrl: "ImgCss/Pro_01.PNG",
    githubLink: "https://github.com/Pritam-Akatsuki/Quickky_Foods/tree/master",
  },
  {
    title: "Simple Banking System",
    description:
      "Platform for managing personal finances and conducting basic banking transactions.",
    imageUrl: "ImgCss/Pro_02.PNG",
    githubLink:
      "https://github.com/Pritam-Akatsuki/Basic-Banking-System/tree/master",
  },
  {
    title: "ML-based Sales Forecasting and Purchase Reminder",
    description: "To predict future sales.",
    imageUrl: "ImgCss/Pro-03.jpg",
    githubLink: "https://github.com/Pritam-Akatsuki/ML-Project/tree/master",
  },
  {
    title: " WeatheRing App",
    description: "Web application that provides real-time weather information.",

    imageUrl: "ImgCss/Weather-pro.png",

    githubLink: "https://github.com/Pritam-Akatsuki/internsavy_Level-2_Task-1",
  },
  {
    title: "YouTube Clone Project",
    description: "Interactive features mirroring the original platform. ",
    imageUrl:
      "https://user-images.githubusercontent.com/136802288/264679678-b007f038-a3c9-41fd-a0c1-b5e3b08da193.PNG",
    githubLink: "https://github.com/Pritam-Akatsuki/OCTANET_AUGUST",
  },
  {
    title: "TODO App",
    description:
      "Project that combines the power of HTML, CSS, JavaScript, and SQL.",
    imageUrl: "ImgCss/Todo-pro.png",
    githubLink: "https://github.com/Pritam-Akatsuki/OCTANET_AUGUST/tree/master",
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
        <div class="card custom-card border-3 border-primary" style="  background-color: #caf0f8;">
            <img src="${project.imageUrl}" class="card-img-top" alt="${project.title}">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <p class="card-text">${project.description}</p>
                <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary">Go To GitHub</a>
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
