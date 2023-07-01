import {
    Coffee,
    SchoolRounded,
    DataObjectRounded,
    DomainVerificationRounded,
} from "@mui/icons-material";
import logo from "../assets/logo.svg"


export const devWorkInfo = [
    {
        tooltipTitle: "تعداد قهوه های خورده شده",
        icon: <Coffee/>,
        total: 1650,
        color: "lightcoral",
    },
    {
        tooltipTitle: "تعداد دوره های من",
        icon: <SchoolRounded/>,
        total: 25,
        color: "lightskyblue",
    },
    {
        tooltipTitle: "تعداد پروژه های من",
        icon: <DataObjectRounded/>,
        total: 34,
        color: "lightslategray",
    },
    {
        tooltipTitle: "تعداد پروژه های به پایان رسیده",
        icon: <DomainVerificationRounded/>,
        total: 12,
        color: "lightseagreen",
    },
];

export const devEdu = [
    {
        year: "1393-1397",
        cert: "دیپلم",
        major: "رشته ریاضی",
        place: "مدرسه شهید رجایی"
    }
    ,
    {
        year: "1397-1401",
        cert: "لیسانس",
        major: "رشته مهندسی کامپیوتر",
        place: "دانشگاه خواجه نصیرالدین طوسی"
    }
]


export const userComments = [
    {
        fullname: "Sajjad",
        jobTitle: "Back-end Developer",
        avatar: logo,
        comment: "lorem"
    },
    {
        fullname: "Emma",
        jobTitle: "Actress",
        avatar: logo,
        comment: ""
    },
    {
        fullname: "Elena",
        jobTitle: "Actress",
        avatar: logo,
        comment: ""
    },
]



