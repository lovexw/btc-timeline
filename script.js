// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeTimeline();
    initializeMilestones();
    initializeTechnology();
    initializePriceHistory();
    initializeNews();
    initializeNavigation();
    initializeScrollAnimations();
});

// 初始化时间线
function initializeTimeline() {
    const timelineContainer = document.querySelector('.timeline');
    if (!timelineContainer) return;

    const timelineData = bitcoinData.timeline;
    
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.style.animationDelay = `${index * 0.1}s`;
        
        const tagsHtml = item.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${item.date}</div>
                <div class="timeline-title">${item.title}</div>
                <div class="timeline-description">${item.description}</div>
                <div class="tags">${tagsHtml}</div>
            </div>
        `;
        
        timelineContainer.appendChild(timelineItem);
    });
}

// 初始化里程碑
function initializeMilestones() {
    const milestonesGrid = document.querySelector('.milestones-grid');
    if (!milestonesGrid) return;

    const milestonesData = bitcoinData.milestones;
    
    milestonesData.forEach((milestone, index) => {
        const milestoneCard = document.createElement('div');
        milestoneCard.className = 'milestone-card fade-in';
        milestoneCard.style.animationDelay = `${index * 0.1}s`;
        
        milestoneCard.innerHTML = `
            <div class="milestone-year">${milestone.year}</div>
            <div class="milestone-title">${milestone.title}</div>
            <div class="milestone-description">${milestone.description}</div>
        `;
        
        milestonesGrid.appendChild(milestoneCard);
    });
}

// 初始化技术发展
function initializeTechnology() {
    const techTimeline = document.querySelector('.tech-timeline');
    if (!techTimeline) return;

    const techData = bitcoinData.technology;
    
    techData.forEach((tech, index) => {
        const techItem = document.createElement('div');
        techItem.className = 'tech-item fade-in';
        techItem.style.animationDelay = `${index * 0.1}s`;
        
        techItem.innerHTML = `
            <div class="tech-icon">${tech.icon}</div>
            <div class="tech-content">
                <h4>${tech.title}</h4>
                <div class="tech-date">${tech.date}</div>
                <p>${tech.description}</p>
            </div>
        `;
        
        techTimeline.appendChild(techItem);
    });
}

// 初始化价格历史
function initializePriceHistory() {
    const priceTimeline = document.querySelector('.price-timeline');
    if (!priceTimeline) return;

    const priceData = bitcoinData.priceHistory;
    
    priceData.forEach((price, index) => {
        const priceItem = document.createElement('div');
        priceItem.className = 'price-item fade-in';
        priceItem.style.animationDelay = `${index * 0.1}s`;
        
        priceItem.innerHTML = `
            <div>
                <div class="price-amount">${price.amount}</div>
                <div class="price-date">${price.date}</div>
            </div>
            <div class="price-details">${price.details}</div>
        `;
        
        priceTimeline.appendChild(priceItem);
    });
}

// 初始化新闻
function initializeNews() {
    const newsGrid = document.querySelector('.news-grid');
    if (!newsGrid) return;

    const newsData = bitcoinData.news;
    
    newsData.forEach((news, index) => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card fade-in';
        newsCard.style.animationDelay = `${index * 0.1}s`;
        
        const tagsHtml = news.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        newsCard.innerHTML = `
            <div class="news-date">${news.date}</div>
            <div class="news-title">${news.title}</div>
            <div class="news-description">${news.description}</div>
            <div class="tags">${tagsHtml}</div>
        `;
        
        newsGrid.appendChild(newsCard);
    });
}

// 初始化导航
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-list a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // 考虑固定导航栏的高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 初始化滚动动画
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => observer.observe(el));
}

// 添加滚动时的高亮导航效果
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-list a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// 添加返回顶部功能
function addBackToTopButton() {
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑';
    backToTopButton.className = 'back-to-top';
    backToTopButton.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #f7931a;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s, visibility 0.3s;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(247, 147, 26, 0.3);
    `;
    
    document.body.appendChild(backToTopButton);
    
    // 显示/隐藏返回顶部按钮
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
    
    // 点击返回顶部
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 搜索功能
function addSearchFunctionality() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1001;
    `;
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = '搜索事件...';
    searchInput.style.cssText = `
        padding: 10px 15px;
        border: 2px solid #f7931a;
        border-radius: 25px;
        outline: none;
        font-size: 14px;
        width: 200px;
        transition: width 0.3s;
    `;
    
    searchInput.addEventListener('focus', function() {
        this.style.width = '250px';
    });
    
    searchInput.addEventListener('blur', function() {
        this.style.width = '200px';
    });
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filterContent(searchTerm);
    });
    
    searchContainer.appendChild(searchInput);
    document.body.appendChild(searchContainer);
}

// 过滤内容
function filterContent(searchTerm) {
    const allItems = document.querySelectorAll('.timeline-item, .milestone-card, .tech-item, .price-item, .news-card');
    
    allItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = 'block';
            item.style.animation = 'none';
            setTimeout(() => {
                item.style.animation = '';
            }, 10);
        } else {
            item.style.display = 'none';
        }
    });
}

// 添加统计信息
function addStatistics() {
    const statsContainer = document.createElement('div');
    statsContainer.className = 'statistics';
    statsContainer.style.cssText = `
        background: white;
        padding: 40px;
        margin: 40px 0;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    `;
    
    const stats = [
        { number: '15+', label: '年发展历史' },
        { number: '25+', label: '重要里程碑' },
        { number: '12+', label: '技术升级' },
        { number: '17+', label: '价格节点' }
    ];
    
    let statsHtml = '<h3 style="text-align: center; margin-bottom: 30px; color: #333;">比特币发展统计</h3><div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; text-align: center;">';
    
    stats.forEach(stat => {
        statsHtml += `
            <div>
                <div style="font-size: 2.5rem; font-weight: 700; color: #f7931a; margin-bottom: 10px;">${stat.number}</div>
                <div style="color: #666;">${stat.label}</div>
            </div>
        `;
    });
    
    statsHtml += '</div>';
    statsContainer.innerHTML = statsHtml;
    
    // 插入到概览部分后面
    const overviewSection = document.getElementById('overview');
    if (overviewSection) {
        overviewSection.appendChild(statsContainer);
    }
}

// 添加打印样式
function addPrintStyles() {
    const printStyles = document.createElement('style');
    printStyles.textContent = `
        @media print {
            .nav, .search-container, .back-to-top {
                display: none !important;
            }
            
            body {
                background: white !important;
                color: black !important;
            }
            
            .section {
                page-break-inside: avoid;
            }
            
            .timeline-item, .milestone-card, .tech-item, .price-item, .news-card {
                page-break-inside: avoid;
                break-inside: avoid;
            }
        }
    `;
    document.head.appendChild(printStyles);
}

// 初始化所有功能
function initializeAll() {
    addBackToTopButton();
    addSearchFunctionality();
    addStatistics();
    addPrintStyles();
}

// 页面加载完成后初始化额外功能
window.addEventListener('load', initializeAll);

// 添加键盘快捷键
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + F 聚焦搜索框
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
        e.preventDefault();
        const searchInput = document.querySelector('.search-container input');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // ESC 清空搜索
    if (e.key === 'Escape') {
        const searchInput = document.querySelector('.search-container input');
        if (searchInput) {
            searchInput.value = '';
            filterContent('');
        }
    }
});

// 添加主题切换功能
function addThemeToggle() {
    const themeButton = document.createElement('button');
    themeButton.innerHTML = '🌙';
    themeButton.className = 'theme-toggle';
    themeButton.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: white;
        border: 2px solid #f7931a;
        cursor: pointer;
        font-size: 20px;
        z-index: 1001;
        transition: all 0.3s;
    `;
    
    let isDarkMode = false;
    
    themeButton.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            document.body.style.background = '#1a1a1a';
            document.body.style.color = '#e0e0e0';
            themeButton.innerHTML = '☀️';
            
            // 更新所有卡片背景
            document.querySelectorAll('.overview-card, .timeline-content, .milestone-card, .tech-item, .price-item, .news-card').forEach(card => {
                card.style.background = '#2d2d2d';
                card.style.color = '#e0e0e0';
            });
        } else {
            document.body.style.background = '#fafafa';
            document.body.style.color = '#333';
            themeButton.innerHTML = '🌙';
            
            // 恢复所有卡片背景
            document.querySelectorAll('.overview-card, .timeline-content, .milestone-card, .tech-item, .price-item, .news-card').forEach(card => {
                card.style.background = 'white';
                card.style.color = '#333';
            });
        }
    });
    
    document.body.appendChild(themeButton);
}

// 添加主题切换功能到初始化
const originalInit = initializeAll;
initializeAll = function() {
    originalInit();
    addThemeToggle();
};
