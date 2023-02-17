import User from "../../../images/avatar/b-sm.jpg";
import User2 from "../../../images/avatar/c-sm.jpg";
import User3 from "../../../images/avatar/a-sm.jpg";
import User4 from "../../../images/avatar/d-sm.jpg";

export const kycData = [
  {
    id: "UD01544",
    name: "Max Smith",
    avatarBg: "primary",
    doc: "Passport",
    check: false,
    front: true,
    back: true,
    date: "18 Dec, 2019 01:02 PM",
    status: "Approved",
    checked: "Janet Snyder",
  },
  {
    id: "UD01489",
    name: "Amelia Grant",
    image: User3,
    avatarBg: "primary",
    check: false,
    doc: "NationalID",
    front: true,
    back: true,
    date: "12 Jan, 2020 01:02 PM",
    status: "Approved",
    checked: "Ernesto Vargas",
  },
  {
    id: "UD01434",
    name: "Kristen Hawkins",
    avatarBg: "primary",
    image: User,
    doc: "Passport",
    check: false,
    front: true,
    back: true,
    date: "18 Dec, 2019 01:02 PM",
    status: "Approved",
    checked: "Ernesto Vargas",
  },
  {
    id: "UD01286",
    name: "Tommy Vasquez",
    avatarBg: "purple",
    doc: "Driving ID",
    front: true,
    check: false,
    back: false,
    date: "12 Jan, 2020 01:02 PM",
    status: "Pending",
    checked: "Ernesto Vargas",
  },
  {
    id: "UD01235",
    name: "Alejandro Haynes",
    avatarBg: "teal",
    doc: "Passport",
    check: false,
    front: true,
    back: true,
    date: "18 Dec, 2019 01:02 PM",
    status: "Approved",
    checked: "Janet Snyder",
  },
  {
    id: "UD01223",
    name: "Brooke Harmon",
    avatarBg: "primary",
    image: User4,
    doc: "Passport",
    check: false,
    front: true,
    back: true,
    date: "18 Dec, 2019 01:02 PM",
    status: "Rejected",
    checked: "Janet Snyder",
  },
  {
    id: "UD01124",
    name: "Trevor Miller",
    avatarBg: "gray",
    doc: "Passport",
    check: false,
    front: true,
    back: true,
    date: "10 Jan, 2020 01:02 PM",
    status: "Approved",
    checked: "Ernesto Vargas",
  },
  {
    id: "UD01120",
    name: "Lonnie Ferguson",
    avatarBg: "primary",
    image: User2,
    doc: "Driving ID",
    check: false,
    front: true,
    back: false,
    date: "03 Jan, 2020 12:45 AM",
    status: "Pending",
    checked: "Ernesto Vargas",
  },
  {
    id: "UD00954",
    name: "Mack Kennedy ",
    avatarBg: "teal",
    doc: "Passport",
    check: false,
    front: true,
    back: true,
    date: "18 Nov, 2019 01:02 PM",
    status: "Approved",
    checked: "Janet Snyder",
  },
  {
    id: "UD00472",
    name: "Zia Burkett",
    avatarBg: "danger",
    doc: "Passport",
    check: false,
    front: true,
    back: false,
    date: "12 Nov, 2019 01:02 AM",
    status: "Rejected",
    checked: "Janet Snyder",
  },
  {
    id: "UD01734",
    name: "Ferdinand Karl",
    avatarBg: "primary",
    image: User,
    doc: "Passport",
    check: false,
    front: true,
    back: true,
    date: "18 Dec, 2019 01:02 PM",
    status: "Approved",
    checked: "Ernesto Vargas",
  },
  {
    id: "UD02020",
    name: "Inez Wilkerson",
    avatarBg: "warning",
    doc: "Passport",
    check: false,
    front: true,
    back: false,
    date: "12 Nov, 2019 01:02 AM",
    status: "Rejected",
    checked: "Janet Snyder",
  }, //new
  {
    id: "UD02021",
    name: "Alyana Thomson",
    avatarBg: "danger",
    doc: "Passport",
    check: false,
    front: true,
    back: false,
    date: "12 Nov, 2019 01:02 AM",
    status: "Approved",
    checked: "Janet Snyder",
  },
  {
    id: "UD02022",
    name: "Alexa Rollins",
    avatarBg: "pink",
    doc: "Passport",
    check: false,
    front: true,
    back: false,
    date: "12 Nov, 2019 01:02 AM",
    status: "Approved",
    checked: "Ernesto Vargas",
  },
  {
    id: "UD02023",
    name: "Moira Baxter",
    avatarBg: "blue",
    doc: "Passport",
    check: false,
    front: true,
    back: false,
    date: "12 Nov, 2019 01:02 AM",
    status: "Pending",
    checked: "Ernesto Vargas",
  },
  {
    id: "UD02024",
    name: "Irma Rogers",
    avatarBg: "success",
    doc: "Driving Id",
    check: false,
    front: true,
    back: false,
    date: "12 Nov, 2019 01:02 AM",
    status: "Pending",
    checked: "Ernesto Vargas",
  },
  {
    id: "UD02025",
    name: "Candice Wu",
    avatarBg: "purple",
    doc: "Driving Id",
    check: false,
    front: true,
    back: false,
    date: "12 Nov, 2019 01:02 AM",
    status: "Approved",
    checked: "Ernesto Vargas",
  },
  {
    id: "UD02026",
    name: "Eva Calvert",
    avatarBg: "warning",
    doc: "Passport",
    check: false,
    front: true,
    back: false,
    date: "12 Nov, 2019 01:02 AM",
    status: "Rejected",
    checked: "Ernesto Vargas",
  },
];

export const filterStatus = [
  { value: "approved", label: "Approved" },
  { value: "pending", label: "Pending" },
  { value: "deleted", label: "Deleted" },
  { value: "rejected", label: "Rejected" },
];

export const filterDoc = [
  { value: "nid", label: "Nidcard" },
  { value: "passport", label: "Passport" },
  { value: "driving", label: "Driving" },
];

export const bulkActionKycOptions = [
  { value: "Reject", label: "Reject" },
  { value: "Delete", label: "Delete" },
];
