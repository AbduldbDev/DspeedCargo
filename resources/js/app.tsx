import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

declare global {
    interface ImportMeta {
        glob: (pattern: string, options?: { eager?: boolean }) => Record<string, any>;
    }
}

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob('./pages/**/*.tsx', { eager: true });
        return pages[`./pages/${name}.tsx`];
    },
    setup({ el, App, props }) {
        // Initialize AOS
        AOS.init({
            duration: 800, // animation duration
            once: true, // animation happens only once
            offset: 100, // trigger point in px
        });

        createRoot(el).render(<App {...props} />);
    },
});
