import { IProducts } from '../types';

export const products: IProducts[] = [
    {
        id: 0,
        name: 'Iphone 13 Pro Max',
        brand: 'Apple',
        image: 'https://media.wired.com/photos/5e9f56f143e5800008514457/1:1/w_1277,h_1277,c_limit/Gear-Feature-Apple_new-iphone-se-white_04152020.jpg',
        price: 8000,
        inStock: true
    },
    {
        id: 1,
        name: 'Iphone 8 Pro',
        brand: 'Apple',
        image: 'https://media.wired.com/photos/5e9f56f143e5800008514457/1:1/w_1277,h_1277,c_limit/Gear-Feature-Apple_new-iphone-se-white_04152020.jpg',
        price: 7000,
        inStock: true
    },
    {
        id: 2,
        name: 'Iphone 7',
        brand: 'Apple',
        image: 'https://media.wired.com/photos/5e9f56f143e5800008514457/1:1/w_1277,h_1277,c_limit/Gear-Feature-Apple_new-iphone-se-white_04152020.jpg',
        price: 6500,
        inStock: false
    },
]