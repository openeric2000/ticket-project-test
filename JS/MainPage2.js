// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
	mobileMenu.classList.toggle('hidden');
});

// Modal handling
const loginBtn = document.getElementById('loginBtn');
const loginBtnMobile = document.getElementById('loginBtnMobile');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');

const openModal = () => {
	loginModal.classList.remove('hidden');
};

const hideModal = () => {
	loginModal.classList.add('hidden');
};

loginBtn.addEventListener('click', openModal);
loginBtnMobile.addEventListener('click', openModal);
closeModal.addEventListener('click', hideModal);

loginModal.addEventListener('click', (e) => {
	if (e.target === loginModal) {
		hideModal();
	}
});

// Carousel functionality with infinite loop
const carouselInner = document.getElementById('carouselInner');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.querySelectorAll('.carousel-indicators button');
const originalItems = document.querySelectorAll('.carousel-item');

let currentIndex = 1; // 從 1 開始，因為第 0 個是克隆的最後一張
let autoPlayInterval;
let isDragging = false;
let hasMoved = false;
let startX = 0;
let currentX = 0;
let lastAutoPlayTime = Date.now();
let isTransitioning = false;

const totalSlides = originalItems.length;

// 克隆第一張和最後一張以實現無限循環
const firstClone = originalItems[0].cloneNode(true);
const lastClone = originalItems[totalSlides - 1].cloneNode(true);

carouselInner.appendChild(firstClone);
carouselInner.insertBefore(lastClone, originalItems[0]);

// 初始化位置（移到真正的第一張）
carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

const updateCarousel = (instant = false) => {
	if (instant) {
		carouselInner.style.transition = 'none';
	} else {
		carouselInner.style.transition = 'transform 0.6s ease-in-out';
		isTransitioning = true;
	}
	carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
	
	// Update indicators (使用實際索引)
	const actualIndex = currentIndex - 1;
	indicators.forEach((indicator, index) => {
		if (index === actualIndex) {
			indicator.classList.add('active');
		} else {
			indicator.classList.remove('active');
		}
	});
};

// 監聽過渡結束事件
carouselInner.addEventListener('transitionend', () => {
	isTransitioning = false;
	
	// 如果在克隆的幻燈片上，立即跳到真實的幻燈片
	if (currentIndex === 0) {
		currentIndex = totalSlides;
		updateCarousel(true);
	} else if (currentIndex === totalSlides + 1) {
		currentIndex = 1;
		updateCarousel(true);
	}
});

const nextSlide = () => {
	if (isTransitioning) return;
	currentIndex++;
	updateCarousel();
	lastAutoPlayTime = Date.now();
};

const prevSlide = () => {
	if (isTransitioning) return;
	currentIndex--;
	updateCarousel();
	lastAutoPlayTime = Date.now();
};

const goToSlide = (index) => {
	if (isTransitioning) return;
	currentIndex = index + 1; // +1 因為有克隆的幻燈片
	updateCarousel();
	lastAutoPlayTime = Date.now();
};

// Auto play
const startAutoPlay = () => {
	stopAutoPlay(); // 確保沒有重複的 interval
	lastAutoPlayTime = Date.now();
	autoPlayInterval = setInterval(() => {
		// 只有在不拖曳時才自動播放
		if (!isDragging) {
			nextSlide();
		}
	}, 8000);
};

const stopAutoPlay = () => {
	if (autoPlayInterval) {
		clearInterval(autoPlayInterval);
		autoPlayInterval = null;
	}
};

// Button controls
nextBtn.addEventListener('click', () => {
	nextSlide();
	stopAutoPlay();
	startAutoPlay();
});

prevBtn.addEventListener('click', () => {
	prevSlide();
	stopAutoPlay();
	startAutoPlay();
});

// Indicator controls
indicators.forEach((indicator) => {
	indicator.addEventListener('click', () => {
		const slideIndex = parseInt(indicator.getAttribute('data-slide'));
		goToSlide(slideIndex);
		stopAutoPlay();
		startAutoPlay();
	});
});

// Touch/drag support
const getX = (e) => e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;

const startDrag = (e) => {
	isDragging = true;
	hasMoved = false;
	startX = getX(e);
	currentX = startX;
	stopAutoPlay();
};

const moveDrag = (e) => {
	if (!isDragging || isTransitioning) return;
	e.preventDefault(); // 防止頁面滾動
	currentX = getX(e);
	const diff = currentX - startX;
	
	// 標記已經移動
	if (Math.abs(diff) > 5) {
		hasMoved = true;
	}
	
	const percentage = (diff / carouselInner.offsetWidth) * 100;
	carouselInner.style.transition = 'none';
	carouselInner.style.transform = `translateX(calc(-${currentIndex * 100}% + ${percentage}%))`;
};

const endDrag = () => {
	if (!isDragging) return;
	isDragging = false;
	
	const diff = currentX - startX;
	const threshold = carouselInner.offsetWidth * 0.2;

	// 只有在移動距離夠大時才切換
	if (hasMoved && Math.abs(diff) > threshold && !isTransitioning) {
		if (diff < 0) {
			nextSlide();
		} else {
			prevSlide();
		}
	} else {
		// 回到原位
		updateCarousel();
	}

	// 重置狀態
	startX = 0;
	currentX = 0;
	hasMoved = false;
	
	// 重新啟動自動播放
	startAutoPlay();
};

carouselInner.addEventListener('mousedown', startDrag);
carouselInner.addEventListener('mousemove', moveDrag);
carouselInner.addEventListener('mouseup', endDrag);
carouselInner.addEventListener('mouseleave', (e) => {
	if (isDragging) {
		endDrag();
	}
});

carouselInner.addEventListener('touchstart', startDrag, { passive: false });
carouselInner.addEventListener('touchmove', moveDrag, { passive: false });
carouselInner.addEventListener('touchend', endDrag);

// 防止拖曳時選取文字
carouselInner.addEventListener('dragstart', (e) => e.preventDefault());

// Start auto play on page load
startAutoPlay();

// Pause on hover (但不影響拖曳)
document.getElementById('heroCarousel').addEventListener('mouseenter', () => {
	if (!isDragging) {
		stopAutoPlay();
	}
});

document.getElementById('heroCarousel').addEventListener('mouseleave', () => {
	if (!isDragging) {
		startAutoPlay();
	}
});
