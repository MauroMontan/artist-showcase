import { defineStore } from 'pinia';
import Artist from '../interfaces/artist';

export const useUi = defineStore('uiStore', {

    state: () => ({
        isDialogOpened: false,
        isVideoModalOpened: false,
        currentVideo: "",
        currentDialogImage:
            'https://images.theconversation.com/files/471068/original/file-20220627-18-zlq7b6.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop',
        artistsData: [
            {
                name: "Artist Number 1 name",
                networks: [
                    {
                        type: "instagram",
                        url: "#",
                        hint: "Instagram"
                    },
                    {
                        type: "portfolio",
                        url: "#",
                        hint: "Portfolio"
                    }
                ],
                artwork: [
                    {
                        imageUrl: "https://images.unsplash.com/photo-1696694809606-42f097934282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"

                    },
                    { imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" },
                    {
                        imageUrl: "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80"
                    },
                    {
                        imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2765&q=80"
                    },
                    {
                        imageUrl: "https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80",
                    },

                ]
            },
            {
                name: 'Artist Number 2 name',
                networks: [
                    {
                        type: 'twitter',
                        url: '#',
                        hint: 'Twitter',
                    },
                    {
                        type: 'instagram',
                        url: '#',
                        hint: 'Instagram',
                    },
                    {
                        type: 'tiktok',
                        url: '#',
                        hint: 'TikTok',
                    },
                ],
                artwork: [

                    {
                        imageUrl: "https://images.unsplash.com/photo-1558877385-81a1c7e67d72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                    },
                    {
                        imageUrl: "https://images.unsplash.com/photo-1530325553241-4f6e7690cf36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                    },
                    {
                        imageUrl: "https://images.unsplash.com/photo-1582845512747-e42001c95638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                    },
                    {
                        imageUrl: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2960&q=80"
                    },
                    {
                        imageUrl: "https://images.unsplash.com/photo-1546776230-bb86256870ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3210&q=80"
                    },


                ],
            },
            {
                name: 'Artist Number 3 name',
                networks: [
                    {
                        type: 'facebook',
                        url: '#',
                        hint: 'Facebook',
                    },
                    {
                        type: 'instagram',
                        url: '#',
                        hint: 'Instagram',
                    },
                ],
                artwork: [
                    {
                        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
                    },
                    {
                        imageUrl: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80",

                    },
                    {
                        imageUrl: "https://images.unsplash.com/photo-1562229125-6d6075419a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80"
                    }, {
                        imageUrl: "https://plus.unsplash.com/premium_photo-1668046107866-18eb972d45f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80"
                    },
                    {
                        imageUrl: "https://plus.unsplash.com/premium_photo-1668046107746-ffcc1ca3498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3132&q=80"
                    }


                ],
            },
            {
                name: 'Artist number 4 name',
                networks: [
                    {
                        type: 'instagram',
                        url: '#',
                        hint: 'Instagram',
                    },
                    {
                        type: 'default',
                        url: '#',
                        hint: 'Portafolio',
                    },
                ],
                artwork: [
                    {
                        imageUrl:
                            "https://plus.unsplash.com/premium_photo-1669056783712-a3b0b8505f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
                    },
                    {
                        imageUrl: "https://plus.unsplash.com/premium_photo-1669137055739-4cdaddc1a709?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
                    },
                    {
                        imageUrl: "https://plus.unsplash.com/premium_photo-1669056783989-d5ade080793c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
                    },
                    {
                        imageUrl: "https://images.unsplash.com/photo-1632001605595-a8b79b435e7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80"
                    },
                    {
                        imageUrl: "https://images.unsplash.com/photo-1600184430626-1dd6087315d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3106&q=80"
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1615224572756-729e7d1cd942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1614961234274-f204d01c115e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80',
                    },
                    {
                        imageUrl:
                            'https://images.unsplash.com/photo-1607528971899-2e89e6c0ec69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3174&q=80',
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
