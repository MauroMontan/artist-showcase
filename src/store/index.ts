import { defineStore } from 'pinia';
import Artist from '../interfaces/artist';
import OB1 from '../assets/oscar-images/Oscar Barroso_1.png';
import OB2 from '../assets/oscar-images/Oscar Barroso_2.png';
import OB3 from '../assets/oscar-images/Oscar Barroso_3.png';
import OB4 from '../assets/oscar-images/Oscar Barroso_4.jpg';
import OB5 from '../assets/oscar-images/Oscar Barroso_5.jpg';
import OB6 from '../assets/oscar-images/Oscar Barroso_6.png';

export const useUi = defineStore('uiStore', {
    state: () => ({
        isDialogOpened: false,
        currentDialogImage:
            'https://images.theconversation.com/files/471068/original/file-20220627-18-zlq7b6.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop',
        artistsData: [
            {
                name: 'Oscar Barroso schega',
                networks: ['Feisbook'],
                artwork: [
                    { imageUrl: OB1 },
                    { imageUrl: OB2 },
                    { imageUrl: OB3 },
                    { imageUrl: OB4 },
                    { imageUrl: OB5 },
                    { imageUrl: OB6 },
                ],
            },
            {
                name: 'Carolina Uribe Sánchez',
                networks: ['Feisbook'],
                artwork: [
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1673981171866-22a94714457b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1673982136691-aea2191ab896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.theconversation.com/files/471068/original/file-20220627-18-zlq7b6.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                ],
            },
            {
                name: 'Valeria Montserrat tuyub fitz',
                networks: ['Feisbook'],
                artwork: [
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1673981171866-22a94714457b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1673982136691-aea2191ab896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.theconversation.com/files/471068/original/file-20220627-18-zlq7b6.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                ],
            },
            {
                name: 'Mara sharlott Suárez aguila',
                networks: ['Feisbook'],
                artwork: [
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1673981171866-22a94714457b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1673982136691-aea2191ab896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.theconversation.com/files/471068/original/file-20220627-18-zlq7b6.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                ],
            },
            {
                name: 'Angel Alexis Ruiz Perez (The WhiteNight)',
                networks: ['Feisbook'],
                artwork: [
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1673981171866-22a94714457b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1673982136691-aea2191ab896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.theconversation.com/files/471068/original/file-20220627-18-zlq7b6.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1671726805768-93b4c260766b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
                    },
                ],
            },
        ] as Array<Artist>,
    }),
    getters: {
        dialogState: (state) => state.isDialogOpened,
        artists: (state): Array<Artist> => state.artistsData,
        imageUrl: (state): string => state.currentDialogImage,
    },
    actions: {
        toggleDialog(): void {
            this.isDialogOpened = !this.isDialogOpened;
        },
        setcurrentImage(imageUrl: string): void {
            this.currentDialogImage = imageUrl;
        },
    },
});
