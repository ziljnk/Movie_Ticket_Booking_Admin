import { Vue,Options } from 'vue-class-component'
import NavigationBar from '@/components/navigationBar/navigationBar.vue'
import Header from '@/components/header/header.vue'
import ModalAddSchedule from './components/modal-add-schedule/modal-add-schedule.vue';
import ModalDetailSchedule from './components/modal-detail-schedule/modal-detail-schedule.vue';
@Options({
    components: {
        NavigationBar,
        Header,
        ModalAddSchedule,
        ModalDetailSchedule,
    }
})
export default class ManageSchedule extends Vue {
    public date:any=null;
    public searchQuery:any=null;
    public currentPage:any=1;
    public totalPage:any=1;
    public schedules:any=[
        {
            id: "6555e1e67738a9358efd3fcb",
            startTime: "2023-11-18T19:00:00Z",
            endTime: "2023-11-18T21:15:00Z",
           movie: {
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
            theatre: {
                id: "6551d62ef6783a532f28440b",
                name: "Theater 01",
                description: "The first theatre on the left"
            },
            price: 55000,
            total: 239250,
            bookedSeat: [
                {
                    id: "6553498a30017e61ab9443b7",
                    schedule: "6555e1e67738a9358efd3fcb",
                    seat: {
                        id: "6551d62ff6783a532f28440d",
                        theatre: "6551d62ef6783a532f28440b",
                        row: "A",
                        number: 2
                    },
                    voucher: {
                        id: "655c2281b265c861941a773d",
                        name: "Voucher 1",
                        "code": "VOUCHER1",
                        description: "voucher 1111",
                        "value": 30
                    },
                    createdAt: "2023-11-14T10:18:50.29Z",
                    updatedAt: "2023-11-14T10:18:50.29Z",
                    price: 38500
                },
                {
                    id: "6553499d30017e61ab9443b8",
                    schedule: "6555e1e67738a9358efd3fcb",
                    seat: {
                        id: "6551d62ff6783a532f28440c",
                        theatre: "6551d62ef6783a532f28440b",
                        row: "A",
                        number: 1
                    },
                    voucher: {
                        id: "655c2298b265c861941a773e",
                        name: "Voucher 2",
                        code: "VOUCHER2",
                        description: "voucher 2222",
                        value: 5
                    },
                    createdAt: "2023-11-14T10:19:09.682Z",
                    updatedAt: "2023-11-14T10:19:09.682Z",
                    price: 52250
                },
                {
                    id: "6555fa2cc70a36dea428dcbc",
                    schedule: "6555e1e67738a9358efd3fcb",
                    seat: {
                        id: "6551d630f6783a532f28440e",
                        theatre: "6551d62ef6783a532f28440b",
                        row: "A",
                        number: 3
                    },
                    voucher: null,
                    createdAt: "2023-11-16T11:17:00.824Z",
                    updatedAt: "2023-11-16T11:17:00.824Z",
                    price: 55000
                },
                {
                    id: "655732d52e048205ff55bc06",
                    schedule: "6555e1e67738a9358efd3fcb",
                    seat: {
                        id: "6551d630f6783a532f28440f",
                        theatre: "6551d62ef6783a532f28440b",
                        row: "A",
                        number: 4
                    },
                    voucher: null,
                    createdAt: "2023-11-17T09:31:01.017Z",
                    updatedAt: "2023-11-17T09:31:01.017Z",
                    price: 55000
                },
                {
                    id: "655c29bd824609ea7dcff9c0",
                    schedule: "6555e1e67738a9358efd3fcb",
                    seat: {
                        id: "6551d630f6783a532f284410",
                        theatre: "6551d62ef6783a532f28440b",
                        row: "A",
                        number: 5
                    },
                    voucher: {
                        id: "655c2281b265c861941a773d",
                        name: "Voucher 1",
                        "code": "VOUCHER1",
                        description: "voucher 1111",
                        "value": 30
                    },
                    createdAt: "2023-11-21T03:53:33.404Z",
                    updatedAt: "2023-11-21T03:53:33.404Z",
                    price: 38500
                }
            ]
        }
    ]
}