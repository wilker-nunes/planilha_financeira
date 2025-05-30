// Main JavaScript file for the financial control application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize sidebar toggle functionality
    const toggleSidebarBtn = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    // Create sidebar overlay for mobile
    const sidebarOverlay = document.createElement('div');
    sidebarOverlay.className = 'sidebar-overlay';
    document.body.appendChild(sidebarOverlay);
    
    if (toggleSidebarBtn) {
        toggleSidebarBtn.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            sidebarOverlay.classList.toggle('active');
        });
        
        // Close sidebar when clicking overlay
        sidebarOverlay.addEventListener('click', function() {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        });
    }
    
    // Initialize section navigation
    const menuItems = document.querySelectorAll('.sidebar-menu li[data-section]');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            
            // Hide all sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(sectionId).classList.add('active');
            
            // Update active menu item
            menuItems.forEach(menuItem => {
                menuItem.classList.remove('active');
            });
            this.classList.add('active');
            
            // Close sidebar on mobile after selection
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
                sidebarOverlay.classList.remove('active');
            }
        });
    });
    
    // Handle "View All Transactions" button
    const viewAllTransactionsBtn = document.getElementById('viewAllTransactionsBtn');
    if (viewAllTransactionsBtn) {
        viewAllTransactionsBtn.addEventListener('click', function() {
            // Hide all sections
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show transactions section
            document.getElementById('transactions-section').classList.add('active');
            
            // Update active menu item
            menuItems.forEach(menuItem => {
                menuItem.classList.remove('active');
            });
            document.querySelector('.sidebar-menu li[data-section="transactions-section"]').classList.add('active');
        });
    }
    
    // Close modals when clicking outside
    window.addEventListener('click', function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Close modals when clicking close button
    const closeButtons = document.querySelectorAll('.close, .close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Set current date for transaction form
    const transactionDate = document.getElementById('transactionDate');
    if (transactionDate) {
        const today = new Date().toISOString().split('T')[0];
        transactionDate.value = today;
    }
    
    // Initialize default data if none exists
    initializeDefaultData();
    
    // Helper function to initialize default data
    function initializeDefaultData() {
        // Check if transactions exist
        if (!localStorage.getItem('transactions')) {
            localStorage.setItem('transactions', JSON.stringify([]));
        }
        
        // Check if categories exist (will be initialized in categories.js)
    }
    
    // Add touch support for mobile devices
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    // Adjust layout for mobile orientation changes
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active');
        }
    });
});
