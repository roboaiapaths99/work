/**
 * Technula Portfolio Master Script
 * Handles:
 *  1. Accessible Mobile Navigation
 *  2. Work Section Category Filtering (Software, Hardware, Courses)
 *  3. Pinterest Photo Lightbox Modal
 *  4. Copy to Clipboard (Address & Phone) with Toast Feedback
 *  5. Video Audio Exclusivity (pauses other videos on play)
 *  6. Sticky Header Elevation on Scroll
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. Accessible Mobile Menu Navigation
     ========================================================================== */
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (menuToggle && mobileNav) {
    const toggleMenu = (shouldOpen) => {
      const isOpen = shouldOpen !== undefined ? shouldOpen : menuToggle.getAttribute('aria-expanded') !== 'true';
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      if (isOpen) {
        mobileNav.classList.add('is-open');
      } else {
        mobileNav.classList.remove('is-open');
      }
    };

    menuToggle.addEventListener('click', () => toggleMenu());

    // Close menu when a navigation link is clicked
    const mobileLinks = mobileNav.querySelectorAll('.nav-link');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Close menu when pressing Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        toggleMenu(false);
        menuToggle.focus();
      }
    });

    // Close menu on desktop resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && menuToggle.getAttribute('aria-expanded') === 'true') {
        toggleMenu(false);
      }
    });
  }

  /* ==========================================================================
     Home Navigation & Same-Page Refresh
     ========================================================================== */
  const homeLinks = document.querySelectorAll('.home-nav-link');
  homeLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const currentPath = window.location.pathname.toLowerCase();
      const isHome = currentPath === '/' || 
                     currentPath === '' || 
                     currentPath.endsWith('/index.html') || 
                     currentPath.endsWith('/index');
      if (isHome) {
        e.preventDefault();
        window.location.reload();
      }
    });
  });

  /* ==========================================================================
     2. Work Section Tab Filtering
     ========================================================================== */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const portfolioGroups = document.querySelectorAll('.portfolio-group');

  if (tabButtons.length > 0 && portfolioGroups.length > 0) {
    tabButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');

        // Update active state on tab buttons
        tabButtons.forEach((b) => {
          const isActive = b === btn;
          b.classList.toggle('active', isActive);
          b.setAttribute('aria-selected', String(isActive));
        });

        // Filter groups
        portfolioGroups.forEach((group) => {
          const groupCategory = group.getAttribute('data-group');
          if (targetTab === 'all' || groupCategory === targetTab) {
            group.classList.remove('is-hidden');
          } else {
            group.classList.add('is-hidden');
          }
        });
      });
    });
  }

  /* ==========================================================================
     3. Pinterest Photo Lightbox Modal
     ========================================================================== */
  const pinCards = document.querySelectorAll('.pin-card');
  const lightbox = document.getElementById('imageLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');

  if (lightbox && lightboxImg) {
    const openLightbox = (imgSrc, title) => {
      lightboxImg.src = imgSrc;
      lightboxCaption.textContent = title || '';
      lightbox.classList.add('is-active');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightbox.classList.remove('is-active');
      lightbox.setAttribute('aria-hidden', 'true');
      lightboxImg.src = '';
      document.body.style.overflow = '';
    };

    pinCards.forEach((pin) => {
      pin.addEventListener('click', () => {
        const fullSrc = pin.getAttribute('data-full') || pin.querySelector('img')?.src;
        const title = pin.querySelector('.pin-title')?.textContent || '';
        if (fullSrc) {
          openLightbox(fullSrc, title);
        }
      });
    });

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('is-active')) {
        closeLightbox();
      }
    });
  }

  /* ==========================================================================
     4. Copy to Clipboard (Address & Phone) with Toast Feedback
     ========================================================================== */
  const toast = document.getElementById('toastNotice');
  let toastTimer = null;

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 3200);
  };

  const copyAddressBtn = document.getElementById('copyAddressBtn');
  if (copyAddressBtn) {
    copyAddressBtn.addEventListener('click', async () => {
      const addressText = "S20, Amolik Sankalp, Sector 85, Faridabad, Haryana - 121002";
      try {
        await navigator.clipboard.writeText(addressText);
        showToast('✓ Address copied to clipboard!');
      } catch (err) {
        showToast('Address: ' + addressText);
      }
    });
  }

  const copyPhoneBtn = document.getElementById('copyPhoneBtn');
  if (copyPhoneBtn) {
    copyPhoneBtn.addEventListener('click', async () => {
      const phoneText = "+919990911093";
      try {
        await navigator.clipboard.writeText(phoneText);
        showToast('✓ Phone number copied: +91 99909 11093');
      } catch (err) {
        showToast('Phone: +91 99909 11093');
      }
    });
  }

  /* ==========================================================================
     5. Video Exclusive Playback (Prevents overlapping audio)
     ========================================================================== */
  const allVideos = document.querySelectorAll('video');
  allVideos.forEach((video) => {
    video.addEventListener('play', () => {
      allVideos.forEach((otherVideo) => {
        if (otherVideo !== video && !otherVideo.paused) {
          otherVideo.pause();
        }
      });
    });
  });

  /* ==========================================================================
     6. Header Elevation Shadow on Scroll
     ========================================================================== */
  const siteHeader = document.getElementById('siteHeader');
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        siteHeader.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.08)';
      } else {
        siteHeader.style.boxShadow = 'none';
      }
    }, { passive: true });
  }

  /* ==========================================================================
     7. Multi-View Kit Image Switcher (e.g. Bear Board Robot / Sensors)
     ========================================================================== */
  const kitToggleBtns = document.querySelectorAll('.kit-toggle-btn');
  kitToggleBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parentBox = btn.closest('.card-image-box');
      if (!parentBox) return;

      const targetImg = parentBox.querySelector('img.kit-toggle-target');
      const newSrc = btn.getAttribute('data-img');
      const newAlt = btn.getAttribute('data-alt');

      if (targetImg && newSrc) {
        targetImg.src = newSrc;
        if (newAlt) targetImg.alt = newAlt;

        const siblings = parentBox.querySelectorAll('.kit-toggle-btn');
        siblings.forEach((s) => s.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  });

});
