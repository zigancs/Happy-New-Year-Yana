// СУПЕР ПРОСТОЙ И РАБОЧИЙ СКРИПТ
console.log('Страница загружается...');

// Ждем когда страница полностью загрузится
window.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен!');
    
    // НАЙДИ КНОПКУ "ОКУНУТЬСЯ В ЭТОТ ГОД"
    const enterBtn = document.getElementById('enter-btn');
    console.log('Кнопка найдена:', enterBtn);
    
    if (enterBtn) {
        // ВЕШАЕМ ПРОСТОЙ И РАБОЧИЙ ОБРАБОТЧИК
        enterBtn.onclick = function() {
            console.log('Кнопка нажата! Переключаем экраны...');
            
            // 1. Скрываем стартовый экран
            const startScreen = document.getElementById('start-screen');
            if (startScreen) {
                startScreen.classList.add('hidden');
                console.log('Стартовый экран скрыт');
            }
            
            // 2. Показываем главный экран
            const mainScreen = document.getElementById('main-screen');
            if (mainScreen) {
                mainScreen.classList.remove('hidden');
                console.log('Главный экран показан');
            }
            
            // 3. Прокрутка наверх
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        
        console.log('Обработчик добавлен на кнопку!');
    } else {
        console.error('Кнопка не найдена!');
    }
    
    // ОСТАЛЬНЫЕ КНОПКИ (дополнительно)
    const momentsBtn = document.getElementById('moments-btn');
    const memoriesBtn = document.getElementById('memories-btn');
    const backMomentsBtn = document.getElementById('back-from-moments');
    const backMemoriesBtn = document.getElementById('back-from-memories');
    
    // Функция для переключения экранов
    function showScreen(screenId) {
        // Скрываем все экраны
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.add('hidden');
        });
        
        // Показываем нужный экран
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.remove('hidden');
        }
        
        // Прокрутка наверх
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Вешаем обработчики на остальные кнопки
    if (momentsBtn) {
        momentsBtn.onclick = function() {
            showScreen('moments-section');
        };
    }
    
    if (memoriesBtn) {
        memoriesBtn.onclick = function() {
            showScreen('memories-section');
        };
    }
    
    if (backMomentsBtn) {
        backMomentsBtn.onclick = function() {
            showScreen('main-screen');
        };
    }
    
    if (backMemoriesBtn) {
        backMemoriesBtn.onclick = function() {
            showScreen('main-screen');
        };
    }
    
    console.log('Все кнопки настроены!');
});

// Если не сработает DOMContentLoaded, попробуем load
window.addEventListener('load', function() {
    console.log('Страница полностью загружена!');
    
    // Дублируем на всякий случай
    const enterBtn = document.getElementById('enter-btn');
    if (enterBtn && !enterBtn.onclick) {
        enterBtn.onclick = function() {
            document.getElementById('start-screen').classList.add('hidden');
            document.getElementById('main-screen').classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
});
// ===== ОБРАБОТЧИК ВИДЕО =====
document.addEventListener('DOMContentLoaded', function() {
    const videoFrame = document.querySelector('.video-frame');
    const video = document.querySelector('.memory-video');
    const playButton = document.querySelector('.video-play-button');
    
    if (video && playButton && videoFrame) {
        // Клик по кнопке play
        playButton.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (video.paused) {
                video.play();
                videoFrame.classList.add('playing');
                playButton.style.display = 'none';
            } else {
                video.pause();
                videoFrame.classList.remove('playing');
                playButton.style.display = 'flex';
            }
        });
        
        // Клик по самому видео
        video.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (video.paused) {
                video.play();
                videoFrame.classList.add('playing');
                playButton.style.display = 'none';
            } else {
                video.pause();
                videoFrame.classList.remove('playing');
                playButton.style.display = 'flex';
            }
        });
        
        // Клик по фрейму видео
        videoFrame.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (video.paused) {
                video.play();
                videoFrame.classList.add('playing');
                playButton.style.display = 'none';
            } else {
                video.pause();
                videoFrame.classList.remove('playing');
                playButton.style.display = 'flex';
            }
        });
        
        // Когда видео закончилось
        video.addEventListener('ended', function() {
            videoFrame.classList.remove('playing');
            playButton.style.display = 'flex';
        });
        
        // Если видео уже играет (например, после навигации)
        video.addEventListener('play', function() {
            videoFrame.classList.add('playing');
            playButton.style.display = 'none';
        });
        
        // Если видео на паузе
        video.addEventListener('pause', function() {
            videoFrame.classList.remove('playing');
            playButton.style.display = 'flex';
        });
        
        console.log('Видео обработчики добавлены!');
    } else {
        console.log('Видео элементы не найдены');
    }
});