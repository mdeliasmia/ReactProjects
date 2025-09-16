

// After: For Chakra v3
import { createSystem, defaultConfig } from '@chakra-ui/react';

const myTheme = {
    initialColorMode: 'light',
    useSystemColorMode: true
};

export const system = createSystem(defaultConfig, { theme: myTheme });

//////////
// import { createSystem, defaultConfig } from "@chakra-ui/react"

// export const system = createSystem(defaultConfig, {
//     theme: {
//         tokens: {
//             fonts: {
//                 heading: { value: `'Figtree', sans-serif` },
//                 body: { value: `'Figtree', sans-serif` },
//             },
//         },
//     },
// })
