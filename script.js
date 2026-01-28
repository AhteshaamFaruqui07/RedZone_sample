// infinite title display
  const titles = [
    "🔥 Red Zone",
    "🚒 Fire Safety",
    "🧯 Stay Protected",
    "Red Zone"
  ];

  let index = 0;

  setInterval(() => {
    document.title = titles[index];
    index = (index + 1) % titles.length;
  }, 4000); // changes every 2 seconds



// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Dropdown Menu for Desktop
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    
    dropdown.addEventListener('mouseenter', () => {
        if (window.innerWidth > 768) {
            dropdownMenu.style.opacity = '1';
            dropdownMenu.style.visibility = 'visible';
            dropdownMenu.style.transform = 'translateY(0)';
        }
    });
    
    dropdown.addEventListener('mouseleave', () => {
        if (window.innerWidth > 768) {
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.visibility = 'hidden';
            dropdownMenu.style.transform = 'translateY(10px)';
        }
    });
});

// Add to Cart Functionality
const addToCartButtons = document.querySelectorAll('.product-actions .btn-primary');
let cartCount = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        cartCount++;
        updateCartCount();
        
        // Animation effect
        this.textContent = 'Added!';
        this.style.backgroundColor = '#198754';
        
        setTimeout(() => {
            this.textContent = 'Add to Cart';
            this.style.backgroundColor = '';
        }, 2000);
    });
});

function updateCartCount() {
    const cartIcons = document.querySelectorAll('.cart-icon');
    cartIcons.forEach(icon => {
        const countElement = icon.querySelector('::after') || icon.nextElementSibling;
        icon.setAttribute('data-count', cartCount);
        
        // Update the actual cart count display
        const countDisplay = icon.querySelector('span') || icon.parentElement.querySelector('span');
        if (countDisplay) {
            countDisplay.textContent = `Cart (${cartCount})`;
        }
    });
}

// Wishlist Toggle
const wishlistButtons = document.querySelectorAll('.wishlist-btn');

wishlistButtons.forEach(button => {
    button.addEventListener('click', function() {
        const heartIcon = this.querySelector('i');
        
        if (heartIcon.classList.contains('far')) {
            heartIcon.classList.remove('far');
            heartIcon.classList.add('fas');
            heartIcon.style.color = '#dc3545';
        } else {
            heartIcon.classList.remove('fas');
            heartIcon.classList.add('far');
            heartIcon.style.color = '';
        }
    });
});

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        if (email) {
            // Show success message
            const originalButtonText = this.querySelector('button').textContent;
            this.querySelector('button').textContent = 'Subscribed!';
            this.querySelector('button').style.backgroundColor = '#198754';
            
            // Clear input
            emailInput.value = '';
            
            // Reset button after 2 seconds
            setTimeout(() => {
                this.querySelector('button').textContent = originalButtonText;
                this.querySelector('button').style.backgroundColor = '';
            }, 2000);
        }
    });
}

// Product Image Hover Effect Enhancement
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    const imgContainer = card.querySelector('.product-img');
    
    if (imgContainer) {
        card.addEventListener('mouseenter', () => {
            imgContainer.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            imgContainer.style.transform = 'scale(1)';
        });
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Testimonial Slider (Simple Implementation)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        if (i === index) {
            testimonial.style.display = 'block';
        } else {
            testimonial.style.display = 'none';
        }
    });
}

// Initialize testimonials (for mobile view)
if (window.innerWidth <= 768 && testimonials.length > 1) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.display = i === 0 ? 'block' : 'none';
    });
    
    // Auto-rotate testimonials every 5 seconds
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }, 5000);
}

// Search Functionality
const searchButton = document.querySelector('.search-bar button');
const searchInput = document.querySelector('.search-bar input');

if (searchButton && searchInput) {
    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // In a real implementation, this would redirect to a search results page
            alert(`Searching for: ${searchTerm}`);
            searchInput.value = '';
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
}

// Initialize cart count from localStorage if available
document.addEventListener('DOMContentLoaded', function() {
    const savedCartCount = localStorage.getItem('cartCount');
    if (savedCartCount) {
        cartCount = parseInt(savedCartCount);
        updateCartCount();
    }
});

// Save cart count to localStorage when it changes
function saveCartCount() {
    localStorage.setItem('cartCount', cartCount.toString());
}

// Update the updateCartCount function to save the count
const originalUpdateCartCount = updateCartCount;
updateCartCount = function() {
    originalUpdateCartCount();
    saveCartCount();
};

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.boxShadow = 'none';
        header.style.background = '#fff';
    }
});

// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const answer = faqItem.querySelector('.faq-answer');
            const icon = this.querySelector('i');
            
            faqItem.classList.toggle('active');
            
            if (faqItem.classList.contains('active')) {
                answer.style.display = 'block';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                answer.style.display = 'none';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
    
    // Form submission for contact page
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            
            // Show success message
            alert(`Thank you, ${name}! We've received your message and will contact you at ${email} shortly.`);
            
            // Reset form
            this.reset();
        });
    }
    
    // Team member hover effect
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            const img = this.querySelector('.member-image img');
            img.style.transform = 'scale(1.1)';
        });
        
        member.addEventListener('mouseleave', function() {
            const img = this.querySelector('.member-image img');
            img.style.transform = 'scale(1)';
        });
    });
});
// Technicians Slider Functionality (if on worker.html page)
    const sliderTrack = document.querySelector('.slider-track');
    if (sliderTrack) {
        const slides = document.querySelectorAll('.technician-slide');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const indicators = document.querySelectorAll('.indicator');
        
        let currentIndex = 0;
        const totalSlides = slides.length;
        const actualSlides = Math.floor(totalSlides / 2); // Actual slides without duplicates
        const slideWidth = slides[0].offsetWidth;
        
        // Set initial position
        updateSlider();
        
        // Next button functionality
        nextBtn.addEventListener('click', () => {
            if (currentIndex < actualSlides - 1) {
                currentIndex++;
            } else {
                // If we're at the last slide, jump to the first duplicate slide
                currentIndex = 0;
            }
            updateSlider();
        });
        
        // Previous button functionality
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                // If we're at the first slide, jump to the last duplicate slide
                currentIndex = actualSlides - 1;
            }
            updateSlider();
        });
        
        // Indicator click functionality
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });
        
        // Auto-rotate slider
        let autoSlide = setInterval(() => {
            if (currentIndex < actualSlides - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        }, 5000);
        
        // Pause auto-rotation on hover
        const sliderContainer = document.querySelector('.slider-container');
        if (sliderContainer) {
            sliderContainer.addEventListener('mouseenter', () => {
                clearInterval(autoSlide);
            });
            
            sliderContainer.addEventListener('mouseleave', () => {
                autoSlide = setInterval(() => {
                    if (currentIndex < actualSlides - 1) {
                        currentIndex++;
                    } else {
                        currentIndex = 0;
                    }
                    updateSlider();
                }, 5000);
            });
        }
        
        function updateSlider() {
            // Update slider position
            sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                if (index === currentIndex % actualSlides) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }
        
        // Smooth transition when reaching the end of the actual slides
        sliderTrack.addEventListener('transitionend', () => {
            if (currentIndex >= actualSlides) {
                // Jump to the first slide without animation
                sliderTrack.style.transition = 'none';
                currentIndex = 0;
                sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
                setTimeout(() => {
                    sliderTrack.style.transition = 'transform 0.5s ease';
                }, 10);
            } else if (currentIndex < 0) {
                // Jump to the last slide without animation
                sliderTrack.style.transition = 'none';
                currentIndex = actualSlides - 1;
                sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
                setTimeout(() => {
                    sliderTrack.style.transition = 'transform 0.5s ease';
                }, 10);
            }
        });
    }

 document.addEventListener('DOMContentLoaded', function() {
            // Create chatbot elements if they don't exist
            if (!document.querySelector('.chatbot-container')) {
                createChatbot();
            }
            
            function createChatbot() {
                // Create chatbot container
                const chatbotContainer = document.createElement('div');
                chatbotContainer.className = 'chatbot-container';
                chatbotContainer.innerHTML = `
                     <div class="chatbot-header">
                <h4>Security Solutions Assistant</h4>
                <span class="chatbot-close">&times;</span>
            </div>
            <div class="chatbot-messages" id="chatbotMessages">
                <div class="message bot-message">
                    <p>Hello! I'm your Security Solutions assistant. How can I help you today? You can ask about our products, prices, or location.</p>
                </div>
            </div>
            <div class="chatbot-input">
                <input type="text" id="chatbotInput" placeholder="Type your message..." autocomplete="off">
                <button id="chatbotSend"><i class="fas fa-paper-plane"></i></button>
            </div>
                `;
                document.body.appendChild(chatbotContainer);
                
                // Add chatbot CSS if not already present
                if (!document.querySelector('#chatbot-styles')) {
                    addChatbotStyles();
                }
                
                // Set up event listeners
                const closeBtn = chatbotContainer.querySelector('.chatbot-close');
                const input = document.getElementById('chatbotInput');
                const sendBtn = document.getElementById('chatbotSend');
                
                closeBtn.addEventListener('click', () => {
                    chatbotContainer.style.display = 'none';
                });
                
                sendBtn.addEventListener('click', sendMessage);
                
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        sendMessage();
                    }
                });
                
                function sendMessage() {
                    const message = input.value.trim();
                    if (message) {
                        addMessageToChat(message, 'user');
                        input.value = '';
                        
                        // Process the message and generate a response
                        setTimeout(() => {
                            const response = generateResponse(message);
                            addMessageToChat(response, 'bot');
                        }, 500);
                    }
                }
                
                function addMessageToChat(message, sender) {
                    const messagesContainer = document.getElementById('chatbotMessages');
                    const messageDiv = document.createElement('div');
                    messageDiv.className = 'message ' + sender + '-message';
                    messageDiv.innerHTML = '<p>' + message + '</p>';
                    messagesContainer.appendChild(messageDiv);
                    
                    // Scroll to bottom
                    messagesContainer.scrollTop = messagesContainer.scrollHeight;
                }
                
                function generateResponse(userMessage) {
                    const message = userMessage.toLowerCase();
                    
            
            // Location related queries
            if (message.includes('location') || message.includes('address') || message.includes('where') || message.includes('shop') || message.includes('store')) {
                return "Our store is located at: Shop No 828, Near Clock Tower, Ghanta Ghar, Badi Omti, Jabalpur-482002, Madhya Pradesh. Owner: Hasib Faruqui";
            }
            
            // Owner related queries
            if (message.includes('owner') || message.includes('who owns') || message.includes('manager')) {
                return "The store is owned by Hasib Faruqui. He is our dedicated owner committed to providing the best security solutions.";
            }
            
            // Product related queries
            if (message.includes('product') || message.includes('what do you sell') || message.includes('items') || message.includes('offer')) {
                return "We offer a wide range of security products including Fire Extinguishers, Fire Balls, Security Cameras, Access Control Systems, and Alarm Systems. You can browse our full product catalog on our website.";
            }
            
            // Price related queries
            if (message.includes('price') || message.includes('cost') || message.includes('how much') || message.includes('expensive')) {
                return "For specific product pricing, I recommend browsing our products page on the website. We offer competitive prices on all our security solutions. For custom quotes, please contact us directly.";
            }
            
            // Fire extinguisher related queries
            if (message.includes('fire extinguisher') || message.includes('extinguisher') || message.includes('fire safety')) {
                return "We have various types of fire extinguishers including ABC, CO2, Foam, Water and Wet Chemical. ABC extinguishers are multi-purpose and suitable for Class A, B, and C fires. Prices vary based on type and size. Visit our fire extinguisher page for more details.";
            }
            
            // Fire ball related queries
            if (message.includes('fire ball') || message.includes('fire balls') || message.includes('automatic fire')) {
                return "Fire balls are automatic fire suppression spheres that activate when exposed to fire. They're ideal for instant protection in various environments. Visit our fire balls page for more details.";
            }
            
            // Camera related queries
            if (message.includes('camera') || message.includes('cctv') || message.includes('surveillance')) {
                return "We offer IP, Analog, Wireless and PTZ security cameras for all surveillance needs. Our cameras come with various features including night vision, motion detection, and mobile app connectivity. Check our cameras page for options.";
            }
            
            // Service related queries
            if (message.includes('service') || message.includes('installation') || message.includes('support') || message.includes('maintenance')) {
                return "We provide installation, maintenance, and support services for all our security products. Our certified technicians ensure proper installation and ongoing maintenance. Contact us for service appointments.";
            }
            
            // Contact related queries
            if (message.includes('contact') || message.includes('phone') || message.includes('email') || message.includes('call')) {
                return "You can reach us at: Shop No 828, Near Clock Tower, Ghanta Ghar, Badi Omti, Jabalpur-482002, Madhya Pradesh. Phone: +1 (555) 123-4567 (this is our demo number). Owner: Hasib Faruqui";
            }
            
            // Hours related queries
            if (message.includes('hours') || message.includes('open') || message.includes('close') || message.includes('time')) {
                return "Our store is open Monday to Saturday from 11:00 AM to 9:00 PM. We're closed on Sundays. For emergency services, please contact us directly.";
            }
            
            // Warranty related queries
            if (message.includes('warranty') || message.includes('guarantee') || message.includes('return')) {
                return "We offer a standard 1-year warranty on most of our products. Some products may have extended warranty options. For returns, we accept them within 30 days of purchase with original receipt. Please contact us for warranty claims.";
            }
            
            // Quality related queries
            if (message.includes('quality') || message.includes('certified') || message.includes('certification') || message.includes('standard')) {
                return "All our products meet international safety standards and are certified by recognized bodies including UL Listed, FM Approved, and NFPA compliant. We ensure quality and reliability in all our security solutions.";
            }
            
            // Installation related queries
            if (message.includes('install') || message.includes('installation') || message.includes('setup')) {
                return "Yes, we provide professional installation services for all our security products. Our certified technicians ensure proper installation and configuration. Installation costs vary based on product type and complexity. Contact us for a quote.";
            }
            
            // Training related queries
            if (message.includes('training') || message.includes('how to use') || message.includes('instructions') || message.includes('manual')) {
                return "We provide training and instruction on how to use our security products. This includes fire extinguisher usage, camera system operation, and alarm system management. We also provide user manuals with all products.";
            }
            
            // Emergency related queries
            if (message.includes('emergency') || message.includes('urgent') || message.includes('immediate') || message.includes('fast')) {
                return "For emergency situations, please contact us directly at our store. We offer emergency services and quick response for urgent security needs. Our team is equipped to handle urgent fire safety and security issues.";
            }
            
            // Brands related queries
            if (message.includes('brand') || message.includes('brands') || message.includes('manufacturer') || message.includes('made by')) {
                return "We stock products from leading manufacturers including Amerex, Ansul, Badger, Buckeye, and Kidde for fire safety equipment. For security cameras, we offer brands like Hikvision, Dahua, Axis, and Lorex.";
            }
            
            // Bulk orders related queries
            if (message.includes('bulk') || message.includes('wholesale') || message.includes('discount') || message.includes('large order')) {
                return "Yes, we offer discounts for bulk orders and wholesale purchases. For orders of 10+ units, we provide special pricing. Contact us directly to discuss your bulk order requirements and receive a custom quote.";
            }
            
            // Types of fire extinguishers
            if (message.includes('class a') || message.includes('class b') || message.includes('class c') || message.includes('class d') || message.includes('class k')) {
                return "Fire extinguishers are classified by the type of fire they can extinguish: Class A (ordinary combustibles), Class B (flammable liquids), Class C (electrical equipment), Class D (combustible metals), and Class K (cooking oils). ABC extinguishers handle Classes A, B, and C.";
            }
            
            // Camera features related queries
            if (message.includes('night vision') || message.includes('resolution') || message.includes('wireless') || message.includes('recording')) {
                return "Our cameras offer various features including night vision up to 100+ feet, resolutions from 720p to 4K, wireless connectivity options, continuous and motion-activated recording, mobile app access, and cloud storage options. Check individual product pages for specific features.";
            }
            
            // Payment related queries
            if (message.includes('payment') || message.includes('pay') || message.includes('credit card') || message.includes('cash')) {
                return "We accept multiple payment methods including cash, credit cards (Visa, Mastercard, American Express), debit cards, and bank transfers. For large orders, we can arrange payment plans. Contact us for more information.";
            }
            
            // Availability related queries
            if (message.includes('in stock') || message.includes('available') || message.includes('delivery') || message.includes('shipping')) {
                return "Most of our popular items are in stock and available for immediate purchase. For out-of-stock items, delivery typically takes 2-5 business days. We offer local delivery within Jabalpur and shipping to other locations. Contact us for current availability.";
            }
            
            // Maintenance related queries
            if (message.includes('maintain') || message.includes('maintenance') || message.includes('check') || message.includes('inspect')) {
                return "Regular maintenance is important for all security equipment. Fire extinguishers should be inspected monthly and serviced annually. Security cameras need periodic cleaning and software updates. We offer maintenance contracts for ongoing support.";
            }
            
            // Return policy queries
            if (message.includes('return policy') || message.includes('returns') || message.includes('refund')) {
                return "We have a 10-day return policy for most products. Items must be in original condition with tags attached. Some safety products may be non-returnable for safety reasons. Please contact us for specific return requests.";
            }
            
            // Free estimate queries
            if (message.includes('free estimate') || message.includes('quote') || message.includes('cost estimate')) {
                return "Yes, we provide free estimates for all our installation and service projects. Simply contact us with your requirements and our technicians will provide a detailed quote at no cost to you.";
            }
            
            // Service area queries
            if (message.includes('service area') || message.includes('service location') || message.includes('delivery area')) {
                return "We primarily serve the Jabalpur area and surrounding districts. For installation and service, we cover a 50km radius from our store location. For product delivery, we can ship to most locations in Madhya Pradesh and beyond.";
            }
            
            // Product recommendation queries
            if (message.includes('recommend') || message.includes('best for') || message.includes('which should i buy') || message.includes('suggestion')) {
                return "For personalized product recommendations, I'd suggest visiting our store where our experts can assess your specific needs. Generally, for homes we recommend ABC fire extinguishers and basic camera systems. For businesses, we offer customized security solutions based on your requirements.";
            }
            
            // Comparison queries
            if (message.includes('difference') || message.includes('compare') || message.includes('which is better')) {
                return "We offer various product comparisons on our website. For specific comparisons, I recommend visiting our store where our experts can explain the differences between products and help you choose the right solution for your needs.";
            }
            
            // Troubleshooting queries
            if (message.includes('not working') || message.includes('broken') || message.includes('fix') || message.includes('repair')) {
                return "For troubleshooting, please contact our service team directly. Many issues can be resolved over the phone. If your product is under warranty, we'll provide service as per warranty terms. Contact us for support.";
            }
            
            // Licensing queries
            if (message.includes('license') || message.includes('certified') || message.includes('insurance')) {
                return "Yes, we are fully licensed and insured for all installation and service work. Our technicians are certified in their respective fields and follow all safety and industry standards.";
            }
            
            // Financing queries
            if (message.includes('financing') || message.includes('loan') || message.includes('payment plan')) {
                return "We offer flexible payment plans for large orders and installation projects. For qualified customers, we can arrange financing options. Contact us directly to discuss your financing needs.";
            }
            
            // Default response
            return "Thank you for your inquiry! I can help you with information about our products, prices, location, and services. Our store is located at: Shop No 828, Near Clock Tower, Ghanta Ghar, Badi Omti, Jabalpur-482002, Madhya Pradesh. Owner: Hasib Faruqui. What else would you like to know?";

                }
            }
            
            function addChatbotStyles() {
                const style = document.createElement('style');
                style.id = 'chatbot-styles';
                style.textContent = `
                    .chatbot-container {
                        position: fixed;
                        bottom: 20px;
                        right: 20px;
                        width: 350px;
                        height: 500px;
                        background: white;
                        border-radius: 10px;
                        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
                        display: flex;
                        flex-direction: column;
                        overflow: hidden;
                        z-index: 1000;
                        font-family: Arial, sans-serif;
                    }
                    
                    .chatbot-header {
                        background: red;
                        color: white;
                        padding: 15px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    
                    .chatbot-header h4 {
                        margin: 0;
                        font-size: 16px;
                    }
                    
                    .chatbot-close {
                        font-size: 24px;
                        cursor: pointer;
                        line-height: 1;
                    }
                    
                    .chatbot-close:hover {
                        color: #ff6b6b;
                    }
                    
                    .chatbot-messages {
                        flex: 1;
                        padding: 15px;
                        overflow-y: auto;
                        background: #f8f9fa;
                    }
                    
                    .message {
                        margin-bottom: 15px;
                        max-width: 80%;
                    }
                    
                    .user-message {
                        margin-left: auto;
                        text-align: right;
                    }
                    
                    .bot-message {
                        margin-right: auto;
                    }
                    
                    .message p {
                        margin: 0;
                        padding: 10px 15px;
                        border-radius: 18px;
                        display: inline-block;
                    }
                    
                    .user-message p {
                        background: black;
                        color: white;
                    }
                    
                    .bot-message p {
                        background: #e9ecef;
                        color: #333;
                    }
                    
                    .chatbot-input {
                        display: flex;
                        padding: 10px;
                        background: white;
                        border-top: 1px solid #dee2e6;
                    }
                    
                    #chatbotInput {
                        flex: 1;
                        padding: 10px 15px;
                        border: 1px solid #ddd;
                        border-radius: 20px;
                        outline: none;
                    }
                    
                    #chatbotSend {
                        background-color: #007BFF;
                        color: white;
                        border: none;
                        border-radius: 50%;
                        width: 40px;
                        height: 40px;
                        margin-left: 10px;
                        cursor: pointer;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    
                    #chatbotSend:hover {
                        background: #0056b3;
                    }
                    
                    .chatbot-button {
                        position: fixed;
                        bottom: 20px;
                        right: 20px;
                        width: 60px;
                        height: 60px;
                        background: #010101ff;
                        color: white;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 24px;
                        cursor: pointer;
                        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
                        z-index: 1000;
                        border: none;
                        overflow: hidden;
                        padding: 0;
                    }
                    
                    .chatbot-button img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        object-fit: cover;
                        padding: 5px;
                    }
                    
                    .chatbot-button:hover {
                        background:red;
                    }
                    
                    .chatbot-container {
                        display: none;
                    }
                    
                    .chatbot-container.active {
                        display: flex;
                    }
                `;
                document.head.appendChild(style);
                
                // Create floating button to open chat
                const chatButton = document.createElement('div');
                chatButton.className = 'chatbot-button';
                chatButton.innerHTML = '<img src="logo.png" alt="Chat" width="30" height="30">';
                chatButton.onclick = function() {
                    const container = document.querySelector('.chatbot-container');
                    container.style.display = 'flex';
                };
                document.body.appendChild(chatButton);
            }
        });
