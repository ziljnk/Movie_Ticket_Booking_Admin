import { Vue,Options } from 'vue-class-component'
import NavigationBar from '@/components/navigationBar/navigationBar.vue'
import Header from '@/components/header/header.vue'
import ModalAddMovie from './components/modal-add-movies/modal-add-movies.vue';
import ModalAddGenre from './components/modal-add-genre/modal-add-genre.vue';
import ModalDetailsMovie from './components/modal-details-movie/modal-details-movie.vue';
@Options({
    components: {
        NavigationBar,
        Header,
        ModalAddMovie,
        ModalAddGenre,
        ModalDetailsMovie
    }
})
export default class ManageMovies extends Vue {
    public date:any=null;
    public searchQuery:any=null;
    public currentPage:any=1;
    public totalPage:any=1;
    public movies:any=[
        {
            id: "6552f73dca12aa27ab82a7f4",
            name: "Harry Potter và chiếc cốc lửa",
            studio: "Wanner Bros",
            publishDate: "2023-11-15T22:30:00Z",
            endDate: "2023-11-22T22:30:00Z",
            genre: [
                {
                    id: "654cadf4a705d39ceebe76a9",
                    name: "horror"
                },
                {
                    id: "6552e20b216db62ca800c4e1",
                    name: "Comedy"
                }
            ],
            type: "2D",
            actors: "Daniel Radcliffe, Emma Watson, Rupert Grint",
            director: "Alfonso Cuarón",
            description: "Harry Potter và chiếc cốc lửa trailer",
            image: "https://cinestar.com.vn/pictures/Cinestar/11-2023/poster-nguoi-vo-cuoi-cung.jpg",
            trailer: "https://youtu.be/yBAGclXF3Jk?si=fk2WMBj97DXcDvDI",
            duration: 125,
            profit: 0
        },
        {
            id: "6552f6deca12aa27ab82a7f3",
            name: "Harry Potter và tù nhân ngục Azkaban",
            studio: "Wanner Bros",
            publishDate: "2023-11-17T04:22:52.362Z",
            endDate: "2023-11-27T04:22:52.362Z",
            genre: [
                {
                    id: "654cadf4a705d39ceebe76a9",
                    name: "horror"
                },
                {
                    id: "6552e20b216db62ca800c4e1",
                    name: "Comedy"
                }
            ],
            type: "2D",
            actors: "Daniel Radcliffe, Emma Watson, Rupert Grint",
            director: "Alfonso Cuarón",
            description: "Harry Potter và tù nhân ngục Azkaban trailer",
            image: "https://cinestar.com.vn/pictures/Cinestar/11-2023/poster-nguoi-vo-cuoi-cung.jpg",
            trailer: "https://youtu.be/yBAGclXF3Jk?si=fk2WMBj97DXcDvDI",
            duration: 130,
            profit: 239250
        },
        {
            id: "6552f66f7e75a9750b3c5685",
            name: "Harry Potter và phòng chứa bí mật",
            studio: "Wanner Bros 1",
            publishDate: "2023-12-14T04:22:52.362Z",
            endDate: "2023-12-28T19:30:00Z",
            genre: [
                {
                    id: "654cadf4a705d39ceebe76a9",
                    name: "horror"
                },
                {
                    id: "6552e20b216db62ca800c4e1",
                    name: "Comedy"
                }
            ],
            type: "3D",
            actors: "Daniel Radcliffe, Emma Watson, Rupert Grint",
            director: "Alfonso Cuarón",
            description: "Harry Potter và phòng chứa bí mật trailer",
            image: "https://cinestar.com.vn/pictures/Cinestar/11-2023/poster-nguoi-vo-cuoi-cung.jpg",
            trailer: "https://youtu.be/yBAGclXF3Jk?si=fk2WMBj97DXcDvDI",
            duration: 116,
            profit: 0
        },
        {
            id: "6552e2f6c27fb58e3c80d921",
            name: "Harry Potter và hòn đá phù thuỷ",
            studio: "Wanner Bros 1",
            publishDate: "2023-12-18T19:30:00Z",
            endDate: "2023-12-28T19:30:00Z",
            genre: [
                {
                    id: "654cadf4a705d39ceebe76a9",
                    name: "horror"
                }
            ],
            type: "3D",
            actors: "Daniel Radcliffe, Emma Watson, Rupert Grint",
            director: "Alfonso Cuarón",
            description: "Harry Potter và hòn đá phù thuỷ trailer",
            image: "https://cinestar.com.vn/pictures/Cinestar/11-2023/poster-nguoi-vo-cuoi-cung.jpg",
            trailer: "https://youtu.be/yBAGclXF3Jk?si=fk2WMBj97DXcDvDI",
            duration: 120,
            profit: 0
        },
        
        
    ];
    public genre:any=[
        {
            id: "654cadf4a705d39ceebe76a9",
            name: "horror"
        },
        {
            id: "6552e20b216db62ca800c4e1",
            name: "Comedy"
        }
    ]
}