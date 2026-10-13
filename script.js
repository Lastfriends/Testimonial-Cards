const testimonials = [
  {
    name: "Artem Jones",
    image: "images/pic-2.png",
    text: "roadmap.sh is an incredible resource. I was fortunate to discover it during my university days in 2018. Back then, it was just a single repository with three images.",
  },
  {
    name: "Mohammad Ali",
    image: "images/pic-3.png",
    text: "This resource helped me improve my skills and become more confident in my development journey.",
  },
  {
    name: "John Doe",
    image: "images/pic-1.png",
    text: "I learned so much from this community. It helped me grow my knowledge and move forward in my career.",
  },
];

const testimonialText = document.querySelector(".testimonial-text");
const personName = document.querySelector(".person-name");

const profiles = document.querySelectorAll(".profile");

const previousButton = document.querySelector(
  '.arrow[aria-label="Previous testimonial"]',
);

const nextButton = document.querySelector(
  '.arrow[aria-label="Next testimonial"]',
);

let currentIndex = 0;

function showTestimonial() {
  const current = testimonials[currentIndex];

  const previousIndex =
    (currentIndex - 1 + testimonials.length) % testimonials.length;

  const nextIndex = (currentIndex + 1) % testimonials.length;

  const previous = testimonials[previousIndex];
  const next = testimonials[nextIndex];

  // Update the testimonial text and selected person's name
  testimonialText.textContent = current.text;
  personName.textContent = current.name;

  // Update the three profile images
  profiles[0].src = previous.image;
  profiles[0].alt = previous.name;

  profiles[1].src = current.image;
  profiles[1].alt = current.name;

  profiles[2].src = next.image;
  profiles[2].alt = next.name;
}

previousButton.addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;

  showTestimonial();
});

nextButton.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % testimonials.length;

  showTestimonial();
});

showTestimonial();
