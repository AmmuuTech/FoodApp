gsap.registerPlugin(ScrollTrigger);

gsap.from(".section-one .bannerImage img", {
    scrollTrigger: {
        trigger: ".section-one .bannerImage img",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    },
    rotate: -90,
    ease: "none",
}); 

gsap.utils.toArray(".section-three .image img").forEach((image) => {
    gsap.from(image, {
        scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        },
        rotation: 90,
        duration: 2,
        ease: "none",
    });
});

gsap.utils.toArray(".section-two .image img").forEach((image, index) => {
    gsap.set(image, {
        x: index % 2 === 0 ? -330 : 300,
    });

    gsap.to(image, {
        scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "top center",
            scrub: true,
        },
        x: 0,
        duration: 2,
    });
});
