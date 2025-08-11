import { useEffect } from 'react';

export default function SmoothScroll() {
    useEffect(() => {
        const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');

        anchors.forEach((anchor) => {
            const handleClick = (e: MouseEvent) => {
                e.preventDefault();

                const href = anchor.getAttribute('href');
                if (!href) return;

                const target = document.querySelector<HTMLElement>(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            };

            anchor.addEventListener('click', handleClick);

            // Cleanup listener on unmount
            return () => anchor.removeEventListener('click', handleClick);
        });
    }, []);

    return null;
}
