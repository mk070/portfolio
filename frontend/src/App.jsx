import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './route/router';
import Lenis from '@studio-freight/lenis';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false); // Preloader state

  useEffect(() => {
    // Preload all resources
    const preloadResources = () => {
      const promises = [];
      document.querySelectorAll('img[data-src]').forEach((img) => {
        if (!img.complete) {
          promises.push(
            new Promise((resolve) => {
              img.onload = resolve;
              img.onerror = resolve; // Resolve on error to prevent hang
            })
          );
        }
      });
      return Promise.all(promises);
    };

   

    // Initialize Lenis for smooth scrolling
    const initSmoothScroll = () => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => 1 - Math.pow(1 - t, 3), // Custom cubic ease-out
        smooth: true,
        smoothTouch: true, // Enable smooth scrolling on touch devices
        touchMultiplier: 2, // Adjust for mobile sensitivity
      });

      // Handle the Lenis animation frame
      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      return lenis;
    };

    // Preload resources and initialize features
    preloadResources().then(() => {
      const lenisInstance = initSmoothScroll();
      setIsLoaded(true); // Hide preloader when resources are loaded

      // Clean up Lenis instance on unmount
      return () => {
        lenisInstance.destroy();
      };
    });
  }, []);

  return (
    <>
      {/* Preloader */}
      {!isLoaded && (
        <div
          className="preloader flex justify-center items-center fixed top-0 left-0 w-full h-full bg-black text-white z-50"
        >
          <h1>Loading...</h1>
        </div>
      )}

      {/* Main Application */}
      {isLoaded && <RouterProvider router={router} />}
    </>
  );
};

export default App;
