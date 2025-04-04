import { useState, useEffect, useRef } from "react";

const useCarouselScroll = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselRef = useRef(null);
  const itemRef = useRef(null);

  // useEffect(() => {
  //   const carousel = carouselRef.current;
  //   const item = itemRef.current;

  //   if (!carousel || !item) return;

  //   const checkScrollPosition = () => {
  //     const slidesVisible = carousel.clientWidth / item.clientWidth;
  //     const activeSlide = Math.round(
  //       (slidesVisible * carousel.scrollLeft) / (carousel.clientWidth)
  //     );
  //     console.log('ACTIVE', activeSlide)
  //     setActiveSlide(activeSlide);
  //   };

  //   carousel.addEventListener("scroll", checkScrollPosition);

  //   return () => {
  //     carousel.removeEventListener("scroll", checkScrollPosition);
  //   };
  // }, []);

  const prevSlide = () => {
    if (carouselRef.current && itemRef.current) {
      carouselRef.current.scrollBy({
        left: -itemRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  // useEffect(() => {
  //   const carousel = carouselRef.current;
  //   const item = itemRef.current;
  
  //   if (!carousel || !item) return;
  
  //   const checkScrollPosition = () => {
  //     const itemWidth = item.clientWidth;
  //     // const gap = 32; // Ajuste en fonction de space-x-4 (4 * 4px)
  //     const totalSlideWidth = itemWidth ;
  
  //     const activeIndex = Math.round(carousel.scrollLeft / totalSlideWidth);
      
  //     console.log("ACTIVE", activeIndex);
  //     setActiveSlide(activeIndex);
  //   };
  
  //   carousel.addEventListener("scroll", checkScrollPosition);
  //   return () => carousel.removeEventListener("scroll", checkScrollPosition);
  // }, []);
  
  // const checkScrollPosition = () => {
  //   const scrollLeft = carouselRef.current.scrollLeft;
  //   const slideWidth = carouselRef.current.clientWidth; // On utilise directement la largeur visible
  //   const newActiveSlide = Math.round(scrollLeft / slideWidth);
    
  //   setActiveSlide(newActiveSlide);
  // };


  const nextSlide = () => {
    if (carouselRef.current && itemRef.current) {
      carouselRef.current.scrollBy({
        left: itemRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
  
    const checkScrollPosition = () => {
      // Calcul de la slide active
      const index = Math.round(carousel.scrollLeft / carousel.clientWidth);
      setActiveSlide(index);
    };
  
    carousel.addEventListener("scroll", checkScrollPosition);
    
    return () => {
      carousel.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  // useEffect(() => {
  //   const carousel = carouselRef.current;
  
  //   if (!carousel) return;
  
  //   const checkScrollPosition = () => {
  //     const items = carousel.querySelectorAll(".carousel-item"); // Récupère tous les items
  //     let closestIndex = 0;
  //     let minDiff = Infinity;
  
  //     items.forEach((item, index) => {
  //       const rect = item.getBoundingClientRect(); // Position absolue de l'élément
  //       const diff = Math.abs(rect.left - carousel.getBoundingClientRect().left);
  
  //       if (diff < minDiff) {
  //         minDiff = diff;
  //         closestIndex = index;
  //       }
  //     });
  
  //     console.log("ACTIVE SLIDE:", closestIndex);
  //     setActiveSlide(closestIndex);
  //   };
  
  //   carousel.addEventListener("scroll", checkScrollPosition);
  //   return () => carousel.removeEventListener("scroll", checkScrollPosition);
  // }, []);
  

  // const goToSlide = (slide) => {
  //   if (carouselRef.current && itemRef.current) {
  //     carouselRef.current.scrollTo({
  //       left: slide*itemRef.current.clientWidth ,
  //       behavior: "smooth",
  //     });
  //   }
  // }

  const goToSlide = (slide) => {
    if (carouselRef.current) {
      const items = carouselRef.current.children;
      if (items[slide]) {
        items[slide].scrollIntoView({ 
          behavior: "smooth", 
          block: "nearest", 
          inline: "start" });
      }
    }
  };
  

  return { activeSlide, carouselRef, itemRef, prevSlide, nextSlide, goToSlide };
};

export default useCarouselScroll;
