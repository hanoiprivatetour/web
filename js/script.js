// ===== TOUR DATA (Bilingual) =====
const toursData = [
    {
        id: 1,
        en: { name: "Hanoi City Tour", desc: "Visit Ho Chi Minh Mausoleum, Temple of Literature, Hoan Kiem Lake, and explore the charming Old Quarter." },
        vi: { name: "Tham Quan Hà Nội", desc: "Thăm Lăng Bác, Văn Miếu, Hồ Hoàn Kiếm và khám phá Phố Cổ quyến rũ." },
        duration: { en: "Full Day (8 hours)", vi: "Cả Ngày (8 giờ)" },
        price: 55,
        image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&q=80"
    },
    {
        id: 2,
        en: { name: "Hanoi Street Food Tour", desc: "Walk through the Old Quarter tasting authentic Vietnamese dishes like pho, banh mi, bun cha, and egg coffee." },
        vi: { name: "Tour Ẩm Thực Đường Phố", desc: "Đi bộ qua Phố Cổ thưởng thức các món ăn Việt Nam như phở, bánh mì, bún chả và cà phê trứng." },
        duration: { en: "Half Day (4 hours)", vi: "Nửa Ngày (4 giờ)" },
        price: 39,
        image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&q=80"
    },
    {
        id: 3,
        en: { name: "Hanoi Motorbike Tour", desc: "Hop on a scooter with a local driver and explore Hanoi's hidden alleys, markets, and backstreets." },
        vi: { name: "Tour Xe Máy Hà Nội", desc: "Lên xe máy cùng tài xế địa phương khám phá các ngõ hẻm, chợ và đường phố Hà Nội." },
        duration: { en: "Half Day (4 hours)", vi: "Nửa Ngày (4 giờ)" },
        price: 49,
        image: "https://images.unsplash.com/photo-1613131145282-9476375618e1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhbm9pfGVufDB8fDB8fHww"
    },
    {
        id: 4,
        en: { name: "Hanoi Walking Tour", desc: "A guided walk through the Old Quarter and French Quarter, discovering colonial architecture and local life." },
        vi: { name: "Tour Đi Bộ Hà Nội", desc: "Đi bộ có hướng dẫn qua Phố Cổ và Khu Phố Pháp, khám phá kiến trúc thuộc địa và cuộc sống địa phương." },
        duration: { en: "Half Day (3 hours)", vi: "Nửa Ngày (3 giờ)" },
        price: 29,
        image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400&q=80"
    },
    {
        id: 5,
        en: { name: "Hanoi Countryside & Village Tour", desc: "Escape the city to Duong Lam Ancient Village and Bat Trang pottery village. See rural Vietnamese life." },
        vi: { name: "Tour Làng Quê & Làng Nghề", desc: "Thoát khỏi phố thị đến Làng Cổ Đường Lâm và làng gốm Bát Tràng. Ngắm cuộc sống nông thôn Việt Nam." },
        duration: { en: "Full Day (8 hours)", vi: "Cả Ngày (8 giờ)" },
        price: 65,
        image: "https://www.myhanoitours.com/wp-content/uploads/2023/06/Biking-aorund-rural-area-of-Hanoi-1.png"
    },
    {
        id: 6,
        en: { name: "Hanoi Night Tour", desc: "Experience Hanoi after dark — night market, Train Street, street food, and illuminated landmarks." },
        vi: { name: "Tour Đêm Hà Nội", desc: "Trải nghiệm Hà Nội về đêm — chợ đêm, Phố Tàu, ẩm thực đường phố và các danh lam thắp sáng." },
        duration: { en: "Evening (4 hours)", vi: "Buổi Tối (4 giờ)" },
        price: 45,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnZSYFptLYJ6u7vp66FaE4N_yg8HUTNWxkQLdwA1qZ-z7lJoJiBr9mgKE&s=10"
    },
    {
        id: 7,
        en: { name: "Hanoi Craft Village Tour", desc: "Visit Bat Trang pottery village and Van Phuc silk village. Watch artisans at work and try your hand." },
        vi: { name: "Tour Làng Nghề Thủ Công", desc: "Thăm làng gốm Bát Tràng và làng lụa Vạn Phúc. Xem nghệ nhân làm việc và tự tay trải nghiệm." },
        duration: { en: "Full Day (8 hours)", vi: "Cả Ngày (8 giờ)" },
        price: 59,
        image: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/11/6e/02/c5.jpg"
    },
    {
        id: 8,
        en: { name: "Hanoi Cooking Class", desc: "Visit a local market, learn to cook traditional Vietnamese dishes, and enjoy your creations." },
        vi: { name: "Lớp Học Nấu Ăn Hà Nội", desc: "Thăm chợ địa phương, học nấu các món ăn truyền thống Việt Nam và thưởng thức thành quả." },
        duration: { en: "Half Day (5 hours)", vi: "Nửa Ngày (5 giờ)" },
        price: 45,
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&q=80"
    },
    {
        id: 9,
        en: { name: "Water Puppet Show & Old Quarter Tour", desc: "Enjoy Vietnam's traditional water puppet show from great seats, then explore the Old Quarter." },
        vi: { name: "Múa Rối Nước & Phố Cổ", desc: "Thưởng thức múa rối nước truyền thống từ ghế đẹp, sau đó khám phá Phố Cổ." },
        duration: { en: "Half Day (4 hours)", vi: "Nửa Ngày (4 giờ)" },
        price: 42,
        image: "https://daytourshanoi.com/wp-content/uploads/water-puppet-show-hanoi.jpg"
    },
    {
        id: 10,
        en: { name: "Hanoi Cyclo Tour", desc: "Relax in a traditional cyclo (rickshaw) as you glide through Hanoi's bustling streets and tree-lined boulevards." },
        vi: { name: "Tour Xích Lô Hà Nội", desc: "Thư giãn trên xích lô truyền thống khi lướt qua các đường phố nhộn nhịp và đại lộ cây xanh của Hà Nội." },
        duration: { en: "1.5 Hours", vi: "1,5 Giờ" },
        price: 25,
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/d4/89/b0/hanoi-cyclo-tours.jpg?w=1200&h=-1&s=1"
    },
    {
        id: 11,
        en: { name: "Hanoi Jeep Tour", desc: "Ride in a vintage military jeep for an adventurous tour of Hanoi's highlights and hidden gems." },
        vi: { name: "Tour Xe Jeep Hà Nội", desc: "Đi xe jeep quân sự cổ điển trong chuyến phiêu lưu khám phá các điểm nổi bật và góc khuất của Hà Nội." },
        duration: { en: "Half Day (4 hours)", vi: "Nửa Ngày (4 giờ)" },
        price: 55,
        image: "https://hanoibackstreettours.com/wp-content/uploads/2022/09/2023-05-13-18-32-00-927-01-scaled.jpeg"
    },
    {
        id: 12,
        en: { name: "Hanoi Pagoda & Temple Tour", desc: "Visit Tran Quoc Pagoda, One Pillar Pagoda, and the stunning Perfume Pagoda on a spiritual journey." },
        vi: { name: "Tour Chùa & Đền Hà Nội", desc: "Thăm Chùa Trấn Quốc, Chùa Một Cột và Chùa Hương tuyệt đẹp trong hành trình tâm linh." },
        duration: { en: "Full Day (8 hours)", vi: "Cả Ngày (8 giờ)" },
        price: 52,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7iuq6Cc0OQyjdqIC3ti8Ndf2-oeGAbuGlC13ypQ5ow&s=10"
    },
    {
        id: 13,
        en: { name: "Hanoi Museum Tour", desc: "Explore Vietnam's rich history at the Museum of Ethnology, Hoa Lo Prison, and Fine Arts Museum." },
        vi: { name: "Tour Bảo Tàng Hà Nội", desc: "Khám phá lịch sử phong phú của Việt Nam tại Bảo tàng Dân tộc học, Nhà tù Hỏa Lò và Bảo tàng Mỹ thuật." },
        duration: { en: "Half Day (4 hours)", vi: "Nửa Ngày (4 giờ)" },
        price: 38,
        image: "https://vietnamtravel.com/images/2020/06/intro-Top-Fascinating-Museums-in-Hanoi.jpg"
    },
    {
        id: 14,
        en: { name: "Train Street & Railway Tour", desc: "Walk along Hanoi's famous Train Street, watch the train pass inches away, and explore the railway neighborhood." },
        vi: { name: "Tour Phố Tàu & Đường Sắt", desc: "Đi dọc Phố Tàu nổi tiếng, xem tàu chạy cách chỉ vài inch và khám phá khu phố đường sắt." },
        duration: { en: "Half Day (3 hours)", vi: "Nửa Ngày (3 giờ)" },
        price: 35,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs2fYZog0uYPQGDtWGdPL5BQBJMAY6Lxp4cWUlIVL_04POhg8oLbH1V0y-&s=10"
    },
    {
        id: 15,
        en: { name: "Hanoi Bike Tour", desc: "Cycle around scenic West Lake, through quiet villages, and along the Red River dyke." },
        vi: { name: "Tour Xe Đạp Hà Nội", desc: "Đạp xe quanh Hồ Tây thơ mộng, qua những làng quê yên tĩnh và dọc đê Sông Hồng." },
        duration: { en: "Half Day (4 hours)", vi: "Nửa Ngày (4 giờ)" },
        price: 40,
        image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&q=80"
    },
    {
        id: 16,
        en: { name: "Hanoi Egg Coffee Workshop", desc: "Learn the secret behind Hanoi's famous egg coffee. Visit a hidden cafe and make your own cup." },
        vi: { name: "Workshop Cà Phê Trứng", desc: "Học bí quyết pha cà phê trứng nổi tiếng Hà Nội. Thăm quán cafe ẩn và tự pha một ly." },
        duration: { en: "2 Hours", vi: "2 Giờ" },
        price: 22,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80"
    },
    {
        id: 17,
        en: { name: "⭐ VIP Hanoi Day or Night Private Tour", desc: "Your choice! Pick day or night for a fully customizable private tour. Visit any special places you request — hidden cafes, historic sites, local markets, or Ta Hien Beer Street. Includes private car, English-speaking guide, all entrance fees, and a meal of your choice." },
        vi: { name: "⭐ VIP Tour Riêng Ngày hoặc Đêm Hà Nội", desc: "Lựa chọn của bạn! Chọn ban ngày hoặc ban đêm cho tour riêng hoàn toàn tùy chỉnh. Thăm bất kỳ địa điểm đặc biệt nào bạn yêu cầu — quán cafe ẩn, di tích lịch sử, chợ địa phương hoặc Phố Bia Tạ Hiện. Bao gồm xe riêng, hướng dẫn viên tiếng Anh, tất cả phí vào cửa và một bữa ăn theo lựa chọn của bạn." },
        duration: { en: "Flexible (4-8 hours)", vi: "Linh Hoạt (4-8 giờ)" },
        price: 50,
        image: "https://statics.vinpearl.com/ta-hien-street-01_1677589942.png"
    }
];

// ===== STATE =====
let currentLang = 'en';

// ===== DOM REFS =====
const toursGrid = document.getElementById('toursGrid');
const langToggle = document.getElementById('langToggle');
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
const header = document.getElementById('header');

// ===== RENDER TOURS =====
function renderTours(lang) {
    toursGrid.innerHTML = '';

    toursData.forEach(tour => {
        const data = lang === 'en' ? tour.en : tour.vi;
        const duration = tour.duration[lang];

        // Tour card
        const card = document.createElement('div');
        card.className = 'tour-card';
        card.innerHTML = `
            <div class="tour-card__img-wrap">
                <img class="tour-card__image" src="${tour.image}" alt="${data.name}" loading="lazy">
            </div>
            <div class="tour-card__body">
                <h3 class="tour-card__title">${data.name}</h3>
                <p class="tour-card__duration"><i class="far fa-clock"></i> ${duration}</p>
                <p class="tour-card__desc">${data.desc}</p>
                <div class="tour-card__footer">
                    <span class="tour-card__price">$${tour.price} <span>/ ${lang === 'en' ? 'person' : 'người'}</span></span>
                    <a href="https://wa.me/84978604297?text=I'm%20interested%20in%20${encodeURIComponent(data.name)}" target="_blank" class="tour-card__btn">
                        <i class="fab fa-whatsapp"></i> ${lang === 'en' ? 'Book' : 'Đặt'}
                    </a>
                </div>
            </div>
        `;
        toursGrid.appendChild(card);
    });
}

// ===== LANGUAGE TOGGLE =====
function setLanguage(lang) {
    currentLang = lang;

    // Update toggle UI
    document.querySelectorAll('.lang-toggle__option').forEach(opt => {
        opt.classList.toggle('lang-toggle__option--active', opt.dataset.lang === lang);
    });

    // Update all data-en / data-vi elements
    document.querySelectorAll('[data-en]').forEach(el => {
        if (el.dataset[lang]) {
            el.textContent = el.dataset[lang];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-en-placeholder]').forEach(el => {
        if (el.dataset[lang + 'Placeholder']) {
            el.placeholder = el.dataset[lang + 'Placeholder'];
        }
    });

    // Re-render tours
    renderTours(lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'en' ? 'en' : 'vi';
}

langToggle.addEventListener('click', (e) => {
    const target = e.target.closest('.lang-toggle__option');
    if (target && target.dataset.lang && target.dataset.lang !== currentLang) {
        setLanguage(target.dataset.lang);
    }
});

// ===== HAMBURGER MENU =====
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
});

// Close nav on link click
nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
    });
});

// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ===== INIT =====
setLanguage('en');