
document.getElementById('eventForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    
    document.querySelectorAll('.error').forEach(err => err.textContent = '');
    
    
    const name = document.getElementById('name').value.trim();
    if (name.length < 3) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters';
        isValid = false;
    }
    
    
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }
    
    
    const phone = document.getElementById('phone').value.trim();
    if (phone.length < 10 || isNaN(phone)) {
        document.getElementById('phoneError').textContent = 'Enter valid 10-digit phone number';
        isValid = false;
    }
    
    
    const event = document.getElementById('event').value;
    if (event === '') {
        document.getElementById('eventError').textContent = 'Please select an event';
        isValid = false;
    }
    
    
    const tickets = document.getElementById('tickets').value;
    if (tickets < 1 || tickets > 10) {
        document.getElementById('ticketsError').textContent = 'Tickets must be between 1-10';
        isValid = false;
    }
    
    
    if (isValid) {
        const successMsg = document.getElementById('successMsg');
        successMsg.style.display = 'block';
        successMsg.textContent = `🎉 Booking Confirmed! ${tickets} ticket(s) for ${event.split(' - ')[0]} booked successfully!`;
        this.reset();
        
        
        document.getElementById('totalPrice')?.remove();
        
    
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 5000);
    }
});


const eventSelect = document.getElementById('event');
const ticketsInput = document.getElementById('tickets');

function calculateTotal() {
    if(eventSelect && ticketsInput) {
        const eventText = eventSelect.value;
        const tickets = parseInt(ticketsInput.value) || 0;
        let price = 0;
        
        if(eventText.includes('$50')) price = 50;
        else if(eventText.includes('$80')) price = 80;
        else if(eventText.includes('$30')) price = 30;
        
        if(price > 0 && tickets > 0) {
            let totalDiv = document.getElementById('totalPrice');
            if(!totalDiv) {
                totalDiv = document.createElement('div');
                totalDiv.id = 'totalPrice';
                totalDiv.style.cssText = 'margin-top:1rem; padding:1rem; background:#3498db; color:white; border-radius:5px; text-align:center; font-size:1.3rem; font-weight:bold; animation:bounceIn 0.5s ease;';
                ticketsInput.parentNode.appendChild(totalDiv);
            }
            totalDiv.innerHTML = ` Total Amount: $${price * tickets}`;
        } else {
            document.getElementById('totalPrice')?.remove();
        }
    }
}

if(eventSelect) eventSelect.addEventListener('change', calculateTotal);
if(ticketsInput) ticketsInput.addEventListener('input', calculateTotal);


document.addEventListener('DOMContentLoaded', function() {

    const cards = document.querySelectorAll('.card, .feature-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
    

    console.log('%c EventBook Loaded Successfully! ', 'background: #e74c3c; color: white; font-size: 16px; padding: 10px;');
});

function addDarkModeToggle() {
    const nav = document.querySelector('nav');
    if(nav) {
        const darkBtn = document.createElement('button');
        darkBtn.textContent = 'black';
        darkBtn.style.cssText = 'background:transparent; border:2px solid white; color:white; padding:8px 15px; border-radius:5px; cursor:pointer; font-size:1.2rem;';
        darkBtn.onclick = function() {
            document.body.classList.toggle('dark-mode');
            this.textContent = document.body.classList.contains('dark-mode') ? 'white' : 'black';
        };
        nav.appendChild(darkBtn);
    }
}
addDarkModeToggle();


const scrollBtn = document.createElement('button');
scrollBtn.innerHTML = '⬆️';
scrollBtn.style.cssText = 'position:fixed; bottom:20px; right:20px; background:#e74c3c; color:white; border:none; padding:15px 20px; border-radius:50%; cursor:pointer; font-size:1.5rem; display:none; z-index:999; box-shadow:0 5px 15px rgba(0,0,0,0.3);';
scrollBtn.onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
window.addEventListener('load', function() {
    const popup = document.getElementById('welcomePopup');
    const closeBtn = document.getElementById('closePopup');
    const exploreBtn = document.getElementById('exploreBtn');
    
    
    setTimeout(() => {
        popup.classList.add('show');
    }, 1000);
    
    
    function closePopup() {
        popup.classList.remove('show');
    }
    

    closeBtn.addEventListener('click', closePopup);
    
   
    exploreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        closePopup();
        document.getElementById('events').scrollIntoView({ behavior: 'smooth' });
    });
    
    
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            closePopup();
        }
    });
});
function openModal(src) {
    document.getElementById("imageModal").style.display = "block";
    document.getElementById("modalImg").src = src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}