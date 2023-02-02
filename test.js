const artists =[ 
    {
    name:"name1",
    networks:{
        type:"facebook",
        url:"https://facebook.com/user1"
    },
    
},
{
    name:"name2",
    networks:{
        type:"facebook",
        url:"https://facebook.com/user2"
    }
}
]


let networks = artists.filter(e=> e.name =="name1"?e.networks:null)
console.log(networks)