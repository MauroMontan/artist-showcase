import { defineStore } from 'pinia';
import Artist from '../interfaces/artist';



export const useUi = defineStore('uiStore', {

state: () => ({
    isDialogOpened: false,
    isVideoModalOpened: false,
    currentVideo:"",
        currentDialogImage:
            'https://images.theconversation.com/files/471068/original/file-20220627-18-zlq7b6.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop',
        artistsData: [
       
            {
                name: 'Nagisa Fitz (Nagatsuro)',
                networks: [
                    {
                        type: 'twitter',
                        url: 'https://twitter.com/_Nagatsuro_',
                        hint: 'Twitter',
                    },
                    {
                        type: 'instagram',
                        url: 'https://www.instagram.com/nagatsuro/',
                        hint: 'Instagram',
                    },
                    {
                        type: 'tiktok',
                        url: 'https://www.tiktok.com/@nagatsuro',
                        hint: 'TikTok',
                    },
                ],
                artwork: [
                    {
                        imageUrl:
                            'https://instagram.fmex10-1.fna.fbcdn.net/v/t51.2885-15/323877480_197692732782751_8056336944155900773_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fmex10-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=HWX9mvdY2rkAX8-dJf9&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzAxMDkwOTk4ODMyMzg2Nzg4Ng%3D%3D.2-ccb7-5&oh=00_AfC3PzlcGJG3LbAmH2_38j8SAQiCjhk9EC92Ib83Y7Du0g&oe=63E0992C&_nc_sid=1527a3',
                    },
              
                ],
            },
            {
                name: 'Armando Carrillo Garcia',
                networks: [
                    {
                        type: 'facebook',
                        url: 'https://www.facebook.com/armando.carrillogarcia.79/',
                        hint: 'Facebook',
                    },
                    {
                        type: 'instagram',
                        url: 'https://www.instagram.com/artmandlecar/',
                        hint: 'Instagram',
                    },
                ],
                artwork: [
                    {
                        videoUrl:"https://www.youtube.com/embed/XUd2S8a2ChQ",
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
                networks: [
                    {
                        type: 'instagram',
                        url: 'https://www.instagram.com/the_whitenight25/ ',
                        hint: 'Instagram',
                    },
                      {
                        type: 'default',
                        url: 'https://www.artstation.com/artwork/14AdbX ',
                        hint: 'Portafolio',
                    },
                ],
                artwork: [
                    {
                        imageUrl:
                            'https://cdnb.artstation.com/p/assets/images/images/058/414/145/large/thewhitenight-0104c-ruizpangel-proyectofinal-1-1-v001.jpg?1674100265',
                    },
                    {
                        imageUrl:
                            'https://cdnb.artstation.com/p/assets/images/images/040/532/337/large/angel-alexis-ruiz-perez-gargola-aarp.jpg?1629143947',
                    },
                    {
                        imageUrl:
                            'https://cdnb.artstation.com/p/assets/images/images/057/404/797/large/thewhitenight-helmet1.jpg?1671514255',
                    },
                    {
                        imageUrl:
                            'https://cdna.artstation.com/p/assets/images/images/058/741/844/large/thewhitenight-gmnl-v1-1.jpg?1674852377',
                    },
             
                ],
            },
        ] as Array<Artist>,
    }),
    getters: {
        dialogState: (state) => state.isDialogOpened,
        videoDialogState: (state) => state.isVideoModalOpened,
        artists: (state): Array<Artist> => state.artistsData,
        imageUrl: (state): string => state.currentDialogImage,
        videoUrl:(state)=> state.currentVideo,
    },
    actions: {
        toggleDialog(): void {
            this.isDialogOpened = !this.isDialogOpened;
        },
        toggleVideoDialog(): void {
            this.isVideoModalOpened = !this.isVideoModalOpened;
        },
        setcurrentImage(imageUrl: string): void {
            this.currentDialogImage = imageUrl;
        },
        setcurrentVideo(videoUrl: string): void {
            this.currentVideo = videoUrl;
        },
    },
});
function e(
    value: {
        name: string;
        networks: { type: string; url: string }[];
        artwork: { imageUrl: string }[];
    },
    index: number,
    array: {
        name: string;
        networks: { type: string; url: string }[];
        artwork: { imageUrl: string }[];
    }[]
): value is {
    name: string;
    networks: { type: string; url: string }[];
    artwork: { imageUrl: string }[];
} {
    throw new Error('Function not implemented.');
}
