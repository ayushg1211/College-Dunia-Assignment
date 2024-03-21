import react, { useEffect, useState } from "react";
import data from "../collegeData/data.json";

import "./CollegeTable.css";
import CollegeSection from "./CollegeSection";
import CourseFees from "./CourseFees";
import Placement from "./Placement";

// const arr = [
//   {
//     id: 1,
//     cd_rank: 1,
//     college: {
//       name: "IIT Madras - Indian Institute of Technology - [IITM], Chennai",
//       address: "Chennai, Tamil Nadu",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: true,
//         cutoff: 144,
//         course: "B.Tech Computer Science Engineering",
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 209550,
//     placement: {
//       avg: 2148000,
//       highest: 19800000,
//     },
//     review: 8.5,
//     air: "3rd / 131",
//   },
//   {
//     id: 2,
//     cd_rank: 2,
//     college: {
//       name: "IIT Delhi - Indian Institute of Technology - [IITD], New Delhi",
//       address: "New Delhi, Delhi NCR",
//       approval: {
//         applicable: false,
//       },
//       advance: {
//         applicable: true,
//         cutoff: 115,
//         course: "B.Tech Computer Science Engineering",
//       },
//       image: "Srmseal.png",
//       featured: true,
//     },
//     fees: 150000,
//     placement: {
//       avg: 2582000,
//       highest: 20000000,
//     },
//     review: 8.7,
//     air: "1th / 35",
//   },
//   {
//     id: 3,
//     cd_rank: 3,
//     college: {
//       name: "Manipal Institute of Science and Technology",
//       address: "Manipal, Karnataka",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 155000,
//     placement: {
//       avg: 2100000,
//       highest: 19800000,
//     },
//     review: 7.0,
//     air: "82th/100",
//   },
//   {
//     id: 4,
//     cd_rank: 4,
//     college: {
//       name: "Srm Institute of Science and Technology",
//       address: "Ghazibad, Delhi NCR",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 280000,
//     placement: {
//       avg: 2100000,
//       highest: 19800000,
//     },
//     review: 7.6,
//     air: "114th/324",
//   },
//   {
//     id: 5,
//     cd_rank: 5,
//     college: {
//       name: "Thapar Institute of Science and Technology",
//       address: "Patiala, Punjab",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 180000,
//     placement: {
//       avg: 2100000,
//       highest: 19800000,
//     },
//     review: 7.6,
//     air: "55th/410",
//   },
//   {
//     id: 6,
//     cd_rank: 6,
//     college: {
//       name: "IIT Roorkee - Indian Institute of Technology - [IITR], Roorkee",
//       address: "Roorkee, Uttarakhand",
//       approval: {
//         applicable: false,
//       },
//       advance: {
//         applicable: true,
//         cutoff: 107,
//         course: "B.Tech Computer Science Engineering",
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 180000,
//     placement: {
//       avg: 2100000,
//       highest: 19800000,
//     },
//     review: 8.4,
//     air: "12th/50",
//   },
//   {
//     id: 7,
//     cd_rank: 7,
//     college: {
//       name: "Parul University, Vadodara",
//       address: "Vadodara, Gujrat",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE, COA, PCI, INC, GNC",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 160000,
//     placement: {
//       avg: 2100000,
//       highest: 19800000,
//     },
//     review: 8.0,
//     air: "99th/300",
//   },
//   {
//     id: 8,
//     cd_rank: 8,
//     college: {
//       name: "MIT World Peace University - [MIT-WPU], Pune",
//       address: "Pune, Maharashtra",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 80500,
//     placement: {
//       avg: 1100000,
//       highest: 1800000,
//     },
//     review: 6.6,
//     air:" 84th/160",
//   },
//   {
//     id: 9,
//     cd_rank: 9,
//     college: {
//       name: "HKBK Group of Institutions, Bangalore",
//       address: "Bangalore, Karnataka",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: false
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 101550,
//     placement: {
//       avg: 1648000,
//       highest: 4800000,
//     },
//     review: 4.5,
//     air: "73rd / 134",
//   },
//   {
//     id: 10,
//     cd_rank: 10,
//     college: {
//       name: "IIT Kanpur - Indian Institute of Technology - [IITK], Kanpur",
//       address: "kanpur, UP",
//       approval: {
//         applicable: false,
//       },
//       advance: {
//         applicable: true,
//         cutoff: 238,
//         course: "B.Tech Computer Science Engineering",
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 250000,
//     placement: {
//       avg: 1982000,
//       highest: 20000000,
//     },
//     review: 8.8,
//     air: "6th / 35",
//   },
//   {
//     id: 11,
//     cd_rank: 11,
//     college: {
//       name: "B. N. M. Institute of Technology - [BNMIT], Bangalore",
//       address: "Bangalore, Karnataka",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE, NBA",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 805000,
//     placement: {
//       avg: 600000,
//       highest: 4700000,
//     },
//     review: 7.0,
//     air: "82nd/623",
//   },
//   {
//     id: 12,
//     cd_rank: 12,
//     college: {
//       name: "Cambridge Institute of Technology - [CiTech], Bangalore",
//       address: "Bangalore, Karnataka",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE, UGC, NBA",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 150000,
//     placement: {
//       avg: 700000,
//       highest: 2700000,
//     },
//     review: 7.6,
//     air: "114th / 126",
//   },
//   {
//     id: 13,
//     cd_rank: 13,
//     college: {
//       name: "BITS Pilani (Pilani Campus), Pilani",
//       address: "Pilani, Rajasthan",
//       approval: {
//         applicable: true,
//         approved_by: "UGC",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: true,
//     },
//     fees: 500000,
//     placement: {
//       avg: 3000000,
//       highest: 6000000,
//     },
//     review: 8.8,
//     air: "1st / 246",
//   },
//   {
//     id: 14,
//     cd_rank: 14,
//     college: {
//       name: "IIT Guwahati - Indian Institute of Technology - [IITG], Guwahati",
//       address: "Guwahati, Assam",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE, UGC"
//       },
//       advance: {
//         applicable: true,
//         cutoff: 117,
//         course: "B.Tech Computer Science Engineering",
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 100000,
//     placement: {
//       avg: 2305000,
//       highest: 14800000,
//     },
//     review: 8.4,
//     air: "12th / 35",
//   },
//   {
//     id: 15,
//     cd_rank: 15,
//     college: {
//       name: "IIT Hyderabad - Indian Institute of Technology - [IITH], Hyderabad",
//       address: "Hyderabad, Telangana",
//       approval: {
//         applicable: true,
//         approved_by: "UGC",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 110000,
//     placement: {
//       avg: 1670000,
//       highest: 10800000,
//     },
//     review: 8.3,
//     air: "12th / 35",
//   },
//   {
//     id: 16,
//     cd_rank: 16,
//     college: {
//       name: "Srm Institute of Science and Technology",
//       address: "Ghazibad, Delhi NCR",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 280000,
//     placement: {
//       avg: 2100000,
//       highest: 19800000,
//     },
//     review: 6.6,
//     air: 84,
//   },
//   {
//     id: 17,
//     cd_rank: 17,
//     college: {
//       name: "College of Engineering, Anna University - [CEG], Chennai",
//       address: "Chennai, Tamil Nadu",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 47000,
//     placement: {
//       avg: 450000,
//       highest: 850000,
//     },
//     review: 5.5,
//     air: "128th / 131",
//   },
//   {
//     id: 18,
//     cd_rank: 18,
//     college: {
//       name: "NIT Trichy, Tiruchirappalli",
//       address: "Tiruchirappalli, Tamil Nadu",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE, UGC, MHRD"
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 170000,
//     placement: {
//       avg: 860000,
//       highest: 4000000,
//     },
//     review: 8.7,
//     air: "1th / 35",
//   },
//   {
//     id: 19,
//     cd_rank: 19,
//     college: {
//       name: "Institute of Chemical Technology - [ICT], Mumbai",
//       address: "Mumbai, Maharashtra",
//       approval: {
//         applicable: true,
//         approved_by: "UGC, NBA, MHRD",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 115000,
//     placement: {
//       avg: 1800000,
//       highest: 8700000,
//     },
//     review: 8.0,
//     air: "24th / 200",
//   },
//   {
//     id: 20,
//     cd_rank: 20,
//     college: {
//       name: "IIT BHU - Indian Institute of Technology, Varanasi",
//       address: "Varanasi, Uttar Pradesh",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 270000,
//     placement: {
//       avg: 3100000,
//       highest: 16840000,
//     },
//     review: 8.5,
//     air: "24th / 35",
//   },
//   {
//     id: 21,
//     cd_rank: 21,
//     college: {
//       name: "Jadavpur University - [JU], Kolkata",
//       address: "Kolkata, West Bengal",
//       approval: {
//         applicable: true,
//         approved_by: "NCTE, AICTE, COA, UGC, AIU",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 10000,
//     placement: {
//       avg: 3500000,
//       highest: 8500000,
//     },
//     review: 8.5,
//     air: "15th / 121",
//   },
//   {
//     id: 22,
//     cd_rank: 22,
//     college: {
//       name: "ISM Dhanbad - Indian Institute of Technology - [IITISM], Dhanbad",
//       address: "Dhanbad, Jharkhand",
//       approval: {
//         applicable: false,
//       },
//       advance: {
//         applicable: true,
//         cutoff: 4710,
//         course: "B.Tech Computer Science Engineering",
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 80000,
//     placement: {
//       avg: 200000,
//       highest: 1800000,
//     },
//     review: 8.0,
//     air: "12th / 48",
//   },
//   {
//     id: 23,
//     cd_rank: 23,
//     college: {
//       name: "National Institute of Technology - [NIT], Rourkela",
//       address: "Rourkela, Odisha",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE, COA, PCI, INC, GNC",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 170000,
//     placement: {
//       avg: 2060000,
//       highest: 8400000,
//     },
//     review: 8.0,
//     air: "99th/ 212",
//   },
//   {
//     id: 24,
//     cd_rank: 24,
//     college: {
//       name: "Vellore Institute of Technology - [VIT University], Vellore",
//       address: "Vellore, Tamil Nadu",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 198000,
//     placement: {
//       avg: 800000,
//       highest: 10200000,
//     },
//     review: 7.6,
//     air: "84th / 218",
//   },
//   {
//     id: 25,
//     cd_rank: 25,
//     college: {
//       name: "IIT Bhubaneswar - Indian Institute of Technology - [IITBBS], Bhubaneswar",
//       address: "Bhubaneswar, Odisha",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: true,
//         cutoff: 3468,
//         course: "B.Tech Computer Science Engineering",
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 219550,
//     placement: {
//       avg: 1748000,
//       highest: 5500000,
//     },
//     review: 8.2,
//     air: "11th / 134",
//   },
//   {
//     id: 26,
//     cd_rank: 26,
//     college: {
//       name: "Indian Institute of Engineering Science and Technology - [IIEST] Shibpur, Howrah",
//       address: "Howrah, West Bengal",
//       approval: {
//         applicable: false,
//       },
//       advance: {
//         applicable: true,
//         cutoff: 1665,
//         course: "B.Tech Computer Science Engineering",
//       },
//       image: "Srmseal.png",
//       featured: true,
//     },
//     fees: 170000,
//     placement: {
//       avg: 882000,
//       highest: 4500000,
//     },
//     review: 8.1,
//     air: "1th / 317",
//   },
//   {
//     id: 27,
//     cd_rank: 27,
//     college: {
//       name: "IIT Mandi- Indian Institute of Technology - [IITM], Mandi",
//       address: "Mandi, Himachal Pradesh",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 225000,
//     placement: {
//       avg: 2523000,
//       highest: 6000000,
//     },
//     review: 7.3,
//     air: "16th / 35",
//   },
//   {
//     id: 28,
//     cd_rank: 28,
//     college: {
//       name: "National Institute of Technology - [NITK], Surathkal",
//       address: "Surathkal, Karnataka",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 158000,
//     placement: {
//       avg: 1400000,
//       highest: 4500600,
//     },
//     review: 8.4,
//     air: "41st / 256",
//   },
//   {
//     id: 29,
//     cd_rank: 29,
//     college: {
//       name: "NIT Warangal, Warangal",
//       address: "Warangal, Telangana",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 200000,
//     placement: {
//       avg: 1700000,
//       highest: 8820000,
//     },
//     review: 8.6,
//     air: "55th / 124",
//   },
//   {
//     id: 30,
//     cd_rank: 30,
//     college: {
//       name: "IIT Gandhinagar - Indian Institute of Technology - [IITG], Gandhinagar",
//       address: "Gandhinagar, Gujarat",
//       approval: {
//         applicable: false,
//       },
//       advance: {
//         applicable: true,
//         cutoff: 2373,
//         course: "B.Tech Computer Science Engineering",
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 236000,
//     placement: {
//       avg: 1540000,
//       highest: 6700000,
//     },
//     review: 8.4,
//     air: "18th / 35",
//   },
//   {
//     id: 31,
//     cd_rank: 31,
//     college: {
//       name: "Delhi Technological University - [DTU], New Delhi",
//       address: "New Delhi, Delhi NCR",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE, COA, PCI, INC, GNC",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 223000,
//     placement: {
//       avg: 2373000,
//       highest: 8205000,
//     },
//     review: 8.0,
//     air: "8th / 35",
//   },
//   {
//     id: 32,
//     cd_rank: 32,
//     college: {
//       name: "Jamia Millia Islamia University-[JMI], New Delhi",
//       address: "New Delhi, Delhi NCR",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 16000,
//     placement: {
//       avg: 900000,
//       highest: 2500000,
//     },
//     review: 6.3,
//     air: "84th / 126",
//   },
//   {
//     id: 33,
//     cd_rank: 33,
//     college: {
//       name: "IIT Madras - Indian Institute of Technology - [IITM], Chennai",
//       address: "Chennai, Tamil Nadu",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: true,
//         cutoff: 144,
//         course: "B.Tech Computer Science Engineering",
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 209550,
//     placement: {
//       avg: 2148000,
//       highest: 19800000,
//     },
//     review: 8.5,
//     air: "3rd / 131",
//   },
//   {
//     id: 34,
//     cd_rank: 34,
//     college: {
//       name: "National Institute of Technology - [NITC], Calicut",
//       address: "Calicut, Kerala",
//       approval: {
//         applicable: false,
//       },
//       advance: {
//         applicable: true,
//         cutoff: 6009,
//         course: "B.Tech Computer Science Engineering",
//       },
//       image: "Srmseal.png",
//       featured: true,
//     },
//     fees: 300000,
//     placement: {
//       avg: 2382000,
//       highest: 4700000,
//     },
//     review: 8.0,
//     air: "21th / 351",
//   },
//   {
//     id: 35,
//     cd_rank: 35,
//     college: {
//       name: "Institute of Technical Education and Research - [ITER], Bhubaneswar",
//       address: "Bhubaneswar, Odisha",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 125000,
//     placement: {
//       avg: 1100000,
//       highest: 8070000,
//     },
//     review: 7.0,
//     air: 82,
//   },
//   {
//     id: 36,
//     cd_rank: 36,
//     college: {
//       name: "Birla Institute of Technology - [BIT Mesra], Ranchi",
//       address: "Ranchi, Jharkhand",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE, PCI, UGC, NBA ",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 20000,
//     placement: {
//       avg: 400000,
//       highest: 800000,
//     },
//     review: 6.7,
//     air: 114,
//   },
//   {
//     id: 37,
//     cd_rank: 37,
//     college: {
//       name: "Amity University, Noida",
//       address: "Noida, Uttar Pradesh",
//       approval: {
//         applicable: true,
//         approved_by: "NCTE, AICTE, COA, BCI, UGC",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 130000,
//     placement: {
//       avg: 1317000,
//       highest: 2470000,
//     },
//     review: 7.8,
//     air: 55,
//   },
//   {
//     id: 38,
//     cd_rank: 38,
//     college: {
//       name: "National Institute of Technology - [NIT], Kurukshetra",
//       address: "Kurukshetra, Haryana",
//       approval: {
//         applicable: false,
//       },
//       advance: {
//         applicable: true,
//         cutoff: 1007,
//         course: "B.Tech Computer Science Engineering",
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 216000,
//     placement: {
//       avg: 1700036,
//       highest: 3800000,
//     },
//     review: 8.1,
//     air: 12,
//   },
//   {
//     id: 39,
//     cd_rank: 39,
//     college: {
//       name: "Aligarh Muslim University - [AMU], Aligarh",
//       address: "Aligarh, Uttar Pradesh",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE, COA, PCI, INC, GNC",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 60000,
//     placement: {
//       avg: 340700,
//       highest: 960000,
//     },
//     review: 7.7,
//     air: 99,
//   },
//   {
//     id: 40,
//     cd_rank: 40,
//     college: {
//       name: "SASTRA University, Thanjavur",
//       address: "Thanjavur, Tamil Nadu",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 242000,
//     placement: {
//       avg: 1100000,
//       highest: 7200000,
//     },
//     review: 8.3,
//     air: 84,
//   },
//   {
//     id: 41,
//     cd_rank: 41,
//     college: {
//       name: "International Institute of Information Technology - [IIIT], Hyderabad",
//       address: "Hyderabad, Telangana",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: true,
//         cutoff: 1687,
//         course: "B.Tech Computer Science Engineering",
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 169550,
//     placement: {
//       avg: 1548000,
//       highest: 5890000,
//     },
//     review: 8.3,
//     air: "17th / 131",
//   },
//   {
//     id: 42,
//     cd_rank: 42,
//     college: {
//       name: "SSN College of Engineering - [SSNCE], Chennai",
//       address: "New Delhi, Delhi NCR",
//       approval: {
//         applicable: false,
//       },
//       advance: {
//         applicable: true,
//         cutoff: 2155,
//         course: "B.Tech Computer Science Engineering",
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 152000,
//     placement: {
//       avg: 2082000,
//       highest: 4380000,
//     },
//     review: 8.4,
//     air: "15th / 35",
//   },
//   {
//     id: 43,
//     cd_rank: 43,
//     college: {
//       name: "SRM Engineering College, Kanchipuram",
//       address: "Kanchipuram, Tamil Nadu",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 103000,
//     placement: {
//       avg: 600000,
//       highest: 1950500,
//     },
//     review: 7.1,
//     air: 82,
//   },
//   {
//     id: 44,
//     cd_rank: 44,
//     college: {
//       name: "MNNIT Allahabad - Motilal Nehru National Institute of Technology - [MNNIT], Allahabad",
//       address: "Allahabad, Uttar Pradesh",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 138000,
//     placement: {
//       avg: 800000,
//       highest: 2306000,
//     },
//     review: 7.3,
//     air: 114,
//   },
//   {
//     id: 45,
//     cd_rank: 45,
//     college: {
//       name: "Jawaharlal Nehru Technological University - [JNTUH], Hyderabad",
//       address: "Hyderabad, Telangana",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 110000,
//     placement: {
//       avg: 1510000,
//       highest: 3847000,
//     },
//     review: 7.6,
//     air: 55,
//   },
//   {
//     id: 46,
//     cd_rank: 46,
//     college: {
//       name: "National Institute of Technology - [NIT], Durgapur",
//       address: "Durgapur, West Bengal",
//       approval: {
//         applicable: false,
//       },
//       advance: {
//         applicable: true,
//         cutoff: 10951,
//         course: "B.Tech Computer Science Engineering",
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 180400,
//     placement: {
//       avg: 2304000,
//       highest: 8430000,
//     },
//     review: 8.6,
//     air: 12,
//   },
//   {
//     id: 47,
//     cd_rank: 47,
//     college: {
//       name: "Sathyabama Institute of Science and Technology, Chennai",
//       address: "Chennai, Tamil Nadu",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE, COA, PCI, INC, GNC",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: true,
//     },
//     fees: 164100,
//     placement: {
//       avg: 1806000,
//       highest: 5701000,
//     },
//     review: 8.1,
//     air: 99,
//   },
//   {
//     id: 48,
//     cd_rank: 48,
//     college: {
//       name: "Kalinga Institute of Industrial Technology - [KIIT], Bhubaneswar",
//       address: "Bhubaneswar, Odisha",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 160700,
//     placement: {
//       avg: 1570000,
//       highest: 9180000,
//     },
//     review: 8.6,
//     air: "4th",
//   },
//   {
//     id: 49,
//     cd_rank:49,
//     college: {
//       name: "College of Engineering - [COEP], Pune",
//       address: "Pune, Maharashtra",
//       approval: {
//         applicable: false,
//       },
//       advance: {
//         applicable: true,
//         cutoff: 319,
//         course: "B.Tech Computer Science Engineering",
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 230500,
//     placement: {
//       avg: 1804000,
//       highest: 3250000,
//     },
//     review: 8.0,
//     air: 12,
//   },
//   {
//     id: 50,
//     cd_rank: 50,
//     college: {
//       name: "NIT Silchar, Silchar",
//       address: "Silchar, Assam",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE, COA, PCI, INC, GNC",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: true,
//     },
//     fees: 63000,
//     placement: {
//       avg: 906000,
//       highest: 2109000,
//     },
//     review: 8.7,
//     air: 99,
//   },
//   {
//     id: 51,
//     cd_rank: 51,
//     college: {
//       name: "Punjab University - [PU], Chandigarh",
//       address: "Chandigarh, Chandigarh",
//       approval: {
//         applicable: true,
//         approved_by: "AICTE",
//       },
//       advance: {
//         applicable: false,
//       },
//       image: "Srmseal.png",
//       featured: false,
//     },
//     fees: 87000,
//     placement: {
//       avg: 860920,
//       highest: 3520000,
//     },
//     review: 7.9,
//     air: 84,
//   }
// ];

const CollegeTable = () => {
  let [arr, setArr] = useState([]);
  let [sortedArr, setSortedArr] = useState([]);
  let [searchText, setSearchText] = useState("") ;

  const sortRankDec = () => {
    let tempArr = [...data];
    tempArr.sort(function (objA, objB) {
      return objB?.cd_rank - objA?.cd_rank;
    });
    setSortedArr(tempArr);
    // console.log(sortedArr) ;
  };

  const sortRankAsc = () => {
    let tempArr = [...data];
    tempArr.sort(function (objA, objB) {
      return objA?.cd_rank - objB?.cd_rank;
    });
    setSortedArr(tempArr);
    // console.log(sortedArr) ;
  };

  const sortFeesDec = () => {
    let tempArr = [...data];
    tempArr.sort(function (objA, objB) {
      return objB?.fees - objA?.fees;
    });
    setSortedArr(tempArr);
    // console.log(sortedArr) ;
  };

  const sortFeesAsc = () => {
    let tempArr = [...data];
    tempArr.sort(function (objA, objB) {
      return objA?.fees - objB?.fees;
    });
    setSortedArr(tempArr);
    // console.log(sortedArr) ;
  };

  const sortRatingDec = () => {
    let tempArr = [...data];
    tempArr.sort(function (objA, objB) {
      return objB?.review - objA?.review;
    });
    setSortedArr(tempArr);
    // console.log(sortedArr) ;
  };

  const sortRatingAsc = () => {
    let tempArr = [...data];
    tempArr.sort(function (objA, objB) {
      return objA?.review - objB?.review;
    });
    setSortedArr(tempArr);
    // console.log(sortedArr) ;
  };

  useEffect(() => {
    if (sortedArr.length === 0 && searchText?.trim() === "") {
      setArr(data);
    } 
    else if(searchText?.trim() === "" && sortedArr.length !== 0){
      setArr(sortedArr);
    }
    else if(searchText !== "" && sortedArr.length === 0){
      let filterArr = data?.filter((collegeObj)=>{
        let clg = collegeObj?.college?.name?.toLowerCase() ;
        return clg?.includes(searchText?.toLocaleLowerCase()?.trim())
      })
      setArr(filterArr) ;
    }
    else if(searchText !== "" && sortedArr.length !== 0){
      let filterArr = sortedArr?.filter((collegeObj)=>{
        let clg = collegeObj?.college?.name?.toLowerCase() ;
        return clg?.includes(searchText?.toLocaleLowerCase()?.trim())
      })
      setArr(filterArr) ;
    }
    else{
      setArr(data);
    }
  }, [sortedArr, searchText]);

  // useEffect(()=>{
  //   if(searchText === ""){
  //     setArr(data) ;
  //   }
  //   else{
  //     let filterArr = arr?.filter((collegeObj)=>{
  //       let clg = collegeObj?.college?.name?.toLowerCase() ;
  //       return clg?.includes(searchText?.toLocaleLowerCase()?.trim())
  //     })
  //     setArr(filterArr) ;
  //     // console.log(filterArr) ;
  //   }
  // }, [searchText])

  return (
    <>
      <div className="operations">
        <div className="search">
          <input type="text" placeholder="Search here" className="searchArea" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
        </div>
        <div className="sortCont">
          <span>Sort By :- </span>
          <div className="categories">
            <div className="cdRankSort">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                onClick={sortRankDec}
              >
                <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
              </svg>
              <span className="text">CD-Rank</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                onClick={sortRankAsc}
              >
                <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" />
              </svg>
            </div>

            <div className="feesSort">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                onClick={sortFeesDec}
              >
                <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
              </svg>
              <span className="text">Fees</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                onClick={sortFeesAsc}
              >
                <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" />
              </svg>
            </div>
            <div className="reviewSortSort">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                onClick={sortRatingDec}
              >
                <path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
              </svg>
              <span className="text">Rating</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                onClick={sortRatingAsc}
              >
                <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="tableWrapper">
        <table className="tableCont">
          <thead>
            <tr>
              <th className="cd-rankCol">CD Rank</th>
              <th className="collegeCol">Colleges</th>
              <th className="feesCol">Course Fees</th>
              <th className="placementCol">Placement</th>
              <th className="reviewCol">User Reviews</th>
              <th className="rankingCol">Ranking</th>
            </tr>
          </thead>
          <tbody>
            {arr?.map((row) => {
              return (
                <tr
                  key={row?.id}
                  style={
                    row?.college?.featured === true
                      ? { backgroundColor: "#FFE4E1" }
                      : { backgroundColor: "#ffffff" }
                  }
                >
                  <td>#{row?.cd_rank}</td>
                  <td
                    style={
                      row?.college?.featured === true
                        ? { paddingTop: "0px" }
                        : { paddingTop: "1rem" }
                    }
                  >
                    {row?.college?.featured === true ? (
                      <div className="featuredCollege">Featured</div>
                    ) : (
                      ""
                    )}
                    <CollegeSection props={row?.college} />
                  </td>
                  <td>
                    <CourseFees props={row?.fees} />
                  </td>
                  <td>
                    <Placement props={row?.placement} />
                  </td>
                  <td>{row?.review}/10</td>
                  <td>{row?.air} in India</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CollegeTable;
