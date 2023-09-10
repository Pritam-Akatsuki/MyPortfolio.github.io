const dynamicText = document.getElementById('dynamicText');

const options = [
  "Web Devlopment",
  "Software Devlopment",
  "ML",
  "Programming"
];

function changeText() {
  const randomIndex = Math.floor(Math.random() * options.length);
  const newText = options[randomIndex];
  dynamicText.textContent = `Passionate in ${newText}.`;
}

setInterval(changeText, 2000);


// .......................................... cirtification container

document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelector("#carouselExampleCaptions .carousel-inner");
  const carouselIndicators = document.querySelector("#carouselExampleCaptions .carousel-indicators");

  const certificationData = [
      {
          imageUrl: "ImgCss/AWS_01.jpg",
          caption: "AWS Academy Graduate"
      },
      {
          imageUrl: "ImgCss/TCS.jpg",
          caption: "Communication Skills"
      },
      {
          imageUrl: "ImgCss/HTML.jpg",
          caption: "Front Ent DEvelopment- HTML"
      },
      {
          imageUrl: "ImgCss/CPP.jpg",
          caption: "C++ Programming in Hindi"
      },
      {
          imageUrl: "ImgCss/CN_R1.jpg",
          caption: "Innovate India Coding Campionship (R-1)"
      },
      {
        imageUrl: "ImgCss/CN_R2.jpg",
        caption: "Innovate India Coding Campionship (R-2)"
    },
    {
      imageUrl: "ImgCss/React.jpg",
      caption: "React Js Tutorial"
  },
  {
    imageUrl: "ImgCss/python-01.png",
    caption: "Python for Beginners"
},
      // Add more certification objects as needed
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
          caption.classList.add("carousel-caption", "d-none", "d-md-block","text-dark");
          const captionText = document.createElement("h4");
          captionText.textContent = certificationData[i].caption;
          caption.appendChild(captionText);
          slide.appendChild(caption);

          carouselInner.appendChild(slide);

          const indicator = document.createElement("button");
          indicator.setAttribute("type", "button");
          indicator.setAttribute("data-bs-target", "#carouselExampleCaptions");
          indicator.setAttribute("data-bs-slide-to", i.toString());
          indicator.className = (i === 0) ? "active bg-danger" : "bg-danger";
          indicator.setAttribute("aria-label", `Slide ${i + 1}`);
          carouselIndicators.appendChild(indicator);
      }
  }

  // Create initial carousel slides
  createCarouselSlides();

  // Initialize Bootstrap carousel
  const carousel = new bootstrap.Carousel(document.getElementById("carouselExampleCaptions"), {
      interval: 3000 // Transition every 5 seconds
  });
});


// .......................................... Project container

const projects = [
  {
      title: "Quickyy Foods",
      description: 'It is a comprehensive web-based application developed using PHP and SQL.',
      imageUrl: "ImgCss/Pro_01.PNG",
      githubLink: "https://github.com/Pritam-Akatsuki/Quickky_Foods/tree/master"
  },
  {
      title: "Simple Banking System",
      description: "Platform for managing personal finances and conducting basic banking transactions.",
      imageUrl: "ImgCss/Pro_02.PNG",
      githubLink: "https://github.com/Pritam-Akatsuki/Basic-Banking-System/tree/master"
  },
  {
      title: "ML-based Sales Forecasting and Purchase Reminder",
      description: "To predict future sales.",
      imageUrl: "ImgCss/Pro-03.jpg",
      githubLink: "https://github.com/Pritam-Akatsuki/ML-Project/tree/master"
  },
  {
    title: " WeatheRing App",
    description: "Web application that provides real-time weather information.",
    imageUrl: "ImgCss/pro-04.png",
    githubLink: "https://github.com/Pritam-Akatsuki/internsavy_Level-2_Task-1"
},
{
  title: "YouTube Clone Project",
  description: "Interactive features mirroring the original platform. ",
  imageUrl: "https://user-images.githubusercontent.com/136802288/264679678-b007f038-a3c9-41fd-a0c1-b5e3b08da193.PNG",
  githubLink: "https://github.com/Pritam-Akatsuki/OCTANET_AUGUST"
},
{
  title: "TODO App",
  description: "Project that combines the power of HTML, CSS, JavaScript, and SQL.",
  imageUrl: "ImgCss/Pro-05.png",
  githubLink: "https://github.com/Pritam-Akatsuki/OCTANET_AUGUST/tree/master"
},
  // Add more projects as needed
];

// ............document.addEventListener("DOMContentLoaded", function () {
  const projectCardsContainer = document.querySelector(".project-cards-container");
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
                <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Go To GitHub</a>
            </div>
        </div>
    `;

    return card;
  }

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

  projectCardsContainer.addEventListener("wheel", (e) => {
    // Enable mouse wheel scrolling
    projectCardsContainer.scrollLeft += e.deltaY;
  });

  // Add project cards to the container
  projects.forEach((project) => {
    const card = createProjectCard(project);
    projectCardsContainer.appendChild(card);
  });
