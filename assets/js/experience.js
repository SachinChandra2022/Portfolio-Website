AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Science and Analysis Intern",
    cardImage: "assets/images/experience-page/autonmis.webp",
    place: "Autonmis",
    time: "(Sep, 2024 - Nov, 2024)",
    desp: "<li>Automated ETL workflows with Sling, enhancing execution time.</li> <li>Developed predictive modeling solutions, applying k-means clustering, RFM analysis, and customer segmentation to enhance marketing strategies.</li> <li>Engineered synthetic data while retaining its statistical properties.</li><li>Integrated real-time analytics dashboards for decision-making, leveraging cloud storage solutions.</li>",
  },
  {
    title: "System Developer Intern",
    cardImage: "assets/images/experience-page/vit-bhopal.jpeg",
    place: "VIT Bhopal University",
    time: "(Jan, 2024 - Mar, 2024)",
    desp: "<li>Streamlined exam hall allocation, reducing manual effort.</li><li>Designed seating algorithms, ensuring error-free allocation for 10,000+ students monthly.</li><li>Implemented a web-based system for real-time updates, enhancing user experience.</li><li>Managed stakeholder communications, collaborating with faculty to streamline scheduling and execution.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);



// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "EY Techathon",
    subtitle: "Semi-Finalist",
    image: "assets/images/experience-page/EY.png",
    desp: "Our team made it to the semifinals round with our finance management app 'NidhiPath'.",
    href: "https://uplift.girlscript.tech/",
  },
  {
    title: "Amazon HackOn",
    subtitle: "Participant",
    image: "assets/images/experience-page/amazon-hackon.png",
    desp: "Our team made it upto the mentorship round.",
    href: "https://ulhacks.com/",
  },
  {
    title: "SIH'24",
    subtitle: "Finalist",
    image: "assets/images/experience-page/sih.jpg",
    desp: "Our team with our project 'RE-DACT' made it to the finals.",
    href: "https://wafflehacks.org/",
  },

  {
    title: "Bhartiya Antriksh Hackathon",
    subtitle: "Participant",
    image: "assets/images/experience-page/isro-hackathon.png",
    desp: "Our team participated in a prestigious space hackathon organized by ISRO in association with Hackon.",
    href: "https://wafflehacks.org/",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
