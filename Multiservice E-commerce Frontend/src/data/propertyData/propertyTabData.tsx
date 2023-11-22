export const getHousePropertyData = (activeTab, language) => {
  
    const villaData = [
      {
        id: 1,
        title: {
          en: 'Villa',
          fr: 'Villa',
          es: 'Villa',
        },
        description: {
          en: 'Description for Villa',
          fr: 'Description pour la Villa',
          es: 'Descripción para el dato Villa',
        },
        mode:{
          en: 'ON SALE',
          fr: 'EN SOLDE',
          es: 'EN VENTA',
        }
        ,
        rate:4.7,
        status:{
          en: 'Furnished',
          fr: 'Meublé',
          es: 'Amueblado',
        }
        ,
        location:{
          en: 'Kigali, Rwanda',
          fr: 'Kigali, Rwanda',
          es: 'Kigali, Rwanda',
        },
        price:'120,000,000',
        currency:'RWF',
        dealer:[
            {
              id:1,
              fullname:"Jenner Dania",
              avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
            },
            {
              id:2,
              fullname:"Peter Joy",
              avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
            },
            {
              id:3,
              fullname:"Grace Raa",
              avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
            },
            {
              id:4,
              fullname:"Ave Calvar",
              avatar:"https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
            }
          ],
          post_date:"Oct, 12",
          card_image:{
            first:'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
            second:'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }
          ,
          images:[
            {
              id: 1,
              img:'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              caption:'Image 1',
            },
            {
              id: 2,
              img:'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              caption:'Image 2',
            }
            ,
            {
              id: 3,
              img:'https://images.unsplash.com/photo-1543886502-1286a5920ad0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc2lkZW50aWFsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D',
              caption:'Image 3',
            },
            {
              id: 4,
              img:'https://plus.unsplash.com/premium_photo-1661963646937-1566cbb38d34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc2lkZW50aWFsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D',
              caption:'Image 4',
            },
            {
              id: 5,
              img:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHJlc2lkZW50aWFsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D',
              caption:'Image 5',
            },
            {
              id: 6,
              img:'https://images.unsplash.com/photo-1668911491639-3ab356ec92ce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              caption:'Image 6',
            },
            {
              id: 7,
              img:'https://images.unsplash.com/photo-1629236714902-e1926e8ab314?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8',
              caption:'Image 7',
            },
            {
              id: 8,
              img:'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              caption:'Image 8',
            },
          ],

          amenities:[
            {
              key:{
                en:'la-key',
                fr:'la-cle',
                es:'la-clave',
                icon:'IconKey',
              },
             }
          ],
          design_info:[
            {
              guests:
              {
                en:'Guests',
                fr:'Invités',
                es:'Invitados',
                number:7,
                icon:'IconUsers',
              },
              beds:
              {
                en:'beds',
                fr:'lit',
                es:'cama',
                number:8,
                icon:'IconBed',
              },
              bath:
              {
                en:'bath room',
                fr:'salle de bains',
                es:'baño',
                number:5,
                icon:'IconBath',
              },
              dinning:
              {
                en:'Dining room',
                fr:'salle à manger',
                es:'comedor',
                number:3,
                icon:'IconDoor',
              },

            }
          ],
          reviews:[
            {
              id:1,
              postedBy:'Jana Kay',
              avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww',
              starts:4,
              content:'Wow! Made buying a house such a breeze! I was new to home buying, and have heard horror stories from friends and family about terrible agents. (RN) was professional and personal! She never made me feel uncomfortable and helped me every step of the way!',
              likes:{
                number:4,
                users:[
                    {
                      id:1,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:2,
                      fullname:"Peter Joy",
                      avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:3,
                      fullname:"Grace Raa",
                      avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:4,
                      fullname:"Ave Calvar",
                      avatar:"https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                    }
                ],
              },
              dislike:{
                number:2,
                users:[
                    {
                      id:1,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:2,
                      fullname:"Peter Joy",
                      avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                ],
              },
              comment:{
                number:2,
                users:[
                    {
                      id:1,
                      content:'I agree with you !!',
                      likes:23,
                      dislike:0,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:2,
                      content:'I\'m not sure about it.',
                      likes:2,
                      dislike:0,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                ],
              },
              postedOn:'October, 12, 2023',
            },
            {
              id:2,
              postedBy:'Peter Joy',
              avatar:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww',
              starts:4,
              content:'Wow! Made buying a house such a breeze! I was new to home buying, and have heard horror stories from friends and family about terrible agents. (RN) was professional and personal! She never made me feel uncomfortable and helped me every step of the way!',
              likes:{
                number:4,
                users:[
                    {
                      id:1,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:2,
                      fullname:"Peter Joy",
                      avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:3,
                      fullname:"Grace Raa",
                      avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:4,
                      fullname:"Ave Calvar",
                      avatar:"https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                    }
                ],
              },
              dislike:{
                number:2,
                users:[
                    {
                      id:1,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:2,
                      fullname:"Peter Joy",
                      avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                ],
              },
              comment:{
                number:2,
                users:[
                    {
                      id:1,
                      content:'I agree with you !!',
                      likes:23,
                      dislike:0,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:2,
                      content:'I\'m not sure about it.',
                      likes:2,
                      dislike:0,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                ],
              },
              postedOn:'January, 09, 2024',
            }
          ],

      },
      {
        id: 2,
        title: {
          en: 'Villa',
          fr: 'Villa',
          es: 'Villa',
        },
        description: {
          en: 'Description for Villa',
          fr: 'Description pour la Villa',
          es: 'Descripción para el dato Villa',
        },
        mode:{
          en: 'ON SALE',
          fr: 'EN SOLDE',
          es: 'EN VENTA',
        }
        ,
        rate:3.4,
        status:{
          en: 'Unfurnished',
          fr: 'Meublé',
          es: 'Amueblado',
        }
        ,
        location:{
          en: 'Gisozi, Rwanda',
          fr: 'Gisozi, Rwanda',
          es: 'Gisozi, Rwanda',
        },
        price:'70,000,000',
        currency:'RWF',
        dealer:[
            {
              id:1,
              fullname:"Jenner Dania",
              avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
            },
            {
              id:2,
              fullname:"Peter Joy",
              avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
            },
            {
              id:3,
              fullname:"Grace Raa",
              avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
            },
            {
              id:4,
              fullname:"Ave Calvar",
              avatar:"https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
            }
          ],
          post_date:"Dec, 03",
          card_image:{
              first:'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
              second:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }
          ,
          images:[
            {
              id: 1,
              img:'https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              caption:'Image 1',
            },
            {
              id: 2,
              img:'https://images.unsplash.com/photo-1628133287836-40bd5453bed1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              caption:'Image 2',
            }
            ,
            {
              id: 3,
              img:'https://images.unsplash.com/photo-1543886502-1286a5920ad0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc2lkZW50aWFsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D',
              caption:'Image 3',
            },
           
          ],

          amenities:[
            {
              key:{
                en:'la-key',
                fr:'la-cle',
                es:'la-clave',
                icon:'IconKey',
              },
             }
          ],
          design_info:[
            {
              guests:
              {
                en:'Guests',
                fr:'Invités',
                es:'Invitados',
                number:7,
                icon:'IconUsers',
              },
              beds:
              {
                en:'beds',
                fr:'lit',
                es:'cama',
                number:3,
                icon:'IconBed',
              },
              bath:
              {
                en:'bath room',
                fr:'salle de bains',
                es:'baño',
                number:5,
                icon:'IconBath',
              },
              dinning:
              {
                en:'Dining room',
                fr:'salle à manger',
                es:'comedor',
                number:3,
                icon:'IconDoor',
              },

            }
          ],
          reviews:[
            {
              id:1,
              postedBy:'Peter Joy',
              avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww',
              starts:4,
              content:'Wow! Made buying a house such a breeze! I was new to home buying, and have heard horror stories from friends and family about terrible agents. (RN) was professional and personal! She never made me feel uncomfortable and helped me every step of the way!',
              likes:{
                number:4,
                users:[
                    {
                      id:1,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:2,
                      fullname:"Peter Joy",
                      avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:3,
                      fullname:"Grace Raa",
                      avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:4,
                      fullname:"Ave Calvar",
                      avatar:"https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                    }
                ],
              },
              dislike:{
                number:2,
                users:[
                    {
                      id:1,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:2,
                      fullname:"Peter Joy",
                      avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                ],
              },
              comment:{
                number:2,
                users:[
                    {
                      id:1,
                      content:'I agree with you !!',
                      likes:23,
                      dislike:0,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:2,
                      content:'I\'m not sure about it.',
                      likes:2,
                      dislike:0,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                ],
              },
              postedOn:'October, 12, 2023',
            }
          ],

      },

      // Add more data objects as needed
    ];
  
    const residentialData = [
      {
        id: 3,
        title: {
          en: 'Residential',
          fr: 'Résidentiel',
          es: 'Residencial',
        },
        description: {
          en: 'Description for Residential',
          fr: 'Description pour la Résidentiel',
          es: 'Descripción para el Residencial',
        },
        mode:{
          en: 'ON SALE',
          fr: 'EN SOLDE',
          es: 'EN VENTA',
        }
        ,
        rate:4.7,
        status:{
          en: 'Furnished',
          fr: 'Meublé',
          es: 'Amueblado',
        }
        ,
        location:{
          en: 'Musanze, Rwanda',
          fr: 'Musanze, Rwanda',
          es: 'Musanze, Rwanda',
        },
        price:'43,000,000',
        currency:'RWF',
        dealer:[
            {
              id:1,
              fullname:"Jenner Dania",
              avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
            },
            {
              id:2,
              fullname:"Peter Joy",
              avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
            },
            {
              id:3,
              fullname:"Grace Raa",
              avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
            },
            {
              id:4,
              fullname:"Ave Calvar",
              avatar:"https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
            }
          ],
          post_date:"Mar, 02",
          card_image:{
            first:'https://images.unsplash.com/photo-1560026301-88340cf16be7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D' ,
            second:'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8',
          },
          images:[
            {
              id: 1,
              img:'https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              caption:'Image 1',
            },
            {
              id: 2,
              img:'https://images.unsplash.com/photo-1628133287836-40bd5453bed1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              caption:'Image 2',
            }
            ,

          ],

          amenities:[
            {
              key:{
                en:'la-key',
                fr:'la-cle',
                es:'la-clave',
                icon:'IconKey',
              },
             }
          ],
          design_info:[
            {
              guests:
              {
                en:'Guests',
                fr:'Invités',
                es:'Invitados',
                number:7,
                icon:'IconUsers',
              },
              beds:
              {
                en:'beds',
                fr:'lit',
                es:'cama',
                number:3,
                icon:'IconBed',
              },
              bath:
              {
                en:'bath room',
                fr:'salle de bains',
                es:'baño',
                number:5,
                icon:'IconBath',
              },
              dinning:
              {
                en:'Dining room',
                fr:'salle à manger',
                es:'comedor',
                number:3,
                icon:'IconDoor',
              },

            }
          ],
          reviews:[
            {
              id:1,
              postedBy:'Peter Joy',
              avatar:'',
              starts:4,
              content:'Wow! Made buying a house such a breeze! I was new to home buying, and have heard horror stories from friends and family about terrible agents. (RN) was professional and personal! She never made me feel uncomfortable and helped me every step of the way!',
              likes:{
                number:4,
                users:[
                    {
                      id:1,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:2,
                      fullname:"Peter Joy",
                      avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:3,
                      fullname:"Grace Raa",
                      avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:4,
                      fullname:"Ave Calvar",
                      avatar:"https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                    }
                ],
              },
              dislike:{
                number:2,
                users:[
                    {
                      id:1,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:2,
                      fullname:"Peter Joy",
                      avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                ],
              },
              comment:{
                number:2,
                users:[
                    {
                      id:1,
                      content:'I agree with you !!',
                      likes:23,
                      dislike:0,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:2,
                      content:'I\'m not sure about it.',
                      likes:2,
                      dislike:0,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                ],
              },
              postedOn:'October, 12, 2023',
            }
          ],

      },
      {
        id: 4,
        title: {
          en: 'Residential',
          fr: 'Résidentiel',
          es: 'Residencial',
        },
        description: {
          en: 'Description for Residential',
          fr: 'Description pour la Résidentiel',
          es: 'Descripción para el Residencial',
        },
        mode:{
          en: 'ON SALE',
          fr: 'EN SOLDE',
          es: 'EN VENTA',
        }
        ,
        rate:4.7,
        status:{
          en: 'Furnished',
          fr: 'Meublé',
          es: 'Amueblado',
        }
        ,
        location:{
          en: 'Kamembe, Rwanda',
          fr: 'Kamembe, Rwanda',
          es: 'Kamembe, Rwanda',
        },
        price:'380,000,000',
        currency:'RWF',
        dealer:[
            {
              id:1,
              fullname:"Jenner Dania",
              avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
            },
            {
              id:2,
              fullname:"Peter Joy",
              avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
            },
            {
              id:3,
              fullname:"Grace Raa",
              avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
            },
            {
              id:4,
              fullname:"Ave Calvar",
              avatar:"https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
            }
          ],
          post_date:"Apr, 11",
          card_image:{
            first:'https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
            second:'https://images.unsplash.com/photo-1628133287836-40bd5453bed1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          },
          images:[
            {
              id: 1,
              img:'https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              caption:'Image 1',
            },
            {
              id: 2,
              img:'https://images.unsplash.com/photo-1628133287836-40bd5453bed1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              caption:'Image 2',
            }
            ,
            {
              id: 3,
              img:'https://images.unsplash.com/photo-1543886502-1286a5920ad0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc2lkZW50aWFsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D',
              caption:'Image 3',
            },
            {
              id: 4,
              img:'https://plus.unsplash.com/premium_photo-1661963646937-1566cbb38d34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHJlc2lkZW50aWFsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D',
              caption:'Image 4',
            },
            {
              id: 5,
              img:'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHJlc2lkZW50aWFsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D',
              caption:'Image 5',
            },
            {
              id: 6,
              img:'https://images.unsplash.com/photo-1668911491639-3ab356ec92ce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              caption:'Image 6',
            },
            {
              id: 7,
              img:'https://images.unsplash.com/photo-1629236714902-e1926e8ab314?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8',
              caption:'Image 7',
            },
            {
              id: 8,
              img:'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              caption:'Image 8',
            },
          ],

          amenities:[
            {
              key:{
                en:'la-key',
                fr:'la-cle',
                es:'la-clave',
                icon:'IconKey',
              },
             }
          ],
          design_info:[
            {
              guests:
              {
                en:'Guests',
                fr:'Invités',
                es:'Invitados',
                number:7,
                icon:'IconUsers',
              },
              beds:
              {
                en:'beds',
                fr:'lit',
                es:'cama',
                number:3,
                icon:'IconBed',
              },
              bath:
              {
                en:'bath room',
                fr:'salle de bains',
                es:'baño',
                number:5,
                icon:'IconBath',
              },
              dinning:
              {
                en:'Dining room',
                fr:'salle à manger',
                es:'comedor',
                number:3,
                icon:'IconDoor',
              },

            }
          ],
          reviews:[
            {
              id:1,
              postedBy:'Peter Joy',
              avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww',
              starts:4,
              content:'Wow! Made buying a house such a breeze! I was new to home buying, and have heard horror stories from friends and family about terrible agents. (RN) was professional and personal! She never made me feel uncomfortable and helped me every step of the way!',
              likes:{
                number:4,
                users:[
                    {
                      id:1,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:2,
                      fullname:"Peter Joy",
                      avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:3,
                      fullname:"Grace Raa",
                      avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:4,
                      fullname:"Ave Calvar",
                      avatar:"https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                    }
                ],
              },
              dislike:{
                number:2,
                users:[
                    {
                      id:1,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:2,
                      fullname:"Peter Joy",
                      avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                ],
              },
              comment:{
                number:2,
                users:[
                    {
                      id:1,
                      content:'I agree with you !!',
                      likes:23,
                      dislike:0,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:2,
                      content:'I\'m not sure about it.',
                      likes:2,
                      dislike:0,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                ],
              },
              postedOn:'October, 12, 2023',
            },
            {
              id:1,
              postedBy:'Peter Joy',
              avatar:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww',
              starts:4,
              content:'Wow! Made buying a house such a breeze! I was new to home buying, and have heard horror stories from friends and family about terrible agents. (RN) was professional and personal! She never made me feel uncomfortable and helped me every step of the way!',
              likes:{
                number:4,
                users:[
                    {
                      id:1,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:2,
                      fullname:"Peter Joy",
                      avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:3,
                      fullname:"Grace Raa",
                      avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:4,
                      fullname:"Ave Calvar",
                      avatar:"https://plus.unsplash.com/premium_photo-1677368597077-009727e906db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                    }
                ],
              },
              dislike:{
                number:2,
                users:[
                    {
                      id:1,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:2,
                      fullname:"Peter Joy",
                      avatar:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                ],
              },
              comment:{
                number:2,
                users:[
                    {
                      id:1,
                      content:'I agree with you !!',
                      likes:23,
                      dislike:0,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                    {
                      id:2,
                      content:'I\'m not sure about it.',
                      likes:2,
                      dislike:0,
                      fullname:"Jenner Dania",
                      avatar:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
                    },
                ],
              },
              postedOn:'October, 12, 2023',
            }
          ],

      },
      // Add more data objects as needed
    ];
  
    // const rustData = [
    //   {
    //     id: 7,
    //     title: {
    //       en: 'Rust Data 1',
    //       fr: 'Donnée Rust 1',
    //       es: 'Dato Rust 1',
    //     },
    //     description: {
    //       en: 'Description for Rust Data 1',
    //       fr: 'Description pour la donnée Rust 1',
    //       es: 'Descripción para el dato Rust 1',
    //     },
    //   },
    //   {
    //     id: 8,
    //     title: {
    //       en: 'Rust Data 2',
    //       fr: 'Donnée Rust 2',
    //       es: 'Dato Rust 2',
    //     },
    //     description: {
    //       en: 'Description for Rust Data 2',
    //       fr: 'Description pour la donnée Rust 2',
    //       es: 'Descripción para el dato Rust 2',
    //     },
    //   },
    //   // Add more data objects as needed
    // ];
  
    // const typescriptData = [
    //   {
    //     id: 9,
    //     title: {
    //       en: 'TypeScript Data 1',
    //       fr: 'Donnée TypeScript 1',
    //       es: 'Dato TypeScript 1',
    //     },
    //     description: {
    //       en: 'Description for TypeScript Data 1',
    //       fr: 'Description pour la donnée 1',
    //       es: 'Descripción para el dato 1',
    //     },
    //   },
    //   {
    //     id: 10,
    //     title: {
    //       en: 'TypeScript Data 2',
    //       fr: 'Donnée TypeScript 2',
    //       es: 'Dato TypeScript 2',
    //     },
    //     description: {
    //       en: 'Description for TypeScript Data 2',
    //       fr: 'Description pour la donnée 2',
    //       es: 'Descripción para el dato 2',
    //     },
    //   },

    //   {
    //     id: 11,
    //     title: {
    //       en: 'TypeScript Test 3',
    //       fr: 'Donnée TypeScript 3',
    //       es: 'Dato TypeScript 3',
    //     },
    //     description: {
    //       en: 'Description for TypeScript Data 3',
    //       fr: 'Description pour la donnée TypeScript 3',
    //       es: 'Descripción para el dato TypeScript 3',
    //     },
    //   },
    //   // Add more data objects as needed
    // ];
  
    // Return the data based on the active tab
    if (activeTab === 'Villa') {
      return villaData;
    } else if(activeTab === 'Residential') {
      return residentialData;
    } 
    else{
      return "No Value";
    }
    // else if (activeTab === 'Rust') {
    //   return rustData;
    // } else if (activeTab === 'TypeScript') {
    //   return typescriptData;
    // } else {
    //   return [...aiMlData, ...cppData, ...rustData, ...typescriptData];
    // }
  };
  