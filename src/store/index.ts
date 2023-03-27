import { defineStore } from 'pinia';
import Artist from '../interfaces/artist';
import Armando_1 from "../assets/artwork/Armando/photo1674244574.jpeg"
import Armando_1_video from "../assets/artwork/Armando/video5069272976604529394.mp4"
import Armando_2_video from "../assets/artwork/Armando/video5069272976604529393.mp4";
import Armando_2 from "../assets/artwork/Armando/ssp_thumb.png";
import White from "../assets/artwork/White/TheWhiteNight_Obras/Jack_1_0001.png";
import White_2 from "../assets/artwork/White/TheWhiteNight_Obras/Jack_1_0002.png";
import White_3 from "../assets/artwork/White/TheWhiteNight_Obras/0312-a_RuizPAngelA_Render_002.jpg";
import White_4 from "../assets/artwork/White/TheWhiteNight_Obras/0104C_RuizPAngel_ProyectoFinal_6_1_v001.png"
import Carolina_thumb1 from "../assets/artwork/Carolina/carolina_thumb_story.png";
import Nagatsuro_1 from "../assets/artwork/Nagatsuro/nagatsuro1.jfif";
import Nagatsuro_2 from "../assets/artwork/Nagatsuro/nagatsuro2.jfif";
import Nagatsuro_3 from "../assets/artwork/Nagatsuro/nagatsuro3.jfif";
import Nagatsuro_4 from "../assets/artwork/Nagatsuro/nagatsuro4.jpg";
import Nagatsuro_5 from "../assets/artwork/Nagatsuro/nagatsuro5.jfif";
import Nagatsuro_6 from "../assets/artwork/Nagatsuro/nagatsuro6.jfif";
import Nagatsuro_7 from "../assets/artwork/Nagatsuro/nagatsuro7.jpg";

export const useUi = defineStore('uiStore', {

    state: () => ({
        isDialogOpened: false,
        isVideoModalOpened: false,
        currentVideo: "",
        currentDialogImage:
            'https://images.theconversation.com/files/471068/original/file-20220627-18-zlq7b6.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop',
        artistsData: [
            {
                name: "Carolina Uribe Sánchez",
                networks: [
                    {
                        type: "instagram",
                        url: "https://www.instagram.com/creati_caro/",
                        hint: "Instagram"
                    },
                    {
                        type: "portfolio",
                        url: "https://creaticaro.wixsite.com/creator",
                        hint: "Portfolio"
                    }
                ],
                artwork: [
                    {
                        imageUrl: "https://static.wixstatic.com/media/332e86_5e0ad03b7f6e46ebaa85e28a960f22cef000.jpg/v1/fill/w_314,h_788,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/332e86_5e0ad03b7f6e46ebaa85e28a960f22cef000.jpg"

                    },
                    { imageUrl: "https://static.wixstatic.com/media/332e86_c2206ab1df3a499b8fe59eb39bc73259f000.jpg/v1/fill/w_313,h_788,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/332e86_c2206ab1df3a499b8fe59eb39bc73259f000.jpg" },
                    {
                        imageUrl: "https://static.wixstatic.com/media/332e86_cc549ba7eaf4473190260b6c22c86f16f000.jpg/v1/fill/w_313,h_788,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/332e86_cc549ba7eaf4473190260b6c22c86f16f000.jpg"
                    },
                    {
                        imageUrl: "https://static.wixstatic.com/media/332e86_bbd1c778eff2496bbe5ce4983f1494b9f000.jpg/v1/fill/w_1220,h_686,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/332e86_bbd1c778eff2496bbe5ce4983f1494b9f000.jpg",
                        videoUrl: "https://video.wixstatic.com/video/332e86_bbd1c778eff2496bbe5ce4983f1494b9/720p/mp4/file.mp4"
                    },
                    {
                        imageUrl: Carolina_thumb1,
                        videoUrl: "https://video.wixstatic.com/video/332e86_4db09ee478194952949fb6923a798348/480p/mp4/file.mp4"
                    },
                    {
                        imageUrl: "https://static.wixstatic.com/media/332e86_4091b764a8774ac5bf1052a100273614f000.jpg/v1/fill/w_1220,h_686,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/332e86_4091b764a8774ac5bf1052a100273614f000.jpg",
                        videoUrl: "https://video.wixstatic.com/video/332e86_4091b764a8774ac5bf1052a100273614/720p/mp4/file.mp4"
                    }
                ]
            },
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
                        imageUrl: Nagatsuro_1
                    },
                    {
                        imageUrl: Nagatsuro_2
                    },
                    {
                        imageUrl: Nagatsuro_3
                    },
                    {
                        imageUrl: Nagatsuro_4
                    },
                    {
                        imageUrl: Nagatsuro_5
                    },
                    {
                        imageUrl: Nagatsuro_6
                    },
                    {
                        imageUrl: Nagatsuro_7
                    }

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
                        imageUrl: Armando_1,
                        videoUrl: Armando_1_video
                    },
                    {
                        imageUrl: Armando_2,
                        videoUrl: Armando_2_video
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
                        imageUrl: White_4
                    },
                    {
                        imageUrl: White_3
                    },
                    {
                        imageUrl: White
                    },
                    {
                        imageUrl: White_2
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
        videoUrl: (state) => state.currentVideo,
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
