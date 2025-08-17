// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
        try {
            console.log('Registering Service Worker...');
            
            const registration = await navigator.serviceWorker.register('/js/sw.js', {
                scope: '/'
            });
            
            console.log('Service Worker registered successfully:', registration.scope);
            
            // Handle updates
            registration.addEventListener('updatefound', () => {
                const newWorker = registration.installing;
                console.log('New Service Worker found, installing...');
                
                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            // New update available
                            console.log('New content available, please refresh.');
                            showUpdateNotification();
                        } else {
                            // Content cached for first time
                            console.log('Content cached for offline use.');
                            showOfflineReadyNotification();
                        }
                    }
                });
            });
            
            // Listen for controlling service worker change
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                console.log('Service Worker controller changed, reloading...');
                window.location.reload();
            });
            
        } catch (error) {
            console.error('Service Worker registration failed:', error);
        }
    });
}

// Show update notification
function showUpdateNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--accent-gold);
        color: white;
        padding: 1rem 2rem;
        border-radius: var(--border-radius);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        box-shadow: var(--shadow);
        animation: slideDown 0.3s ease;
    `;
    
    notification.innerHTML = `
        <span>Доступно обновление приложения</span>
        <button onclick="updateApp()" style="
            background: white;
            color: var(--accent-gold);
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-weight: 600;
            cursor: pointer;
        ">Обновить</button>
        <button onclick="this.parentElement.remove()" style="
            background: transparent;
            color: white;
            border: none;
            padding: 0.5rem;
            cursor: pointer;
            font-size: 1.2rem;
        ">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-hide after 10 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 10000);
}

// Show offline ready notification
function showOfflineReadyNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #8b5cf6;
        color: white;
        padding: 1rem 2rem;
        border-radius: var(--border-radius);
        z-index: 10000;
        animation: slideDown 0.3s ease;
    `;
    
    notification.innerHTML = `
        <span>Приложение готово к работе офлайн</span>
        <button onclick="this.parentElement.remove()" style="
            background: transparent;
            color: white;
            border: none;
            padding: 0.5rem;
            cursor: pointer;
            font-size: 1.2rem;
            margin-left: 1rem;
        ">&times;</button>
    `;
    
    document.body.appendChild(notification);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

// Update app function
window.updateApp = async () => {
    try {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration && registration.waiting) {
            // Tell the waiting service worker to skip waiting
            registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }
    } catch (error) {
        console.error('Failed to update app:', error);
        window.location.reload();
    }
};

// Check for app updates periodically
setInterval(async () => {
    try {
        const registration = await navigator.serviceWorker.getRegistration();
        if (registration) {
            await registration.update();
        }
    } catch (error) {
        console.error('Failed to check for updates:', error);
    }
}, 60000); // Check every minute

// Handle online/offline status
window.addEventListener('online', () => {
    console.log('App is online');
    showConnectionStatus('online');
});

window.addEventListener('offline', () => {
    console.log('App is offline');
    showConnectionStatus('offline');
});

function showConnectionStatus(status) {
    const notification = document.createElement('div');
    const isOnline = status === 'online';
    
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: ${isOnline ? '#10b981' : '#6b7280'};
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: var(--border-radius);
        z-index: 10000;
        animation: slideUp 0.3s ease;
        font-size: 0.9rem;
        font-weight: 500;
    `;
    
    notification.textContent = isOnline ? 'Подключение восстановлено' : 'Работаем в офлайн режиме';
    
    document.body.appendChild(notification);
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideDown 0.3s ease';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 3000);
}
