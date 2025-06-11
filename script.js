
  function toggleMenu() {
    const nav = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
  }



//const hamburger = document.querySelector(".hamburger");
//const nav = document.querySelector(".nav");

//hamburger.addEventListener("click", () => {
  //hamburger.classList.toggle("active");
   // nav.classList.toggle("active");
//})

//document.querySelectorAll(".nav-left, nav-right").forEach(n => n.addEventListener("click", () => {
 // hamburger.classList.remove("active");
  //nav.classList.remove("active");
//}))


 // function toggleMenu() {
     // const menu = document.getElementById('nav');
     // menu.classList.toggle('active');
   // }//
 
 
 document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.testimonials-container'); // scrolling div
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    const scrollAmount = 300; // adjust based on card width

    nextBtn.addEventListener('click', () => {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });
  });

function toggleMenu() {
        const nav = document.getElementById('nav');
        const hamburger = document.querySelector('.hamburger');
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
      }
 // function toggleMenu() {
    //const nav = document.getElementById('nav');
    //const hamburger = document.querySelector('.hamburger');
    //nav.classList.toggle('active');
    //hamburger.classList.toggle('active');
  //}
   document.addEventListener('DOMContentLoaded', function() {
            const questions = document.querySelectorAll('.faq-question');
            
            questions.forEach(question => {
                question.addEventListener('click', function() {
                    const answer = this.nextElementSibling;
                    const icon = this.querySelector('.toggle-icon');
                    
                    // Toggle active class on answer
                    answer.classList.toggle('active');
                    
                    // Toggle active class on icon
                    icon.classList.toggle('active');
                    
                    // Close other open answers
                    questions.forEach(otherQuestion => {
                        if (otherQuestion !== question) {
                            otherQuestion.nextElementSibling.classList.remove('active');
                            otherQuestion.querySelector('.toggle-icon').classList.remove('active');
                        }
                    });
                });
            });
        });

         document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show overlay and alert
      document.getElementById('overlay').style.display = 'block';
      document.getElementById('alert').style.display = 'block';
      
      // Reset form
      this.reset();
    });

    document.getElementById('closeAlert').addEventListener('click', function() {
      document.getElementById('overlay').style.display = 'none';
      document.getElementById('alert').style.display = 'none';
    });